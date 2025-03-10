import { highLightsLibs, highLightsTecnologies } from '@/data/highLightsTecnologies';
import { MainTecnologies, userDescriptionText } from '@/data/BlogGeneralStaticData';
import { LanguageAtom } from '@/utils/atom';
import { useAtom } from 'jotai';
import React from 'react';



export default function HeroDescription() {

  const [SelectLang] = useAtom(LanguageAtom)
  const text =
    userDescriptionText[SelectLang]


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

  const highlightedDescription = highlightTechnologies(text, highLightsTecnologies);

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
        {MainTecnologies[SelectLang]}
      </div>
      <div
        className="flex space-x-3 flex-wrap space ">
        {highLightsLibs.map((item, index) => (
          <LibComponent key={index} Lib={item} />
        ))}
      </div>
    </>
  );
}
