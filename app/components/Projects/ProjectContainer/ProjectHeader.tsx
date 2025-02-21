import React from 'react';
import TopicTittle from '../../Hero/TopicTittle';
import PlaygroundBadge from '../../PlayGround/BadgePlayground';

export default function ProjectHeader() {
    return (
        <>
            <div className='flex items-center justify-between'>
                <TopicTittle
                    TopicName="Projetos"
                ></TopicTittle>
                <div>
                    <PlaygroundBadge/>
                </div>
            </div>
        </>
    );
}