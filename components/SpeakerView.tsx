
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Monitor, Mic2 } from 'lucide-react';

const scriptData = [
  // Slide 1: Intro
  `Boa tarde, meu nome é Pedro, e hoje eu vou apresentar pra vocês o processo de desenvolvimento de webSite.`,

  // Slide 2: Front vs Back
  `Para compreender como um site funciona por completo, utilizamos a analogia de um restaurante. O processo é dividido em duas partes principais: Front-end e Back-end. 

O Front-end é comparável ao salão do restaurante. É tudo aquilo que o cliente vê: as mesas, a decoração, o cardápio e o garçom. Em um contexto real, isso é representado por toda a interface de um site rodando diretamente no seu navegador.

Por outro lado, temos o Back-end, que funciona como a cozinha do restaurante. É onde a comida é preparada. Ninguém vê o que acontece lá dentro, mas sem ele, não existe jantar. No mundo digital, o Back-end é responsável por processar dados, salvar senhas, conectar as informações com o banco de dados e etc.

Para essa apresentação, nos focaremos apenas no desenvolvimento do frontend de um website, que seriam as chamadas páginas estaticas.`,

  // Slide 3: CMS vs Code
  `Existem dois caminhos principais para dar vida a um site. O primeiro é através do CMS ou ferramentas No-Code, como WordPress, Wix ou Shopify. Esse método é como brincar de LEGO: você utiliza blocos prontos para montar o site de forma rápida.

O segundo caminho é a Programação pura, utilizando tecnologias como HTML, React e Next.js. Esse método é comparável a ser um arquiteto, onde você constrói cada detalhe do zero, sem limites criativos, focando em performance e personalização total.

As principais diferenças entre ambos, é que no metodo CMS, a facilidade e a velocidade de construção é maior, pois não há necessidade escrever código, enquanto o método da programação leva vantagem na performance e principalmente no design da aplicação, que pode ser extremamente mais detalhado.

Daqui em diante, o foco vai ser na criação de websites com o método de programação.`,

  // Slide 4: Trinity
  `Todo site moderno, incluindo os do método CMS explicado no slide anterior, são construídos sobre três pilares fundamentais, que podem ser explicados pela analogia do corpo humano.

1. O primeiro pilar é o HTML, que atua como o esqueleto. Ele define a estrutura: onde fica o título, a imagem ou o botão. Sem o HTML, a página simplesmente não existe. É uma folha em branco.

2. O segundo pilar é o CSS, que representa a pele e as roupas. Ele é responsável pelo estilo, definindo cores, tamanhos, posições e toda a beleza visual. É o CSS que torna o esqueleto apresentável e agradável aos olhos.

3. O terceiro pilar é o JavaScript, que age como o cérebro. Ele define o comportamento, o movimento, a interatividade, os cálculos e a lógica. É o JavaScript que dá vida e dinamismo ao corpo do site.`,

  // Slide 5: IDE
  `Agora você me pergunta, onde escrever o código do site? Embora seja possível escrever código em um bloco de notas simples, isso seria como tentar cavar uma piscina com uma colher.

Desenvolvedores utilizam Ambientes de Desenvolvimento (IDEs) como o VS Code, que são como escavadeiras de alta precisão. Essas ferramentas oferecem recursos essenciais, como o "Syntax Highlight", que usa cores para diferenciar comandos, textos e variáveis instantaneamente, e o "Auto-Complete", que fecha tags automaticamente, resultando em menos digitação e menos erros.`,

  // Slide 6: HTML
  `Entrando no detalhe do nosso "esqueleto", o HTML vai muito além de apenas criar caixas na tela. Nós utilizamos o que chamamos de estrutura semântica.

Isso significa dar nomes aos bois, ou melhor, aos cômodos da nossa casa digital. Em vez de usar elementos genéricos para tudo, usamos etiquetas específicas como "header" para o cabeçalho, "main" para o conteúdo principal e "footer" para o rodapé.

Essa organização é fundamental porque ajuda o Google e os navegadores a entenderem a hierarquia do seu site, melhorando o ranqueamento nas buscas e a acessibilidade.`,

  // Slide 7: CSS
  `Com a estrutura definida, precisamos vestir o nosso site. É aqui que entra o CSS para estilizar os blocos. Nós pegamos aquele código HTML puro e transformamos em um layout visualmente rico.

Definimos propriedades específicas: a cor de fundo (background-color) para dar o tom da marca, e as dimensões de largura e altura para organizar o espaço.

É o CSS que transforma um documento de texto simples em uma interface agradável e profissional.`,

  // Slide 8: JS
  `Por fim, para dar inteligência ao sistema, usamos o JavaScript. Ele nos permite dar vida ao site.

Imagine que precisamos que um elemento da tela pisque ou mude de status automaticamente a cada segundo. Com o JavaScript, criamos ciclos de repetição e condições lógicas (if/else).

Por exemplo: podemos programar o site para verificar se o sistema está online; se estiver, ele mostra uma luz verde. Se cair, ele muda instantaneamente para vermelho. É essa camada que torna a página dinâmica e interativa.`,

  // Slide 9: Code Overview
  `Aqui vemos o código completo. HTML definindo as estruturas, CSS aplicando as cores e posicionamento, e JavaScript controlando a lógica.`,

  // Slide 10: VS Code
  `Vamos ver isso na prática dentro do VS Code. (Demonstração da ferramenta e das abas de código).`,

  // Slide 11: Anatomy (Slide 6 + Result Combined)
  `Aqui temos o resultado final e a anatomia da página.

Assim como o corpo humano tem cabeça, tronco e membros, um site segue uma estrutura lógica universal de Arquitetura da Informação. Temos o Header (cabeçalho) onde fica a logo e o menu, o Meio (composto por navegação, conteúdo principal e lateral) e o Footer (rodapé).

No monitor, vemos o layout com Header (Roxo), Nav (Azul), Main (Verde) e Aside (Laranja). Note que o bloco "Main" fica piscando e mudando o texto de "MAIN" para "ONLINE", provando que o JavaScript está rodando em tempo real.`,

  // Slide 12: Responsivity
  `A tendência global atual exige responsividade, conhecida como a revolução "Mobile-First". O layout das aplicações web deve ser fluido para se adaptar a qualquer tela. Seja computador, celular, tablet ou televisão.

No desktop, onde há espaço de sobra, o conteúdo se expande em colunas e menus visíveis. No ambiente mobile, onde o espaço é limitado, o conteúdo se empilha verticalmente e os menus se transformam em ícones compactos.

É importante ressaltar que QUASE toda essa responsividade é feita via CSS. O HTML, que é o esqueleto do site, não muda praticamente nada; em 99% dos casos, o CSS resolve o problema.`,

  // Slide 13: Design
  `Além de funcional e encontrável, o site precisa encantar.

O UI Design (User Interface) cuida da beleza visual — cores, tipografia e botões — para impressionar o usuário. Já o UX Design (User Experience) garante a facilidade de uso, assegurando que o usuário encontre o que precisa, como o botão de "Comprar", em poucos segundos, sem confusão.

Dentro da indústria, geralmente o Design (UI/UX) é feito por pessoas diferentes. O Designer constrói um protótipo e entrega para o desenvolvedor frontend criar os códigos. O Designer de UI/UX é o arquiteto, enquanto o Dev Frontend é o Engenheiro da obra.`,

  // Slide 14: Internet (Analogia Casa)
  `Para finalizar a parte técnica, vamos relembrar o funcionamento da internet através da Analogia da Casa.

1. O Domínio (ex: google.com) é o endereço que você digita no GPS para encontrar a localização.
2. A Hospedagem é o terreno, um computador ligado 24 horas (Servidor) onde a casa é construída.
3. Os Arquivos (HTML, CSS, imagens) são a casa em si, a estrutura que o visitante vê.`,

  // Slide 15: Domains
  `Agora que entendemos a estrutura, precisamos definir o endereço da nossa casa. O domínio nada mais é do que o seu nome único na rede.

Tecnicamente, os computadores se comunicam através de sequências numéricas chamadas de IP, mas como nós humanos preferimos nomes fáceis de lembrar, usamos domínios como "google.com".

E onde conseguimos isso? Em registradores oficiais. Para sites nacionais com final .br, utilizamos o Registro.br. Para nomes internacionais (.com), usamos serviços como GoDaddy ou Google Domains. O custo é bastante acessível, girando em torno de 40 reais por ano.`,

  // Slide 16: Deploy
  `Pra finalizar, com o domínio em mãos e o site construído, vamos para a etapa final: o Deploy.

Enquanto o código está apenas no seu computador (o que chamamos de Localhost), ele é como um foguete na garagem: potente, mas ninguém pode ver.

O processo de "Deploy" é exatamente o lançamento desse foguete para o espaço, ou seja, para a Nuvem, tornando seu site acessível globalmente para qualquer pessoa, em qualquer lugar do mundo.`,

  // Slide 17: Resumo
  `Resumindo o que vimos hoje: Estrutura da Internet, Tecnologias (HTML/CSS/JS), Ferramentas de Design e como colocar tudo isso no ar.`,

  // Slide 18: Fim
  `Muito obrigado pela atenção de todos. Dúvidas?`
];

const SpeakerView: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = scriptData.length;
  const channelRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    // Connect to synchronization channel
    channelRef.current = new BroadcastChannel('presentation_sync');
    
    // Listen for updates from the main slide deck
    channelRef.current.onmessage = (event) => {
      if (event.data.type === 'CHANGE_SLIDE') {
        setCurrentSlide(event.data.index);
      }
    };

    // Ask for current state when opening
    channelRef.current.postMessage({ type: 'GET_STATE' });

    return () => {
      channelRef.current?.close();
    };
  }, []);

  const changeSlide = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < totalSlides) {
      setCurrentSlide(newIndex);
      // Notify main slide deck
      channelRef.current?.postMessage({ type: 'CHANGE_SLIDE', index: newIndex });
    }
  };

  const nextSlide = () => changeSlide(currentSlide + 1);
  const prevSlide = () => changeSlide(currentSlide - 1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col font-sans overflow-hidden h-screen">
      {/* Header */}
      <header className="h-12 bg-[#1e1e1e] border-b border-white/10 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-2 text-purple-400">
           <Mic2 className="w-4 h-4" />
           <span className="font-bold tracking-wider text-sm">MODO ORADOR</span>
        </div>
        <div className="flex items-center gap-3">
            <div className="text-xs font-mono text-gray-400">
                SLIDE <span className="text-white text-lg font-bold">{currentSlide + 1}</span> / {totalSlides}
            </div>
            {/* Live Indicator */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-red-500/10 border border-red-500/20 rounded-full">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold text-red-400">SYNC ATIVO</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* Current Script */}
        <div className="flex-1 max-w-5xl mx-auto p-4 lg:p-6 overflow-y-auto flex flex-col justify-start">
             <div className="text-xl md:text-2xl lg:text-3xl font-medium leading-normal text-gray-100 whitespace-pre-line">
                {scriptData[currentSlide] || "(Sem roteiro para este slide)"}
             </div>
        </div>

      </main>

      {/* Footer Controls */}
      <footer className="h-16 bg-[#1e1e1e] border-t border-white/10 flex items-center justify-between px-6 shrink-0">
         <button 
           onClick={prevSlide}
           disabled={currentSlide === 0}
           className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
         >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold text-sm">ANTERIOR</span>
         </button>

         <div className="flex flex-col items-center flex-1 mx-4">
             <div className="w-full max-w-md h-1 bg-white/10 rounded-full overflow-hidden">
                 <div 
                    className="h-full bg-purple-500 transition-all duration-300" 
                    style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                 />
             </div>
         </div>

         <button 
           onClick={nextSlide}
           disabled={currentSlide === totalSlides - 1}
           className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg shadow-purple-900/20"
         >
            <span className="font-bold text-sm">PRÓXIMO</span>
            <ArrowRight className="w-5 h-5" />
         </button>
      </footer>
    </div>
  );
};

export default SpeakerView;
