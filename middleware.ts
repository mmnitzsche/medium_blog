import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import GetMediumFeed from './utils/MediumFeed';

// Função middleware que será chamada em cada requisição
export async function middleware(request: NextRequest) {
    console.log('from middleware'); // Log para verificar se o middleware está sendo chamado

    const MediumLinks = await GetMediumFeed(); // Certifique-se de usar await se a função for assíncrona

    const response = NextResponse.next(); // Criação da resposta para continuar a requisição
    response.cookies.set('medium_links', JSON.stringify(MediumLinks), {
        httpOnly: false,
        secure: true,
    });

    return response; // Retorna a resposta com os cookies configurados
}

// Configuração do middleware
export const config = {
    matcher: ['/'], // Aplica o middleware apenas na rota raiz ('/')
};
