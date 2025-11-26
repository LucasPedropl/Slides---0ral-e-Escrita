
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Code2, ArrowRight } from 'lucide-react';

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
                    A Estrutura <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Semântica</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Em vez de usar apenas caixas genéricas, damos nomes às partes da casa. <br/>
                    Isso ajuda o Google e o navegador a entenderem o site.
                </p>
            </div>

            <div className="space-y-4">
                {/* Tag Card 1 */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-orange-500/10 hover:border-orange-500/50 transition-all cursor-pointer hover:translate-x-2">
                    <div className="h-12 w-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-mono font-bold group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        tags
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-orange-300 transition-colors">&lt;header&gt;, &lt;footer&gt;</h4>
                        <p className="text-sm text-gray-400">Definem claramente o topo e o rodapé da página.</p>
                    </div>
                    <ArrowRight className="ml-auto text-white/20 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Tag Card 2 */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all cursor-pointer hover:translate-x-2">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        body
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors">&lt;main&gt;, &lt;aside&gt;</h4>
                        <p className="text-sm text-gray-400">Conteúdo principal e barra lateral.</p>
                    </div>
                     <ArrowRight className="ml-auto text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
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
                    <GlassCard className="rounded-t-none bg-[#0d0d0d] p-6 font-mono text-sm md:text-base overflow-x-auto border-t-0 shadow-inner h-[380px]">
                        <div className="flex min-w-max h-full">
                             {/* Line Numbers */}
                            <div className="text-gray-600 pr-4 border-r border-gray-800 select-none text-right">
                                {Array.from({length: 14}, (_, i) => i + 1).map(num => (
                                    <div key={num} className="leading-relaxed">{num}</div>
                                ))}
                            </div>
                            
                            {/* Code */}
<pre>
<code>
<span className="text-blue-400 font-bold">&lt;!DOCTYPE html&gt;</span>{"\n"}
<span className="text-blue-400 font-bold">&lt;html&gt;</span>{"\n"}
{"  "}<span className="text-blue-400 font-bold">&lt;head&gt;</span>{"\n"}
{"    "}<span className="text-blue-400 font-bold">&lt;link</span> <span className="text-cyan-300">rel</span>=<span className="text-green-300">"stylesheet"</span> <span className="text-cyan-300">href</span>=<span className="text-green-300">"style.css"</span> <span className="text-blue-400 font-bold">/&gt;</span>{"\n"}
{"  "}<span className="text-blue-400 font-bold">&lt;/head&gt;</span>{"\n"}
{"  "}<span className="text-blue-400 font-bold">&lt;body&gt;</span>{"\n"}
{"    "}<span className="text-blue-400 font-bold">&lt;div</span> <span className="text-cyan-300">class</span>=<span className="text-green-300">"container"</span><span className="text-blue-400 font-bold">&gt;</span>{"\n"}
{"      "}<span className="text-blue-400 font-bold">&lt;header&gt;</span>Meu Site<span className="text-blue-400 font-bold">&lt;/header&gt;</span>{"\n"}
{"      "}<span className="text-blue-400 font-bold">&lt;main&gt;</span>Carregando...<span className="text-blue-400 font-bold">&lt;/main&gt;</span>{"\n"}
{"      "}<span className="text-blue-400 font-bold">&lt;footer&gt;</span>Copyright<span className="text-blue-400 font-bold">&lt;/footer&gt;</span>{"\n"}
{"    "}<span className="text-blue-400 font-bold">&lt;/div&gt;</span>{"\n"}
{"    "}<span className="text-blue-400 font-bold">&lt;script</span> <span className="text-cyan-300">src</span>=<span className="text-green-300">"script.js"</span><span className="text-blue-400 font-bold">&gt;&lt;/script&gt;</span>{"\n"}
{"  "}<span className="text-blue-400 font-bold">&lt;/body&gt;</span>{"\n"}
<span className="text-blue-400 font-bold">&lt;/html&gt;</span>
</code>
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
