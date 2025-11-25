
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Palette, ArrowRight, LayoutGrid, Maximize } from 'lucide-react';

const SlideCSS: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full items-center justify-between gap-8 lg:gap-16 px-4 lg:px-12 w-full relative">
        
        {/* Floating Background Decorations */}
        <div className="absolute top-20 right-10 text-white/5 font-mono text-6xl font-bold rotate-12 pointer-events-none">#grid</div>
        <div className="absolute bottom-20 left-10 text-white/5 font-mono text-8xl font-bold -rotate-12 pointer-events-none">CSS</div>

        {/* Left: Interactive Cards Glossary */}
        <div className="flex-1 space-y-8 z-10 animate-fade-in-up">
            <div>
                <h2 className="text-4xl lg:text-5xl font-bold drop-shadow-neon-white leading-tight mb-4">
                    Organizando com <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CSS Grid</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Vamos desenhar o mapa do nosso site. Definimos áreas nomeadas para encaixar cada peça do HTML.
                </p>
            </div>

            <div className="space-y-4">
                {/* Rule Card 1 */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all cursor-pointer hover:translate-x-2">
                    <div className="h-12 w-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        <LayoutGrid className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">display: grid</h4>
                        <p className="text-sm text-gray-400">Ativa o sistema de grade bidimensional super poderoso.</p>
                    </div>
                     <ArrowRight className="ml-auto text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Rule Card 2 */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all cursor-pointer hover:translate-x-2">
                    <div className="h-12 w-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <Maximize className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors">grid-template-areas</h4>
                        <p className="text-sm text-gray-400">Desenha o layout visualmente usando nomes.</p>
                    </div>
                     <ArrowRight className="ml-auto text-white/20 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </div>
            </div>
        </div>

        {/* Right: Code Editor View */}
        <div className="flex-1 w-full max-w-xl z-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                
                <div className="relative rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 shadow-2xl">
                    {/* Editor Header */}
                    <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-black/50">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-[#1e1e1e] px-3 py-1 rounded-md border border-white/5">
                            <Palette className="w-3 h-3" />
                            <span>style.css</span>
                        </div>
                        <div className="w-10"></div>
                    </div>

                    {/* Editor Content */}
                    <GlassCard className="rounded-t-none bg-[#0d0d0d] p-6 font-mono text-sm md:text-base border-t-0 shadow-inner h-[420px] overflow-hidden">
                        <div className="flex h-full">
                             {/* Line Numbers */}
                            <div className="text-gray-600 pr-4 border-r border-gray-800 select-none text-right font-mono">
                                {Array.from({length: 13}, (_, i) => i + 1).map(num => (
                                    <div key={num} className="leading-relaxed">{num}</div>
                                ))}
                            </div>
                            
                            {/* Code */}
                            {/* CSS Code Block */}
<pre className="text-gray-300 leading-relaxed pl-4 font-mono text-sm w-full overflow-hidden">
  <code>
    <span className="text-gray-500 italic">/* Configuração da Grade */</span>
    {"\n"}
    <span className="text-green-400">.grid-layout</span> {"{"}
    {"\n"}
    {"  "}<span className="text-blue-300">display</span>: <span className="text-orange-300">grid</span>; <span className="text-blue-300">gap</span>: <span className="text-green-300">16px</span>; <span className="text-blue-300">height</span>: <span className="text-green-300">100vh</span>;
    {"\n\n"}
    {"  "}<span className="text-blue-300">grid-template-areas</span>:
    {"\n"}
    {"    "}<span className="text-yellow-300">"header header header"</span>
    {"\n"}
    {"    "}<span className="text-yellow-300">"nav    main   aside "</span>;
    {"\n\n"}
    {"  "}<span className="text-blue-300">grid-template-columns</span>: <span className="text-green-300">200px 1fr 250px</span>;
    {"\n"}
    {"}"}
    {"\n\n"}
    <span className="text-green-400">.top-bar</span> {"{"} <span className="text-blue-300">grid-area</span>: <span className="text-orange-300">header</span>; <span className="text-blue-300">bg</span>: <span className="text-orange-300">#1a1a1a</span>; {"}"}
    {"\n"}
    <span className="text-green-400">.content</span> {"{"} <span className="text-blue-300">grid-area</span>: <span className="text-orange-300">main</span>; {"}"}
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

export default SlideCSS;
