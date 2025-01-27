'use client'
import React, { useState } from 'react';
import { parse } from 'rss-to-json';

export default async function Page() {

    const [linkValue, setlinkValue] = useState("")
    const [linkClicked, setlinkClicked] = useState("aaa")
    const res = await parse('https://medium.com/feed/@mateusnit');
    const resJson = res.items;

    const linksJson = resJson.map(item => item.link.split("?")[0]);

    const handleChange = (e) => {
        setlinkValue(e.target.value)

    }

    const IndexLinkJson = linksJson.indexOf(linkClicked)

    return (
        <>
            <h1>{`Choosed: ${linkClicked}`}</h1>
            <input
                className='bg-slate-200'
                onChange={handleChange}
                value={linkValue}
                type="text" />
            <div>
                <div>
                    {/* Renderiza os dados aqui, verificando se há algo em 'valueHere' */}
                    {linksJson.length > 0 ? (
                        linksJson.map((item, index) => (
                            <div
                                onClick={() => setlinkClicked(item)}

                                key={index}>{item}</div> // Exibe cada item do array
                        ))
                    ) : (
                        <p>Carregando...</p> // Exibe "Carregando..." enquanto os dados não estiverem prontos
                    )}
                </div>

                <div>
                    {/* {JSON.stringify(linksJson)} */}
                </div>
            </div>
        </>
    );
}
