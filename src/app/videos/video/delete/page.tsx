import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation';

    

export default async function Page( {params}: { params: { slug: number } }) {
    'use server';
    const prisma = new PrismaClient()
    await prisma.video.delete({
        where: {
            id: Number(params.slug)
        }
    })
    redirect('/videos')
}