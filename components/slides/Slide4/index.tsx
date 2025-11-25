
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Blocks, Code2, Zap, Gauge, Layers, Lock } from 'lucide-react';

const Slide4: React.FC = () => {
  return (
    <div className="flex flex-col h-full px-4 lg:px-8 relative w-full justify-center overflow-hidden">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10 z-10 flex-shrink-0 animate-fade-in-up">
           <h2 className="text-4xl lg:text-6xl font-bold drop-shadow-neon-white mb-3">
              Formas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Construir</span>
           </h2>
           <p className="text-gray-300 text-lg">Existem dois caminhos principais para dar vida a um site.</p>
        </div>

        {/* VS Badge (Desktop Only) */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-white text-black font-black text-xl rounded-full items-center justify-center border-4 border-black shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-bounce">
            VS
        </div>

        {/* Main Content - Split Layout */}
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto h-[65vh] lg:h-[55vh] gap-6 lg:gap-0">

           {/* Option 1: CMS (No-Code) */}
           <div className="flex-1 group relative transition-all duration-500 hover:flex-[1.2]">
              <div className="absolute inset-0 bg-cyan-500/10 rounded-[2rem] lg:rounded-l-[2.5rem] lg:rounded-r-none blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <GlassCard className="h-full w-full p-0 rounded-[2rem] lg:rounded-l-[2.5rem] lg:rounded-r-none border-white/10 group-hover:border-cyan-400/50 overflow-hidden relative isolate">
                 {/* Background Image */}
                 <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
                    alt="Wordpress Dashboard" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/80 to-cyan-900/20"></div>

                 {/* Content */}
                 <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-4 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors shadow-lg">
                        <Blocks className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">CMS (No-Code)</h3>
                    <p className="text-gray-400 text-sm mb-6 group-hover:text-white transition-colors">
                        WordPress, Wix, Shopify. Como brincar de <strong>LEGO</strong>. Você usa blocos prontos para montar o site.
                    </p>

                    {/* Stats Bars */}
                    <div className="space-y-3 opacity-60 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                            <Zap className="w-3 h-3" /> <span>Velocidade de Criação</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[95%] h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                            <Layers className="w-3 h-3" /> <span>Facilidade</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[90%] h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
                        </div>
                    </div>
                 </div>
              </GlassCard>
           </div>

           {/* Option 2: Programming (Pro-Code) */}
           <div className="flex-1 group relative transition-all duration-500 hover:flex-[1.2]">
              <div className="absolute inset-0 bg-purple-500/10 rounded-[2rem] lg:rounded-r-[2.5rem] lg:rounded-l-none blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <GlassCard className="h-full w-full p-0 rounded-[2rem] lg:rounded-r-[2.5rem] lg:rounded-l-none border-white/10 group-hover:border-purple-400/50 overflow-hidden relative isolate">
                 {/* Background Image */}
                 <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
                    alt="Coding Matrix" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/80 to-purple-900/20"></div>

                 {/* Content */}
                 <div className="absolute inset-0 p-8 flex flex-col justify-end lg:items-end lg:text-right">
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4 border border-purple-500/30 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors shadow-lg">
                        <Code2 className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Programação</h3>
                    <p className="text-gray-400 text-sm mb-6 group-hover:text-white transition-colors max-w-sm">
                        HTML, React, Next.js. Como ser um <strong>Arquiteto</strong>. Você constrói cada detalhe do zero, sem limites.
                    </p>

                    {/* Stats Bars */}
                    <div className="space-y-3 w-full opacity-60 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                        <div className="flex items-center gap-2 text-xs font-mono text-purple-300 lg:justify-end">
                            <span>Poder & Flexibilidade</span> <Gauge className="w-3 h-3" />
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden flex justify-end">
                            <div className="w-[100%] h-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-purple-300 lg:justify-end">
                            <span>Performance</span> <Lock className="w-3 h-3" />
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden flex justify-end">
                            <div className="w-[95%] h-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
                        </div>
                    </div>
                 </div>
              </GlassCard>
           </div>

        </div>
    </div>
  );
};

export default Slide4;
