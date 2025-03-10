import { aditionLinks } from '@/data/ContactLinks';
import { LanguageAtom } from '@/utils/atom';
import { useAtom } from 'jotai';
import React from 'react';



export default function ContactsSchedule() {

    const [SelectLang] = useAtom(LanguageAtom)
    return (
        <>
            <div
                className='text-sm'
            >
                {aditionLinks[SelectLang]['description']}
            </div>
        </>
    );
}