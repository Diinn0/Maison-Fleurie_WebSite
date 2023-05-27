import prisma from '~/utils/prisma';
// @ts-ignore
import slug from "slug";

export default eventHandler(async (event) => {

    const body = await readBody(event)

    const updateCat = await prisma.page.update({
        where: {
            // @ts-ignore
            url: body.url,
        },
        data: {
            // @ts-ignore
            title: body.title,
            url: slug(body.title),
            // @ts-ignore
            content: Buffer.from(body.content, 'utf-8')
        },
    })
})
