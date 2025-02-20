import { projects } from "@/data/projectsData";
import { technology } from "@/data/TecnologiesData";
import { useState } from "react";
import TopicTittle from "./Hero/TopicTittle";

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const allTags = projects.map((project) => project.tags).flat();
  const uniqueTags = [...new Set(allTags)];

  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  return (
    <section className="py-20 px-6 bg-background" id="projects">
      <div className="container mx-auto space-y-12">
        <div className="space-y-4 animate-fade-in">
          <TopicTittle
            TopicName="Projetos"
          ></TopicTittle>
          <div className="flex flex-wrap gap-2">
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(filter === tag ? null : tag)}
                className={`px-2 py-2 rounded-full text-md transition-all font-semibold text-slate-800 ${filter === tag
                  ? "outline outline-2 outline-primary text-primary-foreground"
                  : "outline-none hover:outline hover:outline-2 hover:outline-gray-300"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:md:grid-cols-3 gap-6 transition-all">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#f2f2f2] shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in "
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="transition-all px-3 py-1 text-xs text-white rounded-full bg-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
