import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation';
import UpdateForm from "./updateForm";


async function updateVideo(formData:any) {
    "use server";

    const prisma = new PrismaClient() 

    await prisma.video.update({
        where: {
            id: Number(formData.get('id')),
        },
        data: {
            name: String(formData.get('name')),
            length: Number(formData.get('runtime'))
        }
    })
    
    redirect('/videos')
}


export default async function Page( { params } : { params : any } ) {

    const prisma = new PrismaClient()
    const video = await prisma.video.findUnique({
        where: { id: Number(params.slug) }
    })

    return(<div>
        <h2>UPDATE VIDEO</h2>
        <UpdateForm updateUrl={updateVideo} video={video}  />
    </div>)
}