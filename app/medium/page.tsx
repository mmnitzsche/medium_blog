'use client'
import React from 'react';
import { parse } from 'rss-to-json';

export default async function page() {
    const res = await parse('https://medium.com/feed/@mateusnit');
    const posts = res.items; // Pegando todos os posts do feed

    return (
        <div>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{index} - {post.title}</h2> {/* Número do post + Título */}
                    <a href={post.link.split("?")[0]} target="_blank" rel="noopener noreferrer">
                        {post.link.split("?")[0]}
                    </a>
                    <div
                        className='text-red-300'
                    >
                        {post.pubDate}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} /> {/* Conteúdo do post */}
                    <hr />
                </div>
            ))}
        </div>
    );
}
