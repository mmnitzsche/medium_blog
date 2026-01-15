import { HelpCircle } from 'lucide-react';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function PlaygroundHelp() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative inline-block">
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="cursor-pointer text-zinc-400 hover:text-zinc-600 transition-colors p-1"
            >
                <HelpCircle size={20} />
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 p-4 bg-white rounded-xl shadow-lg border border-gray-100 z-50 text-sm text-zinc-600 leading-relaxed"
                    >
                        <p>
                            <strong>Como funciona:</strong> Ao inserir seu nome de usuário, nossa aplicação se conecta ao feed RSS público do seu Medium. Nós processamos o XML e exibimos seus artigos automaticamente com este layout personalizado.
                        </p>
                        {/* Seta do tooltip */}
                        <div className="absolute -top-1.5 left-3 w-3 h-3 bg-white border-t border-l border-gray-100 transform rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
