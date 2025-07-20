import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Navigation } from '../shared/Navigation';
import { Footer } from '../sections/Footer';
import { MatrixRain, FloatingParticles, AnimatedGridBackground } from '../shared/BackgroundEffects';
import { GlitchText } from '../shared/UIComponents';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  buttonText: string;
  savings?: string;
}

interface PricingPageProps {
  onBackToLanding: () => void;
  onGetEarlyAccess: () => void;
  onNavigatePricing: () => void;
  onNavigateAbout: () => void;
  onNavigateCustomers: () => void;
  onNavigateLogin?: () => void;
}

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Discover your immigration path",
    features: [
      "CV Analysis & Parsing",
      "Route Intelligence (EB1-A/EB-2/O-1)",
      "Eligibility Assessment",
      "Basic Recommendations",
      "Community Support",
      "Limited to 1 analysis per month"
    ],
    popular: false,
    buttonText: "Start Free Analysis",
    savings: "No credit card required"
  },
  {
    name: "Self-Petitioner",
    price: "$500",
    period: "per petition",
    description: "Complete petition drafting for individuals",
    features: [
      "Everything in Free (unlimited)",
      "AI Evidence Package Builder",
      "30-page Petition Draft (EB1-A/EB-2)",
      "USCIS Compliance Review",
      "Legal Precedent Integration",
      "Priority Email Support",
      "72hr Turnaround",
      "2 Revision Rounds"
    ],
    popular: true,
    buttonText: "Most Popular",
    savings: "Save $4,500+ vs. traditional lawyers"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "starting at $25k/year",
    description: "For global companies recruiting talent",
    features: [
      "Everything in Self-Petitioner",
      "Unlimited Petitions",
      "API Integration",
      "Bulk Processing Dashboard",
      "Custom Workflows",
      "Dedicated Success Manager",
      "24hr SLA Guarantee",
      "Advanced Analytics",
      "Multi-language Support",
      "White-label Option"
    ],
    popular: false,
    buttonText: "Contact Sales",
    savings: "ROI: 80% cost reduction vs. outsourced legal"
  }
];

export const PricingPage = ({ onBackToLanding, onGetEarlyAccess, onNavigatePricing, onNavigateAbout, onNavigateCustomers, onNavigateLogin }: PricingPageProps) => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
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

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-lime-400/20 text-lime-400 border-lime-400/50 font-mono">
                <Zap className="w-3 h-3 mr-1" />
                PRICING
              </Badge>
              <GlitchText>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
                  Choose Your Plan
                </h1>
              </GlitchText>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
                <span className="text-lime-400">&gt;</span> Transparent pricing for AI-powered immigration assistance
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`h-full bg-gray-900/60 backdrop-blur-sm border-lime-400/30 hover:border-lime-400/50 transition-all duration-300 relative ${
                    plan.popular ? 'ring-2 ring-lime-400/50' : ''
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-lime-400 text-black font-mono">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-8">
                      <CardTitle className="text-2xl font-bold text-white font-mono mb-2">
                        {plan.name}
                      </CardTitle>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-lime-400 font-mono">
                          {plan.price}
                        </span>
                        <span className="text-gray-400 font-mono text-sm ml-2">
                          {plan.period}
                        </span>
                      </div>
                      <CardDescription className="text-gray-300 font-mono mb-2">
                        {plan.description}
                      </CardDescription>
                      {plan.savings && (
                        <div className="text-xs text-lime-400 font-mono bg-lime-400/10 px-2 py-1 rounded">
                          {plan.savings}
                        </div>
                      )}
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <Check className="w-4 h-4 text-lime-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm font-mono">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={onGetEarlyAccess}
                        className={`w-full font-mono font-bold ${
                          plan.popular
                            ? 'bg-lime-400 text-black hover:bg-lime-300'
                            : 'bg-gray-800 text-white border border-lime-400/30 hover:border-lime-400/50 hover:bg-gray-700'
                        }`}
                      >
                        {plan.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-4 font-mono">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 font-mono">
                <span className="text-lime-400">#</span> Transparent pricing for individuals, firms, and enterprises
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "What's included in the free plan?",
                  answer: "The free plan includes CV analysis, route intelligence for EB1-A/EB-2/O-1, and eligibility assessment. You get 1 free analysis per month with no credit card required."
                },
                {
                  question: "How does this compare to hiring a lawyer?",
                  answer: "Traditional immigration lawyers charge $5,000-$15,000+ for EB1-A petitions. Our Self-Petitioner plan at $500 delivers comparable quality at 90%+ cost savings, with faster turnaround times."
                },
                {
                  question: "What's the success rate of your petitions?",
                  answer: "Our AI is trained on 10,000+ successful petitions. While we can't guarantee approval (outcomes depend on individual cases), our petitions follow proven patterns and include comprehensive evidence packages."
                },
                {
                  question: "Can I upgrade from free to paid anytime?",
                  answer: "Absolutely! Start with a free route analysis, then upgrade to Self-Petitioner when you're ready for the full petition. Your analysis data carries over seamlessly."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/40 backdrop-blur-sm border border-lime-400/20 rounded-lg p-6"
                >
                  <h3 className="text-lg font-bold text-white font-mono mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 font-mono text-sm">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};