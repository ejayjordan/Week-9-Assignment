import { PrismaClient } from "@prisma/client";

export async function Page(request : Request) {
    const req = await request.json()
    const prisma = new PrismaClient()
    const res = await prisma.video.delete({
    where: {
    id: req.id,
    }
    })
    return( Response.json(res) )
    }
    