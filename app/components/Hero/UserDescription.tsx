import React from 'react';

interface Props {
  HeroDescription?: string;
}

export default function HeroDescription(props: Props) {
  const text =
    "Sou analista de dados com experiência em Python, JavaScript, especializado em mapeamento de processos e automação. Com visão macro de negócios, integro soluções eficazes para resolver pendências. Domino Power BI, Power Apps, M Language e APIs, extraindo insights claros e acionáveis. Minha expertise em Python permite criar soluções escaláveis, otimizando processos e decisões.";

  // Lista de tecnologias a serem destacadas
  const technologies = ["Python", "Power BI", "Power Apps", "M Language", "JavaScript", "APIs"];
  const libs = ["Power BI", "Next.js", "Pandas", "Playwright/Selenium"];

  // Função para destacar tecnologias em negrito
  const highlightTechnologies = (text: string, technologies: string[]) => {
    let highlightedText = text;

    technologies.forEach((tech) => {
      const regex = new RegExp(`\\b${tech}\\b`, "g"); // Palavra exata
      highlightedText = highlightedText.replace(
        regex,
        `<strong>${tech}</strong>`
      );
    });

    return highlightedText;
  };

  const highlightedDescription = highlightTechnologies(text, technologies);

  interface LibProps {
    Lib?: string;
  }

  function LibComponent(props: LibProps) {
    return (
      <div
        className='p-1 '
      >
        <div
          className="p-1 px-2 bg-[#e4e3e0] text-gray-600 rounded-xl text-sm cursor-default ">
          {props.Lib}
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="text-sm break-words whitespace-normal"
        dangerouslySetInnerHTML={{ __html: highlightedDescription }}
      />
      <div className="pt-4 font-semibold ">
        Principais tecnologias:
      </div>
      <div
        className="flex space-x-3 flex-wrap space ">
        {libs.map((item, index) => (
          <LibComponent key={index} Lib={item} />
        ))}
      </div>
    </>
  );
}
