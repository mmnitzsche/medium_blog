import React from 'react';
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface props {
    PublishedDate: Date
}

export default function PublishedContainer(props: props) {

    const date = new Date(props.PublishedDate);

    const formatted = format(date, "dd MMM yyyy", { locale: ptBR });

    return (
        <>
            <div
                className='text-xs text-gray-400 font-extralight'>
                {formatted}
            </div>
        </>
    );
}