import React from 'react';

interface props {
    GroupName: String
    GroupSite: any
}

export default function GroupName(props: props) {

    return (
        <>
            <div className='w-fit'>
                <a href={props.GroupSite}>
                    <h1
                        className="text-md font-bold tracking-tight underline w-fit">
                        {props.GroupName}
                    </h1>
                </a>
            </div>
        </>
    );
}