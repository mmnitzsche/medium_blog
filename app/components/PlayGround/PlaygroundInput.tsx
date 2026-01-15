import { MediumPlayGroundUserName } from '@/utils/atom';
import { useAtom } from 'jotai';
import { Copy, ClipboardPaste, Check } from 'lucide-react';
import React, { useState } from 'react';
import Github from './BadgeGithub';
import PlaygroundHelp from './PlaygroundHelp';

export default function PlayGroundInput() {
    const [user, setUser] = useAtom(MediumPlayGroundUserName);
    const [copied, setCopied] = useState(false);

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };

    const handleCopy = () => {
        const baseUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';
        const fullUrl = `${baseUrl}?user=${user}`;
        navigator.clipboard.writeText(fullUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            // Tenta extrair o username se for uma URL do Medium
            if (text.includes('medium.com/@')) {
                const parts = text.split('@');
                if (parts.length > 1) {
                    const username = parts[1].split('/')[0].split('?')[0];
                    setUser(username);
                }
            } else {
                setUser(text.replace('@', ''));
            }
        } catch (err) {
            console.error('Falha ao colar:', err);
        }
    };

    return (
        <div className='items-center w-full flex relative justify-between gap-4'>
            <div className='items-center flex relative flex-wrap gap-2'>
                <div
                    className='flex items-center bg-gray-100 rounded-lg px-3 py-2 border border-gray-200'
                >
                    <span className='text-slate-500 text-sm'>https://medium.com/@</span>
                    
                    <input
                        onChange={handleValue}
                        placeholder='myusername'
                        value={user}
                        className='bg-transparent pl-1 outline-none text-sm font-medium text-zinc-900 w-32'
                        type='text'
                    />

                    <div className='flex items-center ml-2 border-l border-gray-200 pl-2 space-x-2'>
                        <button 
                            onClick={handleCopy}
                            title="Copiar link do Playground"
                            className='text-slate-400 hover:text-zinc-900 transition-colors'
                        >
                            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                        </button>
                        <button 
                            onClick={handlePaste}
                            title="Colar do clipboard"
                            className='text-slate-400 hover:text-zinc-900 transition-colors'
                        >
                            <ClipboardPaste size={16} />
                        </button>
                    </div>
                </div>
                <PlaygroundHelp />
            </div>
            <Github />
        </div>
    );
}
