import { textCheckPoint } from "@/data/BlogGeneralStaticData";

export const extractContentByLanguage = (
    content?: string,
    language?: string
): string => {
    // Verifica se o conteúdo é uma string válida
    if (!content || typeof content !== 'string') {
        return ''; // Retorna uma string vazia se o conteúdo for inválido
    }

    const languageIndex = content.indexOf(textCheckPoint);

    // Se o ponto de verificação não for encontrado, retorna o conteúdo completo
    if (languageIndex === -1) return content;

    // Extrai o conteúdo com base no idioma selecionado
    if (language === 'pt') {
        // Extrai o conteúdo após "Português::"
        return content.slice(languageIndex + textCheckPoint.length).trim();
    } else if (language === 'en') {
        // Extrai o conteúdo antes de "Português::"
        return content.slice(0, languageIndex).trim();
    }

    return ''; // Caso o idioma não seja "pt" ou "en"
};