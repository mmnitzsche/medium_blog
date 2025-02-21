import { useState } from "react";
import { ExternalLink, X } from "lucide-react";
import PublishedContainer from "../Projects/Published/PublishedContainer";
import PostDialogLink from "./PostDialogLink";


interface Props {
    Posts: any;
    Component: React.ReactNode;
    Index?: number;
}

export function PostDialog({ Posts, Component, Index = 0 }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const post = Posts[Index] || {};
    const { id: Link, title: Title, published: PostDate, content: Content} = post;

    const handleClose = (event: React.MouseEvent) => {
        if ((event.target as HTMLElement).id === "modal-overlay") {
            setIsOpen(false);
        }
    };

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
                            <h2 className="text-xl font-semibold">{Title}</h2>
                        </div>
                        <div className="text-gray-500 text-sm mt-2">
                            <PublishedContainer PublishedDate={PostDate} />
                        </div>
                        <div
                            className="text-gray-700 mt-4 justify-center"
                            dangerouslySetInnerHTML={{ __html: Content }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
