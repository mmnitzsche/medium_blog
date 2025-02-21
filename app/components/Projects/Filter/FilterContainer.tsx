import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { CategoryValue } from '@/utils/atom'
import { FilterLoader } from '../../Loader/FilterLoader';

interface props {
    Posts: any
}

export default function FilterContainer(props: props) {
    const [filter, setFilter] = useAtom(CategoryValue);

    const posts = props.Posts;
    if (!posts) {
        return <FilterLoader />;
    }

    // Criar um objeto { nomeOriginal: nomeModificado }
    const categoryMap = posts
        .map((item: { category: string | string[] }) => item.category)  // Tipando explicitamente o item
        .flat()
        .reduce((acc: Record<string, string>, category: string) => {  // Tipando acc e category
            acc[category] = category.replace(/-/g, " ");
            return acc;
        }, {} as Record<string, string>);
    // Pegar apenas os nomes originais únicos
    const uniqueTags = Object.keys(categoryMap);

    return (
        <>
            <div className="flex flex-wrap gap-2">
                {uniqueTags.map((originalCategory) => (
                    <button
                        key={originalCategory}
                        onClick={() => setFilter(filter === originalCategory ? null : originalCategory)}
                        className={`px-2 py-2 rounded-full text-md transition-all font-semibold text-slate-800 ${filter === originalCategory
                            ? "outline outline-2 outline-primary text-primary-foreground"
                            : "outline-none hover:outline hover:outline-2 hover:outline-gray-300"
                            }`}>
                        {categoryMap[originalCategory]} {/* Exibe o nome modificado */}
                    </button>
                ))}
            </div>
        </>
    );
}
