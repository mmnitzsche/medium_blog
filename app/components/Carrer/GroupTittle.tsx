import React from 'react';

interface props {
    groupRole: string
}

export default function GroupTittle(props:props) {
    return (
        <>
            <h1 className="text-md font-bold tracking-tight">
                {props.groupRole}
            </h1>
        </>
    );
}