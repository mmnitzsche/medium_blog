'use client'

import { useAtom } from "jotai";

import PublishedContainer from "../Published/PublishedContainer";
import ImageFormater from "../MediaFormater/ImageFormater";
import ContentContainer from "../Content/ContentContainer";
import CategoryContainer from "../Category/CategoryContainer";
import PostTitleContainer from "../PostTitle/PostTitleContainer";
import { CategoryValue, LanguageAtom, PostIndex } from '@/utils/atom';
import { PostDialog } from "../../Post/PostDialog";
import { PostsLoader } from "../../Loader/PostsLoader";
import { extractContentByLanguage } from "@/utils/ExtractContentByLanguage";
import { extractFirstStrongContent } from "@/utils/ExtractTitle";
import { extractLinksFromContent } from "@/utils/ExtractLinksFromContent";
import LinkContainer from "../../LinksComponent/LinkContainer";

interface Props {
    Posts: any;
}

export default function ProjectPosts(props: Props) {
    const [filter] = useAtom(CategoryValue);
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
        const originalIndex = postsRequest.items.findIndex(
            (post: any) => post.guid === filteredProjects[filteredIndex].guid
        );
        setPostIndex(originalIndex);
    };

    return (
        <div className="grid grid-cols-1 gap-6 transition-all w-full">
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
                                className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm   hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer"
                                onClick={() => handleClickPost(filteredIndex)}
                            >
                                <div className="mb-3">
                                    <PostTitleContainer Title={postTitle} />
                                    <PublishedContainer PublishedDate={posts.pubDate} />
                                </div>
                                <LinkContainer linkJson={PostLinks} />
                                <div className="sm:flex space-x-2">
                                    <div className="flex-[1]">
                                        <ImageFormater Media={posts['content:encoded']} />
                                    </div>
                                    <div className="flex-[1]">
                                        <ContentContainer Content={ContentValue} />
                                    </div>
                                </div>

                                <div>
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
    );
}
