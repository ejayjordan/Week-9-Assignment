import { PrismaClient } from '@prisma/client'
export default async function Page( ) {
    const prisma = new PrismaClient()

    const videos = await prisma.video.findMany()

    const videoList = videos.map((video) => 
        <ul>
            <li key={"/videos/video/"+video.id}>{video.name}</li>
            <li key={"/videos/update/"+video.id}>[edit]</li>
        </ul> 
    )

    return( <div>  
        <h2>Videos</h2>
        <ul>
            {videoList}
        </ul>
    </div> )
}