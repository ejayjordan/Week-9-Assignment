import { PrismaClient } from '@prisma/client'
export default async function Page( ) {
    const prisma = new PrismaClient()

    const videos = await prisma.video.findMany()

    const videoList = videos.map((video, index) =>
        <li key={index}>
            <a href={"/videos/video/" + video.id}>{video.name}</a>
            <a href={"/videos/edit/page.tsx" + video.id}>[edit]</a>
            <a href={"/videos/delete/page.tsx" + video.id}>[delte]</a>
        </li> 
    )

    return( <div>  
        <h2>Videos</h2>
        <ul>
            {videoList}
        </ul>
    </div> )
}