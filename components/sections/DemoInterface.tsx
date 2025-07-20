import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { useDemoAnimation } from '../../hooks/useDemoAnimation';
import { demoSteps } from '../../data/content';

export const DemoInterface = () => {
  const demoStep = useDemoAnimation(4, 3000);
  const currentStep = demoSteps[demoStep];

  return (
    <div className="bg-black/90 border border-lime-400/30 rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lime-400 font-mono text-lg">Immigration AI Demo</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-400 text-xs font-mono">LIVE</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gray-900 rounded p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="w-4 h-4 text-lime-400" />
            <span className="text-white font-mono text-sm">{currentStep.title}</span>
          </div>
          <div className="text-lime-400 text-xs font-mono mb-2">{currentStep.status}</div>
          <div className="text-gray-300 text-xs font-mono mb-3">{currentStep.details}</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div 
              className="bg-lime-400 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${currentStep.progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="bg-gray-900 rounded p-3">
            <div className="text-lime-400 font-mono">Processing Speed</div>
            <div className="text-white font-mono">47.3 seconds</div>
          </div>
          <div className="bg-gray-900 rounded p-3">
            <div className="text-lime-400 font-mono">Accuracy Rate</div>
            <div className="text-white font-mono">99.8%</div>
          </div>
          <div className="bg-gray-900 rounded p-3">
            <div className="text-lime-400 font-mono">Success Rate</div>
            <div className="text-white font-mono">95.4%</div>
          </div>
          <div className="bg-gray-900 rounded p-3">
            <div className="text-lime-400 font-mono">Cases Processed</div>
            <div className="text-white font-mono">10,247</div>
          </div>
        </div>
      </div>
    </div>
  );
};