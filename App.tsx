import React, { useState, useEffect, useCallback } from 'react';
import Layout from './components/Layout';
import { ScaleWrapper } from './components/ScaleWrapper';
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import Slide10 from './components/slides/Slide10';
import Slide11 from './components/slides/Slide11';
import Slide12 from './components/slides/Slide12';
import Slide13 from './components/slides/Slide13';
import Slide14 from './components/slides/Slide14';
import { AnimatePresence, motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 14;
  const [direction, setDirection] = useState(0);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  const handlePrint = useCallback(async () => {
    setIsGeneratingPdf(true);
    setLoadingProgress(0);

    // Give React time to render the hidden print container
    setTimeout(async () => {
        const printContainer = document.getElementById('print-container');
        if (!printContainer) {
            setIsGeneratingPdf(false);
            return;
        }

        try {
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [1920, 1080]
            });

            const slides = Array.from(printContainer.children) as HTMLElement[];

            for (let i = 0; i < slides.length; i++) {
                const slide = slides[i];
                // Update progress
                setLoadingProgress(Math.round(((i) / slides.length) * 100));

                const canvas = await html2canvas(slide, {
                    scale: 1,
                    useCORS: true,
                    logging: false,
                    backgroundColor: '#0a0118',
                    width: 1920,
                    height: 1080,
                    windowWidth: 1920,
                    windowHeight: 1080
                });

                const imgData = canvas.toDataURL('image/png');

                if (i > 0) {
                    pdf.addPage([1920, 1080], 'landscape');
                }

                pdf.addImage(imgData, 'PNG', 0, 0, 1920, 1080);
            }

            setLoadingProgress(100);
            pdf.save('webseminar-presentation.pdf');
        } catch (error) {
            console.error("PDF Generation failed:", error);
            alert("Ocorreu um erro ao gerar o PDF. Tente novamente.");
        } finally {
            setIsGeneratingPdf(false);
            setLoadingProgress(0);
        }
    }, 1000); // 1 second wait to ensure fonts and layout are settled in the hidden container
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)"
    })
  };

  // Reordered Slides:
  // 1. Intro
  // 2. How it works
  // 3. Front vs Back (Moved from 11)
  // 4. Ways to Build (Swapped with 3)
  // 5. Core Tech (Swapped with 4)
  // 6. IDE
  // 7. Tags (Swapped with 6)
  // 8. Anatomy (Swapped with 7)
  // ... rest same
  const slides = [
    Slide1,
    Slide2,
    Slide11, // Front vs Back
    Slide4,  // Forms of Building (CMS vs Code)
    Slide3,  // Core Tech (HTML/CSS/JS)
    Slide5,  // IDE
    Slide7,  // Tags (Real Code)
    Slide6,  // Anatomy (Blueprint)
    Slide8,
    Slide9,
    Slide10,
    Slide12,
    Slide13,
    Slide14
  ];

  const MainContent = (
    <Layout
      currentSlide={currentSlide}
      totalSlides={totalSlides}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
      goToSlide={goToSlide}
      onPrint={handlePrint}
    >
      <div className="relative w-full h-full print:hidden">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            className="w-full h-full flex flex-col justify-center"
          >
            {React.createElement(slides[currentSlide])}
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );

  return (
    <>
      {/* Normal View (Scaled) */}
      <ScaleWrapper>
        {MainContent}
      </ScaleWrapper>

      {/* PDF Generation Loading Overlay */}
      {isGeneratingPdf && (
          <div className="fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-center text-white backdrop-blur-sm">
             <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-[#1a0b2e] border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                <Loader2 className="w-12 h-12 text-purple-500 animate-spin" />
                <h2 className="text-xl font-bold">Gerando PDF...</h2>
                <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300"
                        style={{ width: `${loadingProgress}%` }}
                    />
                </div>
                <p className="text-sm text-gray-400">Capturando slide {Math.ceil((loadingProgress / 100) * totalSlides)} de {totalSlides}</p>
             </div>
          </div>
      )}

      {/* Print Mode View (Off-screen but rendered for Capture) */}
      {/* We keep it 1920x1080 fixed to ensure the layout matches desktop design perfectly */}
      {isGeneratingPdf && (
        <div id="print-container" className="fixed top-0 left-0 z-[-1] pointer-events-none opacity-100 bg-[#0a0118]" style={{ width: '1920px' }}>
          {slides.map((SlideComponent, index) => (
            <div key={index} className="w-[1920px] h-[1080px] overflow-hidden relative flex flex-col items-center justify-center bg-[#0a0118] border-b border-gray-800">
               {/* Ensure full scale rendering */}
               <div className="w-full h-full flex items-center justify-center transform scale-100">
                  <SlideComponent />
               </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;