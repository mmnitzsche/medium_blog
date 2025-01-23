import React from 'react';

interface props {
    jobRole: string
}

export default function JobTittle(props:props) {
    return (
        <>
            <h1 className="text-md font-bold tracking-tight">
                {props.jobRole}
            </h1>
        </>
    );
}