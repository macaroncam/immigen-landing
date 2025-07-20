import React from 'react';
import { motion } from 'framer-motion';
import { Building2, User, Scale, Briefcase } from 'lucide-react';
import { Badge } from '../ui/badge';

const customerTypes = [
  {
    icon: <User className="w-6 h-6" />,
    title: "Free Users",
    description: "Professionals exploring their immigration options",
    count: "5,000+"
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Self-Petitioners",
    description: "Researchers, engineers, and professionals filing independently",
    count: "1,200+"
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Global Enterprises",
    description: "Fortune 500 companies recruiting international talent",
    count: "25+"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Immigration Partners",
    description: "Law firms and consultancies using our platform",
    count: "150+"
  }
];

const companyLogos = [
  "Meta", "Google", "Microsoft", "Amazon", "Tesla", "OpenAI", "Stripe", "Uber"
];

export const TrustedBySection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-lime-400/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-lime-400/20 text-lime-400 border-lime-400/50 font-mono">
            TRUSTED BY
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
            Powering Immigration for Everyone
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-mono">
            <span className="text-lime-400">&gt;</span> From individual researchers to Fortune 500 companies, 
            our AI serves the entire immigration ecosystem
          </p>
        </motion.div>

        {/* Customer Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {customerTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/40 backdrop-blur-sm border border-lime-400/20 rounded-lg p-6 text-center hover:border-lime-400/40 transition-colors"
            >
              <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-lime-400">
                {type.icon}
              </div>
              <div className="text-2xl font-bold text-lime-400 font-mono mb-2">
                {type.count}
              </div>
              <h3 className="text-white font-mono font-semibold mb-2">
                {type.title}
              </h3>
              <p className="text-gray-400 text-sm font-mono">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 font-mono text-sm mb-6">
            Employees from these companies trust Immigen.AI
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companyLogos.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-400 font-mono text-lg hover:text-lime-400 transition-colors cursor-default"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};