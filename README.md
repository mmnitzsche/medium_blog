# Blog com Dados do Medium

Este projeto é um blog construído com **React** e **Next.js**, que obtém automaticamente os artigos publicados no Medium via **RSS/XML**. Isso permite hospedar seus artigos em um blog próprio sem precisar de um servidor dedicado.

## 🚀 Tecnologias Utilizadas

- **React** – Para a construção da interface
- **Next.js** – Para renderização e otimização do conteúdo
- **RSS/XML** – Para obter os artigos do Medium
- **Axios** – Para fazer requisições HTTP
- **Prisma** – ORM


## 📌 Funcionalidades

- Busca automática de artigos do Medium através do feed RSS
- Renderização otimizada com Next.js
- Blog totalmente estático, sem necessidade de backend próprio
- Facilidade de personalização e hospedagem
- Playground para testar como um perfil do medium funcionaria no vlog


## 🛠 Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado (recomendado v18 ou superior)
- Gerenciador de pacotes `npm` ou `yarn`

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/mmnitzsche/blog.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## 📂 Estrutura do Projeto
```
📂 seu-repositorio
├── 📁 app   #  define rotas usando React Server Components
├── 📁 lib       # Arquivos estáticos
├── 📁 data       # Dados em formato Json para ser usado no na descrição do usuário
│   ├── 📄 blogData.ts #Dados relacionados a carreira
│   ├── 📄 educationDate.ts  # Dados relacionados a cursos e graduações
│   └── 📄 highLightsTecnologies.ts #Dados tecnologias que você quer destacar
├── 📁 public       # arquivos públicos
├── 📁 utils       # funções
├── 📄 package.json # Configuração do projeto
└── 📄 README.md    # Documentação do projeto
```

## 🔗 Deploy
O projeto pode ser facilmente hospedado em plataformas como **Vercel** ou **Netlify**. Para fazer o deploy na Vercel:
```bash
npm install -g vercel
vercel
```



