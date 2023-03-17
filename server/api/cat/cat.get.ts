import {PrismaClient} from "@prisma/client";

export default eventHandler(async (event) => {
    // @ts-ignore
    const id = parseInt(event.context.params.id) as number
    
    if (!Number.isInteger(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID should be an integer',
        })
    }

    const prisma = new PrismaClient();
    let cat = await prisma.cat.findUnique({
        where: {
            // @ts-ignore
            id: id
        }
    })

    return cat
})
