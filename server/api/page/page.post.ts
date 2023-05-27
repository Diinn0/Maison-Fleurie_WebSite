import prisma from '~/utils/prisma';
// @ts-ignore
import slug from "slug";

export default eventHandler(async (event) => {
    const body = await readBody(event)
    // @ts-ignore

    const post = await prisma.page.create({
        // @ts-ignore
        data: {
            title: body.name,
            url: slug(body.name),
        },
    })

    console.log(post)
})
