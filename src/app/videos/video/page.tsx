import { PrismaClient } from '@prisma/client'
export default async function Page( ) {
    const prisma = new PrismaClient()

    const videos = await prisma.video.findMany()

    const videoList = videos.map((video, index) =>
        <li key={index}>
            {video.name}
            <a href={"/videos/edit/" + video.id}>[edit]</a>
            <a href={"/videos/delete/" + video.id}>[delete]</a>
        </li> 
    )

    return( <div>  
        <h2>Videos</h2>
        <ul>
            {videoList}
        </ul>
    </div> )
}