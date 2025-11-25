
import React, { useEffect, useState } from 'react';
import { Play, CheckCircle, Activity, Wifi, Server } from 'lucide-react';

const SlideResult: React.FC = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [showSuccess, setShowSuccess] = useState(true);

  // Replicating the JS Logic from the SlideJS inside the "Monitor"
  useEffect(() => {
    // Hide success message after 5 seconds
    const successTimer = setTimeout(() => {
        setShowSuccess(false);
    }, 5000);

    // Simulate infinite loop from SlideJS (setInterval)
    // Toggles between "MAIN" and "SISTEMA ONLINE" every 2 seconds
    const loopInterval = setInterval(() => {
        setIsOnline(prev => !prev);
    }, 2000);

    return () => {
        clearTimeout(successTimer);
        clearInterval(loopInterval);
    };
  }, []);

  return (
    <div className="flex flex-col h-full items-center justify-start px-4 w-full relative overflow-hidden pt-4 lg:pt-10">
        
        {/* Header Text - Now static part of flow to reduce gap */}
        <div className="w-full text-center z-20 animate-fade-in-up flex-shrink-0 mb-4 lg:mb-8">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium mb-4 backdrop-blur-sm">
                <Play className="w-4 h-4 fill-green-300" />
                <span>Live Preview</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold drop-shadow-neon-white text-white">
                Resultado Final
            </h2>
             <p className="text-gray-400 mt-2">O código HTML, CSS e JS rodando juntos em tempo real.</p>
        </div>

        {/* Desk Setup Container - Centered in remaining space */}
        <div className="flex-1 w-full max-w-7xl relative perspective-[1200px] z-10 flex items-center justify-center pb-12">
            
            {/* 1. CPU Tower (Right Side) */}
            <div className="hidden xl:block absolute bottom-[10%] right-[5%] w-28 h-[350px] bg-[#151515] rounded-xl border border-gray-800 shadow-2xl transform rotate-y-[-15deg] z-0">
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
                <div className="relative w-[95vw] max-w-4xl aspect-video bg-[#0f0f0f] rounded-t-2xl rounded-b-lg border-t-8 border-x-8 border-b-[24px] border-[#1a1a1a] shadow-[0_0_120px_rgba(168,85,247,0.15)] overflow-hidden flex flex-col z-20 group transform rotate-x-2">
                    
                    {/* Screen Reflection/Glare */}
                    <div className="absolute top-0 right-0 w-[80%] h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 pointer-events-none z-50 mix-blend-overlay"></div>

                    {/* Compile Success Overlay */}
                    {showSuccess && (
                        <div className="absolute top-14 right-6 z-[60] bg-emerald-500/90 backdrop-blur text-black px-4 py-2 rounded shadow-lg flex items-center gap-2 animate-fade-in-up font-bold text-xs pointer-events-none border border-emerald-400">
                            <CheckCircle className="w-4 h-4" />
                            Build Successful (204ms)
                        </div>
                    )}

                    {/* Browser Toolbar Mockup */}
                    <div className="h-9 bg-[#252526] w-full flex items-center px-4 gap-4 border-b border-black/50 z-30 flex-shrink-0">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <div className="flex-1 h-6 bg-[#1a1a1a] rounded flex items-center justify-center text-[11px] text-gray-500 font-mono border border-white/5 relative group/url">
                            <span className="group-hover/url:text-white transition-colors">127.0.0.1:5500/index.html</span>
                            <div className="absolute right-2 text-green-500/50">
                                <Wifi className="w-3 h-3" />
                            </div>
                        </div>
                    </div>

                    {/* THE ACTUAL RESULT (BLOCK LAYOUT) */}
                    <div className="flex-1 bg-[#121212] flex flex-col p-4 gap-4 overflow-hidden font-sans select-none relative">
                        
                        {/* Background Grid for Blueprint feel */}
                        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
                            style={{ 
                                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                                backgroundSize: '30px 30px' 
                            }}>
                        </div>

                        {/* HEADER */}
                        <header className="h-20 w-full bg-purple-600/20 backdrop-blur-md rounded-xl flex items-center justify-between px-8 border border-purple-500/30 shadow-lg z-10 relative group">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded bg-purple-500 flex items-center justify-center font-bold text-white">L</div>
                                <span className="text-purple-300 font-bold tracking-widest text-sm">HEADER</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="h-2 w-16 bg-purple-500/30 rounded"></div>
                                <div className="h-2 w-10 bg-purple-500/30 rounded"></div>
                            </div>
                            <div className="absolute -top-3 left-4 text-[10px] font-mono bg-purple-600 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;header&gt;</div>
                        </header>

                        {/* MIDDLE SECTION */}
                        <div className="flex-1 flex gap-4 w-full z-10 min-h-0">
                            {/* NAV */}
                            <nav className="hidden md:flex w-1/5 h-full bg-blue-600/10 backdrop-blur-md rounded-xl flex-col items-center py-8 border border-blue-500/30 shadow-lg relative gap-4 group">
                                <span className="text-blue-400 font-bold tracking-widest text-xs mb-2">NAV</span>
                                <div className="w-1/2 h-2 bg-blue-500/30 rounded"></div>
                                <div className="w-1/2 h-2 bg-blue-500/30 rounded"></div>
                                <div className="w-1/2 h-2 bg-blue-500/30 rounded"></div>
                                <div className="absolute -top-3 left-4 text-[10px] font-mono bg-blue-600 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;nav&gt;</div>
                            </nav>

                            {/* MAIN (Dynamic) */}
                            <main 
                                className={`flex-1 h-full rounded-xl flex flex-col items-center justify-center border shadow-[0_0_30px_rgba(0,0,0,0.3)] relative transition-all duration-500 ease-in-out group overflow-hidden ${isOnline ? 'bg-emerald-500/10 border-emerald-500/50' : 'bg-green-500/10 border-green-500/20'}`}
                            >
                                {/* Pulse Effect Background */}
                                <div className={`absolute inset-0 bg-emerald-500/20 blur-3xl transition-opacity duration-500 ${isOnline ? 'opacity-50' : 'opacity-0'}`}></div>

                                <div className="relative z-10 text-center">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${isOnline ? 'bg-emerald-500 shadow-[0_0_20px_#10b981] scale-110' : 'bg-green-800/50'}`}>
                                        <Server className={`w-8 h-8 text-white ${isOnline ? 'animate-pulse' : 'opacity-50'}`} />
                                    </div>
                                    <span className={`font-black tracking-widest text-2xl drop-shadow-md block mb-2 transition-all duration-300 ${isOnline ? 'text-emerald-400' : 'text-green-700'}`}>
                                        {isOnline ? 'ONLINE' : 'MAIN'}
                                    </span>
                                    <span className="text-[10px] text-gray-500 font-mono">
                                        {isOnline ? 'System Status: Active' : 'Waiting for script.js...'}
                                    </span>
                                </div>
                                <div className="absolute -top-3 left-4 text-[10px] font-mono bg-green-600 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;main&gt;</div>
                            </main>

                            {/* ASIDE */}
                            <aside className="w-1/4 h-full bg-orange-500/10 backdrop-blur-md rounded-xl flex flex-col p-4 border border-orange-500/30 shadow-lg relative group">
                                <span className="text-orange-400 font-bold tracking-widest text-xs mb-4 text-center">ASIDE</span>
                                <div className="flex-1 border border-orange-500/10 rounded flex items-end justify-center pb-2 overflow-hidden relative">
                                    {/* Fake Graph */}
                                    <div className="flex items-end gap-1 h-1/2 w-[80%] opacity-50">
                                        <div className="w-1/5 bg-orange-500 h-[40%] animate-pulse"></div>
                                        <div className="w-1/5 bg-orange-500 h-[70%] animate-pulse animation-delay-500"></div>
                                        <div className="w-1/5 bg-orange-500 h-[30%] animate-pulse"></div>
                                        <div className="w-1/5 bg-orange-500 h-[90%] animate-pulse animation-delay-1000"></div>
                                        <div className="w-1/5 bg-orange-500 h-[50%] animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="absolute -top-3 left-4 text-[10px] font-mono bg-orange-600 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;aside&gt;</div>
                            </aside>
                        </div>

                        {/* FOOTER */}
                        <footer className="h-12 w-full bg-gray-600/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-gray-500/30 shadow-lg z-10 relative group">
                            <span className="text-gray-400 font-bold tracking-widest text-xs">FOOTER CONTENT &copy; 2024</span>
                            <div className="absolute -top-3 left-4 text-[10px] font-mono bg-gray-600 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">&lt;footer&gt;</div>
                        </footer>

                    </div>
                </div>

                {/* Stand */}
                <div className="flex flex-col items-center">
                    <div className="w-32 h-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] z-10 relative shadow-inner"></div>
                    <div className="w-48 h-2 bg-[#252525] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10"></div>
                    {/* Reflection on desk */}
                    <div className="w-64 h-8 bg-black/40 blur-xl rounded-full -mt-2"></div>
                </div>

                {/* Peripherals (Foreground) */}
                <div className="absolute -bottom-24 flex gap-12 items-start opacity-90 scale-90 lg:scale-100">
                    {/* Keyboard */}
                    <div className="w-[400px] h-[15px] bg-[#252525] rounded-t-lg transform skew-x-12 shadow-2xl relative border-t border-white/5">
                        <div className="absolute top-1 left-2 right-2 flex gap-0.5 justify-center">
                             {[...Array(12)].map((_,i) => <div key={i} className="flex-1 h-2 bg-[#111] rounded-[1px]"></div>)}
                        </div>
                    </div>
                    {/* Mouse */}
                    <div className="w-20 h-10 bg-[#252525] rounded-t-full shadow-2xl relative border-t border-white/5">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-5 bg-black"></div>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  );
};

export default SlideResult;
