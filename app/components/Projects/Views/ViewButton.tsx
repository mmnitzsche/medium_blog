import { ColSize } from '@/utils/atom';
import { useAtom } from 'jotai';
import React from 'react';

interface Props {
    icon: React.ReactNode;
    colSize: number;
    hiddenTrigger?: string
}

export default function ViewButton({ icon, colSize, hiddenTrigger }: Props) {

    const [ColNumber, setColNumber] = useAtom(ColSize);

    const setColSize = () => {
        setColNumber(colSize);
    };

    const isActive = ColNumber === colSize;

    return (
        <>
            <div
                onClick={setColSize}
                className={`
                hidden ${hiddenTrigger}:flex
                transition-colors duration-300 ease-in-out 
                rounded-sm p-0.5 text-slate-600 
                hover:bg-slate-200 
                ${isActive ? 'bg-slate-200' : ''}
            `}
            >
                {icon}
            </div>
        </>
    );
}
