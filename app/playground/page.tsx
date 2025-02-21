'use client'

import { UsePostApi } from "../hooks/usePostApi";

import ProjectHeader from "../components/Projects/ProjectContainer/ProjectHeader";
import FilterContainer from "../components/Projects/Filter/FilterContainer";
import ProjectPosts from "../components/Projects/ProjectContainer/ProjectPosts";
import PlayGroundCointainer from "../components/PlayGround/PlayGroundCointainer";
import { MediumPlayGroundUserName } from "@/utils/atom";
import { useAtom } from "jotai";



export default function ProjectsContainer() {


  const [UserName] = useAtom(MediumPlayGroundUserName)
  const { data: posts } = UsePostApi(UserName);


  return (
    <>
      <div
        className="pt-12 pb-12"
      >
        <div className="container mx-auto space-y-12">
          <div className="space-y-4 animate-fade-in w-full">
            <PlayGroundCointainer></PlayGroundCointainer>
            <ProjectHeader />
            <FilterContainer Posts={posts} />
          </div>
          <ProjectPosts Posts={posts} />
        </div>
      </div>
    </>
  );
};
