function DevelopmentState() {
    const runType = process.env.NODE_ENV;

    if (runType === "development") {
        if (typeof window !== "undefined") {
            const { protocol, hostname, port } = window.location;
            const currentPort = port || "3000";
            return `${protocol}//${hostname}:${currentPort}/api`;
        } else {
            const port = process.env.PORT || "3000";
            return `http://localhost:${port}/api`;
        }
    } else {
        // Produção: Usar caminhos relativos no navegador para flexibilidade
        if (typeof window !== "undefined") {
            return "/api";
        }
        // No servidor, usar variável de ambiente se disponível
        return process.env.NEXT_PUBLIC_BASE_URL || `https://${process.env.VERCEL_URL}/api` || "https://medium-blog-orcin-nu.vercel.app/api";
    }
}

export const baseURL = DevelopmentState();

