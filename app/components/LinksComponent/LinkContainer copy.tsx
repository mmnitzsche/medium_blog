import React from 'react';
import Github from '../PlayGround/BadgeGithub';

interface LinkItemProps {
    href: string;
    children: React.ReactNode;
}

// Componente individual para cada link
const LinkItem: React.FC<LinkItemProps> = ({ href, children }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation(); // Impede a propagação do evento        
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="block p-2 m-1 bg-blue-100 rounded hover:bg-blue-200 transition-colors"
        >
            {children}
        </a>
    );
};

interface Props {
    Links: {
        github: string;
        linkedin: string;
        article: string;
    };
}

export default function LinkContainer(props: Props) {
    const { Links } = props;

    return (
        <div className="flex w-fit h-full rounded-full">
            <LinkItem href={Links.github}>g</LinkItem>
            <LinkItem href={Links.linkedin}>l</LinkItem>
            <LinkItem href={Links.article}>m</LinkItem>
        </div>
    );
}