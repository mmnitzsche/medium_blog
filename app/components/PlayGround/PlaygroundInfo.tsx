import React from 'react';

export default function PlaygroundInfo({ visible }: { visible: boolean }) {
    return (
        <div
            className={`border border-gray-200 absolute left-0 top-6 rounded p-3 shadow-xl bg-white z-50 transition-opacity duration-300 text-slate-800 text-nowrap w-fit text-sm
                ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
        >
            Insira o nome do seu usuário do Medium.
        </div>
    );
}
