'use client'

import { UsePostApi } from "../../../hooks/usePostApi";
import PublishedContainer from "../Published/PublishedContainer";
import ImageFormater from "../MediaFormater/ImageFormater";
import ContentContainer from "../Content/ContentContainer";
import CategoryContainer from "../Category/CategoryContainer";
import PostTitleContainer from "../PostTitle/PostTitleContainer";
import ProjectHeader from "./ProjectHeader";
import FilterContainer from "../Filter/FilterContainer";
import { CategoryValue, PostIndex } from '@/utils/atom'
import { useAtom } from "jotai";
import { PostDialog } from "../../Post/PostDialog";
import { FilterLoader } from "../../Loader/FilterLoader";
import { PostsLoader } from "../../Loader/PostsLoader";


export default function ProjectPosts() {

    const [filter, setFilter] = useAtom(CategoryValue)
    const [postIndex, setpostIndex] = useAtom(PostIndex)

    const { data: postsRequest } = UsePostApi();



    if (!postsRequest) {
        return <PostsLoader />
    }

    const dateTest = new Date("2024-02-20")          // ✅ Válido


    const filteredProjects = filter
        ? postsRequest.filter((project) => project.category.includes(filter))
        : postsRequest;

    const HandleClickPost = (index: any) => {
        setpostIndex(index)
    }


    return (
        <>
            <div
                className="grid sm:grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-6 transition-all h-fit w-fit">
                {filteredProjects.map((posts: any, index: number) => (
                    <PostDialog
                        key={posts.id}
                        Posts={postsRequest}
                        Index={postIndex}
                        Component=
                        {
                            <div
                                className=" group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#f2f2f2] shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in h-fit cursor-pointer">
                                <div onClick={() => HandleClickPost(index)}>
                                    <div className="mb-3">
                                        <PostTitleContainer Title={posts.title} />
                                        <PublishedContainer PublishedDate={dateTest} />
                                    </div>
                                    <ImageFormater Media={posts.content} />
                                    <ContentContainer Content={posts.content} />
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
                ))}
            </div>
        </>
    );
};
