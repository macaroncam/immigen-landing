import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowRight, Users, Lightbulb, Target, Heart, Star, Zap } from 'lucide-react';
import { Navigation } from '../shared/Navigation';
import { FloatingParticles, MatrixRain, AnimatedGridBackground } from '../shared/BackgroundEffects';

interface AboutPageProps {
  onBackToLanding: () => void;
  onGetEarlyAccess: () => void;
  onNavigatePricing: () => void;
  onNavigateAbout: () => void;
  onNavigateCustomers: () => void;
  onNavigateLogin?: () => void;
}

const founders = [
  {
    name: "Cam",
    title: "Co-Founder",
    credentials: "Stanford Symbolic Systems • Schwarzman Scholar",
    expertise: "Legal Tech Research at Stanford Law RegLab",
    icon: "🎓",
    highlight: "Legal AI Expert"
  },
  {
    name: "Zara", 
    title: "Co-Founder",
    credentials: "Stanford CS • Ex-Apple Engineer",
    expertise: "World Record: Youngest Woman to Fly Across the World",
    icon: "✈️",
    highlight: "Systems Architect"
  },
  {
    name: "Ryan",
    title: "Co-Founder", 
    credentials: "Northeastern CS & Math • MIT Media Lab",
    expertise: "Winner: Stanford, Harvard, MIT Hackathons",
    icon: "🚀",
    highlight: "AI Research Lead"
  }
];

export const AboutPage = ({ onBackToLanding, onGetEarlyAccess, onNavigatePricing, onNavigateAbout, onNavigateCustomers, onNavigateLogin }: AboutPageProps) => {
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
        <div className="max-w-5xl mx-auto">
          
          {/* Hero Hook */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
              We've Been Where You Are
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-mono">
              <span className="text-lime-400">&gt;</span> Three founders. Three immigration journeys. 
              One mission to fix the broken system that nearly broke us.
            </p>
          </motion.div>

          {/* The Problem Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 bg-gray-900/40 rounded-2xl p-8 md:p-12 border border-lime-400/20 backdrop-blur-sm"
          >
            <div className="flex items-start space-x-4 mb-6">
              <Heart className="w-8 h-8 text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
                  Why We Built This
                </h2>
                <div className="space-y-4 text-gray-300 font-mono leading-relaxed">
                  <p>
                    <span className="text-lime-400">&gt;</span> Picture this: You're brilliant. You've got the credentials, the achievements, the potential to change the world. 
                    But you're stuck in immigration limbo because the system treats you like a number, not a human.
                  </p>
                  <p>
                    <span className="text-lime-400">&gt;</span> We lived this nightmare. Cam navigated visa complexities while researching at Stanford Law. 
                    Zara faced barriers despite her Apple engineering background. Ryan hit walls as an international student with MIT research.
                  </p>
                  <p>
                    <span className="text-lime-400">&gt;</span> <span className="text-lime-400">The breaking point?</span> Watching brilliant minds give up their American dreams 
                    because lawyers cost $5,000+, take months to respond, and treat every case like paperwork instead of a person's future.
                  </p>
                  <p>
                    <span className="text-lime-400">&gt;</span> <span className="text-white font-semibold">So we decided to build the system we wished existed.</span> 
                    AI that understands you're not just another petition. Technology that works at the speed of ambition. 
                    A platform that democratizes what should have always been accessible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Meet the Founders */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-lime-400/20 text-lime-400 border-lime-400/50 font-mono">
                <Users className="w-3 h-3 mr-1" />
                THE TEAM
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
                Built by Immigration Survivors
              </h2>
              <p className="text-xl text-gray-300 font-mono">
                <span className="text-lime-400">&gt;</span> Three technologists who turned their immigration pain into your solution
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <Card className="bg-gray-900/40 border-lime-400/20 backdrop-blur-sm h-full hover:border-lime-400/40 transition-all duration-300 hover:bg-gray-900/60">
                    <CardHeader className="text-center pb-4">
                      <div className="text-4xl mb-4">{founder.icon}</div>
                      <CardTitle className="text-xl text-white mb-1 font-mono">
                        {founder.name}
                      </CardTitle>
                      <Badge className="bg-lime-400/10 text-lime-400 border-lime-400/30 font-mono text-xs mb-3">
                        {founder.highlight}
                      </Badge>
                      <div className="space-y-2">
                        <p className="text-gray-300 text-sm font-mono font-semibold">
                          {founder.credentials}
                        </p>
                        <p className="text-gray-400 text-xs font-mono leading-relaxed">
                          {founder.expertise}
                        </p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-lime-400/20 text-lime-400 border-lime-400/50 font-mono">
                  <Target className="w-3 h-3 mr-1" />
                  OUR VISION
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono">
                  A World Without Immigration Barriers
                </h2>
                <div className="space-y-4 text-gray-300 font-mono leading-relaxed">
                  <p>
                    <span className="text-lime-400">&gt;</span> We're building more than software. We're building the infrastructure for 
                    global talent mobility.
                  </p>
                  <p>
                    <span className="text-lime-400">&gt;</span> <span className="text-lime-400">Imagine:</span> A PhD uploads their CV and gets 
                    a complete EB1-A petition in 72 hours, not 6 months.
                  </p>
                  <p>
                    <span className="text-lime-400">&gt;</span> <span className="text-lime-400">Imagine:</span> A startup can bring their 
                    international co-founder to the US without burning $50K on lawyers.
                  </p>
                  <p>
                    <span className="text-lime-400">&gt;</span> <span className="text-lime-400">Imagine:</span> Immigration becomes what it 
                    should be — a gateway for innovation, not a barrier to dreams.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-900/40 rounded-xl p-6 border border-lime-400/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-lg font-bold text-white font-mono">95%+ Success Rate</h3>
                  </div>
                  <p className="text-gray-300 text-sm font-mono">
                    Our AI has analyzed 10,000+ successful cases to understand what actually works
                  </p>
                </div>
                
                <div className="bg-gray-900/40 rounded-xl p-6 border border-lime-400/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Zap className="w-5 h-5 text-lime-400" />
                    <h3 className="text-lg font-bold text-white font-mono">72-Hour Turnaround</h3>
                  </div>
                  <p className="text-gray-300 text-sm font-mono">
                    From CV upload to complete petition — faster than most lawyers respond to emails
                  </p>
                </div>
                
                <div className="bg-gray-900/40 rounded-xl p-6 border border-lime-400/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Lightbulb className="w-5 h-5 text-lime-400" />
                    <h3 className="text-lg font-bold text-white font-mono">USCIS Compliant</h3>
                  </div>
                  <p className="text-gray-300 text-sm font-mono">
                    Built on legal frameworks proven in thousands of successful petitions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gray-900/40 rounded-2xl p-12 border border-lime-400/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">
              Ready to Take Control of Your Immigration Journey?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-mono">
              <span className="text-lime-400">&gt;</span> Join the thousands of immigrants who refuse to let bureaucracy dim their brilliance. 
              Your American dream shouldn't wait for broken systems to fix themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={onGetEarlyAccess}
                className="bg-lime-400 text-black hover:bg-lime-300 font-mono font-bold px-8 py-4"
              >
                Start Free Analysis 
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