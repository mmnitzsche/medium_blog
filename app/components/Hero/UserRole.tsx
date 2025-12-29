

import { profession } from '@/data/BlogGeneralStaticData';
import { LanguageAtom } from '@/utils/atom';
import { useAtom } from 'jotai';
import React from 'react';



export default function UserRole() {

    const [SelectValue] = useAtom(LanguageAtom)
    return (
        <>
            <h2 className="text-lg tracking-tight font-medium pb-1 text-zinc-600">
                {profession[SelectValue]}
            </h2>
        </>
    );
}