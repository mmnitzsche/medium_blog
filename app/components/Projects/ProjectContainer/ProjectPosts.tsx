'use client'

import PublishedContainer from "../Published/PublishedContainer";
import ImageFormater from "../MediaFormater/ImageFormater";
import ContentContainer from "../Content/ContentContainer";
import CategoryContainer from "../Category/CategoryContainer";
import PostTitleContainer from "../PostTitle/PostTitleContainer";
import { CategoryValue, LanguageAtom, PostIndex } from '@/utils/atom'
import { useAtom } from "jotai";
import { PostDialog } from "../../Post/PostDialog";
import { PostsLoader } from "../../Loader/PostsLoader";
import { extractContentByLanguage } from "@/utils/ExtractContentByLanguage";
import { extractFirstStrongContent } from "@/utils/ExtractTitle";

interface Props {
    Posts: any;
}

export default function ProjectPosts(props: Props) {
    const [filter, setFilter] = useAtom(CategoryValue);
    const [postIndex, setPostIndex] = useAtom(PostIndex);
    const [SelectLang] = useAtom(LanguageAtom);

    const postsRequest = props.Posts;

    if (!postsRequest) {
        return <PostsLoader />;
    }

    const filteredProjects = filter
        ? postsRequest.filter((project) => project.category.includes(filter))
        : postsRequest;

    const handleClickPost = (index: any) => {
        setPostIndex(index);
    };

    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-6 transition-all h-fit w-fit">
                {filteredProjects.map((posts: any, index: number) => {
                    // Armazena o valor do título em uma variável
                    const postTitle = extractFirstStrongContent(
                        posts.content,
                        extractContentByLanguage(posts.content, SelectLang),
                        posts.title,
                        SelectLang
                    );

                    const ContentValue = extractContentByLanguage(posts.content, SelectLang)


                    return (
                        <PostDialog
                            key={posts.id}
                            Posts={postsRequest}
                            Index={postIndex}
                            Component={
                                <div
                                    className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#f2f2f2] shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in h-fit cursor-pointer"
                                    onClick={() => handleClickPost(index)}
                                >
                                    <div>

                                        <div className="mb-3">
                                            {/* Passa a variável postTitle para o PostTitleContainer */}
                                            <PostTitleContainer Title={postTitle} />
                                            <PublishedContainer PublishedDate={posts.published} />
                                        </div>
                                        <ImageFormater Media={posts.content} />
                                        <ContentContainer Content={ContentValue} />
                                        <div className="flex flex-wrap gap-2">
                                            {Array.isArray(posts.category) ? (
                                                posts.category.map((category: any) => (
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