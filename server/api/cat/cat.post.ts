import {PrismaClient} from "@prisma/client";

export default eventHandler(async (event) => {
    const body = await readBody(event)

    const prisma = new PrismaClient();
    // @ts-ignore
    const post = await prisma.cat.create({
        // @ts-ignore
        data: {
            name: body.name,
            description: body.description,
            // @ts-ignore
            sexe: body.sexe,
            dateofbirth: body.dateOfBirth,
            sellable: body.sellable,
            status: body.status
        },
    })

    console.log(post)
})
