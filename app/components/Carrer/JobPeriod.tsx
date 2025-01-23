import React from 'react';

interface props {
    startPeriod: string,
    endPeriod:string
}

export default function JobPeriod(props:props) {
    return (
        <>
            <h1 className="text-md font-bold  text-[#acaba8]">
                {`${props.startPeriod} - ${props.endPeriod}`}
            </h1>
        </>
    );
}