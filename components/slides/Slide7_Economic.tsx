import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GlassCard } from '../ui/GlassCard';

const data = [
  { name: '2015', mobile: 35, desktop: 65 },
  { name: '2019', mobile: 52, desktop: 48 },
  { name: '2024', mobile: 68, desktop: 32 },
];

const Slide7_Economic: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full px-4 lg:px-8">
        {/* Left Content */}
        <div className="space-y-8 animate-float">
             <h2 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-neon-white">
                Design <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300">Responsivo</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed border-l-2 border-purple-500/30 pl-6">
                 <p>
                    O seu site precisa funcionar em qualquer lugar. Hoje, a maioria das pessoas acessa a internet pelo celular.
                </p>
                <p>
                    Criar um site "Mobile First" (pensado primeiro para celular) não é mais uma opção, é uma obrigação para ter sucesso.
                </p>
            </div>
        </div>

        {/* Right Chart */}
        <div className="relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2.2rem] blur opacity-30 animate-pulse"></div>
            <GlassCard className="h-[450px] w-full p-8 border border-white/10 bg-black/40">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-semibold text-white/80">Acesso Mobile vs Desktop (%)</h3>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-3 h-3 rounded-full bg-[#9333ea] shadow-[0_0_10px_#9333ea]"></div>
                            <span>Mobile</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-3 h-3 rounded-full bg-[#d8b4fe] shadow-[0_0_10px_#d8b4fe]"></div>
                            <span>Desktop</span>
                        </div>
                    </div>
                </div>
                
                <ResponsiveContainer width="100%" height="80%">
                    <BarChart data={data} barGap={12}>
                        <defs>
                            <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#9333ea" stopOpacity={1}/>
                                <stop offset="100%" stopColor="#581c87" stopOpacity={0.8}/>
                            </linearGradient>
                            <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#e879f9" stopOpacity={1}/>
                                <stop offset="100%" stopColor="#c026d3" stopOpacity={0.8}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                        <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#9ca3af', fontSize: 14, fontWeight: 500 }} 
                            dy={15}
                        />
                        <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#9ca3af', fontSize: 12 }} 
                        />
                        <Tooltip 
                            cursor={{fill: 'rgba(255,255,255,0.05)'}}
                            contentStyle={{ 
                                backgroundColor: 'rgba(10, 1, 24, 0.9)', 
                                borderColor: 'rgba(168, 85, 247, 0.3)', 
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                                color: 'white'
                            }}
                            itemStyle={{ color: '#e5e7eb' }}
                        />
                        <Bar 
                            dataKey="mobile" 
                            name="Mobile"
                            fill="url(#colorMobile)" 
                            radius={[6, 6, 0, 0]} 
                            animationDuration={1500}
                        />
                        <Bar 
                            dataKey="desktop" 
                            name="Desktop"
                            fill="url(#colorDesktop)" 
                            radius={[6, 6, 0, 0]} 
                            animationDuration={1500}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </GlassCard>
        </div>
    </div>
  );
};

export default Slide7_Economic;