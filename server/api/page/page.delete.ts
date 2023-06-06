import prisma from '~/utils/prisma';

export default eventHandler(async (event) => {
    const body = await readBody(event)
        // @ts-ignore
    const post = await prisma.page.delete({
        // @ts-ignore
        where: {
            url: body.url
        },
    })
})
