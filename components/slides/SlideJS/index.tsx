
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Zap, ArrowRight, Activity } from 'lucide-react';

const SlideJS: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full items-center justify-between gap-8 lg:gap-16 px-4 lg:px-12 w-full relative">
        
        {/* Floating Background Decorations */}
        <div className="absolute top-20 left-20 text-white/5 font-mono text-6xl font-bold -rotate-6 pointer-events-none">function</div>
        <div className="absolute bottom-20 right-20 text-white/5 font-mono text-8xl font-bold rotate-6 pointer-events-none">()</div>

        {/* Left: Interactive Cards Glossary */}
        <div className="flex-1 space-y-8 z-10 animate-fade-in-up">
            <div>
                <h2 className="text-4xl lg:text-5xl font-bold drop-shadow-neon-white leading-tight mb-4">
                    Trazendo Dados <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Reais (JavaScript)</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Vamos simular um sistema real. O JS vai verificar o status do servidor e atualizar a tela automaticamente.
                </p>
            </div>

            <div className="space-y-4">
                {/* Concept Card 1 */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all cursor-pointer hover:translate-x-2">
                    <div className="h-12 w-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 font-mono font-bold group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                        DOM
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-yellow-300 transition-colors">document.getElementById</h4>
                        <p className="text-sm text-gray-400">Encontra o elemento na tela que queremos mudar.</p>
                    </div>
                    <ArrowRight className="ml-auto text-white/20 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Concept Card 2 */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-green-500/10 hover:border-green-500/50 transition-all cursor-pointer hover:translate-x-2">
                    <div className="h-12 w-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        time
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-green-300 transition-colors">setTimeout</h4>
                        <p className="text-sm text-gray-400">Espera alguns segundos antes de executar a ação.</p>
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
                    <GlassCard className="rounded-t-none bg-[#0d0d0d] p-6 font-mono text-sm md:text-base overflow-x-auto border-t-0 shadow-inner h-[420px]">
                        <div className="flex min-w-max h-full">
                             {/* Line Numbers */}
                            <div className="text-gray-600 pr-4 border-r border-gray-800 select-none text-right">
                                {Array.from({length: 16}, (_, i) => i + 1).map(num => (
                                    <div key={num} className="leading-relaxed">{num}</div>
                                ))}
                            </div>
                            
                            {/* Code */}
                            {/* JavaScript Code Block */}
<pre className="text-gray-300 leading-relaxed pl-4 whitespace-pre font-mono text-sm overflow-x-auto">
  <code>
    <span className="text-gray-500 italic">// 1. Encontra o indicador de status na tela</span>
    {"\n"}
    <span className="text-blue-400">const</span> <span className="text-blue-300">statusIndicator</span> = <span className="text-green-300">document</span>.<span className="text-yellow-300">getElementById</span>(<span className="text-orange-300">"status"</span>);
    {"\n\n"}

    <span className="text-gray-500 italic">// 2. Define a função de atualização</span>
    {"\n"}
    <span className="text-blue-400">function</span> <span className="text-yellow-300">setOnline</span>() {"{"}
    {"\n"}
    
    {"  "}<span className="text-gray-500 italic">// Atualiza o texto</span>
    {"\n"}
    {"  "}<span className="text-blue-300">statusIndicator</span>.<span className="text-blue-300">innerText</span> = <span className="text-orange-300">"Online - 12ms"</span>;
    {"\n\n"}

    {"  "}<span className="text-gray-500 italic">// Muda a cor para verde</span>
    {"\n"}
    {"  "}<span className="text-blue-300">statusIndicator</span>.<span className="text-blue-300">style</span>.<span className="text-blue-300">color</span> = <span className="text-orange-300">"#4ade80"</span>;
    {"\n\n"}

    {"  "}<span className="text-gray-500 italic">// Adiciona classe de brilho</span>
    {"\n"}
    {"  "}<span className="text-blue-300">statusIndicator</span>.<span className="text-blue-300">classList</span>.<span className="text-yellow-300">add</span>(<span className="text-orange-300">"active"</span>);
    {"\n"}

    {"}"}
    {"\n\n"}

    <span className="text-gray-500 italic">// 3. Simula tempo de carregamento (2s)</span>
    {"\n"}
    <span className="text-yellow-300">setTimeout</span>(<span className="text-blue-300">setOnline</span>, <span className="text-green-300">2000</span>);
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
