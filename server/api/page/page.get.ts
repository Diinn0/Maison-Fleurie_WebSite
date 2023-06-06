import prisma from '~/utils/prisma';

export default eventHandler(async (event) => {
    // @ts-ignore
    const url = getQuery(event).url


    let page = await prisma.page.findUnique({
        where: {
            // @ts-ignore
            url: url
        },
    })

    // @ts-ignore
    if (page.content) {
        // @ts-ignore
        const blob = new Buffer.from(page.content);
        // @ts-ignore
        page.content = blob.toString('utf8');
    }

    return page
})
