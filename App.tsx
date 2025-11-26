
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Layout from './components/Layout';
import { ScaleWrapper } from './components/ScaleWrapper';
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import Slide11 from './components/slides/Slide11';
import Slide12 from './components/slides/Slide12';
import Slide13 from './components/slides/Slide13';
import Slide14 from './components/slides/Slide14';
import SlideCodeOverview from './components/slides/SlideCodeOverview';
import SlideVSCode from './components/slides/SlideVSCode';
import SlideDomains from './components/slides/SlideDomains';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 15; 
  const [direction, setDirection] = useState(0);
  const [isPrinting, setIsPrinting] = useState(false);
  const channelRef = useRef<BroadcastChannel | null>(null);
  
  // Synchronization Logic
  useEffect(() => {
    channelRef.current = new BroadcastChannel('presentation_sync');

    channelRef.current.onmessage = (event) => {
      const { type, index } = event.data;
      if (type === 'CHANGE_SLIDE' && index !== currentSlide) {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
      } else if (type === 'GET_STATE') {
        // Send current state to new listeners (e.g. newly opened speaker view)
        channelRef.current?.postMessage({ type: 'CHANGE_SLIDE', index: currentSlide });
      }
    };

    return () => {
      channelRef.current?.close();
    };
  }, [currentSlide]);

  // Helper to change slide and sync
  const updateSlide = useCallback((newIndex: number) => {
    setCurrentSlide(newIndex);
    channelRef.current?.postMessage({ type: 'CHANGE_SLIDE', index: newIndex });
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => {
      const next = document.fullscreenElement 
        ? (prev === totalSlides - 1 ? prev : prev + 1)
        : (prev + 1) % totalSlides;
      
      // Sync
      channelRef.current?.postMessage({ type: 'CHANGE_SLIDE', index: next });
      return next;
    });
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => {
      const next = document.fullscreenElement
        ? (prev === 0 ? prev : prev - 1)
        : (prev - 1 + totalSlides) % totalSlides;
      
      // Sync
      channelRef.current?.postMessage({ type: 'CHANGE_SLIDE', index: next });
      return next;
    });
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    if (index >= 0 && index < totalSlides) {
      updateSlide(index);
    }
  };

  const handlePrint = useCallback(() => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
    }, 1500);
  }, []);

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
    Slide1,             // 0. Intro
    Slide11,            // 1. Front vs Back
    Slide4,             // 2. CMS vs Code
    Slide5,             // 3. IDE (Swapped with Slide3)
    Slide3,             // 4. Trinity (HTML/CSS/JS) (Swapped with Slide5)
    SlideCodeOverview,  // 5. Overview
    SlideVSCode,        // 6. Hands-on
    Slide6,             // 7. Anatomy + Result Combined
    Slide8,             // 8. Responsivity
    Slide9,             // 9. Design 
    Slide2,             // 10. How Internet Works
    SlideDomains,       // 11. Domains
    Slide12,            // 12. Deploy
    Slide13,            // 13. Resumo
    Slide14             // 14. Obrigado
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
      <div className="print:hidden">
        <ScaleWrapper>
          {MainContent}
        </ScaleWrapper>
      </div>

      {isPrinting && (
        <div id="print-container" className="hidden print:block absolute top-0 left-0">
          {slides.map((SlideComponent, index) => (
            <div 
              key={index} 
              className="print-slide w-[1920px] h-[1080px] overflow-hidden relative flex flex-col items-center justify-center"
              style={{ 
                pageBreakAfter: 'always',
                background: 'radial-gradient(circle at 50% 30%, #3b0764 0%, #0a0118 70%)',
                WebkitPrintColorAdjust: 'exact',
                printColorAdjust: 'exact'
              }}
            >
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
