import { Link } from 'lucide-react';
import React from 'react';

function LinkButton() {
    return (

        <div className='flex text-sm space-x-3 items-center'>
            <div>
                <Link className='text-opacity-20' size={16} />
            </div>
            <div className='p-1 rounded-lg bg-zinc-200 bg-opacity-60 text-zinc-900 hover:bg-slate-300 transition-colors duration-200 '>
                Github
            </div>
            <div className='p-1 rounded-lg bg-blue-200 bg-opacity-60 text-blue-900 hover:bg-blue-300 transition-colors duration-200 '>
                Linkedin
            </div>
            <div className='p-1 rounded-lg bg-neutral-200 bg-opacity-60 text-neutral-900 hover:bg-stone-300 transition-colors duration-200 '>
                Medium
            </div>
        </div>
    );
}

export default LinkButton;