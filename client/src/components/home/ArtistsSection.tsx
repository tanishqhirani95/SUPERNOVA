import React from 'react';
import { getAnimationDelay } from '@/lib/utils';
import { singers, magicians, speakers } from '@/data/artists';

const ArtistsSection = () => {
  return (
    <section id="artists" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gold-underline">Our Artists</h2>
          <p className="text-xl max-w-3xl mx-auto">Meet our exceptional roster of talented performers</p>
        </div>
        
        {/* Singers Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Singers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {singers.map((singer, index) => (
              <div 
                key={index}
                className="artist-card relative rounded-lg overflow-hidden shadow-lg scroll-animation"
                style={{transitionDelay: getAnimationDelay(index, 100)}}
              >
                <img 
                  src={singer.image} 
                  alt={singer.name} 
                  className="w-full h-80 object-cover" 
                />
                <div className="bg-black bg-opacity-80 p-4">
                  <h4 className="text-xl font-semibold text-white">{singer.name}</h4>
                  <p className="text-gold">{singer.shortTitle}</p>
                </div>
                <div className="artist-overlay absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-6 text-center">
                  <h4 className="text-xl font-semibold text-white mb-2">{singer.name}</h4>
                  <p className="text-gold mb-4">{singer.title}</p>
                  <p className="text-white mb-6">{singer.description}</p>
                  <a href="#contact" className="bg-gold text-black px-6 py-2 rounded-full hover:bg-gold-light transition-colors duration-300">Book Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Magicians Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Magicians</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {magicians.map((magician, index) => (
              <div 
                key={index}
                className="artist-card relative rounded-lg overflow-hidden shadow-lg col-span-1 lg:col-span-3 scroll-animation"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <img 
                    src={magician.image} 
                    alt={magician.name} 
                    className="w-full h-80 lg:h-full object-cover" 
                  />
                  <div className="bg-black p-8 text-white flex flex-col justify-center">
                    <h4 className="text-2xl font-semibold mb-3">{magician.name}</h4>
                    <p className="text-gold text-lg mb-4">{magician.title}</p>
                    <p className="mb-6">{magician.description}</p>
                    <a href="#contact" className="bg-gold text-black px-6 py-3 rounded-lg inline-block text-center w-full lg:w-auto hover:bg-gold-light transition-colors duration-300 mt-auto">Book Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Speakers Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Motivational Speakers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {speakers.map((speaker, index) => (
              <div 
                key={index}
                className="artist-card relative rounded-lg overflow-hidden shadow-lg col-span-1 lg:col-span-3 scroll-animation"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-black p-8 text-white flex flex-col justify-center order-2 lg:order-1">
                    <h4 className="text-2xl font-semibold mb-3">{speaker.name}</h4>
                    <p className="text-gold text-lg mb-4">{speaker.title}</p>
                    <p className="mb-6">{speaker.description}</p>
                    <a href="#contact" className="bg-gold text-black px-6 py-3 rounded-lg inline-block text-center w-full lg:w-auto hover:bg-gold-light transition-colors duration-300 mt-auto">Book Now</a>
                  </div>
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-80 lg:h-full object-cover order-1 lg:order-2" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
