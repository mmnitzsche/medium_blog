import React from 'react';
import UserName from './UserName';
import UserDescription from '../Job/JobDescription';
import LinkIcon from './LinkIcon';
import { LinksJson } from './LinkIconJson';
import UserRole from './UserRole';
import HeroPhoto from './HeroPhoto';
import TopicTittle from './TopicTittle';
import HeroDescription from './HeroDescription';

export default function HeroContainer() {
    return (
        <>
            <div>
                <div
                    className='flex items-center space-x-5'>
                    <div>
                        <TopicTittle
                            TopicName='Mateus Nitzsche'
                        ></TopicTittle>
                        <div className="flex gap-4">
                            {LinksJson.map(item => (
                                <LinkIcon key={item.id} href={item.href} Icon={item.icon} />
                            ))}
                        </div>
                    </div>
                    <div className=' w-28 md:w-32'>
                        <HeroPhoto></HeroPhoto>
                    </div>
                </div>
                <div
                    className='pt-2'>
                    <UserRole></UserRole>
                </div>
                <HeroDescription/>
            </div >
        </>
    );
}