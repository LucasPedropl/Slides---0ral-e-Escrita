
import React from 'react';
import { Smartphone, Monitor, Globe, Menu, LayoutGrid, Home, PieChart, Wallet, Settings, Bell, Search, TrendingUp, ArrowUpRight, ArrowDownRight, User } from 'lucide-react';

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
           <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              A tendência global atual exige responsividade, conhecida como a revolução "Mobile-First". O layout das aplicações web deve ser fluido para se adaptar a qualquer tela. Seja computador, celular, tablet ou televisão. Os computadores tem sites mais detalhados enquanto os celulares tem sites mais compactos
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
                    
                    {/* Laptop Screen Content (Desktop Dashboard) */}
                    <div className="absolute inset-0 m-4 mt-6 bg-[#0f172a] rounded flex overflow-hidden font-sans text-white">
                        
                        {/* Sidebar */}
                        <div className="w-14 bg-[#1e293b] flex flex-col items-center py-4 gap-6 border-r border-white/5">
                            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center font-bold">L</div>
                            <div className="flex flex-col gap-6 mt-4">
                                <Home className="w-4 h-4 text-purple-400" />
                                <PieChart className="w-4 h-4 text-gray-400" />
                                <Wallet className="w-4 h-4 text-gray-400" />
                                <Settings className="w-4 h-4 text-gray-400 mt-auto" />
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 flex flex-col">
                            {/* Header */}
                            <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-[#0f172a]">
                                <h3 className="text-[10px] font-bold text-gray-200">Dashboard Financeiro</h3>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 bg-[#1e293b] px-2 py-1 rounded-md border border-white/5">
                                        <Search className="w-3 h-3 text-gray-400" />
                                        <span className="text-[8px] text-gray-500">Buscar...</span>
                                    </div>
                                    <Bell className="w-3 h-3 text-gray-400" />
                                    <div className="w-5 h-5 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full"></div>
                                </div>
                            </div>

                            {/* Dashboard Grid */}
                            <div className="p-4 grid grid-cols-3 gap-3">
                                {/* Stat Card 1 */}
                                <div className="bg-[#1e293b] p-3 rounded-xl border border-white/5">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="p-1.5 bg-green-500/10 rounded-lg"><TrendingUp className="w-3 h-3 text-green-400" /></div>
                                        <span className="text-[8px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded flex items-center gap-0.5">+12% <ArrowUpRight className="w-2 h-2"/></span>
                                    </div>
                                    <div className="text-[9px] text-gray-400">Receita Total</div>
                                    <div className="text-sm font-bold text-white">R$ 45.231</div>
                                </div>

                                {/* Stat Card 2 */}
                                <div className="bg-[#1e293b] p-3 rounded-xl border border-white/5">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="p-1.5 bg-orange-500/10 rounded-lg"><Wallet className="w-3 h-3 text-orange-400" /></div>
                                        <span className="text-[8px] text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded flex items-center gap-0.5">-2% <ArrowDownRight className="w-2 h-2"/></span>
                                    </div>
                                    <div className="text-[9px] text-gray-400">Despesas</div>
                                    <div className="text-sm font-bold text-white">R$ 12.040</div>
                                </div>

                                {/* Stat Card 3 */}
                                <div className="bg-[#1e293b] p-3 rounded-xl border border-white/5">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="p-1.5 bg-blue-500/10 rounded-lg"><User className="w-3 h-3 text-blue-400" /></div>
                                        <span className="text-[8px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded flex items-center gap-0.5">+54 <ArrowUpRight className="w-2 h-2"/></span>
                                    </div>
                                    <div className="text-[9px] text-gray-400">Novos Clientes</div>
                                    <div className="text-sm font-bold text-white">1,203</div>
                                </div>

                                {/* Big Chart Area (Spans 2 cols) */}
                                <div className="col-span-2 bg-[#1e293b] p-3 rounded-xl border border-white/5 h-24 flex flex-col">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[9px] font-bold text-gray-300">Crescimento Anual</span>
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-end justify-between gap-2 px-2">
                                        <div className="w-full bg-purple-500/20 h-[30%] rounded-t-sm relative group"><div className="absolute bottom-0 w-full bg-purple-500 h-[60%] rounded-t-sm"></div></div>
                                        <div className="w-full bg-purple-500/20 h-[50%] rounded-t-sm relative group"><div className="absolute bottom-0 w-full bg-purple-500 h-[70%] rounded-t-sm"></div></div>
                                        <div className="w-full bg-purple-500/20 h-[40%] rounded-t-sm relative group"><div className="absolute bottom-0 w-full bg-purple-500 h-[40%] rounded-t-sm"></div></div>
                                        <div className="w-full bg-purple-500/20 h-[70%] rounded-t-sm relative group"><div className="absolute bottom-0 w-full bg-purple-500 h-[80%] rounded-t-sm"></div></div>
                                        <div className="w-full bg-purple-500/20 h-[60%] rounded-t-sm relative group"><div className="absolute bottom-0 w-full bg-purple-500 h-[90%] rounded-t-sm"></div></div>
                                        <div className="w-full bg-purple-500/20 h-[80%] rounded-t-sm relative group"><div className="absolute bottom-0 w-full bg-purple-500 h-[100%] rounded-t-sm animate-pulse"></div></div>
                                    </div>
                                </div>

                                {/* Recent Activity (Spans 1 col) */}
                                <div className="col-span-1 bg-[#1e293b] p-3 rounded-xl border border-white/5 h-24 flex flex-col gap-2">
                                    <span className="text-[9px] font-bold text-gray-300">Recentes</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-white/10"></div>
                                        <div className="h-1.5 w-12 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-white/10"></div>
                                        <div className="h-1.5 w-10 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-white/10"></div>
                                        <div className="h-1.5 w-14 bg-white/10 rounded"></div>
                                    </div>
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
                    
                    {/* Phone Screen Content (Mobile Dashboard) */}
                    <div className="absolute inset-1 bg-[#0f172a] rounded-[1.8rem] overflow-hidden flex flex-col font-sans text-white">
                        
                        {/* Header (Simplified) */}
                        <div className="h-10 border-b border-white/5 flex items-center justify-between px-3 pt-3 bg-[#1e293b]">
                            <Menu className="w-3 h-3 text-white" />
                            <span className="text-[8px] font-bold">Finanças</span>
                            <div className="w-4 h-4 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full"></div>
                        </div>

                        {/* Stacked Content */}
                        <div className="p-2 flex flex-col gap-2 overflow-y-hidden">
                             {/* Stat Card 1 (Full Width) */}
                             <div className="bg-[#1e293b] p-2 rounded-lg border border-white/5 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-[7px] text-gray-400">Receita</span>
                                    <span className="text-[10px] font-bold">R$ 45k</span>
                                </div>
                                <div className="p-1 bg-green-500/10 rounded"><TrendingUp className="w-3 h-3 text-green-400" /></div>
                            </div>

                             {/* Stat Card 2 (Full Width) */}
                             <div className="bg-[#1e293b] p-2 rounded-lg border border-white/5 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-[7px] text-gray-400">Despesas</span>
                                    <span className="text-[10px] font-bold">R$ 12k</span>
                                </div>
                                <div className="p-1 bg-orange-500/10 rounded"><Wallet className="w-3 h-3 text-orange-400" /></div>
                            </div>

                            {/* Chart (Compressed) */}
                            <div className="bg-[#1e293b] p-2 rounded-lg border border-white/5 h-16 flex items-end gap-1">
                                <div className="w-full bg-purple-500 h-[40%] rounded-t-sm"></div>
                                <div className="w-full bg-purple-500 h-[70%] rounded-t-sm"></div>
                                <div className="w-full bg-purple-500 h-[50%] rounded-t-sm"></div>
                                <div className="w-full bg-purple-500 h-[80%] rounded-t-sm"></div>
                                <div className="w-full bg-purple-500 h-[60%] rounded-t-sm"></div>
                            </div>

                             {/* Stat Card 3 */}
                             <div className="bg-[#1e293b] p-2 rounded-lg border border-white/5 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-[7px] text-gray-400">Clientes</span>
                                    <span className="text-[10px] font-bold">1.2k</span>
                                </div>
                                <div className="p-1 bg-blue-500/10 rounded"><User className="w-3 h-3 text-blue-400" /></div>
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
