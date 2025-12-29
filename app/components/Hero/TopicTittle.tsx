import React from 'react';

interface props {
    TopicName: string
}

export default function TopicTittle(props: props) {
    return (
        <>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight pb-2 whitespace-nowrap text-zinc-900">
                {props.TopicName}
            </h1>
        </>
    );
}