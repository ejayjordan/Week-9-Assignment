'use client';

import  { useState } from 'react';

export default function UpdateForm( props ) {

    const [ videoName, setVideoName ] = useState(props.video.name);
    const [ videoLength, setVideoLength ] = useState(props.video.length);

    return(
        <form action={props.updateUrl}>
            <input type="hidden" name="id" value={props.video.id} />
            <label>
                Video Name: 
                <input 
                    type="text" name="name"
                    value={videoName} onChange={(e) => setVideoName(e.target.value)}/>
                </label>
            <label>
                Runtime:
                <input 
                    type="text" name="runtime" 
                    value={videoLength} onChange={(e) => setVideoLength(e.target.value)} />
            </label>
            <button type="submit">Add</button>
        </form>
    )
}