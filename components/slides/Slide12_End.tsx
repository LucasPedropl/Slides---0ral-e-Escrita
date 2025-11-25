import React from 'react';

const Slide12_End: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-16 relative">
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] border border-white/5 rounded-full animate-pulse"></div>
          <div className="absolute w-[800px] h-[800px] border border-white/5 rounded-full animation-delay-2000"></div>
      </div>

      <div className="text-center relative z-10 space-y-6">
        <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-purple-400 drop-shadow-[0_0_35px_rgba(255,255,255,0.4)] tracking-tight animate-float">
          Obrigado!
        </h1>
        <p className="text-purple-300 text-xl tracking-widest uppercase font-semibold">Pedro Lucas Mota</p>
      </div>

      <div className="mt-16 flex items-center justify-center z-10 hover:scale-105 transition-transform duration-300">
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-full flex items-center p-2 pl-8 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
           <span className="font-bold text-lg mr-8 text-white">Fim da Apresentação</span>
           <a href="#" className="bg-[#7c3aed] hover:bg-[#6d28d9] px-8 py-4 rounded-full border border-white/10 text-white font-mono transition-colors shadow-lg">
             @pedrolucasmota
           </a>
        </div>
      </div>
    </div>
  );
};

export default Slide12_End;