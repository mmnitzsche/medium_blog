'use client';
import React from 'react';
import { UsePostApi } from '../hooks/usePostApi';
import Projects2 from '../components/Projects2';

export default function Page() {
    const { data: posts } = UsePostApi();

    if (!posts) {
        return <div>Carregando posts...</div>;
    }

    return (
        <>
            <div>
                <div>
                    {/* {JSON.stringify(categorys).replace(/-/g, " ")} */}
                </div>
                <Projects2
                    // posts={posts}
                ></Projects2>
            </div>
        </>
    );
}
