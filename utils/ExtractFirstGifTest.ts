export const extractAllGifs = (content?: string): string[] => {
    if (!content) return [];
    const regex = /<img[^>]+src=["']([^"']+\.gif)["'][^>]*>/gi;
    const matches: string[] = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        matches.push(match[1]);
    }
    return matches; // Retorna um array com todos os GIFs encontrados
};
