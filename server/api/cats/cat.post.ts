import {PrismaClient} from "@prisma/client";

export default eventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body)

    const prisma = new PrismaClient();
    // @ts-ignore
    const post = await prisma.cat.create({
        // @ts-ignore
        data: {
            name: body.name,
            description: body.description,
            male: (body.sexe == 0),

        },
    })
})
