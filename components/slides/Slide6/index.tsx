
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Layout, ArrowRight } from 'lucide-react';

const Slide6: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full px-4 lg:px-12 w-full relative overflow-hidden">
        
        {/* Background Grid (Blueprint Effect) */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ 
                 backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
             }}>
        </div>
        
        {/* Left Column: Content & Explanation */}
        <div className="relative z-10 flex flex-col justify-center space-y-8 order-2 lg:order-1 pb-8 lg:pb-0">
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-4 backdrop-blur-sm">
                    <Layout className="w-4 h-4" />
                    <span>Arquitetura da Informação</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold drop-shadow-neon-white mb-4 leading-tight">
                    Anatomia da <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Página Web</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-cyan-500 pl-6">
                    Assim como o corpo humano tem cabeça, tronco e membros, um site segue uma estrutura lógica universal.
                </p>
            </div>

            {/* Legend / Key Items */}
            <div className="space-y-3">
                 <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-500/10 hover:border-purple-500/30 transition-colors group">
                     <div className="w-10 h-10 rounded bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs border border-purple-500/30">H</div>
                     <div>
                         <span className="text-purple-200 font-bold text-sm block">HEADER (Cabeçalho)</span>
                         <span className="text-gray-400 text-xs">Onde fica o logo e o menu.</span>
                     </div>
                 </div>
                 
                 <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/30 transition-colors group">
                     <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs border border-blue-500/30">M</div>
                     <div>
                         <span className="text-blue-200 font-bold text-sm block">MAIN (Principal)</span>
                         <span className="text-gray-400 text-xs">O conteúdo que o usuário veio ver.</span>
                     </div>
                 </div>

                 <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-gray-500/10 hover:border-gray-500/30 transition-colors group">
                     <div className="w-10 h-10 rounded bg-gray-500/20 flex items-center justify-center text-gray-400 font-bold text-xs border border-gray-500/30">F</div>
                     <div>
                         <span className="text-gray-200 font-bold text-sm block">FOOTER (Rodapé)</span>
                         <span className="text-gray-400 text-xs">Informações finais e contato.</span>
                     </div>
                 </div>
            </div>
        </div>

        {/* Right Column: Visual Wireframe */}
        <div className="relative z-10 w-full h-full flex items-center justify-center order-1 lg:order-2 perspective-1000">
             
             {/* The Blueprint Sheet */}
             <div className="w-full max-w-md bg-[#0f172a]/80 backdrop-blur-xl border-2 border-dashed border-cyan-500/30 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
                
                <div className="absolute -top-3 left-6 bg-cyan-900 text-cyan-200 text-xs px-2 py-1 rounded border border-cyan-500/50 font-mono">
                    wireframe_v1.0
                </div>

                {/* Header Block */}
                <div className="w-full h-16 rounded-xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-between px-4 group hover:bg-purple-500/20 transition-colors relative">
                    <span className="text-purple-300 font-bold text-sm tracking-wider">HEADER</span>
                    <span className="text-[10px] font-mono bg-purple-500 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;header&gt;</span>
                </div>

                {/* Nav Block */}
                <div className="w-full h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-between px-4 group hover:bg-cyan-500/20 transition-colors relative">
                    <span className="text-cyan-300 font-bold text-xs tracking-wider">NAV</span>
                    <span className="text-[10px] font-mono bg-cyan-500 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;nav&gt;</span>
                </div>

                {/* Middle Section */}
                <div className="flex-1 flex gap-4 min-h-[180px]">
                    {/* Main */}
                    <div className="flex-[2] rounded-xl bg-blue-500/10 border border-blue-500/40 p-4 flex flex-col gap-2 group hover:bg-blue-500/20 transition-colors relative">
                         <div className="flex justify-between items-center">
                            <span className="text-blue-300 font-bold text-sm tracking-wider">MAIN</span>
                            <span className="text-[10px] font-mono bg-blue-500 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;main&gt;</span>
                         </div>
                         <div className="w-full h-2 bg-blue-400/20 rounded mt-2"></div>
                         <div className="w-3/4 h-2 bg-blue-400/20 rounded"></div>
                         <div className="w-full h-24 bg-blue-400/10 rounded mt-2 border border-blue-400/10"></div>
                    </div>
                    
                    {/* Aside */}
                    <div className="flex-1 rounded-xl bg-pink-500/10 border border-pink-500/40 p-4 flex flex-col items-center gap-2 group hover:bg-pink-500/20 transition-colors relative">
                        <span className="text-pink-300 font-bold text-xs tracking-wider">ASIDE</span>
                        <div className="w-full h-full bg-pink-400/10 rounded border border-pink-400/10"></div>
                        <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-pink-500 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;aside&gt;</span>
                    </div>
                </div>

                {/* Footer Block */}
                <div className="w-full h-12 rounded-xl bg-gray-500/10 border border-gray-500/40 flex items-center justify-between px-4 group hover:bg-gray-500/20 transition-colors relative">
                    <span className="text-gray-300 font-bold text-sm tracking-wider">FOOTER</span>
                    <span className="text-[10px] font-mono bg-gray-500 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;footer&gt;</span>
                </div>

             </div>
        </div>

    </div>
  );
};

export default Slide6;
