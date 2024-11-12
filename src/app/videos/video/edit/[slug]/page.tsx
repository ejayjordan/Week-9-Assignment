import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation';
import UpdateForm from "./updateForm";


async function updateVideo(FormData: any) {
    "use server";

    const prisma = new PrismaClient() 

    await prisma.video.update({
        where: {
            id: Number(FormData.get('id')),
        },
        data: {
            name: String(FormData.get('name')),
            length: Number(FormData.get('runtime'))
        }
    })
    
    redirect('/videos')
}


async function Page( params: { slug: any }) {

    const prisma = new PrismaClient()
    const video = await prisma.video.findUnique({
        where: { id: Number(params.slug) }
    })

    return<div>
        <h2>UPDATE VIDEO</h2>
        <UpdateForm updateUrl={updateVideo} video={video}  />
    </div>
}

export default Page;