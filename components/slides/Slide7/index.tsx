
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Code2, ArrowRight, Tag } from 'lucide-react';

const Slide7: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full items-center justify-between gap-8 lg:gap-16 px-4 lg:px-12 w-full relative">
        
        {/* Floating Background Decorations */}
        <div className="absolute top-20 left-10 text-white/5 font-mono text-6xl font-bold -rotate-12 pointer-events-none">&lt;/&gt;</div>
        <div className="absolute bottom-20 right-10 text-white/5 font-mono text-8xl font-bold rotate-12 pointer-events-none">HTML</div>

        {/* Left: Interactive Cards Glossary */}
        <div className="flex-1 space-y-8 z-10 animate-fade-in-up">
            <div>
                <h2 className="text-4xl lg:text-5xl font-bold drop-shadow-neon-white leading-tight mb-4">
                    Traduzindo para <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Código Real</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Para cada bloco visual, usamos uma <strong>Tag HTML</strong> específica. <br/>É como etiquetar caixas em uma mudança.
                </p>
            </div>

            <div className="space-y-4">
                {/* Tag Card 1 */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all cursor-pointer hover:translate-x-2">
                    <div className="h-12 w-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono font-bold group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        &lt;h&gt;
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors">&lt;header&gt;</h4>
                        <p className="text-sm text-gray-400">O topo da página. Logos e menus moram aqui.</p>
                    </div>
                    <ArrowRight className="ml-auto text-white/20 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Tag Card 2 */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all cursor-pointer hover:translate-x-2">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        &lt;m&gt;
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors">&lt;main&gt;</h4>
                        <p className="text-sm text-gray-400">O palco principal. Onde o conteúdo importante aparece.</p>
                    </div>
                     <ArrowRight className="ml-auto text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Tag Card 3 */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-gray-500/10 hover:border-gray-500/50 transition-all cursor-pointer hover:translate-x-2">
                    <div className="h-12 w-12 rounded-xl bg-gray-500/20 border border-gray-500/30 flex items-center justify-center text-gray-400 font-mono font-bold group-hover:bg-gray-500 group-hover:text-white transition-colors">
                        &lt;f&gt;
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-gray-300 transition-colors">&lt;footer&gt;</h4>
                        <p className="text-sm text-gray-400">O rodapé. Créditos e contatos ficam aqui embaixo.</p>
                    </div>
                     <ArrowRight className="ml-auto text-white/20 group-hover:text-gray-400 group-hover:translate-x-1 transition-all" />
                </div>
            </div>
        </div>

        {/* Right: Code Editor View */}
        <div className="flex-1 w-full max-w-xl z-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                
                <div className="relative rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 shadow-2xl">
                    {/* Editor Header */}
                    <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-black/50">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-[#1e1e1e] px-3 py-1 rounded-md border border-white/5">
                            <Code2 className="w-3 h-3" />
                            <span>index.html</span>
                        </div>
                        <div className="w-10"></div>
                    </div>

                    {/* Editor Content */}
                    <GlassCard className="rounded-t-none bg-[#0d0d0d] p-6 font-mono text-sm md:text-base overflow-x-auto border-t-0 shadow-inner">
                        <div className="flex">
                             {/* Line Numbers */}
                            <div className="text-gray-600 pr-4 border-r border-gray-800 select-none text-right">
                                {Array.from({length: 18}, (_, i) => i + 1).map(num => (
                                    <div key={num} className="leading-relaxed">{num}</div>
                                ))}
                            </div>
                            
                            {/* Code */}
                            <pre className="text-gray-300 leading-relaxed pl-4">
{`<!DOCTYPE html>
<html>
`}
  <span className="text-gray-600 italic">{'<!-- Configurações invisíveis -->'}</span>
{`
  <head>
    <title>Meu Site</title>
  </head>

`}
  <span className="text-gray-600 italic">{'<!-- Conteúdo visível -->'}</span>
{`
  <body>
    `}
    <span className="text-purple-400 font-bold">&lt;header&gt;</span>{`
      `}
      <span className="text-orange-300">&lt;h1&gt;</span><span className="text-white">Olá Mundo</span><span className="text-orange-300">&lt;/h1&gt;</span>{`
    `}
    <span className="text-purple-400 font-bold">&lt;/header&gt;</span>{`

    `}
    <span className="text-blue-400 font-bold">&lt;main&gt;</span>{`
      `}
      <span className="text-orange-300">&lt;p&gt;</span><span className="text-white">Meu primeiro texto.</span><span className="text-orange-300">&lt;/p&gt;</span>{`
      `}
      <span className="text-orange-300">&lt;img</span> <span className="text-cyan-300">src</span>=<span className="text-green-300">"foto.jpg"</span> <span className="text-orange-300">/&gt;</span>{`
    `}
    <span className="text-blue-400 font-bold">&lt;/main&gt;</span>{`

    `}
    <span className="text-gray-400 font-bold">&lt;footer&gt;</span>{`
      `}
      <span className="text-orange-300">&lt;small&gt;</span><span className="text-white">© 2024</span><span className="text-orange-300">&lt;/small&gt;</span>{`
    `}
    <span className="text-gray-400 font-bold">&lt;/footer&gt;</span>{`
  </body>
</html>`}
                            </pre>
                        </div>
                    </GlassCard>
                </div>
             </div>
        </div>
    </div>
  );
};

export default Slide7;
