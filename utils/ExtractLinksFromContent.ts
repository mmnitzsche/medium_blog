export function extractLinksFromContent(content) {
  // Verifica se o conteúdo é uma string válida
  if (!content || typeof content !== 'string') {
    return {}; // Retorna um objeto vazio se o conteúdo for inválido
  }

  // Expressão regular para capturar o conteúdo após "links::"
  const lookbehind = /(?<=links::)([\s\S]*)/;

  // Verifica se a correspondência foi encontrada
  const matchResult = content.match(lookbehind);
  if (!matchResult) {
    return {}; // Retorna um objeto vazio se não houver correspondência
  }

  let lookbehindResult = matchResult[0]
    .replace(/<[^>]*>/g, "")
    .replace("[", "{")
    .replace("]", "}");

  // Remove o último caractere se for "}"
  if (lookbehindResult.endsWith("}")) {
    lookbehindResult = lookbehindResult.slice(0, -1);
  }

  // Transformar o conteúdo em um JSON válido
  const jsonString = lookbehindResult
    .split(",") // Dividir por vírgulas
    .map((item) => {
      // Usar regex para capturar chave e valor corretamente
      const match = item.match(/(\w+):\s*(.+)/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim();
        return `"${key}":"${value}"`; // Adicionar aspas às chaves e valores
      }
      return null;
    })
    .filter(Boolean) // Remover entradas inválidas
    .join(","); // Juntar novamente com vírgulas

  try {
    // Converter a string JSON em um objeto JavaScript
    return JSON.parse(`{${jsonString}}`);
  } catch (error) {
    console.error("Erro ao analisar JSON:", error);
    return {}; // Retorna um objeto vazio em caso de erro
  }
}