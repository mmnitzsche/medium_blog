'use client'

import PublishedContainer from "../Published/PublishedContainer";
import ImageFormater from "../MediaFormater/ImageFormater";
import ContentContainer from "../Content/ContentContainer";
import CategoryContainer from "../Category/CategoryContainer";
import PostTitleContainer from "../PostTitle/PostTitleContainer";
import { CategoryValue, LanguageAtom, PostIndex } from '@/utils/atom';
import { useAtom } from "jotai";
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
    const [filter, setFilter] = useAtom(CategoryValue);
    const [postIndex, setPostIndex] = useAtom(PostIndex);
    const [SelectLang] = useAtom(LanguageAtom);

    const postsRequest = props.Posts;

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

    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-6 transition-all h-fit w-fit">
                {filteredProjects.map((posts: any, filteredIndex: number) => {
                    // Armazena o valor do título em uma variável
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
                                            {/* Passa a variável postTitle para o PostTitleContainer */}
                                            <PostTitleContainer Title={postTitle} />
                                            <PublishedContainer PublishedDate={posts.pubDate} />
                                        </div>
                                        <LinkContainer linkJson={PostLinks} />
                                        <ImageFormater Media={posts['content:encoded']} />
                                        <ContentContainer Content={ContentValue} />
                                        <div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {Array.isArray(posts.categories) ? (
                                                posts.categories.map((category: any) => (
                                                    <CategoryContainer key={category} Category={category} />
                                                ))
                                            ) : null}
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