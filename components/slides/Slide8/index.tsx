
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { GlassCard } from '../../ui/GlassCard';
import { Smartphone, Monitor, Tablet, Wifi, Globe, MousePointer2 } from 'lucide-react';

const data = [
  { name: '2015', mobile: 35, desktop: 65 },
  { name: '2019', mobile: 52, desktop: 48 },
  { name: '2024', mobile: 68, desktop: 32 },
];

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
        <div className="text-center mb-8 lg:mb-12 z-10 flex-shrink-0 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-sm font-medium mb-4 backdrop-blur-sm">
                <Globe className="w-4 h-4" />
                <span>Tendências Globais</span>
            </div>
           <h2 className="text-4xl lg:text-6xl font-bold drop-shadow-neon-white mb-3">
              A Revolução <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">Mobile-First</span>
           </h2>
           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Antigamente, criava-se para computador e adaptava-se para celular. <br/>
              Hoje, <strong>o celular vem primeiro</strong>.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto h-[55%]">
            
            {/* Left: Device Metrics & Concept */}
            <div className="space-y-6 h-full flex flex-col justify-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                
                {/* Device Cards */}
                <div className="grid gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4 group hover:bg-purple-500/10 hover:border-purple-500/30 transition-all cursor-default hover:scale-[1.02]">
                        <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                            <Smartphone className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold text-white text-lg">Smartphone</h4>
                                <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">DOMINANTE</span>
                            </div>
                            <p className="text-sm text-gray-400">Telas pequenas, toque (touch), internet móvel. O design deve ser simples e vertical.</p>
                        </div>
                    </div>

                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4 group hover:bg-blue-500/10 hover:border-blue-500/30 transition-all cursor-default hover:scale-[1.02] opacity-60 hover:opacity-100">
                        <div className="p-3 rounded-xl bg-blue-500/20 text-blue-300 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <Monitor className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold text-white text-lg">Desktop</h4>
                                <span className="text-xs font-mono text-gray-500 bg-gray-500/10 px-2 py-0.5 rounded border border-gray-500/20">SECUNDÁRIO</span>
                            </div>
                            <p className="text-sm text-gray-400">Telas grandes, mouse e teclado. O design expande para mostrar mais detalhes.</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-fuchsia-900/40 to-purple-900/40 border border-fuchsia-500/20 backdrop-blur-md">
                    <div className="flex items-start gap-3">
                        <Wifi className="w-5 h-5 text-fuchsia-400 mt-1" />
                        <p className="text-sm text-gray-200">
                            <strong>Dica de Ouro:</strong> O Google prioriza sites otimizados para celular. Se o seu site não for responsivo, ele desaparece das buscas.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right: The Holographic Chart */}
            <div className="h-full relative animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                 {/* Tablet Frame Effect */}
                 <div className="absolute inset-0 bg-[#0f041e]/80 rounded-[2rem] border-4 border-[#2a2a2a] shadow-2xl flex flex-col overflow-hidden group">
                    
                    {/* Camera / Top Bar */}
                    <div className="h-8 bg-black flex items-center justify-center">
                        <div className="w-16 h-4 bg-[#1a1a1a] rounded-b-xl flex justify-center items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#333]"></div>
                            <div className="w-2 h-2 rounded-full bg-[#112244] border border-[#333]"></div>
                        </div>
                    </div>

                    {/* Screen Content */}
                    <div className="flex-1 relative p-6 bg-gradient-to-b from-[#1a0b2e] to-black">
                        {/* Glare reflection */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-white/5 to-transparent pointer-events-none rounded-bl-full"></div>

                        <div className="flex items-center justify-between mb-8 relative z-10">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Tablet className="w-5 h-5 text-purple-400" />
                                Analytics
                            </h3>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2 text-xs font-mono">
                                    <span className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_8px_#d946ef]"></span> Mobile
                                </div>
                                <div className="flex items-center gap-2 text-xs font-mono">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 opacity-50"></span> Desktop
                                </div>
                            </div>
                        </div>

                        {/* Chart Container - Added min-w to prevent 0 width issues during print render */}
                        <div className="h-[280px] w-full relative z-10 min-w-[300px]">
                            <ResponsiveContainer width="99%" height="100%" minWidth={300} minHeight={200}>
                                <BarChart data={data} barGap={8}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                    <XAxis 
                                        dataKey="name" 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{ fill: '#9ca3af', fontSize: 12, fontFamily: 'monospace' }} 
                                        dy={10}
                                    />
                                    <YAxis hide />
                                    <Tooltip 
                                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                                        contentStyle={{ 
                                            backgroundColor: 'rgba(0,0,0,0.9)', 
                                            borderColor: '#a855f7', 
                                            borderRadius: '8px',
                                            boxShadow: '0 0 20px rgba(168,85,247,0.2)',
                                            color: 'white'
                                        }}
                                        labelStyle={{ color: '#d8b4fe', fontWeight: 'bold' }}
                                    />
                                    <Bar dataKey="mobile" name="Mobile" radius={[4, 4, 0, 0]} animationDuration={0}>
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill="url(#colorMobile)" strokeWidth={0} />
                                        ))}
                                    </Bar>
                                    <Bar dataKey="desktop" name="Desktop" radius={[4, 4, 0, 0]} animationDuration={0}>
                                         {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill="url(#colorDesktop)" strokeWidth={0} />
                                        ))}
                                    </Bar>
                                    <defs>
                                        <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#d946ef" stopOpacity={1}/>
                                            <stop offset="100%" stopColor="#86198f" stopOpacity={0.8}/>
                                        </linearGradient>
                                        <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.5}/>
                                            <stop offset="100%" stopColor="#1e3a8a" stopOpacity={0.2}/>
                                        </linearGradient>
                                    </defs>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                 </div>

                 {/* Floating Mouse Cursor for effect */}
                 <MousePointer2 className="absolute bottom-10 right-10 text-white drop-shadow-[0_0_10px_black] w-8 h-8 animate-bounce opacity-80" />
            </div>

        </div>
    </div>
  );
};

export default Slide8;
