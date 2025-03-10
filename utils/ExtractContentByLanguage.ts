import { textCheckPoint } from "@/data/BlogGeneralStaticData";


export const extractContentByLanguage = (
    content?: string,
    language?: string
): string => {


    const languageIndex = content.indexOf(textCheckPoint);


    if (languageIndex === -1) return content

    if (language === 'pt') {
        // Extrai o conteúdo após "Português::"
        return languageIndex !== -1 ? content.slice(languageIndex + textCheckPoint.length).trim() : '';
    } else if (language === 'en') {
        // Extrai o conteúdo antes de "Português::"
        return languageIndex !== -1 ? content.slice(0, languageIndex).trim() : content;
    }

    return ''; // Caso o idioma não seja "pt" ou "en"
};