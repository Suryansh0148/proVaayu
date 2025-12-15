import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import About from './pages/About'
import Products from './pages/Products'
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Jobdetails from './pages/Jobdetails';
import Services from './pages/Services';
import Home from './pages/Home';
import Signup from './pages/signup';
const App = () => {
  return (
    <Router>
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/job/:id" element={<Jobdetails/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>

      </main>
    
      <Footer/>
    </div>
    </Router>
  )
}

export default App
