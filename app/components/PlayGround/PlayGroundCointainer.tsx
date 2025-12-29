import { HelpCircle } from 'lucide-react';
import React from 'react';
import PlayGroundInput from './PlaygroundInput';

export default function PlayGroundCointainer() {
    return (
        <div className="space-y-4">
            <PlayGroundInput />
            
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100 max-w-2xl animate-fade-in">
                <HelpCircle size={18} className="text-zinc-900 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-zinc-900 leading-relaxed">
                    <strong>Como funciona:</strong> Ao inserir seu nome de usuário, nossa aplicação se conecta ao feed RSS público do seu Medium. Nós processamos o XML e exibimos seus artigos automaticamente com este layout personalizado.
                </p>
            </div>
        </div>
    );
}