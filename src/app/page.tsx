import Image from 'next/image'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function Home() {
const videos = await prisma.video.findMany();
const videoDisplay = videos.map((video, index) => <li key  = {index}>{video.name}</li>)
return (
<main>
{videoDisplay}
<Image src="/meme.png" alt={'hahafunny'}/>
</main>
);
}
