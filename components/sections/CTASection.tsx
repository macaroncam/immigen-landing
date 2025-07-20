import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Terminal, ArrowRight } from 'lucide-react';
import { GlitchText } from '../shared/UIComponents';

interface CTASectionProps {
  onGetEarlyAccess: () => void;
}

export const CTASection = ({ onGetEarlyAccess }: CTASectionProps) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black border-t border-lime-400/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <GlitchText>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              Take charge of your immigration path
            </h2>
          </GlitchText>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-mono">
            Join self-starters & global firms in pioneering the immigration revolution with Immigen. Reserve your spot on our early access list today.
          </p>
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
        </motion.div>
      </div>
    </section>
  );
};