import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { LayoutTemplate, Palette, Cpu, Braces, Sparkles } from 'lucide-react';

const Slide3_Tech: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full w-full px-4 lg:px-8 relative z-10">
      
      {/* Header Content */}
      <div className="text-center mb-12 animate-fade-in-up">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4 backdrop-blur-sm">
             <Braces className="w-4 h-4" />
             <span>Core Technologies</span>
         </div>
         <h2 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-neon-white mb-6">
            A "Trindade" <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-blue-400 to-yellow-400">da Web</span>
         </h2>
         <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Todo site moderno é construído sobre três pilares fundamentais. <br/>
            Para entender, usamos a <strong className="text-white border-b border-purple-500">Analogia do Corpo Humano</strong>:
         </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto w-full relative">
         
         {/* Decorative connecting line behind cards (visible on desktop) */}
         <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent hidden md:block -translate-y-1/2 pointer-events-none"></div>

         {/* HTML Card */}
         <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
             <div className="group relative h-full">
                <div className="absolute inset-0 bg-orange-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <GlassCard className="h-full p-8 flex flex-col items-center text-center border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 relative bg-[#0a0118]/80">
                    <div className="w-20 h-20 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                        <LayoutTemplate className="w-10 h-10 text-orange-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">HTML</h3>
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
                        O Esqueleto
                    </span>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        Define a <strong>estrutura</strong>. Onde fica o título, onde fica a imagem, onde fica o botão. Sem ele, não existe página.
                    </p>
                    <div className="mt-auto pt-6 text-xs font-mono text-gray-500 group-hover:text-orange-400/70 transition-colors">
                        &lt;h1&gt;Título&lt;/h1&gt;
                    </div>
                </GlassCard>
             </div>
         </div>

         {/* CSS Card */}
         <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
             <div className="group relative h-full">
                <div className="absolute inset-0 bg-blue-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <GlassCard className="h-full p-8 flex flex-col items-center text-center border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 relative bg-[#0a0118]/80">
                    <div className="absolute -top-3 -right-3">
                         <Sparkles className="text-blue-400 w-8 h-8 animate-pulse" />
                    </div>
                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                        <Palette className="w-10 h-10 text-blue-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">CSS</h3>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
                        A Pele & Roupas
                    </span>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        Define o <strong>estilo</strong>. Cores, tamanhos, posições e beleza visual. É o que torna o "esqueleto" apresentável.
                    </p>
                    <div className="mt-auto pt-6 text-xs font-mono text-gray-500 group-hover:text-blue-400/70 transition-colors">
                        color: blue;
                    </div>
                </GlassCard>
             </div>
         </div>

         {/* JS Card */}
         <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
             <div className="group relative h-full">
                <div className="absolute inset-0 bg-yellow-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <GlassCard className="h-full p-8 flex flex-col items-center text-center border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2 relative bg-[#0a0118]/80">
                    <div className="w-20 h-20 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.1)] group-hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                        <Cpu className="w-10 h-10 text-yellow-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">JavaScript</h3>
                    <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-yellow-500/20">
                        O Cérebro
                    </span>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        Define o <strong>comportamento</strong>. Movimento, interatividade, cálculos e lógica. É o que dá vida ao corpo.
                    </p>
                    <div className="mt-auto pt-6 text-xs font-mono text-gray-500 group-hover:text-yellow-400/70 transition-colors">
                        function run() {'{...}'}
                    </div>
                </GlassCard>
             </div>
         </div>

      </div>
    </div>
  );
};

export default Slide3_Tech;