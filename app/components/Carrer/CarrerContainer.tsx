import React from 'react';
import UserName from '../Hero/UserName';
import JobDescription from '../Job/JobDescription';

import JobTittle from './JobTittle';
import CompanyName from './CompanyName';
import JobPeriod from './JobPeriod';
import { jobs } from '@/data/blogData';
import TopicTittle from '../Hero/TopicTittle';

export default function CarrerContainer() {
    return (
        <div
        >
            <TopicTittle
            TopicName='Experiência'
             />
            {jobs.map(({ id, companyName, companySite, description, startPeriod, endPeriod, jobRole }) => (
                <div key={id} className='pb-5'>
                    <CompanyName CompanyName={companyName} CompanySite={companySite} />
                    <div className='flex space-x-2'>
                        <JobTittle
                            jobRole={jobRole}
                        />
                    </div>
                    <JobPeriod
                        startPeriod={startPeriod}
                        endPeriod={endPeriod}
                    />
                    <JobDescription FullText={description} ShortText={description} />
                </div>
            ))}
        </div>
    );
}
