'use client';
import React from 'react';
import { parse } from 'rss-to-json';

export default async function page() {
    let posts = [];
    try {
        const res = await parse('https://medium.com/feed/@mateusnit');
        posts = res.items; // Pegando todos os posts do feed
    } catch (error) {
        console.error('Erro ao carregar o feed:', error);
        // Pode adicionar uma mensagem de erro ou fallback
    }

    return (
        <div>
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <div key={index}>
                        <h2>{index} - {post.title}</h2> {/* Número do post + Título */}
                        <a href={post.link.split("?")[0]} target="_blank" rel="noopener noreferrer">
                            {post.link.split("?")[0]}
                        </a>
                        <div className='text-red-300'>
                            {post.pubDate}
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} /> {/* Conteúdo do post */}
                        <hr />
                    </div>
                ))
            ) : (
                <div>Erro ao carregar os posts.</div>
            )}
        </div>
    );
}
