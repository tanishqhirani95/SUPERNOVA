import React from 'react';
import { getAnimationDelay } from '@/lib/utils';

const services = [
  {
    title: "Live Music",
    description: "Our roster includes talented singers and bands who can set the perfect mood for your event with genres ranging from classical to contemporary hits.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Live music performance"
  },
  {
    title: "Magic Shows",
    description: "Our mesmerizing magicians captivate audiences with their illusions, creating memorable experiences that will leave your guests amazed.",
    image: "https://images.unsplash.com/photo-1573511860302-28c11ff60075?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Magician performance"
  },
  {
    title: "Motivational Speakers",
    description: "Our engaging speakers inspire and inform your audience, perfect for corporate events, conferences, and special gatherings.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    alt: "Motivational speaker"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gold-underline">Our Services</h2>
          <p className="text-xl max-w-3xl mx-auto">We bring exceptional entertainment to elevate your events</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 scroll-animation"
              style={{transitionDelay: getAnimationDelay(index, 200)}}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <a href="#artists" className="text-gold font-semibold inline-flex items-center">
                  Explore Artists
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
