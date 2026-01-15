import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { CategoryValue } from '@/utils/atom';
import { FilterLoader } from '../../Loader/FilterLoader';
import CounterContainer from './CounterContainer';
import { motion, AnimatePresence } from 'framer-motion';
import { ListFilter } from 'lucide-react';

interface Props {
    Posts: any; // Você pode tipar isso melhor se necessário
}

export default function FilterContainer({ Posts }: Props) {
    const [filter, setFilter] = useAtom(CategoryValue);
    const [showTags, setShowTags] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('filter_showTags');
        if (saved !== null) {
            setShowTags(JSON.parse(saved));
        }
    }, []);

    const toggleTags = () => {
        const newValue = !showTags;
        setShowTags(newValue);
        localStorage.setItem('filter_showTags', JSON.stringify(newValue));
    };

    if (!Posts) {
        return <FilterLoader />;
    }

    // Criar um mapa de contagem de categorias e substituir "-" por espaço
    const categoryCountMap = Posts.items
        .map((item: { categories: string[] }) => item.categories)
        .flat()
        .filter((category): category is string => typeof category === 'string') // <-- filtra apenas strings
        .reduce((acc: Record<string, { name: string; count: number }>, category: string) => {
            const formattedName = category.replace(/-/g, " ");
            if (!acc[category]) {
                acc[category] = { name: formattedName, count: 0 };
            }
            acc[category].count += 1;
            return acc;
        }, {});


    // Obter as categorias únicas
    const uniqueTags = Object.keys(categoryCountMap);

    return (
        <>
            <div className='flex flex-col items-start gap-2'>
                <button
                    onClick={toggleTags}
                    className="p-2 bg-gray-200 rounded-md flex items-center justify-center text-sm cursor-pointer 
                    transition-colors duration-300 hover:bg-black hover:text-white group 
                    w-fit max-w-full flex-shrink-0 font-semibold"
                >
                    <ListFilter size={16} className="transition-transform duration-300 group-hover:rotate-180 mr-1" />
                    Tags
                </button>
                <AnimatePresence>
                    {showTags && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden w-full"
                        >
                            <div className="flex flex-wrap gap-2 space-x-4 pt-2">
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}