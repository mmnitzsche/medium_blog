import React from 'react';

import LinkIcon from './LinkIcon';
import { LinksJson } from '../../../data/LinkIconJson';
import UserRole from './UserRole';
import UserPhoto from './UserPhoto';
import TopicTittle from './TopicTittle';
import UserDescription from './UserDescription';
import { userName } from '@/data/BlogGeneralStaticData';

// import { userName } from '@/data/blogData';


export default function UserContainer() {
    return (
        <div>
            {/* Versão Desktop */}
            <div className="hidden md:flex items-center space-x-5">
                <div>
                    <TopicTittle TopicName={userName} />
                    <div className="flex gap-1">
                        {LinksJson.map((item) => (
                            <LinkIcon
                                key={item.id}
                                href={item.href ?? ''}
                                Icon={item.icon ?? ''}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-28 md:w-32">
                    <UserPhoto />
                </div>
            </div>

            {/* Versão Mobile */}
            <div className="flex md:hidden flex-col items-center space-y-5">
                <TopicTittle TopicName={userName} />
                <div className="flex gap-4">
                    {LinksJson.slice(0, 3).map((item) => ( // Mostra apenas 3 ícones em telas pequenas
                        <LinkIcon
                            key={item.id}
                            href={item.href ?? ''}
                            Icon={item.icon ?? ''}
                        />
                    ))}
                </div>

                <div className="w-28 md:w-32">
                    <UserPhoto />
                </div>
            </div>

            {/* Conteúdo comum a ambas as versões */}
            <div className="pt-2">
                <UserRole />
            </div>
            <UserDescription />
        </div>
    );
}