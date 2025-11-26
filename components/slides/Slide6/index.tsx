
import React from 'react';
import { Layout, Wifi } from 'lucide-react';

const Slide6: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full px-4 lg:px-12 w-full relative overflow-hidden">
        
        {/* Background Grid (Blueprint Effect) */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ 
                 backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
             }}>
        </div>
        
        {/* Left Column: Content & Explanation */}
        <div className="relative z-10 flex flex-col justify-center space-y-8 order-2 lg:order-1 pb-8 lg:pb-0 animate-fade-in-up">
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-4 backdrop-blur-sm">
                    <Layout className="w-4 h-4" />
                    <span>Arquitetura da Informação</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold drop-shadow-neon-white mb-4 leading-tight">
                    Anatomia da <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Página Web</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-cyan-500 pl-6">
                    Assim como o corpo humano tem cabeça, tronco e membros, um site segue uma estrutura lógica universal.
                </p>
            </div>

            {/* Legend / Key Items */}
            <div className="space-y-3">
                 <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-500/10 hover:border-purple-500/30 transition-colors group">
                     <div className="w-10 h-10 rounded bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs border border-purple-500/30">H</div>
                     <div>
                         <span className="text-purple-200 font-bold text-sm block">HEADER (Cabeçalho)</span>
                         <span className="text-gray-400 text-xs">Onde fica o logo e o menu.</span>
                     </div>
                 </div>
                 
                 <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/30 transition-colors group">
                     <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs border border-blue-500/30">M</div>
                     <div>
                         <span className="text-blue-200 font-bold text-sm block">MEIO (Nav + Main + Aside)</span>
                         <span className="text-gray-400 text-xs">Conteúdo principal ladeado por navegação.</span>
                     </div>
                 </div>

                 <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-gray-500/10 hover:border-gray-500/30 transition-colors group">
                     <div className="w-10 h-10 rounded bg-gray-500/20 flex items-center justify-center text-gray-400 font-bold text-xs border border-gray-500/30">F</div>
                     <div>
                         <span className="text-gray-200 font-bold text-sm block">FOOTER (Rodapé)</span>
                         <span className="text-gray-400 text-xs">Informações finais e contato.</span>
                     </div>
                 </div>
            </div>
        </div>

        {/* Right Column: Visual Monitor (Replaced Blueprint) */}
        <div className="relative z-10 w-full h-full flex items-center justify-center order-1 lg:order-2 perspective-[1200px] animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            
            {/* 1. CPU Tower (Right Side) */}
            <div className="hidden xl:block absolute bottom-[10%] right-[-5%] w-24 h-[300px] bg-[#151515] rounded-xl border border-gray-800 shadow-2xl transform rotate-y-[-15deg] z-0">
                 {/* Vents */}
                 <div className="absolute top-8 left-4 right-4 h-32 flex flex-col gap-2 opacity-50">
                    {[...Array(6)].map((_, i) => <div key={i} className="h-1 bg-black rounded-full"></div>)}
                 </div>
                {/* RGB Strip */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full blur-[4px] animate-pulse"></div>
            </div>

            {/* 2. Monitor Group */}
            <div className="relative flex flex-col items-center transform translate-y-4">
                
                {/* Screen Frame */}
                <div className="relative w-[95vw] lg:w-[600px] aspect-video bg-[#0f0f0f] rounded-t-2xl rounded-b-lg border-t-8 border-x-8 border-b-[24px] border-[#1a1a1a] shadow-[0_0_120px_rgba(34,211,238,0.15)] overflow-hidden flex flex-col z-20 group transform rotate-x-2">
                    
                    {/* Screen Reflection/Glare */}
                    <div className="absolute top-0 right-0 w-[80%] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 pointer-events-none z-50 mix-blend-overlay"></div>

                    {/* Browser Toolbar Mockup */}
                    <div className="h-9 bg-[#252526] w-full flex items-center px-4 gap-4 border-b border-black/50 z-30 flex-shrink-0">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <div className="flex-1 h-6 bg-[#1a1a1a] rounded flex items-center justify-center text-[11px] text-gray-500 font-mono border border-white/5 relative group/url">
                            <span className="group-hover/url:text-white transition-colors">127.0.0.1:5500/anatomy.html</span>
                            <div className="absolute right-2 text-green-500/50">
                                <Wifi className="w-3 h-3" />
                            </div>
                        </div>
                    </div>

                    {/* THE ANATOMY RESULT (INSIDE MONITOR) */}
                    <div className="flex-1 bg-[#121212] flex flex-col p-4 gap-3 overflow-hidden font-sans select-none relative">
                        
                        {/* Background Grid */}
                        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
                            style={{ 
                                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                                backgroundSize: '20px 20px' 
                            }}>
                        </div>

                        {/* HEADER */}
                        <header className="h-14 w-full bg-purple-600/20 backdrop-blur-md rounded-lg flex items-center justify-between px-4 border border-purple-500/30 shadow-lg z-10 relative group hover:bg-purple-600/30 transition-colors">
                            <div className="flex items-center gap-2">
                                <span className="text-purple-300 font-bold tracking-widest text-xs">HEADER</span>
                            </div>
                            <div className="absolute -top-2 left-2 text-[8px] font-mono bg-purple-600 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;header&gt;</div>
                        </header>

                        {/* MIDDLE SECTION */}
                        <div className="flex-1 flex gap-3 w-full z-10 min-h-0">
                            {/* NAV */}
                            <nav className="w-1/5 h-full bg-cyan-600/10 backdrop-blur-md rounded-lg flex flex-col items-center py-4 border border-cyan-500/30 shadow-lg relative gap-2 group hover:bg-cyan-600/20 transition-colors">
                                <span className="text-cyan-400 font-bold tracking-widest text-[10px] mb-2">NAV</span>
                                <div className="w-1/2 h-1.5 bg-cyan-500/30 rounded"></div>
                                <div className="w-1/2 h-1.5 bg-cyan-500/30 rounded"></div>
                                <div className="absolute -top-2 left-1 text-[8px] font-mono bg-cyan-600 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;nav&gt;</div>
                            </nav>

                            {/* MAIN */}
                            <main className="flex-1 h-full bg-blue-600/10 backdrop-blur-md rounded-lg flex flex-col items-center justify-center border border-blue-500/30 shadow-lg relative group hover:bg-blue-600/20 transition-colors">
                                <span className="text-blue-400 font-bold tracking-widest text-sm">MAIN</span>
                                <div className="w-3/4 h-2 bg-blue-500/20 rounded mt-2"></div>
                                <div className="w-1/2 h-2 bg-blue-500/20 rounded mt-1"></div>
                                <div className="absolute -top-2 left-2 text-[8px] font-mono bg-blue-600 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;main&gt;</div>
                            </main>

                            {/* ASIDE */}
                            <aside className="w-1/4 h-full bg-pink-500/10 backdrop-blur-md rounded-lg flex flex-col p-2 border border-pink-500/30 shadow-lg relative group hover:bg-pink-500/20 transition-colors">
                                <span className="text-pink-400 font-bold tracking-widest text-[10px] mb-2 text-center">ASIDE</span>
                                <div className="w-full h-1/3 bg-pink-500/20 rounded mb-1"></div>
                                <div className="absolute -top-2 right-1 text-[8px] font-mono bg-pink-500 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;aside&gt;</div>
                            </aside>
                        </div>

                        {/* FOOTER */}
                        <footer className="h-10 w-full bg-gray-600/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-gray-500/30 shadow-lg z-10 relative group hover:bg-gray-600/20 transition-colors">
                            <span className="text-gray-400 font-bold tracking-widest text-[10px]">FOOTER</span>
                            <div className="absolute -top-2 left-2 text-[8px] font-mono bg-gray-600 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;footer&gt;</div>
                        </footer>

                    </div>
                </div>

                {/* Stand */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-16 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] z-10 relative shadow-inner"></div>
                    <div className="w-32 h-2 bg-[#252525] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10"></div>
                    {/* Reflection on desk */}
                    <div className="w-48 h-8 bg-black/40 blur-xl rounded-full -mt-2"></div>
                </div>

                {/* Peripherals (Foreground) */}
                <div className="absolute -bottom-24 flex gap-12 items-start opacity-90 scale-90">
                    {/* Keyboard */}
                    <div className="w-[300px] h-[15px] bg-[#252525] rounded-t-lg transform skew-x-12 shadow-2xl relative border-t border-white/5">
                        <div className="absolute top-1 left-2 right-2 flex gap-0.5 justify-center">
                             {[...Array(12)].map((_,i) => <div key={i} className="flex-1 h-2 bg-[#111] rounded-[1px]"></div>)}
                        </div>
                    </div>
                    {/* Mouse */}
                    <div className="w-16 h-8 bg-[#252525] rounded-t-full shadow-2xl relative border-t border-white/5">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-black"></div>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  );
};

export default Slide6;
