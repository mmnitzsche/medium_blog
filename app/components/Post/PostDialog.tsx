import { useState, useEffect } from "react";
import { ExternalLink, Info, X } from "lucide-react";
import PublishedContainer from "../Projects/Published/PublishedContainer";
import PostDialogLink from "./PostDialogLink";
import { extractContentByLanguage } from "@/utils/ExtractContentByLanguage";
import { useAtom } from "jotai";
import { LanguageAtom } from "@/utils/atom";
import { extractFirstStrongContent } from "@/utils/ExtractTitle";
import { WarningMediumContent } from "@/data/BlogGeneralStaticData";

interface Props {
    Posts: any;
    Component: React.ReactNode;
    Index?: number;
}

export function PostDialog({ Posts, Component, Index = 0 }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [SelectLang] = useAtom(LanguageAtom);


    const post = Posts[Index] || {};
    const { link: Link, title: Title, pubDate: PostDate, 'content:encoded': Content } = post;

    const contetByLanguage = extractContentByLanguage(Content, SelectLang);
    const extractLangueTitle = extractFirstStrongContent(Content, contetByLanguage, Title, SelectLang);

    const handleClose = (event: React.MouseEvent) => {
        if ((event.target as HTMLElement).id === "modal-overlay") {
            setIsOpen(false);
        }
    };

    // Fecha o modal ao pressionar "Esc"
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="inline-block">
                {Component}
            </div>
            {isOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={handleClose}
                >
                    <div
                        className="bg-white w-full max-w-3xl h-[90vh] p-6 rounded-lg shadow-lg overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-black"
                        >
                            <X />
                        </button>
                        <div className="flex items-center">
                            {Link && (
                                <PostDialogLink
                                    Icon={<ExternalLink size={18} />}
                                    Link={Link}
                                />
                            )}
                            <h2 className="text-xl font-semibold">{extractLangueTitle}</h2>
                        </div>
                        <div className="text-gray-500 text-sm mt-2">
                            <PublishedContainer PublishedDate={PostDate} />
                        </div>

                        <div className="w-full min:h-16 h-fit bg-red-300 border-l-4 border-red-400 sm:text-xs  text-white rounded p-1 flex items-center space-x-1 cursor-default">
                            <div>
                                <Info size={18} />
                            </div>
                            <div>
                                {WarningMediumContent[SelectLang]}
                            </div>
                            <div>
                                <PostDialogLink
                                    Icon={<ExternalLink className="text-white hover:text-black" size={18} />}
                                    Link={Link}
                                />
                            </div>
                        </div>
                        <div
                            className="text-gray-700 mt-4 justify-center"
                            dangerouslySetInnerHTML={{ __html: contetByLanguage }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
