import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Code2 } from 'lucide-react';

const Slide7_HtmlCode: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full items-center justify-between gap-8 lg:gap-16 px-4 lg:px-12">
        
        {/* Left: Explanation */}
        <div className="flex-1 space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold drop-shadow-neon-white leading-tight">
                Traduzindo para <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Código HTML</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
                Para cada "caixa" que desenhamos no slide anterior, existe uma etiqueta (Tag) específica no HTML.
            </p>
            <ul className="space-y-4">
                <li className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/10">
                    <span className="font-mono text-purple-400 font-bold text-lg">&lt;header&gt;</span>
                    <span className="text-gray-300">Onde fica o logo e o título.</span>
                </li>
                <li className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/10">
                    <span className="font-mono text-blue-400 font-bold text-lg">&lt;main&gt;</span>
                    <span className="text-gray-300">O conteúdo principal e notícias.</span>
                </li>
                <li className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/10">
                    <span className="font-mono text-gray-400 font-bold text-lg">&lt;footer&gt;</span>
                    <span className="text-gray-300">Contatos e direitos autorais.</span>
                </li>
            </ul>
        </div>

        {/* Right: Code Editor View */}
        <div className="flex-1 w-full max-w-xl">
             <div className="rounded-t-xl bg-[#1e1e1e] border-b border-white/10 p-3 flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs text-gray-400 font-mono">index.html</span>
             </div>
             <GlassCard className="rounded-t-none bg-[#0d0d0d] p-6 font-mono text-sm md:text-base overflow-x-auto shadow-2xl border-t-0">
                <pre className="text-gray-300 leading-relaxed">
{`<!DOCTYPE html>
<html>
  `}
  <span className="text-gray-500">{'<!-- Cabeça do site (Configurações) -->'}</span>
  {`
  <head>
    <title>Meu Primeiro Site</title>
  </head>

  `}
  <span className="text-gray-500">{'<!-- Corpo do site (O que vemos) -->'}</span>
  {`
  <body>
    `}
    <span className="text-purple-400">&lt;header&gt;</span>{`
      `}
      <span className="text-orange-300">&lt;h1&gt;</span><span className="text-white">Bem-vindo</span><span className="text-orange-300">&lt;/h1&gt;</span>{`
    `}
    <span className="text-purple-400">&lt;/header&gt;</span>{`

    `}
    <span className="text-blue-400">&lt;main&gt;</span>{`
      `}
      <span className="text-orange-300">&lt;p&gt;</span><span className="text-white">Este é meu conteúdo...</span><span className="text-orange-300">&lt;/p&gt;</span>{`
    `}
    <span className="text-blue-400">&lt;/main&gt;</span>{`

    `}
    <span className="text-gray-400">&lt;footer&gt;</span>{`
      `}
      <span className="text-orange-300">&lt;p&gt;</span><span className="text-white">Feito por Pedro</span><span className="text-orange-300">&lt;/p&gt;</span>{`
    `}
    <span className="text-gray-400">&lt;/footer&gt;</span>{`
  </body>
</html>`}
                </pre>
             </GlassCard>
        </div>
    </div>
  );
};

export default Slide7_HtmlCode;