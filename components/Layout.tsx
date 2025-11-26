
import React, { useState, useEffect, useRef } from 'react';
import { NavProps } from '../types';
import { Circle, ChevronLeft, ChevronRight, Menu, Printer, Maximize, Minimize } from 'lucide-react';

interface LayoutProps extends NavProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentSlide, 
  totalSlides, 
  nextSlide, 
  prevSlide,
  goToSlide,
  onPrint
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }
  };

  // Logic to handle auto-hiding controls in fullscreen
  useEffect(() => {
    const handleMouseMove = () => {
      // Always show controls on movement
      setShowControls(true);

      // If in fullscreen, restart the hide timer
      if (isFullscreen) {
        if (controlsTimeoutRef.current) {
          clearTimeout(controlsTimeoutRef.current);
        }
        controlsTimeoutRef.current = setTimeout(() => {
          setShowControls(false);
        }, 3000); // Hide after 3 seconds of inactivity
      }
    };

    if (isFullscreen) {
      window.addEventListener('mousemove', handleMouseMove);
      // Start the timer immediately upon entering fullscreen
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    } else {
      // If not fullscreen, always show controls and clear timers
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isFullscreen]);

  return (
    // Changed h-screen to h-full because it is now wrapped in a fixed-size container
    <div className="h-full w-full bg-background text-white font-sans overflow-hidden flex flex-col relative selection:bg-primary selection:text-white print:h-auto print:overflow-visible">
      {/* Background Ambience with Animation (Hidden on Print) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none print:hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] bg-fuchsia-900/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* Header (Hidden on Print) */}
      <header className="w-full p-6 md:p-8 flex justify-between items-center z-50 relative flex-shrink-0 print:hidden">
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
      <main className="flex-1 relative flex items-center justify-center p-4 md:p-8 z-10 w-full max-w-[95rem] mx-auto overflow-hidden print:overflow-visible print:block print:h-auto">
        <div className="w-full h-full flex flex-col justify-center relative print:block print:h-auto">
            {children}
        </div>
      </main>

      {/* Navigation Controls (Hidden on Print) */}
      <div 
        className={`fixed bottom-8 right-8 z-50 flex items-center gap-6 backdrop-blur-sm bg-black/20 p-3 rounded-full border border-white/10 shadow-glass print:hidden transition-all duration-500 ${
          !showControls && isFullscreen ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
        onMouseEnter={() => setShowControls(true)} // Keep visible if hovering directly over buttons
      >
        <span className="text-xs text-gray-400 font-mono ml-2">
          {String(currentSlide + 1).padStart(2, '0')} <span className="text-gray-600">/</span> {String(totalSlides).padStart(2, '0')}
        </span>
        
        {/* Fullscreen Button */}
        <button 
             onClick={toggleFullscreen}
             className="p-3 rounded-full bg-white/5 hover:bg-white/20 hover:text-blue-400 transition-all active:scale-95 group"
             title={isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}
        >
             {isFullscreen ? (
                <Minimize className="w-5 h-5 group-hover:scale-110 transition-transform" />
             ) : (
                <Maximize className="w-5 h-5 group-hover:scale-110 transition-transform" />
             )}
        </button>

        {/* Print Button */}
        {onPrint && (
           <button 
             onClick={onPrint}
             className="p-3 rounded-full bg-white/5 hover:bg-white/20 hover:text-green-400 transition-all active:scale-95 group border-r border-white/10 mr-2"
             title="Baixar PDF"
           >
             <Printer className="w-5 h-5 group-hover:scale-110 transition-transform" />
           </button>
        )}

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
