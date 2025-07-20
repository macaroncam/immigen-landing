import React from 'react';
import { Terminal } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact-section" className="bg-black border-t border-lime-400/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
              <Terminal className="w-5 h-5 text-black" />
            </div>
            <span className="text-2xl font-bold tracking-wider font-mono">
              <span className="text-white">IMMI</span>
              <span className="tech-flash relative">
                GEN.AI
                <span className="absolute -top-1 -right-1 text-sm text-lime-400/70">β</span>
              </span>
            </span>
          </div>
          <p className="text-gray-400 max-w-md mx-auto leading-relaxed mb-6 font-mono">
            AI-powered immigration solutions for bold talent and borderless teams.
          </p>
          <div className="text-gray-500 text-sm font-mono">
            © 2025 Immigen.AI Systems
          </div>
        </div>
      </div>
    </footer>
  );
};