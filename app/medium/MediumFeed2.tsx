'use client'
import React, { useState } from 'react';
import { parse } from 'rss-to-json';

export default async function MediumFeed2() {

    const [linkValue, setlinkValue] = useState("")
    const PublishIndex = 1;
    const res = await parse('https://medium.com/feed/@mateusnit');
    const resJson = res.items;

    // Salvando os links modificados em uma variável JSON
    const linksJson = resJson.map(item => item.link.split("?")[0]);

    // Exemplo de como você pode acessar a variável linksJson, se necessário
    console.log(linksJson); // Isso vai exibir o array com os links no console

    const PublishContent = res.items[PublishIndex].content;
    const PublishTitle = res.items[PublishIndex].title;
    const PublishLink = res.items[PublishIndex].link.split("?")[0];
    const PublishLinkAll = res.items[PublishIndex].link;

    const handleChange = (e) => {
        setlinkValue(e.target.value)

    }

    return (
        <>
            <input
                className='bg-slate-200'
                onChange={handleChange}
                value={linkValue}
                type="text" />
            <div>
                <div>
                    {linkValue}
                </div>
                <h1>{res.title}</h1> {/* Display the feed title */}
                <h2>{PublishTitle}</h2> {/* Display the post title */}
                <h2>{PublishLink}</h2> {/* Display the post link */}
                <p>.</p> {/* Display the post title */}
                <p>.</p> {/* Display the post title */}

                {/* Exibindo os itens usando map */}
                <div>
                    {/* {resJson.map((item, index) => (
                        <div key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.link.split("?")[0]}</p>
                            
                        </div>
                    ))} */}
                </div>
                <div>
                    {JSON.stringify(linksJson)}
                </div>
            </div>
        </>
    );
}
