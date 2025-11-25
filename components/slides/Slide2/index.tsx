
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Globe, Server, FileCode } from 'lucide-react';

const Slide2: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-12 px-4 lg:px-12 w-full relative overflow-visible">
        
        {/* Background Glow - Freed from box constraint */}
        {/* Placed at root to ensure it isn't clipped by smaller containers and covers a large area naturally */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vh] h-[120vh] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        {/* Left: Visual Representation */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-[70vh] flex items-center justify-center order-2 lg:order-1 z-10">
            
            {/* Central Visual Stack */}
            <div className="relative w-full max-w-2xl aspect-square lg:aspect-[4/3] flex items-center justify-center">
                
                {/* Floating Icons representing the flow */}
                <div className="absolute top-[-5%] left-[5%] animate-float z-40">
                     <div className="bg-[#1a0b2e] p-3 lg:p-4 rounded-2xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)] backdrop-blur-xl">
                        <Globe className="w-8 h-8 lg:w-10 lg:h-10 text-blue-400" />
                     </div>
                </div>

                <div className="absolute bottom-[5%] right-[5%] animate-float animation-delay-2000 z-40">
                     <div className="bg-[#1a0b2e] p-3 lg:p-4 rounded-2xl border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.3)] backdrop-blur-xl">
                        <Server className="w-8 h-8 lg:w-10 lg:h-10 text-purple-400" />
                     </div>
                </div>

                {/* Pulse Rings */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                    <div className="w-[300px] h-[300px] border border-white/10 rounded-full animate-pulse"></div>
                    <div className="w-[500px] h-[500px] border border-white/5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animation-delay-1000"></div>
                 </div>

                {/* Photo Stack Effect - Spread Layout */}
                <div className="relative w-full h-full group perspective-1000">
                    
                    {/* Card 1: Top Left (Cybersecurity) */}
                    <div className="absolute top-0 left-0 w-[55%] aspect-video rounded-2xl overflow-hidden border-[1px] border-white/10 shadow-2xl bg-[#0a0118] transform -rotate-12 hover:-rotate-6 transition-all duration-500 hover:scale-110 z-20 hover:z-50 origin-bottom-right">
                        <img 
                             src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
                             alt="Cybersecurity"
                             className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors"></div>
                    </div>

                    {/* Card 2: Top Right (Servers) */}
                    <div className="absolute top-8 right-0 w-[55%] aspect-video rounded-2xl overflow-hidden border-[1px] border-white/10 shadow-2xl bg-[#0a0118] transform rotate-12 hover:rotate-6 transition-all duration-500 hover:scale-110 z-10 hover:z-50 origin-bottom-left">
                         <img 
                             src="https://blog.consistem.com.br/wp-content/uploads/2022/03/05_04-7-dicas-de-como-melhorar-a-performance-do-servidor-da-sua-empresa-2.jpg"
                             alt="Servers"
                             className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        />
                         <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors"></div>
                    </div>

                    {/* Card 3: Bottom Center (Main WWW) */}
                    <div className="absolute bottom-0 left-1/2 w-[60%] aspect-video rounded-2xl overflow-hidden border-[1px] border-white/20 shadow-[0_0_50px_rgba(168,85,247,0.3)] bg-[#0a0118] transform -translate-x-1/2 hover:scale-110 transition-all duration-500 z-30 hover:z-50">
                        <img 
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
                            alt="Global Network" 
                            className="w-full h-full object-cover opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent to-transparent"></div>
                        
                        {/* Floating Status Badge */}
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
                            <span className="text-xs font-mono text-green-400 uppercase font-bold">World Wide Web</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* Right: Content & Analogy */}
        <div className="flex-1 w-full max-w-xl relative z-20 order-1 lg:order-2">
            <div className="mb-10 animate-fade-in-up">
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight drop-shadow-neon-white mb-4">
                    Como funciona <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">a Internet?</span>
                </h2>
                <p className="text-gray-400 text-lg">Para entender o invisível, vamos usar a <strong className="text-white border-b border-purple-500">Analogia da Casa</strong>.</p>
            </div>

            <div className="space-y-4">
                {/* Item 1: Domain */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <GlassCard className="p-1 group hover:border-blue-400/50 transition-colors cursor-default">
                        <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-5">
                            <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                <Globe className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">O Endereço (Domínio)</h4>
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                    Ex: <code>google.com</code>. É o endereço que você digita no GPS para encontrar a localização da casa.
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Item 2: Hosting */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <GlassCard className="p-1 group hover:border-purple-400/50 transition-colors cursor-default">
                        <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-5">
                            <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                                <Server className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">O Terreno (Hospedagem)</h4>
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                    Um computador ligado 24h (Servidor) onde a "casa" é construída. Sem terreno, a casa não existe.
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Item 3: Files */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                    <GlassCard className="p-1 group hover:border-pink-400/50 transition-colors cursor-default">
                        <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-5">
                            <div className="p-4 rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.1)] group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                                <FileCode className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-pink-200 transition-colors">A Casa (Arquivos)</h4>
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                    HTML, CSS e imagens. É a estrutura, as paredes e a decoração que o visitante vê.
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Slide2;
