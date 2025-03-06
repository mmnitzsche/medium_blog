export const extractAllGifs = (content?: string): string[] => {
    if (!content) return [];
    const regex = /<img[^>]+src=["']([^"']+\.gif)["'][^>]*>/gi;
    const matches = [...content.matchAll(regex)];
    return matches.map(match => match[1]); // Retorna um array com todos os GIFs encontrados
};
