import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCloud, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assuming you use React Router

// --- Framer Motion Variants ---
const mainVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.8,
      staggerChildren: 0.2
    } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// --- Custom Typing Animation Component ---
const TypewriterText = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
+            font-extrabold tracking-tight mb-4 leading-tight 
+            max-w-5xl mx-auto text-center wrap-break-word"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span 
          key={index} 
          variants={letter}
          className="bg-clip-text text-transparent bg-linear-to-r from-blue-300 to-cyan-400"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};



export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      
      {/* Background Element*/}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >      </div>

      {/* Main Content*/}
      <div className="z-10 max-w-6xl mx-auto px-6 py-15 text-center relative">
        <motion.div
          variants={mainVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Animated Headline */}
          <TypewriterText text="Where Avaloq Infrastructure Excels" />

          {/* Sub Headline */}
          <motion.p
            className="text-xl md:text-2xl text-blue-100/70 mb-10 max-w-3xl mx-auto font-light"
            variants={itemVariants}
          >
            We are **PROVAYU**, the **IT Astronauts**. We architect, implement, and manage mission-critical cloud environments with over a decade of specialized expertise.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            variants={itemVariants}
          >
            <Link
              to="/contact"
              className="px-10 py-4 bg-cyan-500 text-slate-900 font-extrabold text-lg rounded-full shadow-lg hover:bg-cyan-400 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              Start Your Mission <FaRocket className="ml-3 text-xl" />
            </Link>
            <Link
              to="/services"
              className="px-10 py-4 border-2 border-blue-500 text-blue-300 font-bold text-lg rounded-full hover:bg-blue-900/50 transition-colors duration-300 flex items-center justify-center"
            >
              Explore Services <FaLongArrowAltRight className="ml-3 text-xl" />
            </Link>
          </motion.div>

        </motion.div>
      </div>
      
      {/* Visual Element: Floating Cloud Icon */}
      <motion.div
        className="absolute bottom-5 right-5 text-cyan-500 opacity-20 hidden lg:block"
        animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaCloud className="text-[12rem]" />
      </motion.div>

    </section>
  );
}