function DevelopmentState() {
    const runType = process.env.NODE_ENV;

    if (runType === "development") {
        
        if (typeof window !== "undefined") {
            
            const { protocol, hostname, port } = window.location;
            const currentPort = port || "3000"; // fallback padrão
            return `${protocol}//${hostname}:${currentPort}/api/`;
        } else {
            // Ambiente de servidor (Node/Next.js)
            const port = process.env.PORT || "3000";
            return `http://localhost:${port}/api/`;
        }
    } else {
        // Produção
        return "https://blog-mmnitzsches-projects.vercel.app/api/";
    }
}

export const baseURL = DevelopmentState();
