'use client'
import React, { useEffect, useState } from 'react';
import { parse } from 'rss-to-json';
import Projects2 from '../components/Projects2';

export default function Page() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        async function fetchMediumPosts() {
            try {
                const res = await parse('https://medium.com/feed/@mateusnit');
                setPosts(res.items);
            } catch (error) {
                console.error("Erro ao buscar posts do Medium:", error);
            }
        }

        fetchMediumPosts();
    }, []);

    return (
        <>
            {/* <Projects2 /> */}
            <div>
                {posts.map((post, index) => (
                    <div key={index}>
                        <h2>{index} - {post.title}</h2>
                        <a href={post.link.split("?")[0]} target="_blank" rel="noopener noreferrer">
                            {post.link.split("?")[0]}
                        </a>
                        <div className='text-red-300'>
                            {post.pubDate}
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        <hr />
                    </div>
                ))}
            </div>
        </>
    );
}
