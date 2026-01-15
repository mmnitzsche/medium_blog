

import { profession } from '@/data/BlogGeneralStaticData';
import { LanguageAtom } from '@/utils/atom';
import { useAtom } from 'jotai';
import React from 'react';



export default function UserRole() {

    const [SelectValue] = useAtom(LanguageAtom)
    return (
        <>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight pb-2 text-zinc-900 flex whitespace-normal break-words">
                {profession[SelectValue]}
            </h2>

        </>
    );
}