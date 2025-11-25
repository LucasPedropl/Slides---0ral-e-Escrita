import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

const Slide9_Conclusion: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto space-y-16 px-4">
        <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold drop-shadow-neon-white text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200">
                Resumo e Perguntas
            </h2>
            <p className="text-gray-400 text-lg">Prontos para criar o primeiro site?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Card 1 */}
            <div className="group relative w-full h-full min-h-[250px] rounded-[2.5rem] p-1 bg-gradient-to-br from-purple-500/50 via-transparent to-purple-500/10 hover:from-purple-400 hover:to-fuchsia-400 transition-all duration-500">
                <div className="bg-[#0f041e] w-full h-full rounded-[2.3rem] p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 text-purple-300 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-white relative z-10">Recapitulando</h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base relative z-10">
                        1. Entendemos como funciona (Domínio e Hospedagem).<br/>
                        2. Vimos o trio HTML, CSS e JS.<br/>
                        3. Falamos sobre ferramentas e design.
                    </p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="group relative w-full h-full min-h-[250px] rounded-[2.5rem] p-1 bg-gradient-to-br from-fuchsia-500/50 via-transparent to-fuchsia-500/10 hover:from-fuchsia-400 hover:to-purple-400 transition-all duration-500">
                <div className="bg-[#0f041e] w-full h-full rounded-[2.3rem] p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-full bg-fuchsia-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="w-16 h-16 rounded-full bg-fuchsia-500/20 flex items-center justify-center mb-6 text-fuchsia-300 group-hover:scale-110 group-hover:bg-fuchsia-500 group-hover:text-white transition-all duration-300">
                        <MessageCircle className="w-8 h-8" />
                    </div>

                    <h3 className="text-3xl font-bold mb-4 text-white relative z-10">Espaço para Dúvidas</h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base relative z-10">
                        Alguma curiosidade sobre o mercado de trabalho, linguagens ou por onde começar a estudar hoje?
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Slide9_Conclusion;