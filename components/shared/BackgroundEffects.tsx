import React from 'react';
import { motion } from 'framer-motion';

export const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-lime-400/30 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

export const MatrixRain = () => {
  const chars = "01";
  const columns = 30;
  
  return (
    <div className="fixed inset-0 pointer-events-none opacity-5">
      {Array.from({ length: columns }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-lime-400 text-xs font-mono"
          style={{ left: `${(i / columns) * 100}%` }}
          initial={{ y: -100 }}
          animate={{ 
            y: '100vh',
            transition: {
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }
          }}
        >
          {Array.from({ length: 15 }).map((_, j) => (
            <div key={j} className="block">
              {chars[Math.floor(Math.random() * chars.length)]}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const AnimatedGridBackground = () => (
  <div className="fixed inset-0 pointer-events-none opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `
        linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px'
    }} />
  </div>
);