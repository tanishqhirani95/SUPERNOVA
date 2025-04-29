import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section h-screen flex items-center justify-center text-center text-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Where Artists <span className="text-gold">Shine Brighter</span></h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">Premier entertainment solutions for your events and celebrations</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#services" className="bg-gold text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gold-light transition-colors duration-300">Explore Services</a>
          <a href="#contact" className="border-2 border-gold text-gold px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gold hover:text-black transition-colors duration-300">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
