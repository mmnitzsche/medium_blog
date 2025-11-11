'use client'
import React from 'react';
import Hero from './components/Hero';
import ProjectsContainer from './components/Projects/ProjectContainer/ProjectsContainer';

export default function Page() {
  return (
    <>
      {/* Widescreen */}
      <div className="hidden sm:flex w-full h-screen overflow-hidden no-scrollbar">
        {/* Coluna esquerda — Hero com scroll oculto, ativo apenas no hover */}
        <div
          className="w-fit h-full overflow-hidden "
          onWheel={(e) => {
            const target = e.currentTarget;
            if (target.matches(':hover')) {
              e.preventDefault();
              target.scrollTop += e.deltaY;
            }
          }}
        >
          <div className="h-full overflow-y-auto no-scrollbar">
            <Hero />
          </div>
        </div>

        {/* Coluna direita — ProjectsContainer com scroll próprio, ativo apenas no hover */}
        <div
          className="w-2/3 -full overflow-hidden p-4 "
          onWheel={(e) => {
            const target = e.currentTarget;
            if (target.matches(':hover')) {
              e.preventDefault();
              target.scrollTop += e.deltaY;
            }
          }}
        >
          <div className="h-full overflow-y-auto no-scrollbar">
            <ProjectsContainer />
          </div>
        </div>
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
