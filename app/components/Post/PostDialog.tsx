import { useState, useEffect } from "react";
import { ExternalLink, Info, X } from "lucide-react";
import PublishedContainer from "../Projects/Published/PublishedContainer";
import PostDialogLink from "./PostDialogLink";
import { extractContentByLanguage } from "@/utils/ExtractContentByLanguage";
import { useAtom } from "jotai";
import { LanguageAtom } from "@/utils/atom";
import { extractFirstStrongContent } from "@/utils/ExtractTitle";
import { WarningMediumContent } from "@/data/BlogGeneralStaticData";

// New components and utils
import CategoryContainer from "../Projects/Category/CategoryContainer";
import ImageFormater from "../Projects/MediaFormater/ImageFormater";
import ContentContainer from "../Projects/Content/ContentContainer";
import PostTitleContainer from "../Projects/PostTitle/PostTitleContainer";
import { extractLinksFromContent } from "@/utils/ExtractLinksFromContent";
import LinkContainer from "../LinksComponent/LinkContainer";
import { extractAllGifs } from "@/utils/ExtractFirstGifTest";

interface Props {
    Posts: any;
    Component: React.ReactNode;
    Index?: number;
}

export function PostDialog({ Posts, Component, Index = 0 }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [SelectLang] = useAtom(LanguageAtom);


    const post = Posts[Index] || {};
    const { link: Link, title: Title, pubDate: PostDate, 'content:encoded': Content, categories: Categories } = post;

    const contetByLanguage = extractContentByLanguage(Content, SelectLang);
    const extractLangueTitle = extractFirstStrongContent(Content, contetByLanguage, Title, SelectLang);
    const PostLinks = extractLinksFromContent(Content);
    const allGifs = extractAllGifs(Content);
    const hasMedia = allGifs.length > 0;

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
                        className="bg-white w-full max-w-6xl h-fit max-h-[90vh] p-8 rounded-lg shadow-lg overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-black"
                        >
                            <X />
                        </button>
                        
                        <div className="mb-4">
                            <PostTitleContainer Title={extractLangueTitle} />
                            <PublishedContainer PublishedDate={PostDate} />
                        </div>

                        <LinkContainer linkJson={PostLinks} />

                        <div className={`flex flex-col lg:flex-row gap-8 mb-8 items-start ${!hasMedia ? 'w-full' : ''}`}>
                            {hasMedia && (
                                <div className="flex-1 w-full">
                                    <ImageFormater Media={Content} />
                                </div>
                            )}
                            <div className={`${hasMedia ? 'flex-1' : 'w-full'} flex flex-col h-full justify-between`}>
                                <a 
                                    href={Link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block group hover:opacity-100 transition-opacity"
                                >
                                    <ContentContainer Content={contetByLanguage} />
                                    <span className="text-primary font-semibold flex items-center gap-2 mt-4 hover:underline">
                                        {SelectLang === 'pt' ? 'Ler o artigo completo no Medium' : 'Read the full article on Medium'}
                                        <ExternalLink size={16} />
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex flex-wrap gap-2">
                                {Array.isArray(Categories) && Categories.map((category: any) => (
                                    <CategoryContainer key={category} Category={category} />
                                ))}
                            </div>
                        </div>
                    
                    </div>
                </div>
            )}
        </>
    );
}
