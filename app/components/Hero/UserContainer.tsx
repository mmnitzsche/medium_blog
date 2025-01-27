import React from 'react';
import UserName from './UserName';
import LinkIcon from './LinkIcon';
import { LinksJson } from './LinkIconJson';
import UserRole from './UserRole';
import UserPhoto from './UserPhoto';
import TopicTittle from './TopicTittle';
import UserDescription from './UserDescription';
import GroupDescription from '../Job/JobDescription';

export default function UserContainer() {
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
                        <UserPhoto></UserPhoto>
                    </div>
                </div>
                <div
                    className='pt-2'>
                    <UserRole></UserRole>
                </div>
                <UserDescription />
            </div >
        </>
    );
}