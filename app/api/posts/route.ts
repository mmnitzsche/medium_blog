import Parser from 'rss-parser';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        // Extrai o parâmetro de consulta "username" da URL
        const url = new URL(request.url);
        const username = url.searchParams.get('username');

        // Verifica se o username foi fornecido
        if (!username) {
            return NextResponse.json(
                { message: "O parâmetro 'username' é obrigatório" },
                { status: 400 }
            );
        }

        const parser = new Parser();
        const response = await fetch(`https://medium.com/feed/@${username}`);
        const text = await response.text();
        const feed = await parser.parseString(text);

        return NextResponse.json(feed);
    } catch (err) {
        return NextResponse.json(
            { message: "Erro ao buscar o feed", error: err.message },
            { status: 500 }
        );
    }
}