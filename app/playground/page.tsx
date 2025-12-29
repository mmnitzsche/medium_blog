'use client'

import { UsePostApi } from "../hooks/usePostApi";

import ProjectHeader from "../components/Projects/ProjectContainer/ProjectHeader";
import FilterContainer from "../components/Projects/Filter/FilterContainer";
import ProjectPosts from "../components/Projects/ProjectContainer/ProjectPosts";
import PlayGroundCointainer from "../components/PlayGround/PlayGroundCointainer";
import { MediumPlayGroundUserName } from "@/utils/atom";
import { useAtom } from "jotai";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function PlaygroundContent() {
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
  );
}

export default function PlaygroundPage() {
  return (
    <div className="pt-16 pb-24 bg-white min-h-screen">
      <Suspense fallback={
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="animate-pulse space-y-8">
            <div className="h-10 bg-zinc-100 rounded w-1/3"></div>
            <div className="h-64 bg-zinc-50 rounded-2xl"></div>
          </div>
        </div>
      }>
        <PlaygroundContent />
      </Suspense>
    </div>
  );
}
