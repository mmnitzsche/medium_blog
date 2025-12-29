import Parser from 'rss-parser';
import { NextResponse } from 'next/server';
import { MOCK_XML_FEED } from '@/data/MockMediumFeed';

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const username = url.searchParams.get('username');

        if (!username) {
            return NextResponse.json(
                { message: "O parâmetro 'username' é obrigatório" },
                { status: 400 }
            );
        }

        // Formata a URL do RSS do Medium
        const mediumRSSUrl = `https://medium.com/feed/@${username}`;

        // Busca o XML do RSS com headers para evitar bloqueios
        const response = await fetch(mediumRSSUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'application/rss+xml, application/xml;q=0.9, */*;q=0.8'
            },
            next: { revalidate: 3600 } // Cache por 1 hora
        });

        if (!response.ok) {
            throw new Error(`Falha ao buscar RSS: ${response.status} ${response.statusText}`);
        }

        const text = await response.text();
        const parser = new Parser();
        const feed = await parser.parseString(text);

        return NextResponse.json(feed);
        
    } catch (err: any) {
        console.error("Erro no feed RSS:", err.message);
        
        // Em caso de erro na rede ou bloqueio, retornamos o MOCK como fallback
        // para garantir que o site não quebre durante os testes
        try {
            const parser = new Parser();
            const feed = await parser.parseString(MOCK_XML_FEED);
            return NextResponse.json({
                ...feed,
                _warning: "Mostrando dados estáticos devido a erro no fetch live",
                _error: err.message
            });
        } catch (mockErr) {
            return NextResponse.json(
                { message: "Erro ao processar feed", error: err.message },
                { status: 500 }
            );
        }
    }
}