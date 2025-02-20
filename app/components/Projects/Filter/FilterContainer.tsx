import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { CategoryValue } from '@/utils/atom'

interface props {
    Posts: any
}

export default function FilterContainer(props: props) {
    const [filter, setFilter] = useAtom(CategoryValue)

    const posts = props.Posts

    const categorys = !posts ? <></> : posts.map(item => item.category).flat()

    const uniqueTags = [...new Set(categorys)];

    // const filteredProjects = filter
    //     ? posts.filter((project) => project.category.includes(filter))
    //     : posts;


    return (
        <>
            <div className="flex flex-wrap gap-2">
                {uniqueTags.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(filter === category ? null : category)}
                        className={`px-2 py-2 rounded-full text-md transition-all font-semibold text-slate-800 ${filter === category
                            ? "outline outline-2 outline-primary text-primary-foreground"
                            : "outline-none hover:outline hover:outline-2 hover:outline-gray-300"
                            }`}>
                        {category}
                    </button>
                ))}
            </div>
        </>
    );
}