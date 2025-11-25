
import React, { useState } from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Rocket, Globe2, Check, Server } from 'lucide-react';

const Slide12: React.FC = () => {
  const [isLaunched, setIsLaunched] = useState(false);

  return (
    <div className="flex flex-col h-full justify-center px-4 lg:px-8 w-full relative overflow-hidden">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0118] to-[#0a0118] z-0 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto w-full relative z-10">
            
            {/* Left: Interactive Launch Pad */}
            <div className="order-2 lg:order-1 flex flex-col items-center">
                 <div className="relative group cursor-pointer" onClick={() => setIsLaunched(true)}>
                     {/* Button Glow */}
                     <div className={`absolute inset-0 bg-red-500 rounded-full blur-[40px] opacity-20 transition-all duration-500 ${isLaunched ? 'scale-150 opacity-40' : 'group-hover:opacity-40'}`}></div>
                     
                     <div className={`w-48 h-48 rounded-full border-4 border-white/10 flex flex-col items-center justify-center relative z-10 backdrop-blur-md transition-all duration-300 ${isLaunched ? 'bg-green-500/20 border-green-500/50 scale-95' : 'bg-red-500/10 border-red-500/50 group-hover:scale-105'}`}>
                        {isLaunched ? (
                            <Check className="w-20 h-20 text-green-400 animate-bounce" />
                        ) : (
                            <Rocket className="w-20 h-20 text-red-400 group-hover:text-red-200 transition-colors" />
                        )}
                     </div>
                     
                     {/* Text Label */}
                     <div className="absolute -bottom-12 left-0 right-0 text-center">
                         <span className={`text-lg font-bold tracking-widest uppercase ${isLaunched ? 'text-green-400' : 'text-gray-400'}`}>
                             {isLaunched ? 'DEPLOY SUCCESS' : 'CLIQUE PARA PUBLICAR'}
                         </span>
                     </div>
                 </div>
            </div>

            {/* Right: Explanation & Hologram */}
            <div className="order-1 lg:order-2 space-y-8">
                <div>
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4 backdrop-blur-sm">
                        <Server className="w-4 h-4" />
                        <span>Mission Control</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-neon-white mb-4">
                        Centro de <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Lançamento</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-indigo-500 pl-6">
                        O código no seu computador (Localhost) é como um foguete na garagem. <br/>
                        O <strong>Deploy</strong> é o lançamento para o espaço (Nuvem), onde o mundo todo pode ver.
                    </p>
                </div>

                {/* Status Cards */}
                <div className="grid gap-4">
                    <GlassCard className="p-4 flex items-center gap-4 bg-indigo-900/20 border-indigo-500/30">
                        <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-300">
                             <Globe2 className={`w-6 h-6 ${isLaunched ? 'animate-spin' : ''}`} style={{animationDuration: '3s'}} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold">Acessibilidade Global</h4>
                            <p className="text-sm text-gray-400">Qualquer pessoa, em qualquer lugar, pode acessar seu URL.</p>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Slide12;
