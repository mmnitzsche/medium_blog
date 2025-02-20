import React from 'react';

interface props {
    Link: any
    Icon: any
}

export default function PostDialogLink(props: props) {
    return (
        <>
            <a
                href={props.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 flex items-center gap-1 hover:underline pr-4 hover:text-primary"
            >
                <>
                    {props.Icon}
                </>
            </a>
        </>
    );
}