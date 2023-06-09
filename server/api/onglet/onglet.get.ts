import prisma from '~/utils/prisma';

export default eventHandler(async (event) => {
    const id = Number(getQuery(event).id);
    let onglet = await prisma.onglet.findUnique({
        where: {
            // @ts-ignore
            id: id
        },
    })

    return onglet
})
