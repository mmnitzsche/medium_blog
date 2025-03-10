import { LanguageAtom } from '@/utils/atom';
import { useAtom } from 'jotai';
import { CalendarPlus, Sparkle } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';


export default function BadageScheduleMeeting() {

    const [SelectLang] = useAtom(LanguageAtom)
    const MeetingTitle = {
        "pt": "Marque uma reunião",
        "en": "Schedule a meeting",
    }

    return (
        <>
            <a
                // href='https://calendly.com/mmnitzsche/30min'
                // target="_blank" rel="noopener noreferrer"
                className="animate- p-2 bg-gray-200 rounded-md flex items-center text-sm cursor-pointer whitespace-nowrap 
                transition-colors duration-300 hover:bg-blue-600 hover:text-white group">
                <CalendarPlus size={16} className=" group-hover:animate-bounce" />
                <div className="ml-1">{MeetingTitle[SelectLang]}</div>
            </a>
        </>
    );
}