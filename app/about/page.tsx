'use client';
import React, { useState } from 'react';

// ----------- TF-IDF simples para RAG local -----------
function tokenize(text) {
  return text.toLowerCase().split(/\W+/).filter(Boolean);
}

function buildTfIdf(docs) {
  const df = {};
  const tfidf = [];

  docs.forEach((doc, i) => {
    const tokens = tokenize(doc);
    const tf = {};
    tokens.forEach(t => (tf[t] = (tf[t] || 0) + 1));

    tfidf.push({ tf, doc });

    const unique = new Set(tokens);
    unique.forEach(t => (df[t] = (df[t] || 0) + 1));
  });

  return { df, tfidf, totalDocs: docs.length };
}

function vectorize(tokens, model) {
  const vec = {};
  const N = model.totalDocs;

  tokens.forEach(t => {
    const idf = Math.log((N + 1) / ((model.df[t] || 0) + 1));
    vec[t] = idf;
  });

  return vec;
}

function cosineSim(a, b) {
  let dot = 0;
  let na = 0;
  let nb = 0;

  const allKeys = new Set([...Object.keys(a), ...Object.keys(b)]);
  allKeys.forEach(k => {
    const av = a[k] || 0;
    const bv = b[k] || 0;
    dot += av * bv;
    na += av * av;
    nb += bv * bv;
  });

  return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-9);
}

// ----------- FRONT: CHAMADA AO GEMINI -----------
async function askGemini(apiKey, prompt) {
  const url =
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' +
    apiKey;

  const body = {
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.1,
      maxOutputTokens: 600,
    },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error('Erro na API: ' + res.status + ' - ' + error);
  }

  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '(sem resposta)';
}

// ----------- COMPONENTE PRINCIPAL -----------
export default function RagGemini() {
  const [apiKey, setApiKey] = useState('');
  const [input, setInput] = useState('');
  const [docs, setDocs] = useState([
`Mateus Nitzsche – Data Analyst / Analista de Dados\nRio de Janeiro, Brasil | mmnitzsche@gmail.com | +55 (21) 98230-3111 (WhatsApp) | linkedin.com/in/mateusnit/ |Portifólio| GitHub | Medium |IMDB |LeetCode |CodeWars`,
`Resumo\nAnalista de Dados com 4 anos de experiência em soluções orientadas ao negócio, com forte atuação em automação, ETL, visualização e integração de dados. Experiência em Power BI, Python, APIs, Databricks, Azure, GCP.`,
`Projetos – Integração de Sistemas: Integra dados de múltiplas plataformas via Power Query em um dashboard interativo.`,
`Projetos – Dashboard de Atendimento ao Cliente (CX): Redução de mais de 50% no tempo de acionamento do time. [Python, Power Bi, Ollama (LLM), HTML/CSS]`,
`Projetos – Gerador de blog automatico com Next.js + RSS/XML integrado ao Medium. [Next.js, Tailwind CSS, React, Vercel, Prisma, Axios]`,
`Experiência – Analista de Dados Sênior – MG Info – Data Driven | nov 2022 – ago 2025: Automação com Selenium, Databricks, Pandas, SQL em Azure/GCP, Power BI, Power Apps, Dataflows, ADF.`,
`Experiência – Analista de Dados Pleno – Antifraude – Roda Conveniência | nov 2021 – out 2022: ETL em Python, GitHub Actions, Amazon Aurora, M Lang (Power Query), Playwright, Appium.`,
`Experiência – Analista de Dados / Coordenador de Produção Sênior – Combo Studio | fev 2017 – nov 2021: Migração de planilhas para dashboards, implantação de cultura data-driven, métodos ágeis.`,
`Skills Técnicas: Python, JavaScript/TypeScript, SQL, M Language; Power BI, Matplotlib, Seaborn, Plotly, Streamlit; ETL com APIs, Github Actions; Next.js, Pandas, Playwright, Selenium; ClickUp, Jira.`,
`Educação: Graduação em Mídias, Tecnologias da Comunicação Audiovisual – Estácio (2017). Certificações relevantes (DIO, Alura, Databricks e Google).`
  ]);

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    try {
      setLoading(true);

      // ----- montar o modelo TF-IDF -----
      const model = buildTfIdf(docs);

      // ----- vetorizar a pergunta -----
      const qTokens = tokenize(input);
      const qVec = vectorize(qTokens, model);

      // ----- calcular similaridade -----
      const scored = model.tfidf
        .map((d, i) => {
          const docTokens = tokenize(d.doc);
          const docVec = vectorize(docTokens, model);
          return { doc: d.doc, score: cosineSim(qVec, docVec) };
        })
        .sort((a, b) => b.score - a.score);

      // ----- Top K -----
      const k = 3;
      const topDocs = scored.slice(0, k).map(d => d.doc);

      // ----- Montar Prompt RAG -----
      const finalPrompt = `
Use APENAS as informações abaixo para responder. Seja conciso.

CONTEXTOS:
${topDocs.map((d, i) => `(${i + 1}) ${d}`).join('\n\n')}

PERGUNTA: ${input}
      `;

      // ----- Chamar Gemini -----
      const answer = await askGemini(apiKey, finalPrompt);

      setHistory(h => [...h, { q: input, a: answer }]);
      setInput('');
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto text-white">
      <h1 className="text-2xl mb-4">RAG + Gemini Flash 2</h1>

      <input
        placeholder="API Key..."
        className="w-full p-2 mb-2 text-black"
        value={apiKey}
        onChange={e => setApiKey(e.target.value)}
      />

      <textarea
        className="w-full p-3 text-black"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Digite sua pergunta..."
      />

      <button
        onClick={sendMessage}
        disabled={loading || !apiKey}
        className="mt-2 bg-blue-600 px-4 py-2 rounded"
      >
        {loading ? 'Enviando...' : 'Enviar'}
      </button>

      <div className="mt-6 space-y-4">
        {history.map((h, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded">
            <p className="font-bold">Você:</p>
            <p>{h.q}</p>
            <p className="font-bold mt-2">IA:</p>
            <p>{h.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
