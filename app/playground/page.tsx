'use client'

import { UsePostApi } from "../hooks/usePostApi";

import ProjectHeader from "../components/Projects/ProjectContainer/ProjectHeader";
import FilterContainer from "../components/Projects/Filter/FilterContainer";
import ProjectPosts from "../components/Projects/ProjectContainer/ProjectPosts";
import PlayGroundCointainer from "../components/PlayGround/PlayGroundCointainer";
import { MediumPlayGroundUserName } from "@/utils/atom";
import { useAtom } from "jotai";



import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function PlaygroundPage() {
  const [UserName, setUserName] = useAtom(MediumPlayGroundUserName);
  const searchParams = useSearchParams();
  const userParam = searchParams.get('user');

  useEffect(() => {
    if (userParam) {
      setUserName(userParam);
    }
  }, [userParam, setUserName]);

  const { data: posts } = UsePostApi(UserName);

  return (
    <div className="pt-16 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl space-y-12">
        
        

        <div className="space-y-10">
          <div className="space-y-6 animate-fade-in w-full">
            <PlayGroundCointainer />
            <div className="pt-2">
              <ProjectHeader />
            </div>
            <FilterContainer Posts={posts} />
          </div>
          <ProjectPosts Posts={posts} />
        </div>
      </div>
    </div>
  );
}
