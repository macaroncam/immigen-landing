import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Activity, ArrowRight, Play } from 'lucide-react';
import { GlitchText, TerminalWindow } from '../shared/UIComponents';
import { DemoInterface } from './DemoInterface';

interface HeroSectionProps {
  typedText: string;
  onGetEarlyAccess: () => void;
}

export const HeroSection = ({ typedText, onGetEarlyAccess }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-8 flex items-center pt-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Centered Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-lime-400/20 text-lime-400 border-lime-400/50 font-mono text-sm px-4 py-2">
            <Activity className="w-4 h-4 mr-2" />
            SYSTEM STATUS: LAUNCHING SOON
          </Badge>
          
          <div className="space-y-1 mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-none font-mono">
              The First
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-none font-mono">
              End-to-End
            </h1>
            <GlitchText className="text-4xl md:text-6xl lg:text-7xl font-bold text-lime-400 leading-none font-mono">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-white"
              >
                |
              </motion.span>
            </GlitchText>
          </div>
          
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 font-mono">
            Immigen makes immigration effortless for bold talent and borderless teams.
            <br />
            No lawyers, no friction, endless possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg"
                onClick={onGetEarlyAccess}
                className="bg-lime-400 text-black hover:bg-lime-300 px-8 py-4 text-lg font-mono font-bold group"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg"
                className="border-lime-400/50 text-lime-400 hover:bg-lime-400/10 px-8 py-4 text-lg font-mono"
              >
                <Play className="mr-2 w-5 h-5" />
                See How it Works
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Demo Interface Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TerminalWindow title="immigen_ai_v2.7.3">
              <div className="space-y-2">
                <div className="text-lime-400">
                  <span className="text-gray-500">immigration@ai:~$</span> ./start_analysis --file=cv.pdf
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="text-yellow-400"
                >
                  Initializing neural networks... ████████████ 100%
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-green-400"
                >
                  ✓ CV parsed: 15 years experience, PhD in CS
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="text-green-400"
                >
                  ✓ Qualifications analyzed: EB1-A match 94.7%
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className="text-green-400"
                >
                  ✓ Evidence package: 47 documents identified
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 }}
                  className="text-green-400"
                >
                  ✓ Petition draft: 30 pages generated
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4 }}
                  className="text-lime-400"
                >
                  Analysis complete. Success probability: 95.4%
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4.5 }}
                  className="text-gray-400"
                >
                  Ready for submission in 47.3 seconds.
                </motion.div>
              </div>
            </TerminalWindow>

            <div className="mt-4 text-center">
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400 font-mono">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>99.7% accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>USCIS compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>95% approval rate</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Demo Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <DemoInterface />
          </motion.div>
        </div>
      </div>
    </section>
  );
};