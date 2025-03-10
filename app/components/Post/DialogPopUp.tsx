import { useState } from "react";
import { X } from "lucide-react";

interface Props {
    Button: React.ReactNode; // Componente que servirá como botão para abrir o modal
    children: React.ReactNode; // Conteúdo que será exibido dentro do modal
    title?: string; // Título opcional para o modal
}

export function DialogPopup({ Button, children, title }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = (event: React.MouseEvent) => {
        if ((event.target as HTMLElement).id === "modal-overlay") {
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Botão ou componente que abre o modal */}
            <div onClick={() => setIsOpen(true)} className="inline-block">
                {Button}
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={handleClose}
                >
                    <div
                        // className="bg-white w-full max-w-3xl h-[90vh] p-1 rounded-lg shadow-lg overflow-y-auto relative"
                        className="max-w-3xl bg-white rounded-xl h-[90vh] w-[50vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botão de fechar */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-black"
                        >
                            <X />
                        </button>

                        {/* Título do modal (opcional) */}
                        {title && (
                            <h2 className="text-xl font-semibold mb-4">
                                {title}
                            </h2>
                        )}

                        {/* Conteúdo do modal */}
                        <div className="text-gray-700 mt-4">
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}