import React from 'react';

import TopicTittle from '../Hero/TopicTittle';
import CompanyName from '../Carrer/GroupName';
import JobTittle from '../Carrer/GroupTittle';
import JobPeriod from '../Carrer/GroupPeriod';
import JobDescription from '../Job/JobDescription';
import { education } from '@/data/educationData';
import { useAtom } from 'jotai';
import { LanguageAtom } from '@/utils/atom';
import { EducationTitle } from '@/data/BlogGeneralStaticData';



export default function EducationContainer() {

    const [SelectLang] = useAtom(LanguageAtom)

    return (
        <>
            <div>
                <TopicTittle TopicName={EducationTitle[SelectLang]} />
                {education.map(({ id, mainName, link, description, startPeriod, endPeriod, institution }, index) => (
                    <div key={`${id}-${index}`} className='pb-5'>
                        <CompanyName GroupName={mainName} GroupSite={link} />
                        <div className='flex space-x-2'>
                            <JobTittle groupRole={institution} />
                        </div>
                        <JobPeriod
                            startPeriod={startPeriod}
                            endPeriod={endPeriod}
                        />
                        <JobDescription FullText={description} />
                    </div>
                ))}
            </div>
        </>
    );
}
