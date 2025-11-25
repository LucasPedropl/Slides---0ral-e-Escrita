import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { ArrowUpRight } from 'lucide-react';

const Slide6_Success: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-center space-y-16 px-4">
        <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold drop-shadow-neon-white leading-tight">
                Design e <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">Experiência do Usuário</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 max-w-6xl mx-auto w-full">
            {/* Story 1 */}
            <div className="group cursor-pointer">
                <GlassCard className="w-full aspect-video rounded-[2rem] overflow-hidden relative mb-6 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] group-hover:-translate-y-2 border-white/10 group-hover:border-purple-500/50">
                     <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="text-white w-6 h-6" />
                     </div>
                     <img 
                        src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop" 
                        alt="UI Design" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-1">UI Design (Interface)</h3>
                        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">A beleza e o visual.</p>
                    </div>
                </GlassCard>
                <p className="text-center text-gray-300 text-lg leading-relaxed px-4 opacity-80 group-hover:opacity-100 transition-opacity">
                     Refere-se a cores, tipografia, botões e imagens. Um site bonito passa credibilidade e profissionalismo.
                </p>
            </div>

            {/* Story 2 */}
            <div className="group cursor-pointer">
                <GlassCard className="w-full aspect-video rounded-[2rem] overflow-hidden relative mb-6 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(232,121,249,0.4)] group-hover:-translate-y-2 border-white/10 group-hover:border-fuchsia-500/50">
                     <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="text-white w-6 h-6" />
                     </div>
                     <img 
                        src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop" 
                        alt="UX Design" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                     <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-1">UX Design (Experiência)</h3>
                        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">A facilidade de uso.</p>
                    </div>
                </GlassCard>
                <p className="text-center text-gray-300 text-lg leading-relaxed px-4 opacity-80 group-hover:opacity-100 transition-opacity">
                     Não adianta ser bonito se for difícil de usar. UX garante que o usuário encontre o que precisa rapidamente.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Slide6_Success;