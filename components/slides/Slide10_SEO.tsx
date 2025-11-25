import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Search, Zap, Trophy, Link as LinkIcon } from 'lucide-react';

const Slide10_SEO: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full px-4 lg:px-8">
        
        {/* Left: Content */}
        <div className="space-y-8 animate-float">
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-4 backdrop-blur-sm">
                    <Search className="w-4 h-4" />
                    <span>Visibilidade</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-neon-white mb-4">
                    O Segredo do <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Google (SEO)</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-green-500 pl-6">
                    Não basta criar o site. Ele precisa ser encontrado. <br/>
                    <strong>SEO</strong> (Search Engine Optimization) é a arte de convencer o robô do Google de que seu site é o melhor resultado.
                </p>
            </div>

            <div className="grid gap-4">
                 <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4 group hover:bg-white/10 transition-colors">
                    <div className="bg-blue-500/20 p-3 rounded-lg text-blue-300">
                        <Zap className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Velocidade</h4>
                        <p className="text-sm text-gray-400">Sites lentos são punidos. O usuário não espera.</p>
                    </div>
                 </div>

                 <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4 group hover:bg-white/10 transition-colors">
                    <div className="bg-green-500/20 p-3 rounded-lg text-green-300">
                        <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">Conteúdo Relevante</h4>
                        <p className="text-sm text-gray-400">O texto precisa responder exatamente o que a pessoa buscou.</p>
                    </div>
                 </div>
            </div>
        </div>

        {/* Right: Visual Simulation */}
        <div className="relative h-[500px] w-full flex flex-col justify-center">
            
            {/* Fake Google Search Bar */}
            <GlassCard className="mb-8 p-4 flex items-center gap-4 rounded-full border-white/30 bg-white/10">
                <Search className="text-gray-400 w-5 h-5" />
                <div className="h-4 w-40 bg-gray-400/20 rounded animate-pulse"></div>
                <div className="ml-auto w-8 h-8 rounded-full bg-blue-500/50"></div>
            </GlassCard>

            {/* Results Stack */}
            <div className="space-y-4 relative">
                
                {/* Result 3 (Background) */}
                <div className="absolute top-12 left-0 right-0 p-4 bg-white/5 rounded-xl border border-white/5 blur-[2px] scale-95 opacity-50 z-0">
                    <div className="h-3 w-32 bg-gray-500/30 rounded mb-2"></div>
                    <div className="h-2 w-full bg-gray-600/30 rounded"></div>
                </div>

                {/* Result 2 (Background) */}
                <div className="absolute top-6 left-0 right-0 p-4 bg-white/5 rounded-xl border border-white/5 blur-[1px] scale-98 opacity-70 z-10">
                     <div className="h-3 w-40 bg-gray-500/40 rounded mb-2"></div>
                     <div className="h-2 w-full bg-gray-600/40 rounded"></div>
                </div>

                {/* Result 1 (Winner) */}
                <GlassCard className="relative p-6 rounded-xl border-green-500/50 bg-[#0a0118] shadow-[0_0_40px_rgba(34,197,94,0.2)] z-20 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-4 h-4 rounded-full bg-white/10"></div>
                                <span className="text-xs text-gray-400">meusite.com.br</span>
                            </div>
                            <h3 className="text-xl font-bold text-blue-400 mb-2 hover:underline cursor-pointer">Como Criar um Site Incrível</h3>
                            <p className="text-sm text-gray-300">
                                Aprenda o passo a passo completo. Domínio, hospedagem, HTML, CSS e Design. O guia definitivo para iniciantes.
                            </p>
                        </div>
                        <div className="bg-green-500/10 p-2 rounded-lg border border-green-500/20">
                            <span className="font-bold text-green-400 text-xs uppercase tracking-wider">#1 Lugar</span>
                        </div>
                    </div>
                </GlassCard>

            </div>
        </div>

    </div>
  );
};

export default Slide10_SEO;