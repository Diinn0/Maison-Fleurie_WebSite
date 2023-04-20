import prisma from '~/utils/prisma';

export default eventHandler(async (event) => {
    const body = await readBody(event)
        // @ts-ignore
    const post = await prisma.cat.create({
        // @ts-ignore
        data: {
            name: body.name,
            description: body.description,
            // @ts-ignore
            sexe: body.sexe,
            dateofbirth: body.dateOfBirth,
            sellable: body.sellable,
            status: body.status
        },
    })

    console.log(post)
})
