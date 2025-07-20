import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Database, Trophy, Brain, CheckCircle } from 'lucide-react';
import { GlitchText, TerminalWindow } from '../shared/UIComponents';

export const VisaTypesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-lime-400/20 text-lime-400 border-lime-400/50 font-mono">
            <Database className="w-3 h-3 mr-1" />
            SUPPORTED.VISA_TYPES
          </Badge>
          <GlitchText>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              Specialized AI Modules
            </h2>
          </GlitchText>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-full bg-black/80 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white font-mono">EB1-A.module</CardTitle>
                    <CardDescription className="font-mono text-yellow-400/70">Extraordinary Ability Neural Network</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <TerminalWindow title="eb1a_analysis.py" className="text-xs">
                    <div className="text-yellow-400">
                      <div>criteria_analysis = [</div>
                      <div className="ml-4">awards_recognition(),</div>
                      <div className="ml-4">membership_analysis(),</div>
                      <div className="ml-4">publication_metrics(),</div>
                      <div className="ml-4">citation_analysis(),</div>
                      <div className="ml-4">peer_review_evidence()</div>
                      <div>]</div>
                    </div>
                  </TerminalWindow>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 font-mono">10-criteria compliance engine</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 font-mono">Citation impact analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 font-mono">Award validation system</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-full bg-black/80 backdrop-blur-sm border-lime-400/30 hover:border-lime-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/20">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-lime-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white font-mono">EB2.module</CardTitle>
                    <CardDescription className="font-mono text-lime-400/70">Advanced Degree Processing Unit</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <TerminalWindow title="eb2_processor.py" className="text-xs">
                    <div className="text-lime-400">
                      <div>degree_verification = [</div>
                      <div className="ml-4">credential_analysis(),</div>
                      <div className="ml-4">labor_cert_check(),</div>
                      <div className="ml-4">job_offer_validation(),</div>
                      <div className="ml-4">priority_date_calc()</div>
                      <div>]</div>
                    </div>
                  </TerminalWindow>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 font-mono">Degree verification algorithms</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 font-mono">Labor certification engine</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 font-mono">Priority date optimization</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};