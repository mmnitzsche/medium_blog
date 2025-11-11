import { removeImages } from '@/utils/RemoveImages';
import React from 'react';

interface props {
    Content: any
}



export default function ContentContainer(props: props) {

    const postContent = removeImages(props.Content).substring(0, 650)
    return (
        <>
            <div className="relative">
                <div className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: postContent }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-90"></div>
            </div>
        </>
    );
}