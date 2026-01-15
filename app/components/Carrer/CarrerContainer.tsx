import React from 'react';
import Timeline from './Timeline';
import TopicTittle from '../Hero/TopicTittle';
import { ExperienceTitle, jobs } from '@/data/BlogGeneralStaticData';
import { useAtom } from 'jotai';
import { LanguageAtom } from '@/utils/atom';

export default function CarrerContainer() {
    const [SelectLang] = useAtom(LanguageAtom)


    return (
        <div
        >
            <TopicTittle TopicName={ExperienceTitle[SelectLang]} />
            <Timeline jobs={jobs} selectLang={SelectLang as 'pt' | 'en'} />
        </div>
    );
}
