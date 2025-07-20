import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Server, Zap } from 'lucide-react';
import { GlitchText, UserInterfacePanel } from '../shared/UIComponents';
import { processSteps } from '../../data/processSteps';

export const ProcessSection = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleStepHover = (index: number) => {
    setHoveredStep(index);
    // Simulate step completion animation
    if (!completedSteps.includes(index)) {
      setTimeout(() => {
        setCompletedSteps(prev => [...prev, index]);
      }, 500);
    }
  };

  return (
    <section id="process-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-lime-400/20 text-lime-400 border-lime-400/50 font-mono">
            <Server className="w-3 h-3 mr-1" />
            USER.EXPERIENCE
          </Badge>
          <GlitchText>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              Your Immigration Journey in 4 Simple Steps
            </h2>
          </GlitchText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Experience the power of AI-driven immigration assistance tailored to your unique profile
          </p>
        </motion.div>
        
        {/* Minimal floating dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-lime-400/10 rounded-full"
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 1.5
              }}
              style={{
                left: `${30 + i * 20}%`,
                top: `${40 + (i % 2) * 30}%`
              }}
            />
          ))}
        </div>

        <div className="space-y-8 relative">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
              onMouseEnter={() => handleStepHover(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >

              
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    {/* Clean step number with subtle completion state */}
                    <motion.div 
                      className="relative w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold overflow-hidden border-2"
                      animate={{
                        borderColor: completedSteps.includes(index) 
                          ? "#a3e635" 
                          : hoveredStep === index 
                          ? "#a3e635" 
                          : "rgba(163, 230, 53, 0.3)",
                        backgroundColor: completedSteps.includes(index) 
                          ? "#a3e635" 
                          : hoveredStep === index 
                          ? "rgba(163, 230, 53, 0.1)" 
                          : "transparent"
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <motion.span 
                        className="relative z-10 font-bold"
                        animate={{ 
                          color: completedSteps.includes(index) ? "#000000" : "#ffffff"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {step.number}
                      </motion.span>
                      
                      {/* Subtle completion indicator */}
                      <AnimatePresence>
                        {completedSteps.includes(index) && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3 
                        className="text-xl font-bold text-white font-mono"
                        animate={{ 
                          color: hoveredStep === index ? "#a3e635" : "#ffffff"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.title}
                      </motion.h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <motion.div 
                          className="w-2 h-2 rounded-full"
                          animate={{ 
                            backgroundColor: completedSteps.includes(index) ? "#10b981" : "#eab308",
                            scale: hoveredStep === index ? 1.2 : 1
                          }}
                          transition={{ 
                            duration: 0.2,
                            ease: "easeOut"
                          }}
                        />
                        <span className="text-xs text-yellow-400 font-mono">{step.status}</span>
                      </div>
                    </div>

                  </div>
                  <motion.p 
                    className="text-gray-300 leading-relaxed font-mono"
                    animate={{ 
                      color: hoveredStep === index ? "#d1d5db" : "#9ca3af"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
                
                <motion.div 
                  className={`${index % 2 === 1 ? 'md:order-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{ 
                      scale: hoveredStep === index ? 1.01 : 1
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="rounded-lg"
                  >
                    <UserInterfacePanel title={`Step ${step.number}: ${step.title}`}>
                      <step.userInterface />
                    </UserInterfacePanel>
                  </motion.div>
                </motion.div>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="flex justify-center my-8 relative">
                  {/* Clean connection line */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    className="w-0.5 h-16 bg-gradient-to-b from-lime-400/60 to-lime-400/10 relative"
                  />
                  
                  {/* Single progress indicator */}
                  <motion.div
                    className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-lime-400/80 rounded-full"
                    animate={{ 
                      y: [0, 32],
                      opacity: [0.8, 0.2]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};