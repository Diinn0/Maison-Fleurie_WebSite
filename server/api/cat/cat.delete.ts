import prisma from '~/utils/prisma';

export default eventHandler(async (event) => {
    const body = await readBody(event)
        // @ts-ignore
    const post = await prisma.cat.delete({
        // @ts-ignore
        where: {
            id: body.id
        },
    })
})
