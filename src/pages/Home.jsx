import React from 'react';
import Hero from '../components/Hero';
import Services from '../pages/Services'

export default function HomePage() {
  return (
    <main className="w-full">
      
      
      <Hero /> 

      <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-10">We offer the following</h2>
              <Services />
          </div>
      </section>
      
    </main>
  );
}