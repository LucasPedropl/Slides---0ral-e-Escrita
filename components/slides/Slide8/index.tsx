
import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { Smartphone, Monitor, Globe, Menu, LayoutGrid } from 'lucide-react';

const Slide8: React.FC = () => {
  return (
    <div className="flex flex-col h-full px-4 lg:px-8 justify-center relative w-full overflow-hidden">
        
        {/* Background Grid decorative */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ 
                 backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)', 
                 backgroundSize: '30px 30px' 
             }}>
        </div>

        {/* Header */}
        <div className="text-center mb-8 lg:mb-10 z-10 flex-shrink-0 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-sm font-medium mb-4 backdrop-blur-sm">
                <Globe className="w-4 h-4" />
                <span>Tendências Globais</span>
            </div>
           <h2 className="text-4xl lg:text-6xl font-bold drop-shadow-neon-white mb-3">
              Responsividade: <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">A Revolução Mobile-First</span>
           </h2>
           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Um único código, múltiplas experiências. O layout deve fluir como água para se adaptar a qualquer tela.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto h-[60%]">
            
            {/* Left: Explanations */}
            <div className="space-y-6 h-full flex flex-col justify-center animate-fade-in-up order-2 lg:order-1" style={{animationDelay: '0.2s'}}>
                
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors">
                    <div className="p-3 rounded-xl bg-blue-500/20 text-blue-300">
                        <Monitor className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg mb-1">Desktop (Horizontal)</h4>
                        <p className="text-sm text-gray-400">
                            Espaço de sobra. O conteúdo se expande em colunas, menus ficam visíveis e usamos grids complexos.
                        </p>
                    </div>
                </div>

                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 flex items-start gap-4 hover:bg-fuchsia-500/10 transition-colors border-fuchsia-500/20">
                    <div className="p-3 rounded-xl bg-fuchsia-500/20 text-fuchsia-300">
                        <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg mb-1">Mobile (Vertical)</h4>
                        <p className="text-sm text-gray-400">
                            Espaço limitado. O conteúdo empilha (Stack), menus viram "hambúrguer" e a leitura é vertical.
                        </p>
                    </div>
                </div>

                <div className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-mono text-center">
                    @media (max-width: 768px) {'{ flex-direction: column; }'}
                </div>
            </div>

            {/* Right: Device Simulation */}
            <div className="h-full relative flex items-center justify-center animate-fade-in-up order-1 lg:order-2 perspective-1000" style={{animationDelay: '0.4s'}}>
                 
                 {/* Laptop Frame */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] w-[450px] lg:w-[550px] aspect-[16/10] bg-[#1a1a1a] rounded-xl border-[4px] border-[#2d2d2d] shadow-2xl z-10">
                    {/* Laptop Camera */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#333] border border-[#444]"></div>
                    
                    {/* Laptop Screen Content (Desktop Layout) */}
                    <div className="absolute inset-0 m-4 mt-6 bg-white rounded flex flex-col overflow-hidden">
                        {/* Mock Navbar */}
                        <div className="h-8 bg-purple-600 flex items-center justify-between px-4">
                            <div className="w-20 h-3 bg-white/30 rounded"></div>
                            <div className="flex gap-2">
                                <div className="w-10 h-2 bg-white/30 rounded"></div>
                                <div className="w-10 h-2 bg-white/30 rounded"></div>
                                <div className="w-10 h-2 bg-white/30 rounded"></div>
                            </div>
                        </div>
                        {/* Mock Hero */}
                        <div className="h-32 bg-gray-100 flex items-center px-8 gap-8">
                            <div className="flex-1 space-y-2">
                                <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                                <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
                                <div className="w-24 h-6 bg-purple-500 rounded mt-2"></div>
                            </div>
                            <div className="w-32 h-20 bg-purple-200 rounded"></div>
                        </div>
                        {/* Mock Grid (3 Columns) */}
                        <div className="flex-1 bg-white p-4">
                            <div className="grid grid-cols-3 gap-4 h-full">
                                <div className="bg-blue-50 rounded border border-blue-100 p-2 space-y-2">
                                    <div className="w-8 h-8 rounded bg-blue-200"></div>
                                    <div className="w-full h-2 bg-gray-200 rounded"></div>
                                </div>
                                <div className="bg-pink-50 rounded border border-pink-100 p-2 space-y-2">
                                    <div className="w-8 h-8 rounded bg-pink-200"></div>
                                    <div className="w-full h-2 bg-gray-200 rounded"></div>
                                </div>
                                <div className="bg-orange-50 rounded border border-orange-100 p-2 space-y-2">
                                    <div className="w-8 h-8 rounded bg-orange-200"></div>
                                    <div className="w-full h-2 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Laptop Base */}
                    <div className="absolute -bottom-8 -left-10 -right-10 h-8 bg-[#2d2d2d] rounded-b-xl flex justify-center">
                        <div className="w-32 h-3 bg-[#1a1a1a] rounded-b-lg mt-0"></div>
                    </div>
                 </div>

                 {/* Phone Frame */}
                 <div className="absolute bottom-10 right-[18%] w-[100px] lg:w-[120px] aspect-[9/19] bg-[#000] rounded-[2rem] border-[4px] border-[#333] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 transform translate-y-4">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl z-30"></div>
                    
                    {/* Phone Screen Content (Mobile Layout) */}
                    <div className="absolute inset-1 bg-white rounded-[1.8rem] overflow-hidden flex flex-col">
                        {/* Mock Navbar (Burger Menu) */}
                        <div className="h-10 bg-purple-600 flex items-center justify-between px-3 pt-2">
                            <div className="w-12 h-2 bg-white/30 rounded"></div>
                            <Menu className="w-4 h-4 text-white" />
                        </div>

                        {/* Mock Hero (Stacked) */}
                        <div className="bg-gray-100 p-3 flex flex-col items-center text-center gap-2 pb-4">
                            <div className="w-16 h-16 bg-purple-200 rounded-full"></div>
                            <div className="w-full h-3 bg-gray-300 rounded"></div>
                            <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                            <div className="w-20 h-5 bg-purple-500 rounded mt-1"></div>
                        </div>

                        {/* Mock Grid (1 Column / Stacked) */}
                        <div className="flex-1 bg-white p-3 space-y-2 overflow-hidden">
                            <div className="bg-blue-50 rounded p-2 flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-blue-200 shrink-0"></div>
                                <div className="w-full h-1.5 bg-gray-200 rounded"></div>
                            </div>
                            <div className="bg-pink-50 rounded p-2 flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-pink-200 shrink-0"></div>
                                <div className="w-full h-1.5 bg-gray-200 rounded"></div>
                            </div>
                            <div className="bg-orange-50 rounded p-2 flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-orange-200 shrink-0"></div>
                                <div className="w-full h-1.5 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                 </div>

            </div>

        </div>
    </div>
  );
};

export default Slide8;
