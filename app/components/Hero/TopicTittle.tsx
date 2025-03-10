import React from 'react';

interface props {
    TopicName: string
}

export default function TopicTittle(props: props) {
    return (
        <>
            <h1 className="text-2xl md:text-3xl sm:text-1xl font-bold tracking-tight pb-2 ">
                {props.TopicName}
            </h1>
        </>
    );
}