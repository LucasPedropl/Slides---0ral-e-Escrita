
import React, { useState } from 'react';
import { ArrowLeft, Copy, Check } from 'lucide-react';

interface ReportViewProps {
  onBack: () => void;
}

const ReportView: React.FC<ReportViewProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);

  const contentText = `
ROTEIRO COMPLETO PARA APRESENTAÇÃO - SEMINÁRIO DE DESENVOLVIMENTO WEB

---

SLIDE 1: INTRODUÇÃO
Título: Processo de Desenvolvimento de Software: WebSite
Subtítulo: Um guia visual e prático.
Apresentador: Pedro Lucas Mota
Visual: Design moderno e futurista.
Objetivo: Apresentar de forma simples como a internet funciona e como sites são criados.

---

SLIDE 2: COMO FUNCIONA A INTERNET?
Analogia da Casa:
1. O Endereço (Domínio): Ex: google.com. É como o endereço no GPS para achar a casa.
2. O Terreno (Hospedagem): O servidor (computador ligado 24h) onde a casa é construída.
3. A Casa (Arquivos): HTML, CSS e imagens. É o que o visitante vê.
Visual: Mostra ícones de Globo, Servidor e Arquivos conectados.

---

SLIDE 3: FRONT-END VS BACK-END
Analogia do Restaurante:
1. Front-end (Salão): É o que o cliente vê (decoração, cardápio). No site, é HTML, CSS, JS no navegador.
2. Back-end (Cozinha): É onde o processamento ocorre (banco de dados, senhas). Ninguém vê, mas é essencial.

---

SLIDE 4: FORMAS DE CONSTRUIR
Comparativo:
1. CMS (No-Code): Ferramentas como Wordpress, Wix. É como brincar de LEGO (blocos prontos). Rápido e fácil.
2. Programação (Pro-Code): HTML, React, Next.js. É como ser um Arquiteto (constrói do zero). Poder total e performance.

---

SLIDE 5: A TRINDADE DA WEB (CORE TECHNOLOGIES)
Analogia do Corpo Humano:
1. HTML (Esqueleto): Define a estrutura (título, botão, imagem).
2. CSS (Pele & Roupas): Define o estilo (cores, beleza, layout).
3. JavaScript (Cérebro): Define o comportamento (movimento, lógica, interatividade).

---

SLIDE 6: AMBIENTE DE DESENVOLVIMENTO (IDE)
Ferramenta: VS Code.
Diferença: Não usamos bloco de notas. O IDE oferece "Syntax Highlight" (colore o código) e "Auto-Complete" (completa tags), aumentando a produtividade.

---

SLIDE 7: HTML (CÓDIGO NA PRÁTICA)
Conceito: Estrutura Semântica.
Explicação Técnica:
- Em vez de usar apenas <div> genéricas, usamos tags com significado.
- <header>: Define o topo.
- <nav>: Define a área de navegação.
- <main>: Define o conteúdo principal.
- <aside>: Define a barra lateral.
- <footer>: Define o rodapé.
Objetivo: Melhorar a leitura do código por humanos e robôs (SEO).

---

SLIDE 8: CSS (ESTILIZANDO)
Conceito: Estilizando os Blocos Semânticos.
Explicação Técnica:
- O código CSS seleciona as tags criadas no HTML (header, nav, main, aside, footer).
- Aplica cores de fundo (background-color) para diferenciar cada área.
- Usa Flexbox (.meio { display: flex; }) para colocar Nav, Main e Aside lado a lado horizontalmente.
- Define larguras (%) para dividir o espaço da tela.

---

SLIDE 9: JAVASCRIPT (VIDA EM LOOP)
Conceito: Interatividade e Lógica.
Explicação Técnica:
- O script seleciona o elemento <main> do HTML.
- Utiliza a função 'setInterval' para criar um loop infinito que roda a cada 2 segundos.
- Lógica (IF/ELSE): Verifica se o texto é "MAIN". Se for, muda para "ONLINE ✅" e altera a cor para verde escuro. Se não, volta ao estado original.
- Isso simula um sistema "vivo" reagindo em tempo real.

---

SLIDE 10: OVERVIEW DO CÓDIGO
Visual: Mostra os três códigos (HTML, CSS, JS) lado a lado.
Objetivo: Mostrar como as três camadas se conectam para formar o resultado final. O HTML cria as caixas, o CSS as organiza e pinta, e o JS faz o conteúdo mudar sozinho.

---

SLIDE 11: RESULTADO FINAL (LIVE PREVIEW)
Visual: Um monitor de computador exibindo o resultado da execução dos códigos anteriores.
Comportamento:
- Vemos o layout com Header (Roxo), Nav (Azul), Main (Verde) e Aside (Laranja) e Footer (Cinza).
- O bloco "Main" fica piscando e mudando o texto de "MAIN" para "ONLINE", provando que o JavaScript está rodando.
- Demonstra a aplicação prática da estrutura semântica e do flexbox.

---

SLIDE 12: ANATOMIA DA PÁGINA (BLUEPRINT)
Visual: Um diagrama wireframe 3D.
Conceito: Reforça a estrutura visual:
- Header no topo.
- Nav (Lateral Esquerda), Main (Centro), Aside (Lateral Direita).
- Footer na base.
Mostra que todo site segue uma anatomia lógica.

---

SLIDE 13: RESPONSIVIDADE (MOBILE-FIRST)
Conceito: Adaptação a telas.
Visual: Um Notebook e um Celular exibindo o mesmo "Dashboard Financeiro".
Diferença Técnica:
- No Desktop: Menu lateral, Gráficos expandidos, Cards em grid horizontal.
- No Mobile: Menu vira ícone hambúrguer, Conteúdo empilhado verticalmente (Stack), Gráficos simplificados.
Regra CSS: @media (max-width: 768px) { flex-direction: column; }

---

SLIDE 14: DESIGN & UX
Conceito: Não basta funcionar, tem que encantar.
1. UI Design (Beleza): Cores, tipografia, visual atraente.
2. UX Design (Facilidade): Navegação intuitiva, lógica de uso.

---

SLIDE 15: SEO (GOOGLE)
Conceito: Ser encontrado.
Estratégia:
1. Palavras-chave: Usar termos que as pessoas buscam.
2. Velocidade: Sites rápidos ranqueiam melhor.
3. Semântica: O código correto (Slide 7) ajuda o Google a ler o site.

---

SLIDE 16: DEPLOY (LANÇAMENTO)
Conceito: Localhost vs Nuvem.
Analogia: O código no PC é um foguete na garagem. O Deploy é o lançamento para o espaço (Internet) onde todos podem ver através de um domínio.

---

SLIDE 17: RESUMO
Recapitulação dos pontos chave.

---

SLIDE 18: ENCERRAMENTO
Obrigado e contato.
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(contentText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0118] text-white p-8 lg:p-16 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sticky top-0 bg-[#0a0118]/90 backdrop-blur-xl py-4 z-50 border-b border-white/10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar aos Slides
          </button>

          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400 hidden sm:block">
            Roteiro para IA
          </h1>

          <button 
            onClick={handleCopy}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all ${copied ? 'bg-green-500 text-black' : 'bg-purple-600 hover:bg-purple-500 text-white'}`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copiado!' : 'Copiar Texto'}
          </button>
        </div>

        {/* Text Content Area */}
        <div className="bg-[#1a0b2e] border border-white/10 rounded-2xl p-8 shadow-2xl">
          <p className="text-gray-400 mb-6 text-sm">
            Copie este conteúdo e envie para uma IA (ChatGPT, Claude, Gemini) com o prompt: 
            <br/>
            <em className="text-purple-300">"Crie um roteiro de fala para uma apresentação de 20 minutos com base nestes slides e descrições técnicas."</em>
          </p>
          
          <div className="font-mono text-sm leading-relaxed text-gray-300 whitespace-pre-wrap bg-[#0f041e] p-6 rounded-xl border border-white/5 selection:bg-purple-500/30">
            {contentText}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReportView;
