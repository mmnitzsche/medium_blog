import React from 'react';
import { format, parse } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Props {
    PublishedDate?: string; // A data agora é opcional
}

export default function PublishedContainer(props: Props) {
    // Verifica se PublishedDate está definido e é uma string
    if (!props.PublishedDate || typeof props.PublishedDate !== 'string') {
        return null; // Retorna null se a data for inválida
    }

    try {
        // Converte a string RFC 2822 para um objeto Date
        const date = parse(props.PublishedDate, 'EEE, dd MMM yyyy HH:mm:ss \'GMT\'', new Date());

        // Formata a data no formato desejado
        const formatted = format(date, "dd MMM yyyy", { locale: ptBR });

        return (
            <div className='text-xs text-gray-400 font-extralight'>
                {formatted}
            </div>
        );
    } catch (error) {
        console.error('Erro ao processar a data:', error);
        return null; // Retorna null em caso de erro
    }
}