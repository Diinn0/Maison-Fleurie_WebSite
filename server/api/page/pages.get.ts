import prisma from '~/utils/prisma';

export default eventHandler(async (event) => {

    let pages = await prisma.page.findMany()

    return pages
})
