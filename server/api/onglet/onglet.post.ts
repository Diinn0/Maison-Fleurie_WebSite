import prisma from '~/utils/prisma';

export default eventHandler(async (event) => {
    const body = await readBody(event)
        // @ts-ignore
    const post = await prisma.onglet.create({
        // @ts-ignore
        data: {
            name: body.name,
            url: body.url,
            order: 0,
        },
    })

    return post
})
