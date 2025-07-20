import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Users, Star } from 'lucide-react';
import { GlitchText, TerminalWindow } from '../shared/UIComponents';
import { testimonials } from '../../data/content';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-lime-400/20 text-lime-400 border-lime-400/50 font-mono">
            <Users className="w-3 h-3 mr-1" />
            USER.FEEDBACK
          </Badge>
          <GlitchText>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              Production Performance Metrics
            </h2>
          </GlitchText>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full bg-black/80 backdrop-blur-sm border-lime-400/30 hover:border-lime-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-lime-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">
                      "{testimonial.content}"
                    </p>
                    
                    <TerminalWindow title="performance_metrics" className="text-xs mb-4">
                      <div className="text-lime-400 font-mono">
                        {testimonial.tech_details}
                      </div>
                    </TerminalWindow>
                    
                    <div className="flex items-center space-x-3">
                      <Avatar className="border border-lime-400/30">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback className="bg-lime-400/20 text-lime-400">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-white font-mono">{testimonial.name}</p>
                        <p className="text-sm text-lime-400/70 font-mono">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};