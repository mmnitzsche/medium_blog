export const extractAllLinks = (content?: string) => {
    if (!content) return null; // Retorna null se content for undefined ou null
    const regex = /<img[^>]+src=["']([^"'])["'][^>]*>/i;
    const match = content.match(regex);
    return match ? match : null; // Retorna o primeiro GIF ou null caso não encontre
};
