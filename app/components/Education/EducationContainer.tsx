import React from 'react';
import UserName from '../Hero/UserName';
import UserDescription from '../Job/JobDescription';
import LinkIcon from '../Hero/LinkIcon';
import { LinksJson } from '../Hero/LinkIconJson';
import UserRole from '../Hero/UserRole';
import HeroPhoto from '../Hero/UserPhoto';
import TopicTittle from '../Hero/TopicTittle';
import HeroDescription from '../Hero/UserDescription';
import { jobs } from '@/data/blogData';
import CompanyName from '../Carrer/GroupName';
import JobTittle from '../Carrer/GroupTittle';
import JobPeriod from '../Carrer/GroupPeriod';
import JobDescription from '../Job/JobDescription';
import { education } from '@/data/educationData';



export default function EducationContainer() {
    return (
        <>
            <div
            >
                <TopicTittle
                    TopicName='Educação'
                />
                {education.map(({ id, mainName, link, description, startPeriod, endPeriod, institution }) => (
                    <div key={id} className='pb-5'>
                        <CompanyName GroupName={mainName} GroupSite={link   } />
                        <div className='flex space-x-2'>
                            <JobTittle
                                groupRole={institution}
                            />
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
