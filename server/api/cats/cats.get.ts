import {PrismaClient} from "@prisma/client";

export default eventHandler(async (event) => {
    const prisma = new PrismaClient();
    let cats = await prisma.cat.findMany({
        where: {
            // @ts-ignore
            sellable: false
        }
    })
    
    return cats
})
