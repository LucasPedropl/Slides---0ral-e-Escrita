
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
import SlideCSS from './components/slides/SlideCSS';
import SlideJS from './components/slides/SlideJS';
import SlideResult from './components/slides/SlideResult';
import SlideCodeOverview from './components/slides/SlideCodeOverview';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 18; 
  const [direction, setDirection] = useState(0);
  const [isPrinting, setIsPrinting] = useState(false);
  
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => {
      if (document.fullscreenElement) {
        return prev === totalSlides - 1 ? prev : prev + 1;
      }
      return (prev + 1) % totalSlides;
    });
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => {
      if (document.fullscreenElement) {
        return prev === 0 ? prev : prev - 1;
      }
      return (prev - 1 + totalSlides) % totalSlides;
    });
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  // Improved Native Print Handler
  const handlePrint = useCallback(() => {
    // 1. Activate Print Mode (renders all slides in the DOM)
    setIsPrinting(true);

    // 2. Wait for React to render the DOM, then trigger browser print
    // Increased timeout to 1500ms to ensure fonts, styles and animation resets are fully processed
    setTimeout(() => {
      window.print();
    }, 1500);
  }, []);

  // Listener to turn off print mode after print dialog closes
  useEffect(() => {
    const handleAfterPrint = () => {
      setIsPrinting(false);
    };

    window.addEventListener("afterprint", handleAfterPrint);
    return () => window.removeEventListener("afterprint", handleAfterPrint);
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

  const slides = [
    Slide1,
    Slide2,
    Slide11,
    Slide4,
    Slide3,
    Slide5,
    Slide7,
    SlideCSS,
    SlideJS,
    SlideCodeOverview,
    SlideResult,
    Slide6,
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
      {/* Normal View (Scaled) - Hidden when printing via CSS */}
      <div className="print:hidden">
        <ScaleWrapper>
          {MainContent}
        </ScaleWrapper>
      </div>

      {/* Print Mode View - Only Visible in Print/PDF Export */}
      {isPrinting && (
        <div id="print-container" className="hidden print:block absolute top-0 left-0">
          {slides.map((SlideComponent, index) => (
            <div 
              key={index} 
              className="print-slide w-[1920px] h-[1080px] overflow-hidden relative flex flex-col items-center justify-center"
              style={{ 
                pageBreakAfter: 'always',
                // Restore Purple Gradient for PDF
                background: 'radial-gradient(circle at 50% 30%, #3b0764 0%, #0a0118 70%)',
                WebkitPrintColorAdjust: 'exact',
                printColorAdjust: 'exact'
              }}
            >
               {/* Force 100% scale for PDF output */}
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
