import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUserShield, FaHandsHelping, FaLinkedinIn, FaTwitter, FaAngleDoubleRight } from 'react-icons/fa';

// --- Configuration Data ---
const CORE_VALUES = [
  { icon: FaLightbulb, title: "Empowering Innovation", description: "Constantly seeking new ways to optimize cloud solutions and drive future-proof infrastructure." },
  { icon: FaUserShield, title: "Customer-First Excellence", description: "Prioritizing long-term partnerships, delivering excellence and unwavering reliability in every engagement." },
  { icon: FaHandsHelping, title: "Honesty & Transparency", description: "Operating with clear communication and ethical practices to build unbreakable trust with our clients." },
  { icon: FaRocket, title: "Agile & Flexible Approach", description: "Adapting swiftly to technological shifts and project needs with efficient, iterative methodologies." },
];

const LEADERSHIP_TEAM = [
  { name: "xyz", role: "CEO & Founder", image: "/man.png", linkedin: "#" },
  { name: "xyz", role: "Head of Technology", image: "/man.png", linkedin: "#" },
  { name: "xyz", role: "Head of Customer Support", image: "/man.png", linkedin: "#" },
];

// Framer Motion Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const textVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

// --- About Page Main Component ---

function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">

      {/* MISSION STATEMENT */}
      <section className="relative h-[80vh] flex items-center justify-center text-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-800 opacity-90" style={{ backgroundImage: "radial-gradient(ellipse at bottom, #0d121c 0%, #000 100%)" }}></div>
        
        <motion.div
          className="z-10 max-w-4xl text-white px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-300 to-cyan-500"
            variants={textVariants}
          >
            Charting the Course of Cloud Excellence.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100/80 font-light"
            variants={textVariants}
          >
            We are PROVAYU — The IT Astronauts. Delivering personalized, long-term cloud solutions with unwavering commitment.
          </motion.p>
        </motion.div>
      </section>

      {/*NARRATIVE SECTION*/}
      <motion.section 
        className="py-20 md:py-32 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-slate-900">
            Our Journey: More Than Just a Service Provider
          </h2>
          
          {/* Timeline Structure */}
          <div className="relative border-l-4 border-cyan-500 ml-4 md:ml-0 md:pl-8">
            {/* Founding & Vision */}
            <motion.div className="mb-10 flex items-start" variants={sectionVariants}>
              <div className="shrink-0 w-8 h-8 rounded-full bg-cyan-500 absolute -left-4 md:-left-12 mt-1"></div>
              <div className="ml-8 md:ml-4 grow">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">The Founding Vision</h3>
                <p className="text-gray-600">
                  Established with a single-minded vision: to be the most reliable and experienced cloud implementation partner, focusing on long-term value over short-term gains.
                </p>
              </div>
            </motion.div>

            {/* Expertise & Core Offering */}
            <motion.div className="mb-10 flex items-start" variants={sectionVariants}>
              <div className="shrink-0 w-8 h-8 rounded-full bg-cyan-500 absolute -left-4 md:-left-12 mt-1"></div>
              <div className="ml-8 md:ml-4 grow">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">Decades of Avaloq Infrastructure Expertise</h3>
                <p className="text-gray-600">
                  Our core strength is built on 10+ years of collective experience and 15+ successful live projects in sophisticated Avaloq Infrastructure Solutions. We are the specialists you trust for precision.
                </p>
              </div>
            </motion.div>
            
            {/* The Astronaut Commitment */}
            <motion.div className="mb-10 flex items-start" variants={sectionVariants}>
              <div className="shrink-0 w-8 h-8 rounded-full bg-cyan-500 absolute -left-4 md:-left-12 mt-1"></div>
              <div className="ml-8 md:ml-4 grow">
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">Personalized, Unwavering Partnership</h3>
                <p className="text-gray-600">
                  We treat every project as a unique mission. Our commitment is to personalized, honest service and building a reliable long-term relationship with every client.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CORE VALUES SECTION: THE GUIDANCE SYSTEM*/}
      <motion.section 
        className="py-20 md:py-32 bg-slate-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Our Core Values</h2>
          <p className="text-xl text-blue-200/80 mb-16">The principles that guide every mission we undertake.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((value, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl shadow-2xl bg-slate-800/70 backdrop-blur-sm cursor-pointer border border-slate-700/50"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <value.icon className="text-5xl text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-blue-200/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* LEADERSHIP TEAM */}
      <motion.section 
        className="py-20 md:py-32 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
            Meet the Command Crew
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            The seasoned specialists leading every phase of your implementation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-12">
            {LEADERSHIP_TEAM.map((member, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-64"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.15 } }}
                viewport={{ once: true }}
              >
                <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden shadow-xl mb-4 group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-110" 
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-cyan-500 transition">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-md text-cyan-500 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Ready to Launch Your Next Project?</h2>
            <p className="text-xl mb-8 text-blue-200/80">
            Whether it's cloud optimization, Avaloq infrastructure support, or charting a new digital territory, we're ready for takeoff.
            </p>
            <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
            <a 
                href="/contact" 
                className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-full hover:bg-cyan-400 transition-colors duration-300 shadow-xl flex items-center justify-center"
            >
                Start a Conversation <FaAngleDoubleRight className="ml-2" />
            </a>
            <a 
                href="/careers" 
                className="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transition-colors duration-300 flex items-center justify-center"
            >
                Join the Crew
            </a>
            </div>
        </div>
      </section>

    </div>
  );
}

export default About;