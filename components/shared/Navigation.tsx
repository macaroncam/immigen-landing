import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import { GlitchText } from './UIComponents';

interface NavigationProps {
  onGetEarlyAccess?: () => void;
  onBackToHome?: () => void;
  onNavigatePricing?: () => void;
  onNavigateAbout?: () => void;
  onNavigateCustomers?: () => void;
  onNavigateProduct?: () => void;
  onNavigateContact?: () => void;
  onNavigateLogin?: () => void;
  showBackButton?: boolean;
  isLandingPage?: boolean;
}

export const Navigation = ({ 
  onGetEarlyAccess, 
  onBackToHome, 
  onNavigatePricing, 
  onNavigateAbout, 
  onNavigateCustomers,
  onNavigateProduct,
  onNavigateContact,
  onNavigateLogin,
  showBackButton = false,
  isLandingPage = false 
}: NavigationProps) => {

  const handleProductClick = () => {
    if (isLandingPage && onNavigateProduct) {
      onNavigateProduct();
    } else if (onBackToHome) {
      onBackToHome();
    }
  };

  const handleContactClick = () => {
    if (isLandingPage && onNavigateContact) {
      onNavigateContact();
    } else if (onBackToHome) {
      onBackToHome();
    }
  };
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="relative z-50 bg-black/90 backdrop-blur-md border-b border-lime-400/30 sticky top-0"
    >
      <div className="max-w-7xl mx-auto pl-3 pr-2 sm:pl-4 sm:pr-4 lg:pl-6 lg:pr-6">
        <div className="flex items-center h-16">
          {/* Left section - Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            onClick={onBackToHome}
            className="cursor-pointer"
          >
            <span className="text-2xl font-bold tracking-wider font-mono">
              <span className="text-white">IMMI</span>
              <span className="text-lime-400 tech-flash relative">
                GEN.AI
                <span className="absolute -top-1 -right-1 text-sm text-lime-400/70">β</span>
              </span>
            </span>
          </motion.div>
          
          {showBackButton ? (
            <div className="ml-auto">
              <Button 
                variant="outline" 
                onClick={onBackToHome}
                className="border-lime-400/50 text-lime-400 hover:bg-lime-400/10 font-mono"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Button>
            </div>
          ) : (
            <>
              {/* Center section - Navigation Links */}
              <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
                <button onClick={onNavigateAbout} className="text-lime-400/80 hover:text-lime-400 transition-colors font-mono">About Us</button>
                <button onClick={handleProductClick} className="text-lime-400/80 hover:text-lime-400 transition-colors font-mono">Product</button>
                <button onClick={onNavigatePricing} className="text-lime-400/80 hover:text-lime-400 transition-colors font-mono">Pricing</button>
                <button onClick={onNavigateCustomers} className="text-lime-400/80 hover:text-lime-400 transition-colors font-mono">Customers</button>
                <button onClick={handleContactClick} className="text-lime-400/80 hover:text-lime-400 transition-colors font-mono">Contact Us</button>
              </div>
              
              {/* Right section - Action Buttons */}
              <div className="hidden md:flex items-center space-x-4 ml-auto">
                <Button 
                  onClick={onGetEarlyAccess}
                  className="bg-lime-400 text-black hover:bg-lime-300 font-mono font-bold"
                >
                  Get Early Access →
                </Button>
                <button onClick={onNavigateLogin} className="text-lime-400/80 hover:text-lime-400 transition-colors font-mono">Log In</button>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
};