export function extractLinksFromContent(content) {
  // Expressão regular para capturar o conteúdo após "links::"
  const lookbehind = /(?<=links::)([\s\S]*)/;
  const lookbehindResult = content
    .match(lookbehind)[0]
    .replace(/<[^>]*>/g, "")
    .replace("[", "{")
    .replace("]", "}");

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

  // Converter a string JSON em um objeto JavaScript
  return JSON.parse(`{${jsonString}}`);
}
