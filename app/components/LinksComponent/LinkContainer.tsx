import React from 'react';
import { Link } from 'lucide-react';

interface Props {
    linkJson: any;
}

export default function LinkContainer(props: Props) {
    const { linkJson } = props;

    // Verifica se o linkJson está vazio
    const hasLinks = Object.keys(linkJson).length > 0;

    // Função para evitar a propagação do evento de clique
    const handleClick = (event: React.MouseEvent, url: string) => {
        event.stopPropagation(); // Impede a propagação do evento
        window.open(url, '_blank'); // Abre o link em uma nova aba
    };

    // Se não houver links, retorna null ou uma mensagem
    if (!hasLinks) {
        return null; // Ou você pode retornar uma mensagem como <p>Nenhum link disponível</p>
    }

    return (
        <div className='pb-4'>
            <div className='flex text-xs space-x-3 items-center'>
                <div>
                    <Link className='text-opacity-20' size={16} />
                </div>
                {/* Itera sobre as chaves do linkJson para criar os botões dinamicamente */}
                {Object.entries(linkJson).map(([key, value]) => {
                    // Define as classes de estilo com base na chave (github, linkedin, article, etc.)
                    let bgColor = 'bg-zinc-200';
                    let textColor = 'text-zinc-900';
                    let hoverColor = 'hover:bg-zinc-300';

                    if (key === 'github') {
                        bgColor = 'bg-zinc-200';
                        textColor = 'text-zinc-900';
                        hoverColor = 'hover:bg-zinc-300';
                    } else if (key === 'linkedin') {
                        bgColor = 'bg-blue-200';
                        textColor = 'text-blue-900';
                        hoverColor = 'hover:bg-blue-300';
                    } else if (key === 'article') {
                        bgColor = 'bg-neutral-200';
                        textColor = 'text-neutral-900';
                        hoverColor = 'hover:bg-neutral-300';
                    }

                    return (
                        <div
                            key={key}
                            className={`p-1 rounded-lg ${bgColor} ${textColor} ${hoverColor} transition-colors duration-200 cursor-pointer`}
                            onClick={(event) => handleClick(event, value as string)}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}