
import React, { useState, useEffect } from 'react';
import { 
  FileCode2, 
  Files, 
  Search, 
  GitGraph, 
  Bug, 
  Blocks, 
  Settings, 
  UserCircle, 
  ChevronDown, 
  X, 
  Play, 
  Zap, 
  Palette, 
  Layout,
  Globe,
  RefreshCw,
  MoreVertical,
  Server,
  Maximize,
  Minimize
} from 'lucide-react';

type Tab = 'html' | 'css' | 'js' | 'preview';

const SlideVSCode: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('html');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  
  // Simulation State for the Preview Tab
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    // Only run the simulation loop if we are looking at the preview or if we want it running in background
    const interval = setInterval(() => {
      setIsOnline(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const files = {
    html: {
      name: 'index.html',
      icon: <Layout className="w-4 h-4 text-orange-500" />,
      color: 'text-orange-500',
      lang: 'html'
    },
    css: {
      name: 'style.css',
      icon: <Palette className="w-4 h-4 text-blue-400" />,
      color: 'text-blue-400',
      lang: 'css'
    },
    js: {
      name: 'script.js',
      icon: <Zap className="w-4 h-4 text-yellow-400" />,
      color: 'text-yellow-400',
      lang: 'javascript'
    },
    preview: {
      name: 'Live Preview',
      icon: <Globe className="w-4 h-4 text-green-400" />,
      color: 'text-green-400',
      lang: 'preview'
    }
  };

  const renderCode = () => {
    // Helper to render a line of code with line number
    const Line = ({ num, children, indent = 0 }: { num: number, children?: React.ReactNode, indent?: number }) => (
      <div className="flex hover:bg-[#2a2d2e] leading-6 group">
        <span className="w-8 text-[#6e7681] select-none text-right pr-4 flex-shrink-0 group-hover:text-[#c6c6c6]">{num}</span>
        <span className="whitespace-pre font-mono" style={{ paddingLeft: `${indent * 0.5}rem` }}>{children}</span>
      </div>
    );

    switch (activeTab) {
      case 'html':
        return (
          <div className="font-mono text-sm text-gray-300">
            <Line num={1}>
              <span className="text-blue-400">&lt;!DOCTYPE html&gt;</span>
            </Line>
            <Line num={2}>
              <span className="text-blue-400">&lt;html&gt;</span>
            </Line>
            <Line num={3} indent={1}>
              <span className="text-blue-400">&lt;head&gt;</span>
            </Line>
            <Line num={4} indent={2}>
              <span className="text-blue-400">&lt;title&gt;</span>Meu Site<span className="text-blue-400">&lt;/title&gt;</span>
            </Line>
            <Line num={5} indent={2}>
              <span className="text-blue-400">&lt;link</span> <span className="text-sky-300">rel</span>=<span className="text-green-300">"stylesheet"</span> <span className="text-sky-300">href</span>=<span className="text-green-300">"style.css"</span> <span className="text-blue-400">/&gt;</span>
            </Line>
            <Line num={6} indent={1}>
              <span className="text-blue-400">&lt;/head&gt;</span>
            </Line>
            <Line num={7} indent={1}>
              <span className="text-blue-400">&lt;body&gt;</span>
            </Line>
            <Line num={8} indent={2}>
              <span className="text-blue-400">&lt;div</span> <span className="text-sky-300">class</span>=<span className="text-green-300">"container"</span><span className="text-blue-400">&gt;</span>
            </Line>
            <Line num={9} indent={3}>
              <span className="text-green-600 italic">&lt;!-- Cabeçalho --&gt;</span>
            </Line>
            <Line num={10} indent={3}>
              <span className="text-blue-400">&lt;header&gt;</span>HEADER<span className="text-blue-400">&lt;/header&gt;</span>
            </Line>
            <Line num={11} indent={0}>
              {""}
            </Line>
            <Line num={12} indent={3}>
              <span className="text-blue-400">&lt;div</span> <span className="text-sky-300">class</span>=<span className="text-green-300">"meio"</span><span className="text-blue-400">&gt;</span>
            </Line>
            <Line num={13} indent={4}>
              <span className="text-blue-400">&lt;nav&gt;</span>NAV<span className="text-blue-400">&lt;/nav&gt;</span>
            </Line>
            <Line num={14} indent={4}>
              <span className="text-blue-400">&lt;main&gt;</span>MAIN<span className="text-blue-400">&lt;/main&gt;</span>
            </Line>
            <Line num={15} indent={4}>
              <span className="text-blue-400">&lt;aside&gt;</span>ASIDE<span className="text-blue-400">&lt;/aside&gt;</span>
            </Line>
            <Line num={16} indent={3}>
              <span className="text-blue-400">&lt;/div&gt;</span>
            </Line>
            <Line num={17} indent={0}>
              {""}
            </Line>
            <Line num={18} indent={3}>
              <span className="text-blue-400">&lt;footer&gt;</span>FOOTER<span className="text-blue-400">&lt;/footer&gt;</span>
            </Line>
            <Line num={19} indent={2}>
              <span className="text-blue-400">&lt;/div&gt;</span>
            </Line>
            <Line num={20} indent={2}>
              <span className="text-blue-400">&lt;script</span> <span className="text-sky-300">src</span>=<span className="text-green-300">"script.js"</span><span className="text-blue-400">&gt;&lt;/script&gt;</span>
            </Line>
            <Line num={21} indent={1}>
              <span className="text-blue-400">&lt;/body&gt;</span>
            </Line>
            <Line num={22}>
              <span className="text-blue-400">&lt;/html&gt;</span>
            </Line>
          </div>
        );
      case 'css':
        return (
          <div className="font-mono text-sm text-gray-300">
             <Line num={1}>
                <span className="text-green-600 italic">/* Layout Global */</span>
             </Line>
             <Line num={2}>
                <span className="text-yellow-200">header</span> {'{'}
             </Line>
             <Line num={3} indent={1}>
                <span className="text-sky-300">height</span>: <span className="text-green-300">80px</span>;
             </Line>
             <Line num={4} indent={1}>
                <span className="text-sky-300">background</span>: <span className="text-purple-400">purple</span>;
             </Line>
             <Line num={5}>
                {'}'}
             </Line>
             <Line num={6}>
                <span className="text-yellow-200">footer</span> {'{'}
             </Line>
             <Line num={7} indent={1}>
                <span className="text-sky-300">height</span>: <span className="text-green-300">50px</span>;
             </Line>
             <Line num={8} indent={1}>
                <span className="text-sky-300">background</span>: <span className="text-gray-400">gray</span>;
             </Line>
             <Line num={9}>
                {'}'}
             </Line>
             <Line num={10}>
                {""}
             </Line>
             <Line num={11}>
                <span className="text-yellow-200">.meio</span> {'{'}
             </Line>
             <Line num={12} indent={1}>
                <span className="text-sky-300">display</span>: <span className="text-orange-300">flex</span>;
             </Line>
             <Line num={13} indent={1}>
                <span className="text-sky-300">gap</span>: <span className="text-green-300">16px</span>;
             </Line>
             <Line num={14}>
                {'}'}
             </Line>
             <Line num={15}>
                {""}
             </Line>
             <Line num={16}>
                <span className="text-green-600 italic">/* Proporções */</span>
             </Line>
             <Line num={17}>
                <span className="text-yellow-200">nav</span>   {'{'} <span className="text-sky-300">width</span>: <span className="text-green-300">20%</span>; <span className="text-sky-300">background</span>: <span className="text-blue-400">blue</span>;   {'}'}
             </Line>
             <Line num={18}>
                <span className="text-yellow-200">main</span>  {'{'} <span className="text-sky-300">flex</span>: <span className="text-green-300">1</span>;   <span className="text-sky-300">background</span>: <span className="text-green-400">green</span>;  {'}'}
             </Line>
             <Line num={19}>
                <span className="text-yellow-200">aside</span> {'{'} <span className="text-sky-300">width</span>: <span className="text-green-300">25%</span>; <span className="text-sky-300">background</span>: <span className="text-orange-400">orange</span>; {'}'}
             </Line>
          </div>
        );
      case 'js':
        return (
          <div className="font-mono text-sm text-gray-300">
             <Line num={1}>
                <span className="text-green-600 italic">// Seleciona o elemento Principal</span>
             </Line>
             <Line num={2}>
                <span className="text-blue-400">let</span> <span className="text-sky-300">bloco</span> = <span className="text-green-300">document</span>.<span className="text-yellow-200">querySelector</span>(<span className="text-orange-300">'main'</span>);
             </Line>
             <Line num={3}>
                {""}
             </Line>
             <Line num={4}>
                <span className="text-yellow-200">setInterval</span>(() <span className="text-blue-400">=&gt;</span> {'{'}
             </Line>
             <Line num={5} indent={1}>
                <span className="text-green-600 italic">// Verifica o texto atual</span>
             </Line>
             <Line num={6} indent={1}>
                <span className="text-purple-400">if</span> (<span className="text-sky-300">bloco</span>.<span className="text-sky-300">innerText</span> === <span className="text-orange-300">"MAIN"</span>) {'{'}
             </Line>
             <Line num={7} indent={2}>
                <span className="text-sky-300">bloco</span>.<span className="text-sky-300">innerText</span> = <span className="text-orange-300">"ONLINE"</span>;
             </Line>
             <Line num={8} indent={2}>
                 <span className="text-sky-300">bloco</span>.<span className="text-sky-300">style</span>.<span className="text-sky-300">background</span> = <span className="text-orange-300">"#10b981"</span>;
             </Line>
             <Line num={9} indent={1}>
                {'}'} <span className="text-purple-400">else</span> {'{'}
             </Line>
             <Line num={10} indent={2}>
                <span className="text-sky-300">bloco</span>.<span className="text-sky-300">innerText</span> = <span className="text-orange-300">"MAIN"</span>;
             </Line>
             <Line num={11} indent={2}>
                <span className="text-sky-300">bloco</span>.<span className="text-sky-300">style</span>.<span className="text-sky-300">background</span> = <span className="text-orange-300">"green"</span>;
             </Line>
             <Line num={12} indent={1}>
                {'}'}
             </Line>
             <Line num={13}>
                {'}'}, <span className="text-green-300">2000</span>);
             </Line>
          </div>
        );
      case 'preview':
        return (
          <div className="w-full h-full bg-white flex flex-col font-sans select-none">
             {/* Browser Bar */}
             <div className="h-8 bg-gray-200 border-b border-gray-300 flex items-center px-4 gap-2">
                 <div className="flex gap-1.5 opacity-50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                 </div>
                 <div className="flex items-center gap-2 text-gray-500 ml-2">
                    <RefreshCw className="w-3 h-3 cursor-pointer hover:rotate-180 transition-transform" />
                 </div>
                 <div className="flex-1 h-5 bg-white border border-gray-300 rounded text-[10px] text-gray-500 flex items-center px-2">
                    127.0.0.1:5500/index.html
                 </div>
                 <MoreVertical className="w-3 h-3 text-gray-500" />
             </div>
             
             {/* Main Content (The Layout) */}
             <div className="flex-1 p-4 bg-gray-100 flex flex-col gap-4 overflow-hidden">
                 
                 {/* Header */}
                 <header className="h-20 bg-purple-600 text-white font-bold flex items-center px-4 rounded shadow-sm hover:scale-[1.01] transition-transform cursor-default relative group">
                    <div className="absolute top-0 right-0 p-1 text-[8px] opacity-0 group-hover:opacity-50 font-mono">header</div>
                    HEADER
                 </header>

                 {/* Middle */}
                 <div className="flex-1 flex gap-4 min-h-0">
                    <nav className="w-1/5 bg-blue-600 text-white font-bold flex items-center justify-center rounded shadow-sm hover:scale-[1.01] transition-transform cursor-default relative group">
                       <div className="absolute top-0 right-0 p-1 text-[8px] opacity-0 group-hover:opacity-50 font-mono">nav</div>
                       NAV
                    </nav>
                    
                    <main 
                      className={`flex-1 flex flex-col items-center justify-center text-white font-bold rounded shadow-sm hover:scale-[1.01] transition-all duration-300 cursor-default relative group ${isOnline ? 'bg-emerald-500' : 'bg-green-600'}`}
                    >
                       <div className="absolute top-0 right-0 p-1 text-[8px] opacity-0 group-hover:opacity-50 font-mono">main</div>
                       {isOnline && <Server className="w-8 h-8 mb-2 animate-bounce" />}
                       <span className={isOnline ? 'text-2xl drop-shadow-md' : 'text-xl'}>
                         {isOnline ? 'ONLINE' : 'MAIN'}
                       </span>
                    </main>

                    <aside className="w-1/4 bg-orange-500 text-white font-bold flex items-center justify-center rounded shadow-sm hover:scale-[1.01] transition-transform cursor-default relative group">
                       <div className="absolute top-0 right-0 p-1 text-[8px] opacity-0 group-hover:opacity-50 font-mono">aside</div>
                       ASIDE
                    </aside>
                 </div>

                 {/* Footer */}
                 <footer className="h-12 bg-gray-600 text-white font-bold flex items-center justify-center rounded shadow-sm hover:scale-[1.01] transition-transform cursor-default relative group">
                    <div className="absolute top-0 right-0 p-1 text-[8px] opacity-0 group-hover:opacity-50 font-mono">footer</div>
                    FOOTER
                 </footer>

             </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-full items-center justify-center px-4 lg:px-12 w-full relative">
      
      {/* Title (Hidden in Maximize Mode) */}
      {!isMaximized && (
        <div className="mb-6 z-10 animate-fade-in-up text-center">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-4 backdrop-blur-sm">
               <FileCode2 className="w-4 h-4" />
               <span>Ambiente Integrado</span>
           </div>
           <h2 className="text-4xl font-bold text-white drop-shadow-neon-white">
              Hands-on: <span className="text-blue-400">VS Code</span>
           </h2>
        </div>
      )}

      {/* VS Code Window Container */}
      <div 
        className={`
          bg-[#1e1e1e] border-[#333] shadow-2xl flex flex-col animate-fade-in-up animate-delay-200 relative transition-all duration-300
          ${isMaximized 
             ? 'absolute inset-4 z-50 rounded-lg border' 
             : 'w-full max-w-6xl h-[75vh] rounded-xl border z-10'
          }
        `}
      >
        
        {/* Title Bar */}
        <div className="h-8 bg-[#3c3c3c] flex items-center justify-between px-4 select-none flex-shrink-0">
           <div className="flex gap-2 w-12">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
           </div>
           <div className="text-gray-400 text-xs font-sans">
             {files[activeTab]?.name || 'VS Code'} - Liceria Project
           </div>
           <div className="w-12 flex justify-end">
              <button 
                onClick={() => setIsMaximized(!isMaximized)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                title={isMaximized ? "Restaurar" : "Maximizar"}
              >
                 {isMaximized ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>
           </div>
        </div>

        {/* Main Editor Body */}
        <div className="flex-1 flex overflow-hidden min-h-0">
           
           {/* Activity Bar */}
           <div className="w-12 bg-[#333333] flex flex-col items-center py-2 justify-between flex-shrink-0">
              <div className="flex flex-col gap-4">
                 <div className="p-2 border-l-2 border-white cursor-pointer"><Files className="w-6 h-6 text-white" /></div>
                 <div className="p-2 border-l-2 border-transparent opacity-50 hover:opacity-100 cursor-pointer"><Search className="w-6 h-6 text-gray-300" /></div>
                 <div className="p-2 border-l-2 border-transparent opacity-50 hover:opacity-100 cursor-pointer"><GitGraph className="w-6 h-6 text-gray-300" /></div>
                 <div className="p-2 border-l-2 border-transparent opacity-50 hover:opacity-100 cursor-pointer"><Bug className="w-6 h-6 text-gray-300" /></div>
                 <div className="p-2 border-l-2 border-transparent opacity-50 hover:opacity-100 cursor-pointer"><Blocks className="w-6 h-6 text-gray-300" /></div>
              </div>
              <div className="flex flex-col gap-4 mb-2">
                 <div className="p-2 opacity-50 hover:opacity-100 cursor-pointer"><UserCircle className="w-6 h-6 text-gray-300" /></div>
                 <div className="p-2 opacity-50 hover:opacity-100 cursor-pointer"><Settings className="w-6 h-6 text-gray-300" /></div>
              </div>
           </div>

           {/* Sidebar (Explorer) */}
           {isSidebarOpen && (
             <div className="w-60 bg-[#252526] flex flex-col text-gray-300 text-sm border-r border-[#1e1e1e] flex-shrink-0">
                <div className="h-8 px-4 flex items-center text-[10px] font-bold uppercase tracking-wide text-gray-500">Explorer</div>
                <div className="px-2">
                   <div className="flex items-center gap-1 py-1 cursor-pointer font-bold text-gray-400">
                      <ChevronDown className="w-4 h-4" />
                      <span>LICERIA-PROJECT</span>
                   </div>
                   <div className="pl-4 flex flex-col">
                      {Object.entries(files).map(([key, file]) => (
                         <div 
                           key={key}
                           onClick={() => setActiveTab(key as Tab)}
                           className={`flex items-center gap-2 py-1 px-2 cursor-pointer hover:bg-[#2a2d2e] rounded-sm ${activeTab === key ? 'bg-[#37373d] text-white' : ''}`}
                         >
                            {file.icon}
                            <span>{file.name}</span>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
           )}

           {/* Editor Group */}
           <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
              
              {/* Tabs */}
              <div className="h-9 bg-[#252526] flex overflow-x-auto no-scrollbar">
                 {Object.entries(files).map(([key, file]) => (
                    <div 
                      key={key}
                      onClick={() => setActiveTab(key as Tab)}
                      className={`
                        flex items-center gap-2 px-3 min-w-fit cursor-pointer border-r border-[#1e1e1e] text-sm
                        ${activeTab === key ? 'bg-[#1e1e1e] text-white border-t-2 border-t-blue-500' : 'bg-[#2d2d2d] text-gray-400 hover:bg-[#1e1e1e]'}
                      `}
                    >
                       {file.icon}
                       <span>{file.name}</span>
                       <X className={`w-3 h-3 ml-2 hover:bg-gray-600 rounded-sm ${activeTab === key ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    </div>
                 ))}
              </div>

              {/* Breadcrumbs */}
              {activeTab !== 'preview' && (
                <div className="h-6 flex items-center px-4 text-xs text-gray-500 bg-[#1e1e1e]">
                    liceria-project &gt; {files[activeTab].name}
                </div>
              )}

              {/* Content Area */}
              <div className={`flex-1 overflow-auto relative custom-scrollbar ${activeTab === 'preview' ? 'p-0' : 'p-0'}`}>
                 {renderCode()}
                 
                 {/* Floating Action Button for Code Tabs */}
                 {activeTab !== 'preview' && (
                   <div className="absolute bottom-4 right-4">
                      <button 
                        onClick={() => setActiveTab('preview')}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-lg transition-all hover:scale-105 active:scale-95"
                      >
                         <Play className="w-3 h-3 fill-white" />
                         <span className="text-xs font-bold">Run / Preview</span>
                      </button>
                   </div>
                 )}
              </div>

           </div>

        </div>

        {/* Status Bar */}
        <div className="h-6 bg-[#007acc] flex items-center justify-between px-3 text-white text-[10px] select-none flex-shrink-0">
           <div className="flex gap-4">
              <div className="flex items-center gap-1"><GitGraph className="w-3 h-3" /> main*</div>
              <div className="flex items-center gap-1"><RefreshCw className="w-3 h-3" /> 0 errors</div>
           </div>
           <div className="flex gap-4">
               <div>Ln 12, Col 34</div>
               <div>UTF-8</div>
               <div>{files[activeTab].lang === 'preview' ? 'HTML' : files[activeTab].lang.toUpperCase()}</div>
               <div className="flex items-center gap-1"><Zap className="w-3 h-3" /> Go Live</div>
           </div>
        </div>

      </div>

    </div>
  );
};

export default SlideVSCode;
