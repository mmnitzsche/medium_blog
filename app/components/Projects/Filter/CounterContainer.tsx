import React from 'react';

interface props {
    Counter: any
}

export default function CounterContainer(props: props) {
    return (
        <>
            <div 
            className='opacity-50 pl-1 text-sm'
            >
                ▪ {props.Counter}
            </div>
        </>
    );
}