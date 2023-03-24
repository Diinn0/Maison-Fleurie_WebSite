import prisma from '~/utils/prisma';
export default eventHandler(async (event) => {
    // @ts-ignore
    const id = Number(getQuery(event).id)

    if (!Number.isInteger(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID should be an integer',
        })
    }

    let cat = await prisma.cat.findUnique({
        where: {
            // @ts-ignore
            id: id
        }
    })

    return cat
})
