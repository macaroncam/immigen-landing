import React, { useState } from 'react';
import { useTypingAnimation } from './hooks/useTypingAnimation';
import { LandingPage } from './components/pages/LandingPage';
import { EarlyAccessPage } from './components/pages/EarlyAccessPage';
import { PricingPage } from './components/pages/PricingPage';
import { AboutPage } from './components/pages/AboutPage';
import { CustomersPage } from './components/pages/CustomersPage';
import { LoginPage } from './components/pages/LoginPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'early-access' | 'pricing' | 'about' | 'customers' | 'login'>('landing');
  const typedText = useTypingAnimation("AI Immigration Agent", 100);
  
  console.log('Current page:', currentPage);

  const handleGetEarlyAccess = () => {
    setCurrentPage('early-access');
  };

  const handleNavigatePricing = () => {
    setCurrentPage('pricing');
  };

  const handleNavigateAbout = () => {
    setCurrentPage('about');
  };

  const handleNavigateCustomers = () => {
    setCurrentPage('customers');
  };

  const handleNavigateLogin = () => {
    console.log('Navigating to login page...');
    setCurrentPage('login');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  const handleNavigateProduct = () => {
    // Navigate to the process section on the landing page
    setCurrentPage('landing');
    // In a real app, you would scroll to the process section here
    setTimeout(() => {
      const processSection = document.getElementById('process-section');
      if (processSection) {
        processSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateContact = () => {
    // Navigate to the contact section on the landing page
    setCurrentPage('landing');
    // In a real app, you would scroll to the contact section here
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (currentPage === 'login') {
    console.log('Rendering LoginPage...');
    return <LoginPage 
      onBackToLanding={handleBackToLanding}
      onGetEarlyAccess={handleGetEarlyAccess}
      onNavigatePricing={handleNavigatePricing}
      onNavigateAbout={handleNavigateAbout}
      onNavigateCustomers={handleNavigateCustomers}
    />;
  }

  if (currentPage === 'early-access') {
    return <EarlyAccessPage 
      onBackToLanding={handleBackToLanding} 
      onNavigatePricing={handleNavigatePricing}
      onNavigateAbout={handleNavigateAbout}
      onNavigateCustomers={handleNavigateCustomers}
      onNavigateProduct={handleNavigateProduct}
      onNavigateContact={handleNavigateContact}
    />;
  }

  if (currentPage === 'pricing') {
    return <PricingPage 
      onBackToLanding={handleBackToLanding} 
      onGetEarlyAccess={handleGetEarlyAccess}
      onNavigatePricing={handleNavigatePricing}
      onNavigateAbout={handleNavigateAbout}
      onNavigateCustomers={handleNavigateCustomers}
      onNavigateLogin={handleNavigateLogin}
    />;
  }

  if (currentPage === 'about') {
    return <AboutPage 
      onBackToLanding={handleBackToLanding} 
      onGetEarlyAccess={handleGetEarlyAccess}
      onNavigatePricing={handleNavigatePricing}
      onNavigateAbout={handleNavigateAbout}
      onNavigateCustomers={handleNavigateCustomers}
      onNavigateLogin={handleNavigateLogin}
    />;
  }

  if (currentPage === 'customers') {
    return <CustomersPage 
      onBackToLanding={handleBackToLanding} 
      onGetEarlyAccess={handleGetEarlyAccess}
      onNavigatePricing={handleNavigatePricing}
      onNavigateAbout={handleNavigateAbout}
      onNavigateCustomers={handleNavigateCustomers}
      onNavigateLogin={handleNavigateLogin}
    />;
  }

  return <LandingPage 
    typedText={typedText} 
    onGetEarlyAccess={handleGetEarlyAccess} 
    onNavigatePricing={handleNavigatePricing} 
    onNavigateAbout={handleNavigateAbout} 
    onNavigateCustomers={handleNavigateCustomers}
    onNavigateLogin={handleNavigateLogin}
  />;
}