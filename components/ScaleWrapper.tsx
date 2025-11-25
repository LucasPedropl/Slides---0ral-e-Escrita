import React, { useEffect, useState } from 'react';

// Design base resolution (Standard Desktop)
const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

interface ScaleWrapperProps {
  children: React.ReactNode;
}

export const ScaleWrapper: React.FC<ScaleWrapperProps> = ({ children }) => {
  const [transformStyle, setTransformStyle] = useState({
    scale: 1,
    rotation: 0,
    width: BASE_WIDTH,
    height: BASE_HEIGHT,
  });

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      
      // Check orientation
      const isPortrait = vh > vw;
      
      let scale = 1;
      let rotation = 0;

      if (isPortrait) {
         // Portrait Mode: Rotate 90deg to force "Landscape" view
         // We map the Base Width (1920) to the device Height (vh)
         // We map the Base Height (1080) to the device Width (vw)
         const scaleX = vh / BASE_WIDTH;
         const scaleY = vw / BASE_HEIGHT;
         
         // Use the smaller scale to ensure it fits entirely
         scale = Math.min(scaleX, scaleY);
         rotation = 90;
      } else {
         // Landscape Mode: Standard scaling
         const scaleX = vw / BASE_WIDTH;
         const scaleY = vh / BASE_HEIGHT;
         
         scale = Math.min(scaleX, scaleY);
         rotation = 0;
      }
      
      setTransformStyle({
        scale,
        rotation,
        width: BASE_WIDTH,
        height: BASE_HEIGHT,
      });
    };

    window.addEventListener('resize', handleResize);
    // Call once to set initial state
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-[#0a0118] overflow-hidden flex items-center justify-center print:hidden"
    >
      <div
        style={{
           width: `${transformStyle.width}px`,
           height: `${transformStyle.height}px`,
           transform: `rotate(${transformStyle.rotation}deg) scale(${transformStyle.scale})`,
           // When rotating, we need to ensure the pivot keeps it centered. 
           // Flexbox centering on the parent handles the position, 
           // but transform-origin center is needed for the rotation to stay in place.
           transformOrigin: 'center center',
           display: 'flex',
           flexDirection: 'column',
           flexShrink: 0,
        }}
      >
         {children}
      </div>
    </div>
  );
};
