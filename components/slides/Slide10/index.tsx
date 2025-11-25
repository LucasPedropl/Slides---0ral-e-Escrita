
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Search, Zap, Trophy, TrendingUp, Key } from 'lucide-react';

const Slide10: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full px-4 lg:px-8 w-full">
        
        {/* Left: Content & Strategy */}
        <div className="space-y-8 animate-fade-in-up z-10">
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4 backdrop-blur-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>Tráfego Orgânico</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-neon-white mb-4">
                    O Segredo do <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Google (SEO)</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-green-500 pl-6">
                    Não basta criar o site. Ele precisa ser <strong>encontrado</strong>. <br/>
                    SEO (Search Engine Optimization) é a arte de convencer o robô do Google de que seu site merece o 1º lugar.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-green-500/10 hover:border-green-500/30 transition-all group">
                    <div className="bg-green-500/20 p-3 rounded-xl text-green-300 w-fit mb-3 group-hover:scale-110 transition-transform">
                        <Key className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-white mb-1">Palavras-Chave</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Usar os termos exatos que as pessoas digitam na busca.</p>
                 </div>

                 <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-yellow-500/10 hover:border-yellow-500/30 transition-all group">
                    <div className="bg-yellow-500/20 p-3 rounded-xl text-yellow-300 w-fit mb-3 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-white mb-1">Velocidade</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Sites lentos são punidos. O Google quer respostas instantâneas.</p>
                 </div>
            </div>
        </div>

        {/* Right: Search Simulation */}
        <div className="relative h-[500px] w-full flex flex-col justify-center items-center perspective-1000 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            
            {/* Floating Background Elements */}
            <div className="absolute top-10 right-10 p-3 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 p-4 bg-green-500/20 rounded-full blur-xl animate-pulse animation-delay-2000"></div>

            {/* Fake Search Bar */}
            <GlassCard className="w-full max-w-md mb-8 p-4 flex items-center gap-4 rounded-full border-white/20 bg-white/10 backdrop-blur-xl shadow-lg transform -translate-y-4">
                <Search className="text-gray-400 w-5 h-5" />
                <div className="h-4 w-32 bg-gray-400/20 rounded animate-pulse"></div>
                <div className="ml-auto w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
            </GlassCard>

            {/* Search Results Stack */}
            <div className="w-full max-w-md space-y-4 relative">
                
                {/* Result 3 (Ghost) */}
                <div className="absolute top-16 left-0 right-0 p-4 bg-white/5 rounded-2xl border border-white/5 blur-[2px] scale-90 opacity-30 z-0">
                    <div className="h-3 w-24 bg-gray-500/30 rounded mb-2"></div>
                    <div className="h-2 w-full bg-gray-600/30 rounded"></div>
                </div>

                {/* Result 2 (Competitor) */}
                <div className="absolute top-8 left-0 right-0 p-5 bg-white/5 rounded-2xl border border-white/10 blur-[0.5px] scale-95 opacity-60 z-10">
                     <div className="flex gap-3 items-center mb-2">
                         <div className="w-6 h-6 rounded bg-white/10"></div>
                         <div className="h-3 w-32 bg-gray-500/40 rounded"></div>
                     </div>
                     <div className="h-2 w-[80%] bg-gray-600/40 rounded"></div>
                </div>

                {/* Result 1 (Winner - Your Site) */}
                <GlassCard className="relative p-6 rounded-2xl border-green-500/50 bg-[#0a0118]/90 shadow-[0_0_50px_rgba(34,197,94,0.15)] z-20 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <div className="absolute -left-1 top-6 bottom-6 w-1 bg-green-500 rounded-r-full"></div>
                    
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-[8px] font-bold">P</div>
                            <span className="text-xs text-gray-400">pedromota.dev</span>
                            <span className="text-[10px] text-gray-500">• Patrocinado</span>
                        </div>
                        <div className="flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                            <Trophy className="w-3 h-3 text-green-400" />
                            <span className="font-bold text-green-400 text-[10px] uppercase tracking-wider">#1 Rank</span>
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:underline decoration-blue-400/50 underline-offset-4">
                        Como Criar um Site Incrível do Zero
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Aprenda o passo a passo completo. Domínio, hospedagem, HTML, CSS e Design. O guia definitivo para iniciantes que querem decolar na carreira.
                    </p>
                    
                    {/* Sitelinks */}
                    <div className="flex gap-4 mt-4 pt-4 border-t border-white/5">
                        <span className="text-xs text-blue-400 hover:text-blue-300 cursor-pointer">Tutorial HTML</span>
                        <span className="text-xs text-blue-400 hover:text-blue-300 cursor-pointer">Dicas de CSS</span>
                        <span className="text-xs text-blue-400 hover:text-blue-300 cursor-pointer">Ferramentas</span>
                    </div>
                </GlassCard>

            </div>
        </div>

    </div>
  );
};

export default Slide10;
