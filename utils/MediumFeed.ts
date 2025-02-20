import { parse } from 'rss-to-json';

export default async function GetMediumFeed() {
    try {
        const res = await parse('https://medium.com/feed/@mateusnit');
        const resJson = res.items;

        // Verifica se existem itens no feed
        if (!resJson || resJson.length === 0) {
            throw new Error('Nenhum item encontrado no feed.');
        }

        // Salvando os links modificados em uma variável JSON
        const TitleJson = resJson.map(item => item.title.split("?"));
        const linksJson = resJson.map(item => item.link.split("?"));

        // Pegando os primeiros 300 caracteres do conteúdo
        const contentJson = resJson.map(item => item.content.substring(0, 110)); // Usando substring para pegar os 300 primeiros caracteres

        return contentJson;
    } catch (error) {
        console.error('Erro ao buscar o feed:', error);
        return [];  // Retorna um array vazio em caso de erro
    }
}
