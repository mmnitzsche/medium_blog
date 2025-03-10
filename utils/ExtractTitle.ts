import { textCheckPoint } from "@/data/BlogGeneralStaticData";


export const extractFirstStrongContent = (
    rawcontet?: string,
    content?: string,
    title?: string,
    language?: string
): string => {
    // Verifica se o idioma é "en" e retorna o título diretamente
    if (language === "en") return title || '';

    // Verifica se rawcontet e content estão definidos
    if (!rawcontet || !content) return title || '';

    // Encontra a posição do textCheckPoint no rawcontet
    const languageIndex = rawcontet.indexOf(textCheckPoint);

    // Se languageIndex for maior que 0, procura o <strong> no content
    if (languageIndex > 0) {
        const match = content.match(/<strong>(.*?)<\/strong>/);
        // Se encontrar um <strong>, retorna o valor dentro dele
        if (match) {
            return match[1]
        }
    }

    // Caso contrário, retorna o título
    return title || '';
};

