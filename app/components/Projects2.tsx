'use client'

import { UsePostApi } from "../hooks/usePostApi";
import PublishedContainer from "./Projects/Published/PublishedContainer";
import ImageFormater from "./Projects/MediaFormater/ImageFormater";
import ContentContainer from "./Projects/Content/ContentContainer";
import CategoryContainer from "./Projects/Category/CategoryContainer";
import PostTitleContainer from "./Projects/PostTitle/PostTitleContainer";
import ProjectHeader from "./Projects/ProjectContainer/ProjectHeader";
import FilterContainer from "./Projects/Filter/FilterContainer";
import { CategoryValue, PostIndex } from '@/utils/atom'
import { useAtom } from "jotai";
import { PostDialog } from "./Post/PostDialog";

export default function Projects2() {
  // const [filter, setFilter] = useState<string | null>(null);
  const [filter, setFilter] = useAtom(CategoryValue)
  const [postIndex, setpostIndex] = useAtom(PostIndex)

  const { data: posts } = UsePostApi();

  if (!posts) {
    return <div>Carregando posts...</div>;
  }

  const filteredProjects = filter
    ? posts.filter((project) => project.category.includes(filter))
    : posts;

  const HandleClickPost = (index: any) => {
    setpostIndex(index)
  }


  return (
    <>
      <section className="py-20 px-6 bg-background" id="projects">
        <div className="container mx-auto space-y-12">
          <div className="space-y-4 animate-fade-in">
            <ProjectHeader />
            <FilterContainer Posts={posts} />
          </div>
          <PostDialog
            Posts={posts}
            Index={postIndex}
            Component={
              <div
                className="grid sm:grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-6 transition-all cursor-pointer">
                {filteredProjects.map((posts: any, index: number) => (
                  <div
                    onClick={() => HandleClickPost(index)}
                    key={posts.id}
                    className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#f2f2f2] shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in h-fit">
                    <div className="mb-3">
                      <PostTitleContainer Title={posts.title} />
                      <PublishedContainer PublishedDate={posts.published} />
                    </div>
                    <ImageFormater Media={posts.content} />
                    <ContentContainer Content={posts.content} />
                    <div className="flex flex-wrap gap-2">
                      {posts.category.map((category: any) => (
                        <CategoryContainer Category={category} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>}
          ></PostDialog>
        </div>
      </section>

    </>
  );
};
