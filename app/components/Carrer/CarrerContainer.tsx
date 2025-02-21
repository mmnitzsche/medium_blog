import React from 'react';

import JobDescription from '../Job/JobDescription';

import JobTittle from './GroupTittle';
import CompanyName from './GroupName';
import JobPeriod from './GroupPeriod';
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
                    <JobDescription FullText={description}  />
                </div>
            ))}
        </div>
    );
}
