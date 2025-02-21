import { NextResponse } from "next/server";
import { parse } from "rss-to-json";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const feedUrl = searchParams.get("feedUrl");

        if (!feedUrl) {
            return NextResponse.json({ message: "URL do feed não fornecida." }, { status: 400 });
        }

        const res = await parse(feedUrl);

        if (!res.items || res.items.length === 0) {
            return NextResponse.json({ message: "Nenhum post encontrado." }, { status: 404 });
        }

        return NextResponse.json(res.items);
    } catch (err: any) {
        console.error("Erro ao buscar posts do Medium:", err);
        return NextResponse.json(
            { message: err.message || "Erro ao processar a requisição" },
            { status: 500 }
        );
    }
}
