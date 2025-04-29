import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gold-underline">About Us</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animation">
            <h3 className="text-3xl font-semibold mb-6">Mumbai's Premier <span className="text-gold">Artist Management</span> Company</h3>
            <p className="mb-6 text-lg">Founded in 2022 by Mona Shah, Ami Shobhani and Shilpa Hirani, Supernova Artist Management specializes in providing exceptional entertainment solutions for parties and events in Mumbai.</p>
            <p className="mb-6 text-lg">Whether you are planning an intimate gathering or a large celebration, we are dedicated to meeting all your entertainment needs with our diverse roster of talented performers.</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black mr-4">
                  <i className="fas fa-music text-xl"></i>
                </div>
                <span className="font-semibold">Renowned Singers</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black mr-4">
                  <i className="fas fa-magic text-xl"></i>
                </div>
                <span className="font-semibold">Mesmerizing Magicians</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black mr-4">
                  <i className="fas fa-microphone text-xl"></i>
                </div>
                <span className="font-semibold">Engaging Speakers</span>
              </div>
            </div>
          </div>
          
          <div className="scroll-animation" style={{transitionDelay: '300ms'}}>
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Corporate event" 
              className="rounded-lg shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
