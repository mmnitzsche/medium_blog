import React from 'react';

interface Props {
    startPeriod: string;
    endPeriod: string;
}

export default function GroupPeriod(props: Props) {
    return (
        <>
            <h1 className="text-md font-bold text-[#acaba8]">
                {props.startPeriod && props.endPeriod === ""
                    ? <div></div>
                    : `${props.startPeriod} - ${props.endPeriod}`}
            </h1>
        </>
    );
}
