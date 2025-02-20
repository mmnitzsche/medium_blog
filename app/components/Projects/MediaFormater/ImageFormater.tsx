import { extractFirstGif } from '@/utils/ExtractFirstGif';
import React from 'react';

interface props {
    Media: any
}


export default function ImageFormater(props: props) {

    const Media = extractFirstGif(props.Media)
    return (
        <>
            <div
                className='flex items-center justify-center '
            >
                <img
                    className='rounded-lg'
                    width={200}
                    src={Media} alt="" />
            </div>
        </>
    );
}