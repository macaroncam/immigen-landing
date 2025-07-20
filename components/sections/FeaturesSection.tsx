import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Cpu, Brain, Database, FileText, Zap, ChevronDown } from 'lucide-react';
import { GlitchText } from '../shared/UIComponents';

interface ProcessCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  status: string;
  icon: React.ReactNode;
}

const processCards: ProcessCard[] = [
  {
    id: "neural-cv",
    number: "01",
    title: "Neural CV Parsing",
    subtitle: "parse_cv(uploaded_data) → immigration_profile[]",
    description: "Our ML parser reads and extracts your academic, professional, and publication history with 99.7% accuracy—ready for EB1A and O-1 pathway mapping in milliseconds.",
    details: [
      "Advanced NLP for document understanding",
      "Multi-format support (PDF, DOC, TXT)",
      "Real-time extraction with 99.7% accuracy",
      "Structured data output for analysis"
    ],
    status: "Active",
    icon: <Brain className="w-5 h-5" />
  },
  {
    id: "route-intelligence",
    number: "02", 
    title: "Route Intelligence Module",
    subtitle: "match_strategy(profile) → EB1A | EB2 | O1",
    description: "Trained on 10,000+ petitions and approvals, our decision engine surfaces the most compelling visa path based on your strengths, not guesswork.",
    details: [
      "Machine learning on 10,000+ cases",
      "Multi-pathway analysis and scoring",
      "Success probability calculations",
      "Personalized recommendation engine"
    ],
    status: "Active",
    icon: <Database className="w-5 h-5" />
  },
  {
    id: "evidence-builder",
    number: "03",
    title: "Evidence Builder",
    subtitle: "generate_exhibits(profile) → exhibit_list.pdf",
    description: "Generates USCIS-compliant evidence packages with auto-linked citations, exhibit labels, and approval-backed formatting.",
    details: [
      "USCIS compliance verification",
      "Automated citation linking",
      "Professional exhibit formatting",
      "Legal precedent integration"
    ],
    status: "Active",
    icon: <FileText className="w-5 h-5" />
  },
  {
    id: "petition-drafter",
    number: "04",
    title: "Petition Auto-Drafter",
    subtitle: "draft_petition(data) → I-140_support_letter.docx",
    description: "LLM-powered drafting trained on real approvals, integrating legal precedent, user data, and inline compliance logic to create a USCIS-ready narrative.",
    details: [
      "LLM trained on successful petitions",
      "Legal precedent integration",
      "Compliance verification system",
      "Professional narrative generation"
    ],
    status: "Active",
    icon: <Zap className="w-5 h-5" />
  }
];

export const FeaturesSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleExpanded = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-lime-400/20 text-lime-400 border-lime-400/50 font-mono">
            <Cpu className="w-3 h-3 mr-1" />
            CORE.MODULES
          </Badge>
          <GlitchText>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              AI You Can Trust
            </h2>
          </GlitchText>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Immigen is more than a ChatGPT wrapper, it's a legal reasoning system built to handle high-stakes decision
          </p>
        </motion.div>
        
        {/* Process Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {processCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/60 backdrop-blur-sm border border-lime-400/30 rounded-xl p-6 hover:border-lime-400/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-lime-400 text-black rounded-lg flex items-center justify-center font-mono font-bold">
                    {card.number}
                  </div>
                  <div className="w-5 h-5 text-lime-400">
                    {card.icon}
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-400/30 text-xs">
                  {card.status}
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-white font-mono mb-3">
                {card.title}
              </h3>
              
              <div className="bg-black/40 rounded p-3 mb-4 border border-lime-400/20">
                <code className="text-lime-400 text-xs font-mono break-all">
                  {card.subtitle}
                </code>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {card.description}
              </p>

              {/* Expandable Details */}
              <button
                onClick={() => toggleExpanded(card.id)}
                className="flex items-center space-x-2 text-lime-400 hover:text-lime-300 transition-colors font-mono text-sm"
              >
                <span>Technical Details</span>
                <motion.div
                  animate={{ rotate: expandedCard === card.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedCard === card.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 bg-black/20 rounded p-3 border border-lime-400/10"
                  >
                    <ul className="space-y-1">
                      {card.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-400 text-xs">
                          <div className="w-1 h-1 bg-lime-400 rounded-full flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-900/40 backdrop-blur-sm border border-lime-400/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-lime-400 text-sm font-mono">All neural modules operational</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};