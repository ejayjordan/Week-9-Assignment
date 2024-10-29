//import { useState } from "react";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function Home() {
const videos = await prisma.video.findMany();
const videoDisplay = videos.map((Video) => <li>{Video.name}</li>)
return (
<main>
{videoDisplay}
</main>
);
}
