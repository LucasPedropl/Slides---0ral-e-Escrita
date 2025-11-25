
import React, { useEffect, useState } from 'react';
import { Play, CheckCircle, Home, BarChart2, Users, Settings, Bell, Search, Activity } from 'lucide-react';

const SlideResult: React.FC = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [showSuccess, setShowSuccess] = useState(true);

  // Replicating the JS Logic from the SlideJS inside the "Monitor"
  useEffect(() => {
    // Simulate system coming online after 2 seconds
    const timer = setTimeout(() => {
      setIsOnline(true);
    }, 2000);

    // Hide success message after 4 seconds
    const successTimer = setTimeout(() => {
        setShowSuccess(false);
    }, 4000);

    return () => {
        clearTimeout(timer);
        clearTimeout(successTimer);
    };
  }, []);

  return (
    <div className="flex flex-col h-full items-center justify-end px-4 w-full relative overflow-hidden pb-0">
        
        {/* Header Text - Floating at the top */}
        <div className="absolute top-10 w-full text-center z-20 animate-fade-in-up">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium mb-4 backdrop-blur-sm">
                <Play className="w-4 h-4 fill-green-300" />
                <span>Live Preview</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold drop-shadow-neon-white text-white">
                Resultado Final
            </h2>
             <p className="text-gray-400 mt-2">O layout de Dashboard ganha vida.</p>
        </div>

        {/* Desk Setup Container */}
        <div className="relative w-full max-w-5xl h-[70vh] flex items-end justify-center perspective-[1000px] z-10">
            
            {/* 1. CPU Tower (Right Side) */}
            <div className="hidden lg:block absolute bottom-10 right-0 w-32 h-[400px] bg-[#1a1a1a] rounded-xl border border-gray-700 shadow-2xl transform rotate-y-[-10deg] z-10">
                {/* RGB Strip */}
                <div className="absolute top-4 bottom-4 left-4 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full blur-[2px] animate-pulse"></div>
                {/* Vents */}
                <div className="absolute top-8 right-4 w-16 h-32 space-y-2">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-full h-1 bg-black/50 rounded-full"></div>
                    ))}
                </div>
            </div>

            {/* 2. Monitor Stand */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-32 bg-[#2d2d2d] rounded-t-lg z-0">
                 <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-xl"></div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-64 h-4 bg-[#1a1a1a] rounded-full z-0 shadow-xl"></div>

            {/* 3. Monitor Screen */}
            <div className="absolute bottom-28 left-1/2 -translate-x-1/2 w-[90%] lg:w-[800px] aspect-video bg-[#0f0f0f] rounded-t-2xl rounded-b-lg border-t-8 border-x-8 border-b-[20px] border-[#1a1a1a] shadow-[0_0_100px_rgba(168,85,247,0.2)] overflow-hidden flex flex-col z-20 group">
                
                {/* Screen Reflection/Glare */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 pointer-events-none z-40"></div>

                {/* Compile Success Overlay */}
                {showSuccess && (
                    <div className="absolute top-12 right-6 z-50 bg-green-500 text-black px-4 py-2 rounded shadow-lg flex items-center gap-2 animate-fade-in-up font-bold text-xs pointer-events-none">
                        <CheckCircle className="w-4 h-4" />
                        Compilation Success
                    </div>
                )}

                {/* Browser Toolbar Mockup */}
                <div className="h-8 bg-[#2d2d2d] w-full flex items-center px-4 gap-4 border-b border-black/50 z-30 flex-shrink-0">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 h-5 bg-[#1a1a1a] rounded flex items-center justify-center text-[10px] text-gray-500 font-mono">
                        localhost:3000/dashboard
                    </div>
                </div>

                {/* THE ACTUAL RESULT (DASHBOARD LAYOUT) */}
                <div className="flex-1 bg-[#121212] relative flex flex-col p-2 gap-2 overflow-hidden font-sans text-xs select-none">
                    
                    {/* Header Area */}
                    <header className="h-10 bg-[#1e1e1e] rounded-lg flex items-center justify-between px-4 border border-white/5 flex-shrink-0">
                        <div className="flex items-center gap-2">
                             <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center font-bold text-white">D</div>
                             <span className="font-bold text-white">DashPro</span>
                        </div>
                        <div className="flex items-center bg-black/20 rounded-full px-3 py-1 gap-2 border border-white/5">
                            <Search className="w-3 h-3 text-gray-400" />
                            <span className="text-gray-500">Buscar...</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Bell className="w-3 h-3 text-gray-400" />
                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
                        </div>
                    </header>

                    <div className="flex-1 flex gap-2 min-h-0">
                        {/* Nav Sidebar */}
                        <nav className="w-16 md:w-40 bg-[#1e1e1e] rounded-lg border border-white/5 p-2 flex flex-col gap-1">
                             <div className="p-2 rounded bg-indigo-500/20 text-indigo-400 flex items-center gap-2 font-bold">
                                 <Home className="w-3 h-3" /> <span className="hidden md:inline">Home</span>
                             </div>
                             <div className="p-2 rounded hover:bg-white/5 text-gray-400 hover:text-white flex items-center gap-2">
                                 <BarChart2 className="w-3 h-3" /> <span className="hidden md:inline">Analytics</span>
                             </div>
                             <div className="p-2 rounded hover:bg-white/5 text-gray-400 hover:text-white flex items-center gap-2">
                                 <Users className="w-3 h-3" /> <span className="hidden md:inline">Team</span>
                             </div>
                             <div className="mt-auto p-2 rounded hover:bg-white/5 text-gray-400 hover:text-white flex items-center gap-2">
                                 <Settings className="w-3 h-3" /> <span className="hidden md:inline">Settings</span>
                             </div>
                        </nav>

                        {/* Main Content */}
                        <main className="flex-1 bg-[#1e1e1e] rounded-lg border border-white/5 p-4 flex flex-col gap-4 overflow-hidden relative">
                             {/* Stats Row */}
                             <div className="grid grid-cols-3 gap-2">
                                 <div className="bg-[#252525] p-3 rounded-lg border border-white/5">
                                     <span className="text-[10px] text-gray-400">Total Users</span>
                                     <div className="text-lg font-bold text-white">12.5K</div>
                                 </div>
                                 <div className="bg-[#252525] p-3 rounded-lg border border-white/5">
                                     <span className="text-[10px] text-gray-400">Revenue</span>
                                     <div className="text-lg font-bold text-green-400">$42.8K</div>
                                 </div>
                                 <div className="bg-[#252525] p-3 rounded-lg border border-white/5">
                                     <span className="text-[10px] text-gray-400">System Status</span>
                                     <div className={`text-lg font-bold transition-colors duration-500 ${isOnline ? 'text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]' : 'text-yellow-500'}`}>
                                         {isOnline ? 'Online' : 'Connecting...'}
                                     </div>
                                 </div>
                             </div>

                             {/* Chart Area Simulation */}
                             <div className="flex-1 bg-[#252525] rounded-lg border border-white/5 flex items-end justify-between p-4 px-6 gap-2 relative overflow-hidden">
                                  <div className="absolute top-3 left-3 text-gray-400 font-bold flex items-center gap-2">
                                     <Activity className="w-3 h-3" /> Traffic Overview
                                  </div>
                                  {/* Bars */}
                                  <div className="w-full bg-indigo-500/20 h-[40%] rounded-t-sm animate-pulse"></div>
                                  <div className="w-full bg-indigo-500/40 h-[70%] rounded-t-sm"></div>
                                  <div className="w-full bg-indigo-500/30 h-[50%] rounded-t-sm"></div>
                                  <div className="w-full bg-indigo-500 h-[85%] rounded-t-sm shadow-[0_0_15px_rgba(99,102,241,0.4)]"></div>
                                  <div className="w-full bg-indigo-500/50 h-[60%] rounded-t-sm"></div>
                             </div>
                        </main>

                        {/* Aside / Updates */}
                        <aside className="w-48 bg-[#1e1e1e] rounded-lg border border-white/5 p-3 hidden lg:flex flex-col gap-3">
                             <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Updates</div>
                             <div className="flex gap-2 items-start">
                                 <div className="w-2 h-2 rounded-full bg-blue-400 mt-1"></div>
                                 <div>
                                     <div className="text-white font-bold">New Sale</div>
                                     <div className="text-[9px] text-gray-400">Just now</div>
                                 </div>
                             </div>
                             <div className="flex gap-2 items-start">
                                 <div className="w-2 h-2 rounded-full bg-purple-400 mt-1"></div>
                                 <div>
                                     <div className="text-white font-bold">Project X</div>
                                     <div className="text-[9px] text-gray-400">Updated 2m ago</div>
                                 </div>
                             </div>
                        </aside>
                    </div>

                </div>
            </div>

            {/* 4. Peripherals (Bottom Foreground) */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-gradient-to-t from-black to-transparent z-40 blur-md pointer-events-none"></div>
            
            {/* Keyboard */}
            <div className="absolute bottom-4 left-1/2 -translate-x-[60%] w-[300px] h-[15px] bg-[#2d2d2d] rounded-t transform skew-x-12 opacity-80 z-30 shadow-2xl">
                 <div className="w-full h-full flex justify-center gap-1 px-2 pt-1">
                     {[...Array(10)].map((_, i) => <div key={i} className="flex-1 bg-[#111] rounded-sm"></div>)}
                 </div>
            </div>
            
            {/* Mouse */}
            <div className="absolute bottom-4 left-1/2 translate-x-[80%] w-16 h-8 bg-[#2d2d2d] rounded-t-full z-30 opacity-80 shadow-2xl">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-purple-500/50 rounded-full shadow-[0_0_5px_purple]"></div>
            </div>

        </div>

    </div>
  );
};

export default SlideResult;
