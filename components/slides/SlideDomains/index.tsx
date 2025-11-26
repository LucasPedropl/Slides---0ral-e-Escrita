
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Globe, Search, ShoppingCart, Fingerprint, ArrowRight } from 'lucide-react';

const SlideDomains: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-center px-4 lg:px-8 w-full relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center mb-10 z-10 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4 backdrop-blur-sm">
                <Globe className="w-4 h-4" />
                <span>Identidade Digital</span>
            </div>
           <h2 className="text-4xl lg:text-6xl font-bold drop-shadow-neon-white mb-3">
              O Endereço <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">da Web (Domínio)</span>
           </h2>
           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Antes de lançar o foguete, você precisa de um endereço no GPS da internet.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto h-[55%]">
            
            {/* Left: Explanation Cards */}
            <div className="space-y-6 h-full flex flex-col justify-center animate-fade-in-up z-10" style={{animationDelay: '0.2s'}}>
                
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-colors group cursor-default">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-300 group-hover:scale-110 transition-transform">
                            <Fingerprint className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg mb-1">O que é?</h4>
                            <p className="text-sm text-gray-400">
                                É o seu nome único na rede. O computador entende números (IP: 192.168...), mas humanos preferem nomes (google.com).
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-colors group cursor-default">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-300 group-hover:scale-110 transition-transform">
                            <ShoppingCart className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg mb-1">Onde comprar?</h4>
                            <p className="text-sm text-gray-400">
                                Em registradores oficiais. <br/>
                                <span className="text-white font-bold">.br</span> no Registro.br (Nacional). <br/>
                                <span className="text-white font-bold">.com</span> no GoDaddy ou Google Domains (Internacional).
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Right: Visual Simulation */}
            <div className="relative h-full flex items-center justify-center animate-fade-in-up z-10 perspective-1000" style={{animationDelay: '0.4s'}}>
                 
                 {/* Decorative background blob */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-full blur-[80px] opacity-60"></div>

                 {/* Search Card */}
                 <GlassCard className="w-full max-w-md p-8 flex flex-col gap-6 border-indigo-500/30 relative transform rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-700">
                     
                     <div className="text-center mb-2">
                        <h3 className="text-2xl font-bold text-white">Verificar Disponibilidade</h3>
                     </div>

                     {/* Input Simulation */}
                     <div className="relative">
                        <div className="flex items-center bg-[#0a0118] border border-white/20 rounded-xl p-2 pl-4 shadow-inner">
                            <Globe className="w-5 h-5 text-gray-500 mr-3" />
                            <span className="flex-1 font-mono text-white">meusiteincrivel.com</span>
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                <Search className="w-4 h-4" />
                            </button>
                        </div>
                     </div>

                     {/* Results List */}
                     <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm font-bold text-white">meusiteincrivel.com</span>
                            </div>
                            <span className="text-xs text-green-400 font-bold">DISPONÍVEL</span>
                        </div>

                         <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg opacity-60">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <span className="text-sm font-bold text-gray-400">meusiteincrivel.br</span>
                            </div>
                            <span className="text-xs text-red-400 font-bold">EM USO</span>
                        </div>
                     </div>

                     <div className="mt-2 text-center">
                        <p className="text-xs text-gray-400">Custo médio: <span className="text-white font-bold">R$ 40,00 / ano</span></p>
                     </div>

                 </GlassCard>
            </div>

        </div>
    </div>
  );
};

export default SlideDomains;
