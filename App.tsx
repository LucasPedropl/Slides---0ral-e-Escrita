
import React, { useState, useEffect, useCallback } from 'react';
import Layout from './components/Layout';
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

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 14;
  const [direction, setDirection] = useState(0);
  const [isPrinting, setIsPrinting] = useState(false);

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

  const handlePrint = useCallback(() => {
    setIsPrinting(true);
    // Wait for render to update with all slides and Recharts to calculate dimensions.
    // Increased timeout slightly to ensure DOM is fully stable before print dialog invocation
    setTimeout(() => {
      window.print();
      // Reset after print dialog closes
      setTimeout(() => setIsPrinting(false), 500);
    }, 1000); 
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
    Slide1, Slide2, Slide3, Slide4, Slide5,
    Slide6, Slide7, Slide8, Slide9, Slide10,
    Slide11, Slide12, Slide13, Slide14
  ];

  return (
    <Layout
      currentSlide={currentSlide}
      totalSlides={totalSlides}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
      goToSlide={goToSlide}
      onPrint={handlePrint}
    >
      {/* Normal View */}
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

      {/* Print Mode View (Renders ALL slides) */}
      {/* Used opacity-0 to ensure it is layout-calculated (clientWidth > 0) but invisible during preparation. */}
      {/* Z-index allows it to overlay but pointer-events-none prevents blocking interactions if something goes wrong. */}
      {isPrinting && (
        <div className="fixed top-0 left-0 w-full min-w-[1280px] h-full z-50 opacity-0 pointer-events-none overflow-y-auto bg-[#0a0118] print:static print:z-auto print:opacity-100 print:overflow-visible print:min-w-0">
          {slides.map((SlideComponent, index) => (
            <div key={index} className="w-full h-screen break-after-page overflow-hidden relative flex flex-col items-center justify-center page-break">
               {/* Wrapper div to force full width context for child components like charts */}
               <div className="w-full h-full flex items-center justify-center">
                  <SlideComponent />
               </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default App;
