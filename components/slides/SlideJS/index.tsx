
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Zap, ArrowRight, Repeat } from 'lucide-react';

const SlideJS: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full items-center justify-between gap-8 lg:gap-16 px-4 lg:px-12 w-full relative">
        
        {/* Floating Background Decorations */}
        <div className="absolute top-20 left-20 text-white/5 font-mono text-6xl font-bold -rotate-6 pointer-events-none">while(true)</div>
        <div className="absolute bottom-20 right-20 text-white/5 font-mono text-8xl font-bold rotate-6 pointer-events-none">{'{}'}</div>

        {/* Left: Interactive Cards Glossary */}
        <div className="flex-1 space-y-8 z-10 animate-fade-in-up">
            <div>
                <h2 className="text-4xl lg:text-5xl font-bold drop-shadow-neon-white leading-tight mb-4">
                    Vida em <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Loop (JS)</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Com JavaScript, podemos criar ciclos. <br/>
                    Aqui, vamos fazer o bloco <strong>piscar</strong> e mudar de status infinitamente.
                </p>
            </div>

            <div className="space-y-4">
                {/* Concept Card 1 */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all cursor-pointer hover:translate-x-2">
                    <div className="h-12 w-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 font-mono font-bold group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                        <Repeat className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-yellow-300 transition-colors">setInterval</h4>
                        <p className="text-sm text-gray-400">Executa um bloco de código repetidamente em um intervalo de tempo.</p>
                    </div>
                    <ArrowRight className="ml-auto text-white/20 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Concept Card 2 */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-green-500/10 hover:border-green-500/50 transition-all cursor-pointer hover:translate-x-2">
                    <div className="h-12 w-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        if
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-green-300 transition-colors">if / else</h4>
                        <p className="text-sm text-gray-400">Toma decisões: "Se estiver verde, fique vermelho. Senão, fique verde".</p>
                    </div>
                     <ArrowRight className="ml-auto text-white/20 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                </div>
            </div>
        </div>

        {/* Right: Code Editor View */}
        <div className="flex-1 w-full max-w-xl z-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                
                <div className="relative rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 shadow-2xl">
                    {/* Editor Header */}
                    <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-black/50">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-[#1e1e1e] px-3 py-1 rounded-md border border-white/5">
                            <Zap className="w-3 h-3 text-yellow-500" />
                            <span>script.js</span>
                        </div>
                        <div className="w-10"></div>
                    </div>

                    {/* Editor Content */}
                    <GlassCard className="rounded-t-none bg-[#0d0d0d] p-6 font-mono text-sm md:text-base overflow-x-auto border-t-0 shadow-inner h-[380px]">
                        <div className="flex min-w-max h-full">
                             {/* Line Numbers */}
                            <div className="text-gray-600 pr-4 border-r border-gray-800 select-none text-right">
                                {Array.from({length: 12}, (_, i) => i + 1).map(num => (
                                    <div key={num} className="leading-relaxed">{num}</div>
                                ))}
                            </div>
                            
                            {/* Code */}
<pre className="text-gray-300 leading-relaxed pl-4 whitespace-pre font-mono text-sm overflow-x-auto">
  <code>
    <span className="text-blue-400">let</span> <span className="text-blue-300">bloco</span> = <span className="text-green-300">document</span>.<span className="text-yellow-300">querySelector</span>(<span className="text-orange-300">'main'</span>);
    {"\n\n"}

    <span className="text-yellow-300">setInterval</span>(() <span className="text-blue-400">=&gt;</span> {"{"}
    {"\n\n"}
    {"  "}<span className="text-gray-500 italic">// Verifica o texto atual</span>
    {"\n"}
    {"  "}<span className="text-purple-400">if</span> (<span className="text-blue-300">bloco</span>.<span className="text-blue-300">innerText</span> === <span className="text-orange-300">"MAIN"</span>) {"{"}
    {"\n"}
    {"    "}<span className="text-blue-300">bloco</span>.<span className="text-blue-300">innerText</span> = <span className="text-orange-300">"SISTEMA ONLINE ✅"</span>;
    {"\n"}
    {"    "}<span className="text-blue-300">bloco</span>.<span className="text-blue-300">style</span>.<span className="text-blue-300">background</span> = <span className="text-orange-300">"#059669"</span>;
    {"\n"}
    {"  "}<span className="text-purple-400">{"}"} else {"{"}</span>
    {"\n"}
    {"    "}<span className="text-gray-500 italic">// Volta ao original</span>
    {"\n"}
    {"    "}<span className="text-blue-300">bloco</span>.<span className="text-blue-300">innerText</span> = <span className="text-orange-300">"MAIN"</span>;
    {"\n"}
    {"    "}<span className="text-blue-300">bloco</span>.<span className="text-blue-300">style</span>.<span className="text-blue-300">background</span> = <span className="text-orange-300">"green"</span>;
    {"\n"}
    {"  "}<span className="text-purple-400">{"}"}</span>

    {"}"}, <span className="text-green-300">2000</span>);
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

export default SlideJS;
