'use client'

import { useEffect } from "react";
import { useAtom } from "jotai";

import PublishedContainer from "../Published/PublishedContainer";
import ImageFormater from "../MediaFormater/ImageFormater";
import ContentContainer from "../Content/ContentContainer";
import CategoryContainer from "../Category/CategoryContainer";
import PostTitleContainer from "../PostTitle/PostTitleContainer";
import { CategoryValue, ColSize, LanguageAtom, PostIndex } from '@/utils/atom';
import { PostDialog } from "../../Post/PostDialog";
import { PostsLoader } from "../../Loader/PostsLoader";
import { extractContentByLanguage } from "@/utils/ExtractContentByLanguage";
import { extractFirstStrongContent } from "@/utils/ExtractTitle";
import { extractLinksFromContent } from "@/utils/ExtractLinksFromContent";
import LinkContainer from "../../LinksComponent/LinkContainer";

interface Props {
    Posts: any; // Você pode tipar isso melhor se necessário
}

export default function ProjectPosts(props: Props) {
    const [filter] = useAtom(CategoryValue);
    const [postIndex, setPostIndex] = useAtom(PostIndex);
    const [SelectLang] = useAtom(LanguageAtom);
    const [ColNumer, setColNumber] = useAtom(ColSize);

    const postsRequest = props.Posts;

    useEffect(() => {
        const updateColSize = () => {
            const width = window.innerWidth;

            if (width >= 1280) {
                setColNumber(3); // xl
            } else if (width >= 768) {
                setColNumber(2); // md
            } else {
                setColNumber(1); // sm
            }
        };

        updateColSize(); // Chama ao montar o componente
        window.addEventListener('resize', updateColSize);

        return () => {
            window.removeEventListener('resize', updateColSize);
        };
    }, []);

    if (!postsRequest) {
        return <PostsLoader />;
    }

    // Filtra os posts com base na categoria selecionada
    const filteredProjects = filter
        ? postsRequest.items.filter((project: any) => project.categories.includes(filter))
        : postsRequest.items;

    const handleClickPost = (filteredIndex: number) => {
        // Encontre o índice correto no array original
        const originalIndex = postsRequest.items.findIndex((post: any) => post.guid === filteredProjects[filteredIndex].guid);
        setPostIndex(originalIndex);
    };

    const colClass = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
    }[ColNumer] || 'grid-cols-1';

    return (
        <>
            {/* <div className="flex space-x-2">
                <div className="hidden sm:flex">sm</div>
                <div className="hidden xl:flex md:flex">md</div>
                <div className="hidden xl:flex">lg</div>
            </div> */}
            <div className={`grid ${colClass} gap-6 transition-all h-fit w-fit`}>
                {filteredProjects.map((posts: any, filteredIndex: number) => {
                    const postTitle = extractFirstStrongContent(
                        posts['content:encoded'],
                        extractContentByLanguage(posts['content:encoded'], SelectLang),
                        posts.title,
                        SelectLang
                    );

                    const ContentValue = extractContentByLanguage(posts['content:encoded'], SelectLang);
                    const PostLinks = extractLinksFromContent(posts['content:encoded']);

                    return (
                        <PostDialog
                            key={posts.guid}
                            Posts={postsRequest.items}
                            Index={postIndex}
                            Component={
                                <div
                                    className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#f2f2f2] shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in h-fit cursor-pointer"
                                    onClick={() => handleClickPost(filteredIndex)}
                                >
                                    <div>
                                        <div className="mb-3">
                                            <PostTitleContainer Title={postTitle} />
                                            <PublishedContainer PublishedDate={posts.pubDate} />
                                        </div>
                                        <LinkContainer linkJson={PostLinks} />
                                        <ImageFormater Media={posts['content:encoded']} />
                                        <ContentContainer Content={ContentValue} />
                                        <div className="flex flex-wrap gap-2">
                                            {Array.isArray(posts.categories) && posts.categories.map((category: any) => (
                                                <CategoryContainer key={category} Category={category} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    );
                })}
            </div>
        </>
    );
}
