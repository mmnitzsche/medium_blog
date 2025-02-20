export const extractFirstGif = (content?: string) => {
    if (!content) return null; // Retorna null se content for undefined ou null
    const regex = /<img[^>]+src=["']([^"']+.gif)["'][^>]*>/i;
    const match = content.match(regex);
    return match ? match[1] : null; // Retorna o primeiro GIF ou null caso não encontre
};
