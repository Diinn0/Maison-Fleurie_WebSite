import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import { PrismaClient, Prisma } from '@prisma/client'
import {comparePassword, encryptPassword} from "~/utils/password";

const prisma = new PrismaClient();

export default NuxtAuthHandler({
    // A secret string you define, to ensure correct encryption
    secret: process.env.NUXT_AUTH_SECRET,
    pages: {
        signIn: '/admin/login',
    },
    callbacks: {
        // Callback when the JWT is created / updated, see https://next-auth.js.org/configuration/callbacks#jwt-callback
        // @ts-ignore
        jwt: async ({token, user}) => {
            const isSignIn = user ? true : false;
            if (isSignIn) {
                const userObj = {
                    id: user ? user.id || '' : '',
                    role: user ? (user as any).role || '' : '',
                    firstname: user ? (user as any).firstname || '' : '',
                    lastname: user ? (user as any).lastname || '' : '',
                    mail: user ? (user as any).mail || '' : '',
                };
                token.user = user ? userObj || null : null;
            }
            return Promise.resolve(token);
        },
        // Callback whenever session is checked, see https://next-auth.js.org/configuration/callbacks#session-callback
        session: async ({session, token}) => {
            (session as any).user = token.user;
            return Promise.resolve(session);
        },
    },
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: '(hint: jsmith)' },
                password: { label: 'Password', type: 'password', placeholder: '(hint: hunter2)' }
            },
            async authorize(credentials: any) {

                let returnV = await prisma.user.findFirst({
                    where: {
                        // @ts-ignore
                        mail: credentials?.username
                    },
                }).then((user) => {
                    if (user) {

                        if (comparePassword(credentials?.password, user.password)) {
                            // Any object returned will be saved in `user` property of the JWT
                            return user
                        } else {
                            return null;
                        }
                    } else {
                        // eslint-disable-next-line no-console
                        console.error('Warning: Malicious login attempt registered, bad credentials provided')
                        // If you return null then an error will be displayed advising the user to check their details.
                        return null
                        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                    }
                });

                console.log(returnV)
                return returnV
            }
        })
    ]
})
