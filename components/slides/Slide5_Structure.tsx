import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { LayoutTemplate } from 'lucide-react';

const Slide5_Structure: React.FC = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center px-4 lg:px-8 w-full">
        
        <div className="text-center mb-8 flex-shrink-0">
            <h2 className="text-4xl lg:text-6xl font-bold drop-shadow-neon-white mb-2">
                Anatomia da <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Página</span>
            </h2>
            <p className="text-gray-300 text-lg">Todo site segue uma estrutura lógica de caixas dentro de caixas.</p>
        </div>

        {/* Visual Wireframe */}
        <div className="w-full max-w-5xl h-[60vh] relative">
            <GlassCard className="w-full h-full p-4 border-2 border-dashed border-white/10 flex flex-col gap-4 bg-[#0a0118]/80">
                
                {/* Header Section */}
                <div className="w-full h-[15%] rounded-xl border-2 border-purple-500/50 bg-purple-500/10 flex items-center justify-center relative group hover:bg-purple-500/20 transition-all cursor-pointer">
                    <span className="text-purple-300 font-mono font-bold text-xl tracking-wider group-hover:scale-110 transition-transform">HEADER (Cabeçalho)</span>
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-purple-500 text-white text-xs font-mono">&lt;header&gt;</div>
                </div>

                {/* Navbar */}
                <div className="w-full h-[8%] rounded-xl border-2 border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center relative group hover:bg-cyan-500/20 transition-all cursor-pointer">
                    <span className="text-cyan-300 font-mono font-bold text-lg tracking-wider group-hover:scale-110 transition-transform">NAV (Menu)</span>
                    <div className="absolute top-1 right-2 px-2 py-0.5 rounded bg-cyan-600 text-white text-xs font-mono">&lt;nav&gt;</div>
                </div>

                {/* Middle Section (Main + Aside) */}
                <div className="flex-1 w-full flex gap-4 min-h-0">
                    {/* Main Content */}
                    <div className="flex-[3] h-full rounded-xl border-2 border-blue-500/50 bg-blue-500/10 flex flex-col items-center justify-center relative group hover:bg-blue-500/20 transition-all cursor-pointer p-4">
                        <span className="text-blue-300 font-mono font-bold text-xl tracking-wider mb-2 group-hover:scale-110 transition-transform">MAIN (Conteúdo Principal)</span>
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-blue-600 text-white text-xs font-mono">&lt;main&gt;</div>
                        
                        {/* Fake Articles */}
                        <div className="w-[80%] h-4 bg-blue-400/20 rounded mt-4"></div>
                        <div className="w-[80%] h-4 bg-blue-400/20 rounded mt-2"></div>
                        <div className="w-[60%] h-4 bg-blue-400/20 rounded mt-2 mb-4"></div>
                        <div className="w-24 h-24 bg-blue-400/20 rounded-lg"></div>
                    </div>

                    {/* Aside (Sidebar) */}
                    <div className="flex-[1] h-full rounded-xl border-2 border-pink-500/50 bg-pink-500/10 flex flex-col items-center justify-center relative group hover:bg-pink-500/20 transition-all cursor-pointer hidden md:flex">
                        <span className="text-pink-300 font-mono font-bold text-lg tracking-wider group-hover:scale-110 transition-transform text-center">ASIDE<br/>(Barra Lateral)</span>
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-pink-600 text-white text-xs font-mono">&lt;aside&gt;</div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="w-full h-[10%] rounded-xl border-2 border-gray-500/50 bg-gray-500/10 flex items-center justify-center relative group hover:bg-gray-500/20 transition-all cursor-pointer">
                    <span className="text-gray-300 font-mono font-bold text-xl tracking-wider group-hover:scale-110 transition-transform">FOOTER (Rodapé)</span>
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-gray-600 text-white text-xs font-mono">&lt;footer&gt;</div>
                </div>

            </GlassCard>
        </div>
    </div>
  );
};

export default Slide5_Structure;