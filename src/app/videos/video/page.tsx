import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
export default async function Page( ) {
    const prisma = new PrismaClient()

    const videos = await prisma.video.findMany()

    const videoList = videos.map((video, index) =>
        <li key={index}>
            <a href={"/videos/video/" + video.id}>{video.name}</a>
            <a href={"/videos/update/" + video.id}>[edit]</a>
        </li> 
    )

    return( <div>  
        <h2>Videos</h2>
        <ul>
            {videoList}
        </ul>
    </div> )
}