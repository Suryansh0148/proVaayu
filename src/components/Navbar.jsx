import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import newlogo from '../assets/newlogo.png';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/', bgColor: 'bg-blue-900/80' },
  { name: 'About', path: '/about', bgColor: 'bg-purple-900/80' },
  { name: 'Products', path: '/products', bgColor: 'bg-green-900/80' },
  { name: 'Services', path: '/services', bgColor: 'bg-slate-900/80' },
  { name: 'Careers', path: '/careers', bgColor: 'bg-slate-900/80' },
  { name: 'Contact', path: '/contact', bgColor: 'bg-cyan-900/80' },
];



//  Animated Indicator for Active Link
const ActiveIndicator = ({ path, currentPath }) => {
  if (path !== currentPath) return null;
  return (
    <motion.span
      layoutId="active-nav-indicator"
      className="absolute bottom-0 left-0 h-0 w-full bg-blue-300 rounded-full"
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

// Mobile Drawer Menu
const MobileDrawer = ({ navItems, currentPath, setOpen }) => {
  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
    exit: { x: '100%' },
  };

  return (
    <motion.div
      variants={drawerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed top-0 right-0 z-40 h-full w-64 bg-slate-900 p-8 shadow-2xl md:hidden"
    >
      <button className='absolute top-4 right-4 text-white text-2xl' onClick={() => setOpen(false)}>
        <FaTimes />
      </button>
      <div className="flex flex-col space-y-8 mt-16 text-white text-xl">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className={`transition-colors duration-300 ${
              item.path === currentPath ? 'text-blue-300 font-bold' : 'hover:text-blue-300'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};


// --- Main Navbar Component ---

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  //background color for the current route
  const currentItem = navItems.find(item => item.path === location.pathname);
  const bgColor = currentItem ? currentItem.bgColor : 'bg-blue-900';

  //scroll listener for the shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 
                    ${bgColor} text-white px-4 py-3
                    ${scrolled ? 'shadow-xl bg-opacity-90 backdrop-blur-sm' : 'shadow-md'}
                    `}
      >
        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo with Animation */}
          <Link to="/" style={{ display: "inline-block" }}>
          <motion.img
            src={newlogo}
            alt="Provayu"
            className="h-9 w-auto cursor-pointer rounded-lg object-contain shrink-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          /></Link>

          {/* Desktop Menu with Unique Indicator */}
          <div className="hidden md:flex gap-8 text-lg font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-white transition-colors duration-300 hover:text-blue-300 py-1"
              >
                {item.name}
                <ActiveIndicator path={item.path} currentPath={location.pathname} />
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Icon */}
          <button className="md:hidden text-white text-xl" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Outside the <nav> element, with Framer Motion) */}
      <AnimatePresence>
        {open && <MobileDrawer navItems={navItems} currentPath={location.pathname} setOpen={setOpen} />}
      </AnimatePresence>
      
      {/* Spacer to push content down, since Navbar is fixed */}
      <div className='h-16'></div>
    </>
  );
}

export default Navbar;