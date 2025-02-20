'use client'
import React, { useState, useEffect } from 'react';
import { parse } from 'rss-to-json';
// import DOMPurify from 'dompurify'; // Se você quiser sanitizar o HTML

function MediumPosts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchMediumPosts() {
            setIsLoading(true);
            try {
                const res = await parse('https://medium.com/feed/@mateusnit');
                setPosts(res.items);
            } catch (err: any) {
                setError(err);
                console.error("Erro ao buscar posts do Medium:", err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchMediumPosts();
    }, []);

    if (isLoading) {
        return <div>Carregando posts do Medium...</div>;
    }

    if (error) {
        return <div>Erro ao carregar posts do Medium: {error.message}</div>;
    }

    return (
        <div>
            {posts.map((post, index) => {
                // const sanitizedContent = DOMPurify.sanitize(post.content); // Se você quiser sanitizar o HTML
                return (
                    <div key={index}>
                        <h2>{index} - {post.title}</h2>
                        <a href={post.link.split("?")[0]} target="_blank" rel="noopener noreferrer">
                            {post.link.split("?")[0]}
                        </a>
                        <div className='text-red-300'>
                            {post.pubDate}
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} /> {/* Use sanitizedContent se estiver sanitizando */}
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default MediumPosts;
