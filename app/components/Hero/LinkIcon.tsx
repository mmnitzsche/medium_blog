import React from 'react';

interface Props {
    href: string; // Tipagem corrigida para uma string representando a URL
    Icon: any; // JSX.Element é o tipo correto para componentes React
}

export default function LinkIcon(props: Props) {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full bg-primary text-primary-foreground hover:bg-[#d4d4d3] transition-colors"
        >
            <div className="w-10 h-10 flex justify-center items-center">
                {props.Icon}
            </div>
        </a>
    );
}
