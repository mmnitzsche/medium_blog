import React from 'react';

interface props {
    CompanyName: String
    CompanySite: any
}

export default function CompanyName(props: props) {

    return (
        <>
            <div className='w-fit'>
                <a href={props.CompanySite}>
                    <h1
                        className="text-md font-bold tracking-tight underline w-fit">
                        {props.CompanyName}
                    </h1>
                </a>
            </div>
        </>
    );
}