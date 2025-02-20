
import type { NextRequest } from 'next/server';
import GetMediumFeed from './MediumFeed';

// Função para obter o cookie 'medium_links' do objeto request
export function GetMediumPostIndex(request: NextRequest) {
    // Verifique se o request.cookies está disponível
    if (request.cookies) {
        const mediumData = request.cookies.get('medium_links');
        return mediumData; // Retorna os dados do cookie, se presentes
    }
    return null; // Se não houver cookies, retorna null
}
''