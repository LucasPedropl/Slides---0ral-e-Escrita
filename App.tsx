import React, { useState, useEffect, useCallback } from 'react';
import Layout from './components/Layout';
import Slide1_Cover from './components/slides/Slide1_Cover';
import Slide2_Definition from './components/slides/Slide2_Definition';
import Slide3_Tech from './components/slides/Slide3_Tech';
import Slide4_Social from './components/slides/Slide4_Social';
import Slide5_Editors from './components/slides/Slide5_Editors';
import Slide6_Structure from './components/slides/Slide6_Structure';
import Slide7_HtmlCode from './components/slides/Slide7_HtmlCode';
import Slide8_Economic from './components/slides/Slide8_Economic';
import Slide9_Success from './components/slides/Slide9_Success';
import Slide10_SEO from './components/slides/Slide10_SEO';
import Slide11_Users from './components/slides/Slide11_Users';
import Slide12_Future from './components/slides/Slide12_Future';
import Slide13_Conclusion from './components/slides/Slide13_Conclusion';
import Slide14_End from './components/slides/Slide14_End';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 14;
  const [direction, setDirection] = useState(0);

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

  return (
    <Layout
      currentSlide={currentSlide}
      totalSlides={totalSlides}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
      goToSlide={goToSlide}
    >
      <div className="relative w-full h-full">
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
            {currentSlide === 0 && <Slide1_Cover />}
            {currentSlide === 1 && <Slide2_Definition />}
            {currentSlide === 2 && <Slide3_Tech />}
            {currentSlide === 3 && <Slide4_Social />}
            {currentSlide === 4 && <Slide5_Editors />}
            {currentSlide === 5 && <Slide6_Structure />}
            {currentSlide === 6 && <Slide7_HtmlCode />}
            {currentSlide === 7 && <Slide8_Economic />}
            {currentSlide === 8 && <Slide9_Success />}
            {currentSlide === 9 && <Slide10_SEO />}
            {currentSlide === 10 && <Slide11_Users />}
            {currentSlide === 11 && <Slide12_Future />}
            {currentSlide === 12 && <Slide13_Conclusion />}
            {currentSlide === 13 && <Slide14_End />}
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default App;