import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { CloudUpload } from 'lucide-react';

const Slide8_Future: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full px-4 lg:px-8">
        {/* Left Content */}
        <div className="space-y-10 relative z-10">
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm font-medium mb-4 backdrop-blur-sm">
                    <CloudUpload className="w-4 h-4" />
                    <span>Fase Final</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-neon-white mb-2">
                    Publicação <br/> (Deploy)
                </h2>
                <h3 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400">Colocando no ar</h3>
            </div>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                 <p className="border-l-4 border-purple-500 pl-6 py-2">
                    "Deploy" é o ato de enviar seus arquivos do seu computador para um servidor na nuvem.
                </p>
                <p className="pl-6">
                    Hoje em dia, serviços como <strong>Vercel</strong> e <strong>Netlify</strong> permitem fazer isso gratuitamente e em segundos, conectando direto com seu repositório de código.
                </p>
            </div>

            <button className="group relative px-10 py-4 rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95">
                 <span className="relative z-10 group-hover:text-purple-700 transition-colors">Ver tutorial de Deploy</span>
             </button>
        </div>

        {/* Right Images (Stacked 3D Effect) */}
        <div className="relative h-[600px] flex items-center justify-center perspective-1000 group">
             {/* Back Card */}
             <div className="absolute top-[10%] right-[5%] w-[80%] aspect-video rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl transition-all duration-700 transform group-hover:translate-x-8 group-hover:-translate-y-4 group-hover:rotate-2 opacity-60 grayscale group-hover:grayscale-0">
                <img 
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop" 
                    alt="Servers" 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Middle Card */}
             <div className="absolute w-[85%] aspect-video rounded-[2rem] overflow-hidden border border-white/30 shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-700 transform z-10 bg-[#1a0b2e]">
                <img 
                    src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop" 
                    alt="Cloud Network" 
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8 bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10">
                        <h4 className="text-3xl font-bold text-white mb-2">Online</h4>
                        <p className="text-sm text-gray-300">Acessível Globalmente</p>
                    </div>
                </div>
            </div>

            {/* Front Floating Element */}
             <div className="absolute -bottom-8 -left-8 z-20 bg-gradient-to-br from-fuchsia-600 to-purple-800 p-1 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-float">
                <div className="bg-[#120524] rounded-[1.3rem] p-6 flex gap-4 items-center">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">🌐</div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Status</p>
                        <p className="text-2xl font-bold text-white">LIVE</p>
                    </div>
                </div>
             </div>
        </div>
    </div>
  );
};

export default Slide8_Future;