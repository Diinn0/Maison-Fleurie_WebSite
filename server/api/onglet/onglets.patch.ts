import prisma from '~/utils/prisma';

export default eventHandler(async (event) => {

    const body = await readBody(event)

    if (body.updateInfo) {
        return prisma.onglet.update({
            where: {
                id: body.id,
            },
            data: {
                name: body.name,
                url: body.url
            },
        })
    } else {
        for (let i = 0; i < body.onglets.length; i++) {

            let parent = undefined;
            if (body.onglets[i].parent){
                parent = await prisma.onglet.findUnique({
                    where: {
                        id: +body.onglets[i].parent,
                    }
                });
            }

            await prisma.onglet.update({
                where: {
                    id: body.onglets[i].id,
                },
                data: {
                    //@ts-ignore
                    order: i,
                    parentId: body.onglets[i].parent ? +body.onglets[i].parent : null
                },
            })
        }
    }


})
