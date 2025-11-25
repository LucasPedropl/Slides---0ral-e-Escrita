import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Palette, Terminal, Code2, PenTool } from 'lucide-react';

const Slide11_Users: React.FC = () => {
  return (
    <div className="flex flex-col h-full px-4 lg:px-8 relative w-full justify-center">
        
        {/* Decorative Background Elements */}
        <Code2 className="absolute top-[10%] right-[5%] text-white/5 w-48 h-48 rotate-12 pointer-events-none" />
        <PenTool className="absolute bottom-[10%] left-[5%] text-white/5 w-48 h-48 -rotate-12 pointer-events-none" />

        {/* Header */}
        <div className="text-center mb-8 lg:mb-10 z-10 flex-shrink-0">
           <h2 className="text-4xl lg:text-6xl font-bold drop-shadow-neon-white mb-3">
              O Arsenal do <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">Criador</span>
           </h2>
           <p className="text-gray-300 text-lg">As duas ferramentas essenciais para transformar ideia em realidade.</p>
        </div>

        {/* Main Content - Dual Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 w-full max-w-7xl mx-auto h-[60vh] lg:h-[55vh]">

           {/* Card 1: Design (Figma) */}
           <div className="group relative h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-[2.5rem] blur-[20px] opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <GlassCard className="h-full w-full p-1 rounded-[2.5rem] border-white/10 group-hover:border-fuchsia-400/50 transition-all duration-500 group-hover:-translate-y-2">
                 <div className="bg-[#1a0b2e] w-full h-full rounded-[2.3rem] overflow-hidden relative isolate">
                    {/* Image Background */}
                    <img 
                        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
                        alt="Figma Design Interface" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-3 rounded-xl bg-fuchsia-500/20 backdrop-blur-md border border-fuchsia-500/30 text-fuchsia-300 group-hover:text-white group-hover:bg-fuchsia-500 transition-colors">
                                <Palette className="w-6 h-6" />
                            </div>
                            <span className="font-mono text-fuchsia-300 text-sm font-bold tracking-widest uppercase">Passo 1</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3 leading-tight">Design & <br/>Prototipagem</h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors">
                            Antes de codar, desenhamos. Ferramentas como o <strong>Figma</strong> funcionam como a "planta baixa" da casa, definindo o visual sem escrever código.
                        </p>
                    </div>
                 </div>
              </GlassCard>
           </div>

           {/* Card 2: Code (VS Code) */}
           <div className="group relative h-full w-full lg:mt-8"> {/* Staggered effect on desktop */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-[2.5rem] blur-[20px] opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <GlassCard className="h-full w-full p-1 rounded-[2.5rem] border-white/10 group-hover:border-purple-400/50 transition-all duration-500 group-hover:-translate-y-2">
                 <div className="bg-[#0f041e] w-full h-full rounded-[2.3rem] overflow-hidden relative isolate">
                    {/* Image Background */}
                    <img 
                        src="https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1000&auto=format&fit=crop" 
                        alt="VS Code Editor" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-3 rounded-xl bg-purple-500/20 backdrop-blur-md border border-purple-500/30 text-purple-300 group-hover:text-white group-hover:bg-purple-500 transition-colors">
                                <Terminal className="w-6 h-6" />
                            </div>
                            <span className="font-mono text-purple-300 text-sm font-bold tracking-widest uppercase">Passo 2</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3 leading-tight">Edição de <br/>Código</h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors">
                            Aqui a mágica acontece. Usamos IDEs como o <strong>VS Code</strong>, que colorem o código, completam comandos e ajudam a evitar erros.
                        </p>
                    </div>
                 </div>
              </GlassCard>
           </div>

        </div>
    </div>
  );
};

export default Slide11_Users;