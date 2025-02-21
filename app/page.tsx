'use client'
import React from 'react';
import Hero from './components/Hero';
import ProjectsContainer from './components/Projects/ProjectContainer/ProjectsContainer';

export default function Page() {
  return (
    <>
      {/* Widescreen */}
      <div className="hidden sm:flex">
        <div className="p-4 w-full">
          <ProjectsContainer />
        </div>
        <Hero />
      </div>

      {/* Mobile */}
      <div className="block sm:hidden">
        <div className="p-4 w-full">
          <ProjectsContainer />
        </div>
        <div className="flex items-center justify-center w-full">
          <Hero />
        </div>
      </div>
    </>
  );
}
