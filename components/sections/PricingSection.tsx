import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Zap, CheckCircle } from 'lucide-react';
import { GlitchText, TerminalWindow } from '../shared/UIComponents';
import { plans } from '../../data/content';

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-lime-400/20 text-lime-400 border-lime-400/50 font-mono">
            <Zap className="w-3 h-3 mr-1" />
            PRICING.CONFIG
          </Badge>
          <GlitchText>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              Select Your Processing Tier
            </h2>
          </GlitchText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            <span className="text-lime-400">$</span> Transparent pricing. No hidden fees. Scale as needed.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-lime-400 text-black px-4 py-1 font-mono">
                    RECOMMENDED
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full ${plan.popular ? 'ring-2 ring-lime-400 bg-black/90' : 'bg-black/80'} backdrop-blur-sm border-lime-400/30 hover:border-lime-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/20`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2 text-white font-mono">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-lime-400 font-mono">{plan.price}</span>
                    <span className="text-gray-400 ml-1 font-mono">one-time</span>
                  </div>
                  <CardDescription className="text-gray-300 font-mono">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <TerminalWindow title="package_config" className="text-xs mb-6">
                    <div className="space-y-1">
                      <div className="text-lime-400">{plan.api_calls}</div>
                      <div className="text-lime-400">{plan.processing}</div>
                    </div>
                  </TerminalWindow>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 font-mono text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-lime-400 text-black hover:bg-lime-300' : 'border-lime-400/50 text-lime-400 hover:bg-lime-400/10'} font-mono`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    ./purchase --tier={plan.name.toLowerCase().replace(' ', '_')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};