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
import ProjectPosts from "./ProjectPosts";




export default function ProjectsContainer() {
  const { data: posts } = UsePostApi();
  

  return (
    <>
      <section className="py-20 px-6 bg-background" id="projects">
        <div className="container mx-auto space-y-12">
          <div className="space-y-4 animate-fade-in w-full">
            <ProjectHeader />
            <FilterContainer Posts={posts} />
          </div>
          <ProjectPosts />
        </div>
      </section>

    </>
  );
};
