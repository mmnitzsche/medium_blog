import React from 'react';
import {
    Link as LinkIcon,
    Github,
    Linkedin,
    BarChart3,
    FileText,
} from 'lucide-react';

interface Props {
    linkJson: Record<string, string>;
}

export default function LinkContainer({ linkJson }: Props) {
    const hasLinks = Object.keys(linkJson).length > 0;

    const handleClick = (event: React.MouseEvent, url: string) => {
        event.stopPropagation();
        window.open(url, '_blank');
    };

    if (!hasLinks) return null;

    return (
        <div className="pb-4">
            <div className="flex text-sm space-x-3 items-center">
                <div>
                    <LinkIcon className="text-opacity-20" size={16} />
                </div>

                {Object.entries(linkJson).map(([key, value]) => {
                    let bgColor = 'bg-zinc-200';
                    let textColor = 'text-zinc-900';
                    let hoverColor = 'hover:bg-zinc-300';
                    let IconComponent: React.ElementType = LinkIcon;

                    switch (key) {
                        case 'github':
                            bgColor = 'bg-zinc-700';
                            textColor = 'text-zinc-100';
                            hoverColor = 'hover:bg-zinc-600';
                            IconComponent = Github;
                            break;
                        case 'linkedin':
                            bgColor = 'bg-blue-200';
                            textColor = 'text-blue-900';
                            hoverColor = 'hover:bg-blue-300';
                            IconComponent = Linkedin;
                            break;
                        case 'dashboard':
                            bgColor = 'bg-amber-200';
                            textColor = 'text-amber-900';
                            hoverColor = 'hover:bg-amber-300';
                            IconComponent = BarChart3;
                            break;
                        case 'article':
                            bgColor = 'bg-neutral-200';
                            textColor = 'text-neutral-900';
                            hoverColor = 'hover:bg-neutral-300';
                            IconComponent = FileText;
                            break;
                        default:
                            IconComponent = LinkIcon;
                            break;
                    }

                    return (
                        <div
                            key={key}
                            className={`flex items-center gap-1 px-2 py-1 rounded-lg ${bgColor} ${textColor} ${hoverColor} transition-colors duration-200 cursor-pointer`}
                            onClick={(event) => handleClick(event, value)}
                        >
                            <IconComponent size={14} strokeWidth={1.8} />
                            <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
