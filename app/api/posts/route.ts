import { NextResponse } from "next/server";
import { parse } from "rss-to-json";

export async function GET() {
    try {

        const res = await parse("https://medium.com/feed/@leticia.gerola");

        if (!res.items || res.items.length === 0) {
            console.warn("Nenhum post encontrado.");
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
