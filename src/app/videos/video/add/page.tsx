import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation';

async function createVideo(formData : FormData) {
    'use server';
    const prisma = new PrismaClient()
    await prisma.video.create({
        data: {
            name: String(formData.get('videoname')),
            url: "test",
            votes: 0,
            length: Number(formData.get('runtime'))
        }
    })
    redirect('/videos')
}
    

export default async function Page( ) {

    return(<div>
        <form action={createVideo}>
            <label>Video Name: <input type="text" name="videoname" placeholder="Name" /></label>
            <label>Runtime: <input type="text" name="runtime" placeholder="Runtime" /></label>
            <button type="submit">Add</button>
        </form>
    </div>)
}