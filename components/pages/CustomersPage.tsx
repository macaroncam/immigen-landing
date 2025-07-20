import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { User, Building2, CheckCircle, ArrowRight, Zap, Shield, Clock, Users, DollarSign, Target, Lightbulb, Award, Globe } from 'lucide-react';
import { Navigation } from '../shared/Navigation';
import { FloatingParticles, MatrixRain, AnimatedGridBackground } from '../shared/BackgroundEffects';

interface CustomersPageProps {
  onBackToLanding: () => void;
  onGetEarlyAccess: () => void;
  onNavigatePricing: () => void;
  onNavigateAbout: () => void;
  onNavigateCustomers: () => void;
  onNavigateLogin?: () => void;
}

type CustomerType = 'self-petitioners' | 'enterprise';

const customerData = {
  'self-petitioners': {
    title: "Self-Petitioners",
    subtitle: "Individual professionals taking control of their immigration journey",
    icon: <User className="w-8 h-8" />,
    color: "from-lime-500 to-green-500",
    pricing: "$500 per petition",
    savings: "Save $4,500+ vs traditional lawyers",
    description: "Brilliant researchers, engineers, doctors, and innovators who refuse to let bureaucracy dim their potential. You've got the talent — we'll handle the paperwork.",
    features: [
      {
        icon: <Target className="w-5 h-5" />,
        title: "Instant Route Analysis",
        description: "Upload your CV and discover your optimal visa path in minutes, not months"
      },
      {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "AI-Powered Evidence Builder",
        description: "Generate 30+ personalized document recommendations based on USCIS success patterns"
      },
      {
        icon: <Award className="w-5 h-5" />,
        title: "Complete Petition Drafts",
        description: "Receive professionally crafted 30-page petitions following proven legal frameworks"
      },
      {
        icon: <Clock className="w-5 h-5" />,
        title: "72-Hour Turnaround",
        description: "From analysis to submission-ready petition faster than most lawyers respond to emails"
      }
    ],
    benefits: [
      "Complete transparency — see exactly what goes into your petition",
      "No waiting for lawyer availability or billable hour constraints", 
      "Data-driven approach based on 10,000+ successful cases",
      "Two revision rounds included with expert review",
      "USCIS compliance guaranteed with our legal framework"
    ],
    cta: "Start Free Analysis",
    process: "Perfect for individuals who want control, transparency, and results without the traditional legal markup."
  },
  'enterprise': {
    title: "Global Enterprises",
    subtitle: "Companies scaling international talent acquisition",
    icon: <Building2 className="w-8 h-8" />,
    color: "from-lime-600 to-emerald-600",
    pricing: "Custom pricing from $25K/year",
    savings: "80% cost reduction vs outsourced legal",
    description: "Forward-thinking companies that understand talent is global but opportunity shouldn't be limited by geography. Scale your international hiring without scaling legal costs.",
    features: [
      {
        icon: <Zap className="w-5 h-5" />,
        title: "API Integration",
        description: "Seamlessly connect with your existing HR systems for automated petition processing"
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Bulk Processing Dashboard", 
        description: "Manage multiple employee petitions with real-time status tracking and analytics"
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Dedicated Success Manager",
        description: "Strategic guidance and support with 24-hour SLA for time-sensitive hiring needs"
      },
      {
        icon: <Globe className="w-5 h-5" />,
        title: "Custom Workflows",
        description: "Tailored processes that align with your company's unique hiring and compliance requirements"
      }
    ],
    benefits: [
      "Standardized process ensures consistent quality across all petitions",
      "Real-time visibility into petition status for HR and legal teams",
      "Advanced analytics and success rate reporting by role and geography",
      "Compliance monitoring and risk management built into every step",
      "Unlimited petition processing with transparent, predictable pricing"
    ],
    cta: "Contact Sales",
    process: "Ideal for companies hiring 10+ international employees annually who need scalable, compliant immigration solutions."
  }
};

export const CustomersPage = ({ onBackToLanding, onGetEarlyAccess, onNavigatePricing, onNavigateAbout, onNavigateCustomers, onNavigateLogin }: CustomersPageProps) => {
  const [activeCustomer, setActiveCustomer] = useState<CustomerType>('self-petitioners');
  const currentData = customerData[activeCustomer];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <MatrixRain />
      <FloatingParticles />
      <AnimatedGridBackground />

      <Navigation 
        onGetEarlyAccess={onGetEarlyAccess} 
        onBackToHome={onBackToLanding}
        onNavigatePricing={onNavigatePricing}
        onNavigateAbout={onNavigateAbout}
        onNavigateCustomers={onNavigateCustomers}
        onNavigateLogin={onNavigateLogin}
        onNavigateProduct={onBackToLanding}
        onNavigateContact={onBackToLanding}
        showBackButton={false}
        isLandingPage={false}
      />

      <div className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-lime-400/20 text-lime-400 border-lime-400/50 font-mono">
              <Users className="w-3 h-3 mr-1" />
              WHO WE SERVE
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
              One Platform, Two Worlds
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-mono">
              <span className="text-lime-400">&gt;</span> Whether you're an individual blazing your own trail or an enterprise 
              building global teams, Immigen adapts to your immigration needs
            </p>
          </motion.div>

          {/* Interactive Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-2 border border-lime-400/20">
              <div className="flex space-x-2">
                {(Object.keys(customerData) as CustomerType[]).map((type) => (
                  <motion.button
                    key={type}
                    onClick={() => setActiveCustomer(type)}
                    className={`px-8 py-4 rounded-xl font-mono font-semibold transition-all duration-300 ${
                      activeCustomer === type
                        ? 'bg-lime-400 text-black'
                        : 'text-lime-400 hover:bg-lime-400/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {customerData[type].title}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCustomer}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {/* Hero Section for Selected Customer */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentData.color} flex items-center justify-center text-white`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {currentData.icon}
                    </motion.div>
                    <div>
                      <h2 className="text-3xl font-bold text-white font-mono">
                        {currentData.title}
                      </h2>
                      <p className="text-lime-400 font-mono">
                        {currentData.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 font-mono">
                    {currentData.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-lime-400/5 rounded-lg p-4 border border-lime-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <DollarSign className="w-4 h-4 text-lime-400" />
                        <span className="text-lime-400 font-mono font-semibold text-sm">Pricing</span>
                      </div>
                      <p className="text-white font-mono text-sm">{currentData.pricing}</p>
                    </div>
                    
                    <div className="bg-lime-400/5 rounded-lg p-4 border border-lime-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="w-4 h-4 text-lime-400" />
                        <span className="text-lime-400 font-mono font-semibold text-sm">Savings</span>
                      </div>
                      <p className="text-white font-mono text-sm">{currentData.savings}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 italic font-mono text-sm mb-6">
                    {currentData.process}
                  </p>
                  
                  <Button 
                    size="lg"
                    onClick={onGetEarlyAccess}
                    className="bg-lime-400 text-black hover:bg-lime-300 font-mono font-bold px-8 py-4"
                  >
                    {currentData.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {currentData.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-lime-400/20 hover:border-lime-400/40 transition-all duration-300"
                    >
                      <div className="text-lime-400 mb-3">
                        {feature.icon}
                      </div>
                      <h3 className="text-white font-mono font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm font-mono leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-lime-400/20">
                <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-lime-400" />
                  Why {currentData.title} Choose Immigen
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentData.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 font-mono text-sm leading-relaxed">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-gray-900/40 rounded-2xl p-12 border border-lime-400/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">
              Ready to Experience Immigration Without Limits?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-mono">
              <span className="text-lime-400">&gt;</span> Join thousands who've discovered that immigration doesn't have to be 
              a barrier to their ambitions. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={onGetEarlyAccess}
                className="bg-lime-400 text-black hover:bg-lime-300 font-mono font-bold px-8 py-4"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={onBackToLanding}
                className="border-lime-400/50 text-lime-400 hover:bg-lime-400/10 font-mono px-8 py-4"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};