import React from 'react';
import { NavProps } from '../types';
import { Circle, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

interface LayoutProps extends NavProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentSlide, 
  totalSlides, 
  nextSlide, 
  prevSlide,
  goToSlide
}) => {
  return (
    <div className="h-screen w-full bg-background text-white font-sans overflow-hidden flex flex-col relative selection:bg-primary selection:text-white">
      {/* Background Ambience with Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] bg-fuchsia-900/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* Header */}
      <header className="w-full p-6 md:p-8 flex justify-between items-center z-50 relative flex-shrink-0">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => goToSlide(0)}>
          <div className="relative">
             <Circle className="w-4 h-4 text-[#a855f7] fill-[#a855f7] relative z-10" />
             <div className="absolute inset-0 bg-purple-500 blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-2xl font-bold tracking-wide text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all">WebSeminar</span>
        </div>
        <nav className="hidden md:flex gap-12 text-sm font-medium text-white/70">
          {['Intro', 'Tecnologias', 'Deploy'].map((item) => (
             <button key={item} className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
             </button>
          ))}
        </nav>
        <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative flex items-center justify-center p-4 md:p-8 z-10 w-full max-w-[95rem] mx-auto overflow-hidden">
        <div className="w-full h-full flex flex-col justify-center relative">
            {children}
        </div>
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-6 backdrop-blur-sm bg-black/20 p-3 rounded-full border border-white/10 shadow-glass">
        <span className="text-xs text-gray-400 font-mono ml-2">
          {String(currentSlide + 1).padStart(2, '0')} <span className="text-gray-600">/</span> {String(totalSlides).padStart(2, '0')}
        </span>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/5 hover:bg-white/20 hover:text-primary transition-all active:scale-95 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/5 hover:bg-white/20 hover:text-primary transition-all active:scale-95 group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;