import { PrismaClient } from '@prisma/client'
export default async function Page( ) {
    const prisma = new PrismaClient()

    const videos = await prisma.video.findMany()

    const videoList = videos.map((video, index) => 
        <li>
            <a href={"/videos/video/"+video.id} key={index}>{video.name}</a>
            <a href={"/videos/update/"+video.id} key={index}>[edit]</a>
        </li> 
    )

    return( <div>  
        <h2>Videos</h2>
        <ul>
            {videoList}
        </ul>
    </div> )
}