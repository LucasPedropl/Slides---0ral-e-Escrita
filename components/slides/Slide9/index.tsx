
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { ArrowUpRight, Palette, MousePointerClick } from 'lucide-react';

const Slide9: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-center space-y-8 lg:space-y-12 px-4 w-full relative">
        
        {/* Header */}
        <div className="text-center space-y-4 z-10 animate-fade-in-up flex-shrink-0">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-neon-white leading-tight">
                Design <span className="text-gray-600">&</span> <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-pink-300">Experiência</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Um site não basta funcionar. Ele precisa encantar (UI) e ser fácil de usar (UX).
            </p>
        </div>

        {/* Dual Cards Container - Changed from fixed height to flex-1 to prevent overflow */}
        <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-7xl mx-auto w-full items-center justify-center pb-4">
            
            {/* Left: UI Design (Beauty) */}
            <div className="group cursor-pointer relative h-full max-h-[500px] animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="absolute inset-0 bg-purple-600/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <GlassCard className="h-full w-full p-0 rounded-[2.5rem] border-white/10 group-hover:border-purple-500/50 overflow-hidden relative isolate transition-all duration-500 group-hover:-translate-y-2">
                     {/* Floating Badge */}
                     <div className="absolute top-6 left-6 z-20 bg-purple-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/30 flex items-center gap-2">
                        <Palette className="w-4 h-4 text-purple-300" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">UI Design</span>
                     </div>

                     <img 
                        src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop" 
                        alt="UI Design Interface" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/40 to-transparent opacity-90"></div>
                    
                    <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">A Beleza Visual</h3>
                        <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                             Cores, tipografia, botões arredondados e sombras. É o que faz o usuário dizer "Uau!".
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 rounded bg-white/10 text-xs text-purple-200 border border-white/5">Estética</span>
                            <span className="px-3 py-1 rounded bg-white/10 text-xs text-purple-200 border border-white/5">Identidade</span>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* Right: UX Design (Feeling) */}
            <div className="group cursor-pointer relative h-full max-h-[500px] animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="absolute inset-0 bg-pink-600/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <GlassCard className="h-full w-full p-0 rounded-[2.5rem] border-white/10 group-hover:border-pink-500/50 overflow-hidden relative isolate transition-all duration-500 group-hover:-translate-y-2">
                     {/* Floating Badge */}
                     <div className="absolute top-6 left-6 z-20 bg-pink-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-pink-500/30 flex items-center gap-2">
                        <MousePointerClick className="w-4 h-4 text-pink-300" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">UX Design</span>
                     </div>

                     <img 
                        src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop" 
                        alt="UX Wireframe" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/40 to-transparent opacity-90"></div>
                    
                     <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">A Facilidade de Uso</h3>
                        <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                             Não adianta ser bonito se for confuso. O UX garante que o usuário ache o botão de "Comprar" em segundos.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 rounded bg-white/10 text-xs text-pink-200 border border-white/5">Navegação</span>
                            <span className="px-3 py-1 rounded bg-white/10 text-xs text-pink-200 border border-white/5">Lógica</span>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    </div>
  );
};

export default Slide9;
