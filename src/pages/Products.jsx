import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar, FaBolt, FaRocket, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// --- DATA CONFIGURATION --- For just displaying purpose

const INFRA_PLANS = [
  { name: 'Starter', price: '$0', tagline: 'Basic Monitoring & Support', features: ['5 Devices', '1 Month Retention', 'Basic Integrations', 'Always Free'], highlight: false },
  { name: 'Pro', price: '$XX', tagline: 'Unlimited Devices & Priority Support', features: ['Unlimited Devices', '1 Year Retention', 'Advanced Integrations', 'Priority Support', 'Dedicated SRE', 'Custom Security Policy'], highlight: true },
  { name: 'Enterprise', price: 'Contact Us', tagline: 'Tailored, Mission-Critical Systems', features: ['Custom SLA', '24/7/365 On-site Support', 'Full Compliance Audit', 'Bespoke Cloud Architecture'], highlight: false },
];

const AI_SERVICES = [
  { icon: FaBolt, title: 'Anomaly Detection', description: 'Real-time monitoring and proactive identification of unusual system behavior to prevent failures.' },
  { icon: FaStar, title: 'TechBot Integration', description: 'Deploy custom conversational AI to handle first-level infra support and technical queries.' },
  { icon: FaRocket, title: 'GPT & Agentic AI', description: 'Leverage cutting-edge large language models for complex task automation and data analysis.' },
];


// pricing
const PricingCard = ({ plan, isSelected, onClick }) => {
  const cardClasses = isSelected
    ? "bg-slate-900 ring-4 ring-cyan-500 shadow-cyan-500/50"
    : "bg-slate-800 hover:bg-slate-700/80 ring-2 ring-transparent hover:ring-cyan-600/50";
  
  return (
    <motion.div
      className={`relative p-8 rounded-2xl transition-all duration-300 transform ${cardClasses} cursor-pointer`}
      onClick={onClick}
      whileHover={{ y: isSelected ? 0 : -5, scale: isSelected ? 1.0 : 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {plan.highlight && (
        <span className="absolute top-0 right-0 -mt-3 -mr-3 px-4 py-1 bg-cyan-500 text-slate-900 text-sm font-bold rounded-full shadow-lg rotate-3">
          Recommended
        </span>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-3xl font-extrabold mb-1 text-white">{plan.name}</h3>
        <p className="text-blue-300/70">{plan.tagline}</p>
      </div>

      <div className="text-center mb-6 border-b border-gray-700 pb-4">
        <span className="text-5xl font-extrabold text-cyan-500">{plan.price}</span>
        {plan.price !== 'Contact Us' && <span className="text-gray-400">/ mo</span>}
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-300">
            <FaCheckCircle className="text-green-500 mr-3 shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to={plan.price === 'Contact Us' ? '/contact' : '/signup'}
        className={`w-full block text-center py-3 rounded-lg font-bold transition-all duration-300 
          ${isSelected ? 'bg-cyan-500 text-slate-900 hover:bg-cyan-400' : 'bg-slate-700 text-white hover:bg-slate-600'}
        `}
      >
        {plan.price === 'Contact Us' ? 'Get A Custom Quote' : 'Select Plan'}
      </Link>
    </motion.div>
  );
};

// 3. AI Service Feature Card
const FeatureCard = ({ icon: Icon, title, description, index }) => (
    <motion.div 
        className="p-8 bg-white rounded-xl shadow-xl border-t-4 border-cyan-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
    >
        <Icon className="text-4xl text-cyan-600 mb-4" />
        <h4 className="text-xl font-bold mb-3 text-slate-900">{title}</h4>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);


// --- MAIN COMPONENT ---

export default function Products() {
  const [selectedPlan, setSelectedPlan] = useState('Pro');

  return (
    <div className="min-h-screen bg-gray-50 pt-0">
      
    
      <motion.header 
        className="text-center pt-16 pb-20 bg-slate-900 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-300 to-cyan-500 mb-4">
          Mission Control Solutions
        </h1>
        <p className="text-xl text-blue-100/70 max-w-3xl mx-auto">
          Choose the right launch plan for your infrastructure needs. Scalable, secure, and expert-backed.
        </p>
      </motion.header>

      {/* INFRASTRUCTURE PRODUCT PLANS*/}
      <section className="py-20 md:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Managed Cloud & Infrastructure Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INFRA_PLANS.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan}
                isSelected={selectedPlan === plan.name}
                onClick={() => setSelectedPlan(plan.name)}
              />
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12 text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <FaQuestionCircle className="inline-block mr-2 text-cyan-500" />
            <span className="text-sm">Need a custom feature set or SLA? Our Enterprise team is ready to assist.</span>
          </motion.div>
        </div>
      </section>

      {/* AI & ML INTEGRATION SERVICES --- */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-slate-900">
            AI & Machine Learning Integration
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Future-proof your systems with advanced data intelligence and automation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AI_SERVICES.map((service, index) => (
              <FeatureCard 
                key={index} 
                {...service} 
                index={index} 
              />
            ))}
          </div>

          <motion.div 
            className="text-center mt-20"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-12 py-4 bg-blue-600 text-white font-bold text-lg rounded-full shadow-2xl hover:bg-blue-700 transition duration-300"
            >
              Request an AI Consultation
            </Link>
          </motion.div>
        </div>
      </section>

     

    </div>
  );
}