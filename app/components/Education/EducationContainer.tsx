import React, { useState } from 'react';
import TopicTittle from '../Hero/TopicTittle';
import { education } from '@/data/educationData';
import { useAtom } from 'jotai';
import { LanguageAtom } from '@/utils/atom';
import { EducationTitle } from '@/data/BlogGeneralStaticData';

import { Star } from 'lucide-react';

interface Education {
    id: number;
    mainName: string;
    institution: string;
    startPeriod: string;
    endPeriod?: string;
    description: string;
    link?: string;
    highlight?: boolean;
}

interface EducationItemProps {
    item: Education;
    isLast: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({ item, isLast }) => {

    const [isExpanded, setIsExpanded] = useState(false);
    
    const hasDescription = !!item.description;
    const firstPeriodIndex = item.description.indexOf('.');
    const shortText = firstPeriodIndex !== -1 ? item.description.substring(0, firstPeriodIndex + 1) : item.description;
    const displayDescription = isExpanded ? item.description : shortText;
    const hasMore = item.description.length > shortText.length;
    const isHighlighted = item.highlight;

    return (
        <div className={`grid grid-cols-[20px_1fr] items-start group relative transition-all duration-300 ${isHighlighted ? 'bg-zinc-50/80 border border-zinc-200/50 rounded-xl p-3 -mx-2 mb-4 shadow-sm' : ''}`}>
            {/* Star Icon for highlighted items */}
            {isHighlighted && (
                <div className="absolute -top-2 -right-1 bg-white p-1 rounded-full shadow-sm border border-zinc-100">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                </div>
            )}

            {/* Timeline Line & Dot */}
            <div className="relative flex flex-col items-center h-full pt-2">
                {/* Dot - Smaller for subtle look */}
                <div className={`w-2 h-2 rounded-full z-10 ${isHighlighted ? 'bg-yellow-500' : 'bg-black'}`} />
                
                {/* Vertical Line - Lighter and thinner */}
                {!isLast && !isHighlighted && (
                    <div className="absolute top-4 bottom-0 w-[1px] bg-gray-100 h-[calc(100%+1rem)]" />
                )}
            </div>

            {/* Education Content */}
            <div className={`pl-4 ${isHighlighted ? 'pb-0' : 'pb-8'}`}>
                {/* Institution & Period */}
                <div className="mb-0.5 text-gray-400 text-xs font-normal flex justify-between items-center">
                    <span>{item.institution}</span>
                    <span>{item.startPeriod}{item.endPeriod ? ` - ${item.endPeriod}` : ''}</span>
                </div>

                {/* Course Name */}
                <div className="mb-2">
                    <h3 className={`text-base font-bold tracking-tight leading-tight ${isHighlighted ? 'text-zinc-900' : 'text-gray-900'}`}>
                        {item.link ? (
                            <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity"
                            >
                                {item.mainName}
                            </a>
                        ) : (
                            item.mainName
                        )}
                    </h3>
                </div>

                {/* Description - Same logic as Timeline but more compact */}
                {hasDescription && (
                    <div 
                        onClick={() => hasMore && setIsExpanded(!isExpanded)}
                        className={`text-xs break-words whitespace-normal font-normal text-gray-500 leading-relaxed max-w-2xl transition-colors ${hasMore ? 'cursor-pointer hover:text-gray-800' : ''}`}
                    >
                        {displayDescription}
                        {!isExpanded && hasMore && (
                            <span className="text-black font-bold ml-1">...</span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};


export default function EducationContainer() {
    const [SelectLang] = useAtom(LanguageAtom);

    return (
        <div className="flex flex-col mt-4">
            <TopicTittle TopicName={EducationTitle[SelectLang]} />
            <div className="flex flex-col mt-4 px-2">
                {education.map((item, index) => (
                    <EducationItem 
                        key={`${item.id}-${index}`} 
                        item={item} 
                        isLast={index === education.length - 1} 
                    />
                ))}
            </div>
        </div>
    );
}

