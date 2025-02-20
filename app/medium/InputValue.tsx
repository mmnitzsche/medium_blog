'use client'
import React, { useEffect, useState } from 'react';

import { GetMediumPostIndex } from '../../utils/MediumPostIndex';
import GetMediumFeed from '../../utils/MediumFeed';
import { LinksJson } from '../components/Hero/LinkIconJson';


export default function InputValue() {

    const [dataLinks, setdataLinks] = useState()
    const linkvalues = GetMediumFeed()


    const [linkValue, setlinkValue] = useState(""); // Estado do input


    const handleChange = (e) => {
        setlinkValue(e.target.value); // Atualiza o valor do input
    };

    return (
        <>
            <input
                className="bg-slate-200"
                onChange={handleChange}
                value={linkValue}
                type="text"
            />
            <h1>{linkValue}</h1>
            {JSON.stringify(linkvalues)}

        </>
    );
}