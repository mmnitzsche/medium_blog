import React from 'react';

interface props {
    Title: String
}

export default function PostTitleContainer(props: props) {
    return (
        <>
            <h3 className="text-xl font-semibold ">{props.Title}</h3>
        </>
    );
}