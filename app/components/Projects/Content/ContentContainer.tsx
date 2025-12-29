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
                <div className="text-sm text-muted-foreground mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: postContent }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-70"></div>
            </div>
        </>
    );
}