import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <svg className="h-16 mb-6" viewBox="0 0 510 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(0, 10)">
                <path d="M255 120 L290 80 L350 130 L310 170 L255 120" fill="#D4AF37" />
                <path d="M255 120 L220 80 L160 130 L200 170 L255 120" fill="#D4AF37" />
                <path d="M255 120 L235 180 L255 230 L275 180 L255 120" fill="#D4AF37" />
                <text x="90" y="260" fontFamily="Helvetica, Arial, sans-serif" fontSize="48" fill="#FFFFFF" fontWeight="bold">SUPERNOVA</text>
                <text x="150" y="290" fontFamily="Helvetica, Arial, sans-serif" fontSize="16" fill="#D4AF37">ARTIST MANAGEMENT COMPANY</text>
                <circle cx="350" cy="90" r="5" fill="#D4AF37" />
                <circle cx="330" cy="70" r="3" fill="#D4AF37" />
                <circle cx="370" cy="60" r="4" fill="#D4AF37" />
                <path d="M350 90 L370 60" stroke="#D4AF37" strokeWidth="1" />
                <path d="M350 90 L330 70" stroke="#D4AF37" strokeWidth="1" />
              </g>
            </svg>
            <p className="mb-6">Premier artist management company based in Mumbai, providing exceptional entertainment solutions for all types of events.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/supernova_artist_management?igsh=MXh1NnY3aHFrd3JsNQ==" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors duration-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors duration-300">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors duration-300">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-gold transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors duration-300">Services</a></li>
              <li><a href="#artists" className="hover:text-gold transition-colors duration-300">Artists</a></li>
              <li><a href="#testimonials" className="hover:text-gold transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#artists" className="hover:text-gold transition-colors duration-300">Live Music</a></li>
              <li><a href="#artists" className="hover:text-gold transition-colors duration-300">Magic Shows</a></li>
              <li><a href="#artists" className="hover:text-gold transition-colors duration-300">Motivational Speakers</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors duration-300">Custom Event Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-gold mr-3 mt-1"></i>
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-gold mr-3 mt-1"></i>
                <span>+91 9833 144 4052</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-gold mr-3 mt-1"></i>
                <span>shilpahirani28@yahoo.co.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Supernova Artist Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
