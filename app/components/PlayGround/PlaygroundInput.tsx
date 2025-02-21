import { MediumPlayGroundUserName } from '@/utils/atom';
import { useAtom } from 'jotai';
import { CircleHelp } from 'lucide-react';
import React, { useState } from 'react';
import PlaygroundInfo from './PlaygroundInfo';
import Github from './BadgeGithub';

export default function PlayGroundInput() {
    const [user, setUser] = useAtom(MediumPlayGroundUserName);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleValue = (e) => {
        setUser(e.target.value);
    };

    return (
        <div className='items-center w-full flex relative justify-between'>
            <div className='items-center flex relative'>
                <div
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className='relative'
                >
                    <CircleHelp className='text-slate-300 cursor-pointer' size={18} />
                    <PlaygroundInfo visible={showTooltip} />
                </div>
                <div className='text-slate-500 p-1'>https://medium.com/@/</div>
                <input
                    onChange={handleValue}
                    placeholder='myusername'
                    value={user}
                    className='bg-gray-200 rounded px-2 py-1 outline-none'
                    type='text'
                />
            </div>
            <Github />
        </div>
    );
}
