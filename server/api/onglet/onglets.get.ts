import prisma from '~/utils/prisma';

export default eventHandler(async (event) => {

    let onglets = await prisma.onglet.findMany({
        orderBy: [{
            // @ts-ignore
            order: 'asc',
        }],
    })

    return onglets
})
