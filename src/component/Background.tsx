import React, { useState, useEffect } from 'react';

// Define the types for our shape and animation objects
interface Shape {
  id: number;
  type: string;
  color: string;
  size: string;
}

interface ShapeAnimation {
  keyframes: string;
  animationStyle: React.CSSProperties;
}

// Main Background component
const Background = () => {
  const shapes: Shape[] = [
    { id: 1, type: 'rounded-full', color: 'bg-primary', size: 'w-24 h-24' },
    { id: 2, type: 'rounded-xl', color: 'bg-primary', size: 'w-20 h-20' },
    { id: 3, type: 'rounded-full', color: 'bg-primary', size: 'w-16 h-16' },
    { id: 4, type: 'rounded-xl', color: 'bg-primary', size: 'w-28 h-28' },
    { id: 5, type: 'rounded-full', color: 'bg-primary', size: 'w2 h-32' },
    { id: 6, type: 'rounded-xl', color: 'bg-primary', size: 'w-12 h-12' },
    { id: 7, type: 'rounded-full', color: 'bg-primary', size: 'w-40 h-40' },
    { id: 8, type: 'rounded-full', color: 'bg-primary', size: 'w-20 h-20' },
    { id: 9, type: 'rounded-xl', color: 'bg-primary', size: 'w-28 h-28' },
    { id: 10, type: 'rounded-full', color: 'bg-primary', size: 'w-16 h-16' },
  ];

  const [shapeAnimations, setShapeAnimations] = useState<Record<number, ShapeAnimation>>({});

  useEffect(() => {
    const generateAnimations = () => {
      const animations: Record<number, ShapeAnimation> = {};
      shapes.forEach(shape => {
        // Generate random animation properties for each shape
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        const scale = 0.5 + Math.random() * 3.5;
        const rotate = Math.random() * 360;

        animations[shape.id] = {
          keyframes: `
            @keyframes animate-${shape.id} {
              0% {
                transform: translateX(${startX}vw) translateY(${startY}vh) translateZ(0) scale(1) rotate(0deg);
                opacity: 0.6;
              }
              50% {
                transform: translateX(${endX}vw) translateY(${endY}vh) translateZ(50px) scale(${scale}) rotate(${rotate}deg);
                opacity: 0.8;
              }
              100% {
                transform: translateX(${startX}vw) translateY(${startY}vh) translateZ(100px) scale(1) rotate(360deg);
                opacity: 0.6;
              }
            }
          `,
          animationStyle: {
            animation: `animate-${shape.id} ${5 + Math.random() * 10}s ease-in-out infinite alternate`,
          },
        };
      });
      setShapeAnimations(animations);
    };

    generateAnimations();
  }, []);

  return (
    <div className="absolute inset-0 -z-10 h-screen w-screen overflow-hidden bg-[#04173b]">
      <style>
        {Object.values(shapeAnimations).map(anim => anim.keyframes).join('')}
      </style>
      {shapes.map(shape => (
        <div 
          key={shape.id}
          className={`absolute ${shape.size} ${shape.color} ${shape.type} filter blur-3xl`}
          style={{
            ...shapeAnimations[shape.id]?.animationStyle,
            top: '0',
            left: '0',
          }}
        />
      ))}
    </div>
  );
};

export default Background;
