
import React from 'react';
import { Play, Code2, Globe, Cpu, Layers, Sparkles, Terminal } from 'lucide-react';

const Slide1: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full items-center justify-between gap-8 lg:gap-16 relative w-full overflow-hidden lg:overflow-visible">
      
      {/* Background Tech Elements (Decorative) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <Code2 className="absolute top-[10%] left-[10%] text-white/5 w-24 h-24 rotate-12 animate-float" />
          <Terminal className="absolute bottom-[20%] left-[5%] text-white/5 w-32 h-32 -rotate-12 animate-float animation-delay-2000" />
          <Globe className="absolute top-[15%] right-[40%] text-white/5 w-20 h-20 animate-float animation-delay-4000" />
      </div>

      {/* Left Content */}
      <div className="flex-1 space-y-8 z-10 lg:pl-4 relative">
        
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg animate-fade-in-up">
           <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
           <span className="text-purple-200 text-xs font-bold tracking-widest uppercase">Seminário Introdutório</span>
        </div>
        
        {/* Title */}
        <div className="relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
             <h1 className="text-5xl lg:text-[5rem] font-extrabold leading-[1.1] text-white tracking-tight py-2">
              Processo de <br />
              <span className="text-gray-300">Desenvolvimento</span> <br />
              de Software:
            </h1>
            <h1 className="text-6xl lg:text-[6rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] via-[#d8b4fe] to-[#fff] drop-shadow-[0_0_40px_rgba(168,85,247,0.5)] mt-2 pb-4">
               WebSite
            </h1>
            
            {/* Decorator Sparkle */}
            <Sparkles className="absolute -top-8 right-[20%] text-yellow-300 w-12 h-12 animate-pulse" />
        </div>

        <p className="text-lg text-gray-400 max-w-md leading-relaxed border-l-2 border-purple-500/30 pl-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Um guia visual e prático para entender como a internet funciona e como páginas ganham vida.
        </p>

        {/* Action Bar Container */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <button className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-3">
             <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <Play className="w-5 h-5 fill-black relative z-10" />
             <span className="relative z-10">Começar Agora</span>
          </button>
          
          <div className="flex items-center gap-3 bg-white/5 pr-6 pl-2 py-2 rounded-full border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
             <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                PM
             </div>
             <div className="flex flex-col">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Apresentado por</span>
                <span className="text-white font-medium">Pedro Lucas Mota</span>
             </div>
          </div>
        </div>
      </div>

      {/* Right Content - Abstract Composition */}
      <div className="flex-1 relative h-[500px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end perspective-1000 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
        
        {/* Floating Icons Orbiting */}
        <div className="absolute top-[20%] right-[10%] z-30 bg-black/50 p-3 rounded-2xl border border-white/20 backdrop-blur-xl shadow-xl animate-float animation-delay-1000">
             <Code2 className="text-blue-400 w-8 h-8" />
        </div>
        <div className="absolute bottom-[30%] left-[10%] z-30 bg-black/50 p-3 rounded-2xl border border-white/20 backdrop-blur-xl shadow-xl animate-float animation-delay-3000">
             <Layers className="text-purple-400 w-8 h-8" />
        </div>
        <div className="absolute top-[50%] right-[50%] z-30 bg-black/50 p-3 rounded-2xl border border-white/20 backdrop-blur-xl shadow-xl animate-float animation-delay-2000">
             <Cpu className="text-green-400 w-8 h-8" />
        </div>

        {/* Back Image - Design/Concept */}
        <div className="absolute top-10 right-0 w-[65%] aspect-[4/5] rounded-[3rem] overflow-hidden border-[1px] border-white/20 shadow-2xl z-10 transform rotate-6 hover:rotate-2 transition-all duration-700 opacity-60 grayscale hover:grayscale-0">
             <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop" 
                alt="Code Abstract" 
                className="w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-purple-900/40 mix-blend-multiply"></div>
        </div>
        
        {/* Front Image - Main Visual */}
        <div className="absolute bottom-10 left-4 lg:left-12 w-[70%] aspect-square rounded-[2.5rem] overflow-hidden border-[1px] border-white/40 shadow-[0_0_60px_rgba(168,85,247,0.4)] z-20 bg-[#0f041e] transform -rotate-3 hover:rotate-0 transition-all duration-700 group cursor-pointer">
             {/* Fake Browser Header */}
             <div className="h-10 bg-white/10 backdrop-blur-md flex items-center gap-2 px-4 border-b border-white/5">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                </div>
                <div className="mx-auto w-[60%] h-5 bg-white/5 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                    <span className="text-[10px] text-gray-400 font-mono">localhost:3000</span>
                </div>
             </div>
             <img 
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop" 
                alt="Web Development" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 text-white transform group-hover:translate-y-[-5px] transition-transform duration-500">
                <p className="text-xs font-mono text-green-400 mb-2 bg-green-500/10 inline-block px-2 py-1 rounded">&lt;Hello World /&gt;</p>
                <p className="text-2xl font-bold leading-tight">Construindo <br/> o Futuro</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
