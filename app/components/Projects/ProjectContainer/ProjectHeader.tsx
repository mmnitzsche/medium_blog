import React from 'react';
import TopicTittle from '../../Hero/TopicTittle';
import PlaygroundBadge from '../../PlayGround/BadgePlayground';
import LanguageDropdownContainer from '../../LanguageSettings/LanguageDropdown/LanguageDropdownContainer';
import { LanguageAtom } from '@/utils/atom';
import { useAtom } from 'jotai';
import BadageScheduleMeeting from '../../ScheduleMeeting/BadgeScheduleMeeting';
import { DialogPopup } from '../../Post/DialogPopUp';
import CalendarContainer from '../../Calendar/CalendarContainer';
import { ProjectTitle } from '@/data/BlogGeneralStaticData';
import { usePathname, useRouter } from 'next/navigation';



export default function ProjectHeader() {
    const [SelectedLang] = useAtom(LanguageAtom)

    const pathName = usePathname()
    const LanguageCondition = pathName === "/playground" ? <></> : <LanguageDropdownContainer />

    return (
        <>

            <div className='items-center justify-between md:flex xl:flex '>
                <TopicTittle
                    TopicName={ProjectTitle[SelectedLang]}
                ></TopicTittle>
                <div className='space-x-2 flex' >
                    {LanguageCondition}
                    <PlaygroundBadge />
                    <DialogPopup
                        Button={<BadageScheduleMeeting />}


                    ><CalendarContainer /></DialogPopup>

                </div>
            </div>
        </>
    );
}