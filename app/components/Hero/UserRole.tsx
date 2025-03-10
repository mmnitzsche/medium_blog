

import { profession } from '@/data/BlogGeneralStaticData';
import { LanguageAtom } from '@/utils/atom';
import { useAtom } from 'jotai';
import React from 'react';



export default function UserRole() {

    const [SelectValue] = useAtom(LanguageAtom)
    return (
        <>
            <h2 className="text-2xl tracking-tight font-medium pb-2">
                {profession[SelectValue]}
            </h2>
        </>
    );
}