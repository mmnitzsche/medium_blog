export const extractAllLinks = (content?: string) => {
    if (!content) return null; // Retorna null se content for undefined ou null
    const regex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    const matches = Array.from(content.matchAll(regex), match => match[1]); // Converte o iterador em array e mapeia os links
    return matches.length > 0 ? matches : null; // Retorna a lista de links ou null se não houver nenhum
};

export const getFaviconUrls = (links: string[]) => {
    if (!links || links.length === 0) return null; // Retorna null se a lista estiver vazia

    const urls = links.map(link => {
        try {
            const url = new URL(link);
            return `${url.origin}/favicon.ico`; // Mantém apenas a origem e adiciona "favicon.ico"
        } catch (error) {
            return null; // Retorna null caso a URL seja inválida
        }
    });

    return urls.filter(Boolean); // Remove valores nulos da lista
};