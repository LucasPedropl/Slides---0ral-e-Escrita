
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Code2, Palette, Zap } from 'lucide-react';

const SlideCodeOverview: React.FC = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center px-4 w-full relative pt-4">
        
        <div className="text-center mb-6 z-10 animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold drop-shadow-neon-white mb-2">
                O Código <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400">Completo</span>
            </h2>
            <p className="text-gray-300 text-base lg:text-lg">As três camadas conectadas criando o layout final.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full max-w-[95%] h-[70%] z-10">
            
            {/* HTML Block */}
            <div className="flex flex-col h-full animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="flex items-center gap-2 mb-2 text-orange-400 font-bold bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20 w-fit backdrop-blur-md">
                    <Code2 className="w-4 h-4" />
                    <span className="text-xs lg:text-sm">index.html</span>
                </div>
                <div className="relative group flex-1 min-h-0">
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-orange-500 to-red-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <GlassCard className="h-full bg-[#1e1e1e] p-0 overflow-hidden border-orange-500/20 shadow-2xl relative">
                        <div className="h-full p-4 font-mono text-[10px] lg:text-xs text-gray-300 leading-snug bg-[#121212]/90 whitespace-pre overflow-auto custom-scrollbar">
<pre>
<code>
<span className="text-blue-400 font-bold">&lt;!DOCTYPE html&gt;</span>{"\n"}
<span className="text-blue-400 font-bold">&lt;html&gt;</span>{"\n"}
{"  "}<span className="text-blue-400 font-bold">&lt;head&gt;</span>{"\n"}
{"    "}<span className="text-blue-400 font-bold">&lt;title&gt;</span>Meu Site<span className="text-blue-400 font-bold">&lt;/title&gt;</span>{"\n"}
{"    "}<span className="text-blue-400 font-bold">&lt;link</span> <span className="text-cyan-300">rel</span>=<span className="text-green-300">"stylesheet"</span> <span className="text-cyan-300">href</span>=<span className="text-green-300">"style.css"</span> <span className="text-blue-400 font-bold">/&gt;</span>{"\n"}
{"  "}<span className="text-blue-400 font-bold">&lt;/head&gt;</span>{"\n"}
{"  "}<span className="text-blue-400 font-bold">&lt;body&gt;</span>{"\n"}
{"    "}<span className="text-blue-400 font-bold">&lt;div</span> <span className="text-cyan-300">class</span>=<span className="text-green-300">"container"</span><span className="text-blue-400 font-bold">&gt;</span>{"\n\n"}
{"      "}<span className="text-gray-500 italic">&lt;!-- Cabeçalho --&gt;</span>{"\n"}
{"      "}<span className="text-blue-400 font-bold">&lt;header&gt;</span>HEADER<span className="text-blue-400 font-bold">&lt;/header&gt;</span>{"\n\n"}
{"      "}<span className="text-gray-500 italic">&lt;!-- Área Central (Flex) --&gt;</span>{"\n"}
{"      "}<span className="text-blue-400 font-bold">&lt;div</span> <span className="text-cyan-300">class</span>=<span className="text-green-300">"meio"</span><span className="text-blue-400 font-bold">&gt;</span>{"\n"}
{"        "}<span className="text-blue-400 font-bold">&lt;nav&gt;</span>NAV<span className="text-blue-400 font-bold">&lt;/nav&gt;</span>{"\n"}
{"        "}<span className="text-blue-400 font-bold">&lt;main&gt;</span>MAIN<span className="text-blue-400 font-bold">&lt;/main&gt;</span>{"\n"}
{"        "}<span className="text-blue-400 font-bold">&lt;aside&gt;</span>ASIDE<span className="text-blue-400 font-bold">&lt;/aside&gt;</span>{"\n"}
{"      "}<span className="text-blue-400 font-bold">&lt;/div&gt;</span>{"\n\n"}
{"      "}<span className="text-gray-500 italic">&lt;!-- Rodapé --&gt;</span>{"\n"}
{"      "}<span className="text-blue-400 font-bold">&lt;footer&gt;</span>FOOTER<span className="text-blue-400 font-bold">&lt;/footer&gt;</span>{"\n\n"}
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

            {/* CSS Block */}
            <div className="flex flex-col h-full animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 w-fit backdrop-blur-md">
                    <Palette className="w-4 h-4" />
                    <span className="text-xs lg:text-sm">style.css</span>
                </div>
                <div className="relative group flex-1 min-h-0">
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <GlassCard className="h-full bg-[#1e1e1e] p-0 overflow-hidden border-blue-500/20 shadow-2xl relative">
                        <div className="h-full p-4 font-mono text-[10px] lg:text-xs text-gray-300 leading-snug bg-[#121212]/90 whitespace-pre overflow-auto custom-scrollbar">
<pre>
<code>
<span className="text-gray-500 italic">/* Layout Global */</span>{"\n"}
<span className="text-green-400">header</span> {"{"} <span className="text-blue-300">height</span>: <span className="text-green-300">80px</span>; <span className="text-blue-300">background</span>: <span className="text-purple-400">purple</span>; {"}"}{"\n"}
<span className="text-green-400">footer</span> {"{"} <span className="text-blue-300">height</span>: <span className="text-green-300">50px</span>; <span className="text-blue-300">background</span>: <span className="text-gray-400">gray</span>;   {"}"}{"\n\n"}

<span className="text-gray-500 italic">/* Flexbox: Coloca lado a lado */</span>{"\n"}
<span className="text-green-400">.meio</span> {"{"}{"\n"}
{"  "}<span className="text-blue-300">display</span>: <span className="text-orange-300">flex</span>;{"\n"}
{"  "}<span className="text-blue-300">gap</span>: <span className="text-green-300">16px</span>;{"\n"}
{"  "}<span className="text-blue-300">height</span>: <span className="text-green-300">100%</span>;{"\n"}
{"}"}{"\n\n"}

<span className="text-gray-500 italic">/* Proporções */</span>{"\n"}
<span className="text-green-400">nav</span>   {"{"} <span className="text-blue-300">width</span>: <span className="text-green-300">20%</span>; <span className="text-blue-300">background</span>: <span className="text-blue-400">blue</span>;   {"}"}{"\n"}
<span className="text-green-400">main</span>  {"{"} <span className="text-blue-300">flex</span>: <span className="text-green-300">1</span>;   <span className="text-blue-300">background</span>: <span className="text-green-400">green</span>;  {"}"}{"\n"}
<span className="text-green-400">aside</span> {"{"} <span className="text-blue-300">width</span>: <span className="text-green-300">25%</span>; <span className="text-blue-300">background</span>: <span className="text-orange-400">orange</span>; {"}"}
</code>
</pre>
                        </div>
                    </GlassCard>
                </div>
            </div>

            {/* JS Block */}
            <div className="flex flex-col h-full animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center gap-2 mb-2 text-yellow-400 font-bold bg-yellow-500/10 px-3 py-1.5 rounded-lg border border-yellow-500/20 w-fit backdrop-blur-md">
                    <Zap className="w-4 h-4" />
                    <span className="text-xs lg:text-sm">script.js</span>
                </div>
                <div className="relative group flex-1 min-h-0">
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <GlassCard className="h-full bg-[#1e1e1e] p-0 overflow-hidden border-yellow-500/20 shadow-2xl relative">
                        <div className="h-full p-4 font-mono text-[10px] lg:text-xs text-gray-300 leading-snug bg-[#121212]/90 whitespace-pre overflow-auto custom-scrollbar">
<pre>
<code>
<span className="text-gray-500 italic">// Seleciona o elemento Principal</span>{"\n"}
<span className="text-blue-400">let</span> <span className="text-blue-300">bloco</span> = <span className="text-green-300">document</span>.<span className="text-yellow-300">querySelector</span>(<span className="text-orange-300">'main'</span>);{"\n\n"}

<span className="text-gray-500 italic">// Loop Infinito (2 segundos)</span>{"\n"}
<span className="text-yellow-300">setInterval</span>(() <span className="text-blue-400">=&gt;</span> {"{"}{"\n\n"}
{"  "}<span className="text-purple-400">if</span> (<span className="text-blue-300">bloco</span>.<span className="text-blue-300">innerText</span> === <span className="text-orange-300">"MAIN"</span>) {"{"}{"\n"}
{"    "}<span className="text-gray-500 italic">// Muda para Online</span>{"\n"}
{"    "}<span className="text-blue-300">bloco</span>.<span className="text-blue-300">innerText</span> = <span className="text-orange-300">"ONLINE"</span>;{"\n"}
{"    "}<span className="text-blue-300">bloco</span>.<span className="text-blue-300">style</span>.<span className="text-blue-300">background</span> = <span className="text-orange-300">"#10b981"</span>;{"\n\n"}
{"  "}<span className="text-purple-400">{"}"} else {"{"}</span>{"\n"}
{"    "}<span className="text-gray-500 italic">// Volta ao Original</span>{"\n"}
{"    "}<span className="text-blue-300">bloco</span>.<span className="text-blue-300">innerText</span> = <span className="text-orange-300">"MAIN"</span>;{"\n"}
{"    "}<span className="text-blue-300">bloco</span>.<span className="text-blue-300">style</span>.<span className="text-blue-300">background</span> = <span className="text-orange-300">"green"</span>;{"\n"}
{"  "}<span className="text-purple-400">{"}"}</span>{"\n\n"}
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

export default SlideCodeOverview;
