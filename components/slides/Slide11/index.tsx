
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { ChefHat, Database, ArrowLeftRight } from 'lucide-react';

const Slide11: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center px-4 lg:px-8 relative overflow-hidden">
        
        <div className="text-center mb-8 flex-shrink-0 z-20 animate-fade-in-up">
            <h2 className="text-4xl lg:text-6xl font-bold drop-shadow-neon-white mb-4">
               Front-end <span className="text-gray-500 px-2">vs</span> Back-end
            </h2>
            <p className="text-gray-300 text-lg">Para entender como um site funciona por completo, usamos a <strong className="text-white border-b border-orange-500">Analogia do Restaurante</strong>.</p>
        </div>

        {/* Split Screen Container */}
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto h-[60vh] gap-4 relative z-10">
            
            {/* Front-end Side (The Dining Room) */}
            <div className="flex-1 group relative transition-all duration-700 hover:flex-[1.5]">
                 <div className="absolute inset-0 bg-orange-500/10 rounded-[2rem] lg:rounded-l-[2.5rem] lg:rounded-r-none blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 
                 <GlassCard className="h-full w-full p-0 rounded-[2rem] lg:rounded-l-[2.5rem] lg:rounded-r-none border-white/10 group-hover:border-orange-400/50 overflow-hidden relative isolate bg-[#0a0118]">
                    <img 
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" 
                        alt="Restaurant Dining Room" 
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="bg-orange-500 p-3 rounded-xl w-fit mb-4 text-white shadow-lg group-hover:scale-110 transition-transform">
                            <ArrowLeftRight className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">Front-end (Salão)</h3>
                        <p className="text-gray-300 leading-relaxed max-w-md group-hover:text-white transition-colors">
                            É o que o cliente vê. As mesas, a decoração, o cardápio e o garçom. <br/>
                            No site, é o <strong>HTML, CSS e JavaScript</strong> rodando no seu navegador.
                        </p>
                    </div>
                 </GlassCard>
            </div>

            {/* Back-end Side (The Kitchen) */}
            <div className="flex-1 group relative transition-all duration-700 hover:flex-[1.5]">
                 <div className="absolute inset-0 bg-blue-600/10 rounded-[2rem] lg:rounded-r-[2.5rem] lg:rounded-l-none blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 
                 <GlassCard className="h-full w-full p-0 rounded-[2rem] lg:rounded-r-[2.5rem] lg:rounded-l-none border-white/10 group-hover:border-blue-500/50 overflow-hidden relative isolate bg-[#050510]">
                    <img 
                        src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop" 
                        alt="Professional Kitchen" 
                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                    {/* Matrix Rain Effect Overlay (Subtle) */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(32, 255, 77, .1) 25%, rgba(32, 255, 77, .1) 26%, transparent 27%, transparent 74%, rgba(32, 255, 77, .1) 75%, rgba(32, 255, 77, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(32, 255, 77, .1) 25%, rgba(32, 255, 77, .1) 26%, transparent 27%, transparent 74%, rgba(32, 255, 77, .1) 75%, rgba(32, 255, 77, .1) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px'}}></div>

                    <div className="absolute inset-0 p-8 flex flex-col justify-end lg:items-end lg:text-right">
                        <div className="bg-blue-600 p-3 rounded-xl w-fit mb-4 text-white shadow-lg group-hover:scale-110 transition-transform">
                            <Database className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">Back-end (Cozinha)</h3>
                        <p className="text-gray-300 leading-relaxed max-w-md group-hover:text-white transition-colors">
                            É onde a comida é feita. Ninguém vê, mas sem ele, não tem jantar. <br/>
                            Processa dados, salva senhas e conecta com o banco de dados.
                        </p>
                    </div>
                 </GlassCard>
            </div>

        </div>

    </div>
  );
};

export default Slide11;
