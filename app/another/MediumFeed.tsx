import React from 'react';
import { parse } from 'rss-to-json';

export default async function Page() {
    const PublishIndex = 1
    const res = await parse('https://medium.com/feed/@mateusnit');
    const PublishContent = res.items[PublishIndex].content; // No need to stringify here
    const PublishTitle = res.items[PublishIndex].title;
    const PublishLink = res.items[PublishIndex].link.split("?")[0];

    return (
        <>
            <div>
                <h1>{res.title}</h1> {/* Display the feed title */}
                <h2>{PublishTitle}</h2> {/* Display the post title */}
                <h2>{PublishLink}</h2> {/* Display the post title */}
                <p>.</p> {/* Display the post title */}
                <p>.</p> {/* Display the post title */}
                
                <div dangerouslySetInnerHTML={{ __html: PublishContent }} /> {/* Render HTML content */}
            </div>
        </>
    );
}
