import React from 'react';
import { Navigation } from '../shared/Navigation';
import { HeroSection } from '../sections/HeroSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { ProcessSection } from '../sections/ProcessSection';
import { VisaTypesSection } from '../sections/VisaTypesSection';

import { TestimonialsSection } from '../sections/TestimonialsSection';

import { CTASection } from '../sections/CTASection';
import { Footer } from '../sections/Footer';
import { FloatingParticles, MatrixRain, AnimatedGridBackground } from '../shared/BackgroundEffects';

interface LandingPageProps {
  typedText: string;
  onGetEarlyAccess: () => void;
  onNavigatePricing: () => void;
  onNavigateAbout: () => void;
  onNavigateCustomers: () => void;
  onNavigateLogin: () => void;
}

export const LandingPage = ({ typedText, onGetEarlyAccess, onNavigatePricing, onNavigateAbout, onNavigateCustomers, onNavigateLogin }: LandingPageProps) => {
  const scrollToProcess = () => {
    const processSection = document.getElementById('process-section');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const footer = document.getElementById('contact-section');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-lime-400 overflow-x-hidden">
      {/* Background Effects */}
      <MatrixRain />
      <FloatingParticles />
      <AnimatedGridBackground />

      <Navigation 
        onGetEarlyAccess={onGetEarlyAccess} 
        onNavigatePricing={onNavigatePricing} 
        onNavigateAbout={onNavigateAbout} 
        onNavigateCustomers={onNavigateCustomers}
        onNavigateLogin={onNavigateLogin}
        onNavigateProduct={scrollToProcess}
        onNavigateContact={scrollToContact}
        isLandingPage={true}
      />
      <HeroSection typedText={typedText} onGetEarlyAccess={onGetEarlyAccess} />
      
      {/* Simple tagline */}
      <div className="py-8 text-center">
        <p className="text-gray-400 font-mono text-base">
          Immigen serves self-petitioners and global enterprises
        </p>
      </div>
      
      
      <div className="pt-12">
        <FeaturesSection />
      </div>
      <ProcessSection />
      <VisaTypesSection />
      <TestimonialsSection />

      <CTASection onGetEarlyAccess={onGetEarlyAccess} />
      <Footer />
    </div>
  );
};