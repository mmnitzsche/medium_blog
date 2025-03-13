import React from 'react';
import { useAtom } from 'jotai';
import { CategoryValue } from '@/utils/atom';
import { FilterLoader } from '../../Loader/FilterLoader';
import CounterContainer from './CounterContainer';

interface Props {
    Posts: any; // Você pode tipar isso melhor se necessário
}

export default function FilterContainer({ Posts }: Props) {
    const [filter, setFilter] = useAtom(CategoryValue);

    if (!Posts) {
        return <FilterLoader />;
    }

    // Criar um mapa de contagem de categorias e substituir "-" por espaço
    const categoryCountMap = Posts.items
        .map((item: { categories: string[] }) => item.categories) // Acessa o array de categorias
        .flat() // Achata o array de arrays em um único array
        .reduce((acc: Record<string, { name: string; count: number }>, category: string) => {
            const formattedName = category.replace(/-/g, " "); // Substitui hífens por espaços
            if (!acc[category]) {
                acc[category] = { name: formattedName, count: 0 };
            }
            acc[category].count += 1;
            return acc;
        }, {} as Record<string, { name: string; count: number }>);

    // Obter as categorias únicas
    const uniqueTags = Object.keys(categoryCountMap);

    return (
        <div className="flex flex-wrap gap-2">
            {uniqueTags.map((originalCategory) => (
                <button
                    key={originalCategory}
                    onClick={() => setFilter(filter === originalCategory ? null : originalCategory)}
                    className={`flex items-center justify-center space-x-1 px-2 py-2 rounded-full text-md transition-all font-semibold text-slate-600 ${filter === originalCategory
                        ? "outline outline-2 outline-primary text-primary-foreground"
                        : "outline-none hover:outline hover:outline-2 hover:outline-gray-300"}`}>
                    {categoryCountMap[originalCategory].name}
                    <CounterContainer Counter={categoryCountMap[originalCategory].count} />
                </button>
            ))}
        </div>
    );
}