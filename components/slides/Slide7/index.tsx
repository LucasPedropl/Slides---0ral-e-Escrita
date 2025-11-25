
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Code2, ArrowRight, LayoutTemplate } from 'lucide-react';

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
                    Estruturando o <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Layout (Dashboard)</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Vamos construir um <strong>Painel de Controle</strong> completo. <br/>
                    Usaremos tags semânticas para organizar a informação.
                </p>
            </div>

            <div className="space-y-4">
                {/* Tag Card 1 */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-orange-500/10 hover:border-orange-500/50 transition-all cursor-pointer hover:translate-x-2">
                    <div className="h-12 w-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-mono font-bold group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        grid
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-orange-300 transition-colors">&lt;div class="grid"&gt;</h4>
                        <p className="text-sm text-gray-400">O container pai que vai segurar todas as áreas.</p>
                    </div>
                    <ArrowRight className="ml-auto text-white/20 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Tag Card 2 */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all cursor-pointer hover:translate-x-2">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        main
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors">&lt;main&gt; & &lt;aside&gt;</h4>
                        <p className="text-sm text-gray-400">Áreas para conteúdo principal e barra lateral.</p>
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
                    <GlassCard className="rounded-t-none bg-[#0d0d0d] p-6 font-mono text-sm md:text-base overflow-x-auto border-t-0 shadow-inner h-[420px]">
                        <div className="flex min-w-max">
                             {/* Line Numbers */}
                            <div className="text-gray-600 pr-4 border-r border-gray-800 select-none text-right">
                                {Array.from({length: 18}, (_, i) => i + 1).map(num => (
                                    <div key={num} className="leading-relaxed">{num}</div>
                                ))}
                            </div>
                            
                            {/* Code */}
                            {/* Code Block Container */}
<pre className="text-gray-300 leading-relaxed pl-4 whitespace-pre font-mono text-sm overflow-x-auto">
  <code>
    {/* Comentário Principal */}
    <span className="text-gray-500 italic">&lt;!-- Container Principal do Layout --&gt;</span>
    {"\n"}
    <span className="text-blue-400 font-bold">&lt;div</span> <span className="text-cyan-300">class</span>=<span className="text-green-300">"grid-layout"</span><span className="text-blue-400 font-bold">&gt;</span>
    {"\n"}

    {/* Header */}
    {"  "}<span className="text-gray-500 italic">&lt;!-- Topo: Logo e Pesquisa --&gt;</span>{"\n"}
    {"  "}<span className="text-blue-400 font-bold">&lt;header</span> <span className="text-cyan-300">class</span>=<span className="text-green-300">"top-bar"</span><span className="text-blue-400 font-bold">&gt;</span>{"\n"}
    {"    "}<span className="text-white">...</span>{"\n"}
    {"  "}<span className="text-blue-400 font-bold">&lt;/header&gt;</span>
    {"\n"}

    {/* Nav */}
    {"  "}<span className="text-gray-500 italic">&lt;!-- Lateral: Links de Navegação --&gt;</span>{"\n"}
    {"  "}<span className="text-blue-400 font-bold">&lt;nav</span> <span className="text-cyan-300">class</span>=<span className="text-green-300">"sidebar"</span><span className="text-blue-400 font-bold">&gt;</span>{"\n"}
    {"    "}<span className="text-white">...</span>{"\n"}
    {"  "}<span className="text-blue-400 font-bold">&lt;/nav&gt;</span>
    {"\n"}

    {/* Main */}
    {"  "}<span className="text-gray-500 italic">&lt;!-- Centro: Gráficos e Tabelas --&gt;</span>{"\n"}
    {"  "}<span className="text-blue-400 font-bold">&lt;main</span> <span className="text-cyan-300">class</span>=<span className="text-green-300">"content"</span><span className="text-blue-400 font-bold">&gt;</span>{"\n"}
    {"    "}<span className="text-white">...</span>{"\n"}
    {"  "}<span className="text-blue-400 font-bold">&lt;/main&gt;</span>
    {"\n"}

    {/* Aside */}
    {"  "}<span className="text-gray-500 italic">&lt;!-- Direita: Notificações --&gt;</span>{"\n"}
    {"  "}<span className="text-blue-400 font-bold">&lt;aside</span> <span className="text-cyan-300">class</span>=<span className="text-green-300">"updates"</span><span className="text-blue-400 font-bold">&gt;</span>{"\n"}
    {"    "}<span className="text-white">...</span>{"\n"}
    {"  "}<span className="text-blue-400 font-bold">&lt;/aside&gt;</span>
    {"\n"}

    <span className="text-blue-400 font-bold">&lt;/div&gt;</span>
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
