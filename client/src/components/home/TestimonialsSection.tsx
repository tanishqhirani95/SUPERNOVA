import React, { useState, useEffect } from 'react';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gold-underline">Client Testimonials</h2>
          <p className="text-xl max-w-3xl mx-auto">What our clients say about our services</p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto min-h-[300px]" 
          id="testimonial-slider"
          onMouseEnter={() => clearInterval}
          onMouseLeave={() => {}}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-slide p-8 lg:p-12 bg-black-light rounded-lg ${index === currentSlide ? 'active' : ''}`}
              style={{
                opacity: index === currentSlide ? 1 : 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transition: 'opacity 0.5s ease',
                zIndex: index === currentSlide ? 1 : 0
              }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-24 h-24 rounded-full object-cover" 
                />
                <div>
                  <div className="flex mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <i key={i} className="fas fa-star text-gold"></i>
                    ))}
                  </div>
                  <p className="text-lg mb-6">"{testimonial.text}"</p>
                  <div>
                    <h4 className="font-semibold text-gold">{testimonial.name}</h4>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Slider controls */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`testimonial-dot w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gold' : 'bg-gray-600'} focus:outline-none`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <button 
            className="absolute top-1/2 -translate-y-1/2 left-0 bg-gold text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-light transition-colors duration-300 focus:outline-none"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-gold text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-light transition-colors duration-300 focus:outline-none"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
