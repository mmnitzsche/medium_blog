import React, { useState } from 'react';

interface Job {
    id: number;
    companyName: string;
    companySite: string;
    startPeriod: string;
    endPeriod: string;
    jobRole: string;
    description: {
        pt: string;
        en: string;
    };
}

interface TimelineProps {
    jobs: Job[];
    selectLang: 'pt' | 'en';
}

const TimelineItem: React.FC<{ job: Job; selectLang: 'pt' | 'en'; isLast: boolean }> = ({ job, selectLang, isLast }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const fullText = job.description[selectLang];
    const firstPeriodIndex = fullText.indexOf('.');
    const shortText = firstPeriodIndex !== -1 ? fullText.substring(0, firstPeriodIndex + 1) : fullText;
    
    // Logic for the text to display
    const displayDescription = isExpanded ? fullText : shortText;
    const hasMore = fullText.length > shortText.length;

    return (
        <div className="grid grid-cols-[32px_1fr] items-start group">
            {/* Timeline Line & Dot */}
            <div className="relative flex flex-col items-center h-full pt-3">
                {/* Dot */}
                <div className="w-4 h-4 bg-black rounded-full z-10" />
                
                {/* Vertical Line */}
                {!isLast && (
                    <div className="absolute top-5 bottom-0 w-[1px] bg-gray-200 h-[calc(100%+2rem)]" />
                )}
            </div>

            {/* Job Content */}
            <div className="pb-16 pl-6">
                {/* Period - Same side now */}
                <div className="mb-1 text-gray-400 text-sm font-normal">
                     {job.startPeriod === job.endPeriod ? job.startPeriod : `${job.startPeriod}-${job.endPeriod}`}
                </div>

                {/* Title & Company */}
                <div className="mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-none inline">
                        {job.jobRole}
                    </h3>
                    <a 
                        href={job.companySite} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-none inline ml-2 hover:opacity-70 transition-opacity"
                    >
                        <span className='font-normal text-gray-400'>at</span> {job.companyName}
                    </a>
                </div>

                {/* Description - The "Invisible Button" logic */}
                <div 
                    onClick={() => hasMore && setIsExpanded(!isExpanded)}
                    className={`text-sm break-words whitespace-normal font-normal text-gray-600 leading-relaxed max-w-3xl transition-colors ${hasMore ? 'cursor-pointer hover:text-gray-900' : ''}`}
                >
                    {displayDescription}
                    {!isExpanded && hasMore && (
                        <span className="text-black font-bold ml-1">...</span>
                    )}
                </div>
            </div>
        </div>
    );
};

const Timeline: React.FC<TimelineProps> = ({ jobs, selectLang }) => {
    return (
        <div className="flex flex-col mt-8">
            {jobs.map((job, index) => (
                <TimelineItem 
                    key={job.id} 
                    job={job} 
                    selectLang={selectLang} 
                    isLast={index === jobs.length - 1} 
                />
            ))}
        </div>
    );
};

export default Timeline;
