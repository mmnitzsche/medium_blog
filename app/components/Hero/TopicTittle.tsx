'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

interface props {
    TopicName: string
}

export default function TopicTittle(props: props) {
    const pathname = usePathname();
    const topicName = pathname === '/playground' ? "Articles" : props.TopicName;

    return (
        <>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight pb-2 whitespace-nowrap text-zinc-900">
                {topicName}
            </h1>
        </>
    );
}