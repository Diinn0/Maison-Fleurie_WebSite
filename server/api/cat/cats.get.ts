import prisma from '~/utils/prisma';

export default eventHandler(async (event) => {

    let cats = await prisma.cat.findMany({
        where: {
            // @ts-ignore
            sellable: false
        }
    })

    return cats
})
