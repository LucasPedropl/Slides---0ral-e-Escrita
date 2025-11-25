import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { FileCode2, Sparkles, Zap, Terminal, Laptop } from 'lucide-react';

const Slide5_Editors: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-8 px-4 lg:px-12 w-full overflow-hidden">
        
        {/* Left Content */}
        <div className="flex-1 space-y-8 relative z-10 animate-fade-in-up">
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-4 backdrop-blur-sm">
                    <Laptop className="w-4 h-4" />
                    <span>Ambiente de Desenvolvimento (IDE)</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight drop-shadow-neon-white mb-4">
                    O Laboratório <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">do Desenvolvedor</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-blue-500 pl-6">
                    Escrever código no Bloco de Notas é possível, mas é como cavar uma piscina com uma colher. <br/>
                    Ferramentas como o <strong>VS Code</strong> são escavadeiras de alta precisão.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {/* Feature 1 */}
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/30 transition-colors group">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-white">Syntax Highlight</h4>
                    </div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300">Cores que diferenciam comandos, textos e variáveis instantaneamente.</p>
                 </div>

                 {/* Feature 2 */}
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-yellow-500/10 hover:border-yellow-500/30 transition-colors group">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-yellow-500/20 text-yellow-300 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                            <Zap className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-white">Auto-Complete</h4>
                    </div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300">Escreva <code>&lt;div</code> e ele fecha com <code>&gt;</code> para você. Menos digitação, menos erros.</p>
                 </div>
            </div>
        </div>

        {/* Right Visual - IDE Simulation */}
        <div className="flex-1 w-full relative h-[60vh] flex items-center justify-center perspective-1000">
             
             {/* Background Glows */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>

             {/* The "Notepad" (Background Element) */}
             <div className="absolute top-[10%] left-[10%] w-[250px] aspect-[3/4] bg-white text-black p-4 rounded-sm shadow-xl rotate-[-6deg] opacity-60 hover:opacity-100 transition-all duration-500 z-0 border border-gray-300">
                <div className="border-b border-gray-300 pb-2 mb-2 font-serif text-xs flex justify-between">
                    <span>sem_titulo.txt</span>
                    <span>X</span>
                </div>
                <div className="font-mono text-[10px] opacity-70">
                    &lt;html&gt;<br/>
                    &lt;body&gt;<br/>
                    &lt;h1&gt;Ola&lt;/h1&gt;<br/>
                    &lt;/body&gt;
                </div>
                <div className="absolute bottom-10 left-0 w-full text-center text-red-500 font-bold text-sm rotate-[-15deg] border-2 border-red-500 p-1 mx-8 rounded">
                    MUITO LENTO
                </div>
             </div>

             {/* The VS Code (Main Element) */}
             <div className="relative w-[90%] md:w-[80%] aspect-video bg-[#1e1e1e] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)] border border-white/10 z-10 transform rotate-3 hover:rotate-0 transition-all duration-700 group">
                
                {/* Title Bar */}
                <div className="h-8 bg-[#252526] flex items-center px-4 justify-between border-b border-black/20">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="text-gray-400 text-xs font-mono">index.html - Visual Studio Code</div>
                    <div className="w-16"></div>
                </div>

                <div className="flex h-full">
                    {/* Activity Bar */}
                    <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-6 border-r border-black/20">
                        <FileCode2 className="w-6 h-6 text-white opacity-100" />
                        <Sparkles className="w-6 h-6 text-gray-500 hover:text-white transition-colors" />
                        <Terminal className="w-6 h-6 text-gray-500 hover:text-white transition-colors" />
                    </div>

                    {/* Editor Area */}
                    <div className="flex-1 bg-[#1e1e1e] p-4 font-mono text-xs md:text-sm overflow-hidden relative">
                        {/* Line Numbers */}
                        <div className="absolute left-0 top-4 bottom-0 w-12 text-right pr-4 text-[#858585] select-none bg-[#1e1e1e] border-r border-white/5">
                            1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7
                        </div>

                        {/* Code */}
                        <div className="pl-14 text-[#d4d4d4]">
                            <span className="text-[#569cd6]">&lt;!DOCTYPE</span> <span className="text-[#9cdcfe]">html</span><span className="text-[#569cd6]">&gt;</span><br/>
                            <span className="text-[#569cd6]">&lt;html</span> <span className="text-[#9cdcfe]">lang</span>=<span className="text-[#ce9178]">"pt-br"</span><span className="text-[#569cd6]">&gt;</span><br/>
                            <span className="text-[#569cd6]">&nbsp;&nbsp;&lt;body&gt;</span><br/>
                            
                            <div className="relative group/line my-1">
                                <span className="text-[#569cd6]">&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1</span> <span className="text-[#9cdcfe]">class</span>=<span className="text-[#ce9178]">"destaque"</span><span className="text-[#569cd6]">&gt;</span><br/>
                                <span className="text-[#d4d4d4]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello World! 🚀</span><br/>
                                <span className="text-[#569cd6]">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/h1&gt;</span>
                                
                                {/* Tooltip simulation */}
                                <div className="absolute top-full left-20 bg-[#252526] text-gray-300 p-2 rounded border border-[#454545] shadow-xl text-xs z-50 hidden group-hover/line:block animate-fade-in-up">
                                    Elemento &lt;h1&gt;: Título de nível 1
                                </div>
                            </div>

                            <span className="text-[#569cd6]">&nbsp;&nbsp;&lt;/body&gt;</span><br/>
                            <span className="text-[#569cd6]">&lt;/html&gt;</span>
                            
                            {/* Cursor */}
                            <span className="inline-block w-2 h-4 bg-white align-middle animate-pulse ml-1"></span>
                        </div>
                    </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
                    <Zap className="w-4 h-4 fill-white" />
                    <span className="font-bold text-xs">Live Server: ON</span>
                </div>
             </div>

        </div>
    </div>
  );
};

export default Slide5_Editors;