import React from 'react';
import { Linkedin } from 'lucide-react';
import { userName } from '@/data/BlogGeneralStaticData';

export default function MobileHeader() {
    return (
        <div className="flex items-center justify-between w-full px-4 py-3 bg-white/50 backdrop-blur-sm sticky top-0 z-40 border-b border-zinc-100 mb-2">
            <h1 className="text-base font-bold text-zinc-900">{userName}</h1>
            <a 
                href="https://www.linkedin.com/in/mateusnit/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
            >
                <Linkedin size={18} />
            </a>
        </div>
    );
}
