import React from 'react';

import JobDescription from '../Job/JobDescription';

import JobTittle from './GroupTittle';
import CompanyName from './GroupName';
import JobPeriod from './GroupPeriod';



import TopicTittle from '../Hero/TopicTittle';
import { ExperienceTitle, jobs } from '@/data/BlogGeneralStaticData';
import { useAtom } from 'jotai';
import { LanguageAtom } from '@/utils/atom';

export default function CarrerContainer() {
    const [SelectLang] = useAtom(LanguageAtom)


    return (
        <div
        >
            <TopicTittle
                TopicName={ExperienceTitle[SelectLang]}
            />
            {jobs.map(({ id, companyName, companySite, description, startPeriod, endPeriod, jobRole }) => (
                <div key={id} className='pb-5'>
                    <CompanyName GroupName={companyName} GroupSite={companySite} />
                    <div className='flex space-x-2'>
                        <JobTittle
                            groupRole={jobRole}
                        />
                    </div>
                    <JobPeriod
                        startPeriod={startPeriod}
                        endPeriod={endPeriod}
                    />
                    <JobDescription FullText={description[SelectLang]} />
                </div>
            ))}
        </div>
    );
}
