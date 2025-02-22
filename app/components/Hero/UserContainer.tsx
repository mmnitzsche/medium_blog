import React from 'react';

import LinkIcon from './LinkIcon';
import { LinksJson } from '../../../data/LinkIconJson';
import UserRole from './UserRole';
import UserPhoto from './UserPhoto';
import TopicTittle from './TopicTittle';
import UserDescription from './UserDescription';

export default function UserContainer() {
    return (
        <div>
            {/* Versão Wildscreen (Desktop) */}
            <div className="hidden md:flex items-center space-x-5">
                <div>
                    <TopicTittle TopicName="Mateus Nitzsche" />
                    <div className="flex gap-4">
                        {LinksJson.map((item) => (
                            <LinkIcon
                                key={item.id}
                                href={item.href ?? ''}  // Fallback para uma string vazia se href for undefined
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
                <TopicTittle TopicName="Mateus Nitzsche" />
                <div className="flex gap-4">
                    {LinksJson.map((item) => (
                        <LinkIcon
                            key={item.id}
                            href={item.href ?? ''}  // Fallback para uma string vazia se href for undefined
                            Icon={item.icon ?? ''}
                        />
                    ))}
                </div>
                <div className="w-28 md:w-32">
                    <UserPhoto />
                </div>
            </div>

            <div className="pt-2">
                <UserRole />
            </div>
            <UserDescription />
        </div>
    );
}
