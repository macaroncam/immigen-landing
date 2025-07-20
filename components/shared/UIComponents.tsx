import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';

export const GlitchText = ({ children, className = "" }) => (
  <motion.div
    className={`relative ${className}`}
    whileHover={{
      textShadow: [
        "0 0 0 #00ff00",
        "2px 0 0 #ff0000, -2px 0 0 #00ffff",
        "0 0 0 #00ff00"
      ],
      transition: { duration: 0.3 }
    }}
  >
    {children}
  </motion.div>
);

export const TerminalWindow = ({ title, children, className = "" }) => (
  <div className={`bg-black border border-lime-400/30 rounded-lg overflow-hidden ${className}`}>
    <div className="bg-gray-900 px-4 py-2 border-b border-lime-400/30 flex items-center space-x-2">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <span className="text-lime-400 text-sm font-mono">{title}</span>
    </div>
    <div className="p-4 font-mono text-sm">
      {children}
    </div>
  </div>
);

export const UserInterfacePanel = ({ title, children, className = "" }) => (
  <div className={`bg-black/95 border border-lime-400/30 rounded-lg overflow-hidden ${className}`}>
    <div className="bg-gray-900/90 px-4 py-3 border-b border-lime-400/30 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-white text-sm">{title}</span>
      </div>
      <Badge className="bg-lime-400/20 text-lime-400 text-xs">LIVE</Badge>
    </div>
    <div className="p-4">
      {children}
    </div>
  </div>
);