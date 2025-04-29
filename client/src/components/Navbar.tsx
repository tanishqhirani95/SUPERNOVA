import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav id="navbar" className={`fixed top-0 left-0 right-0 bg-black ${isScrolled ? 'py-2 shadow-lg' : 'py-3'} px-4 z-50 transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <svg className="h-16" viewBox="0 0 510 300" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-gold transition-colors duration-300">Home</a>
          <a href="#about" className="text-white hover:text-gold transition-colors duration-300">About</a>
          <a href="#services" className="text-white hover:text-gold transition-colors duration-300">Services</a>
          <a href="#artists" className="text-white hover:text-gold transition-colors duration-300">Artists</a>
          <a href="#testimonials" className="text-white hover:text-gold transition-colors duration-300">Testimonials</a>
          <a href="#contact" className="bg-gold text-black px-6 py-2 rounded hover:bg-gold-light transition-colors duration-300">Inquire</a>
        </div>
        
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-black absolute left-0 right-0 top-full`}>
        <div className="flex flex-col space-y-4 p-4">
          <a href="#home" onClick={closeMobileMenu} className="text-white hover:text-gold py-2 transition-colors duration-300">Home</a>
          <a href="#about" onClick={closeMobileMenu} className="text-white hover:text-gold py-2 transition-colors duration-300">About</a>
          <a href="#services" onClick={closeMobileMenu} className="text-white hover:text-gold py-2 transition-colors duration-300">Services</a>
          <a href="#artists" onClick={closeMobileMenu} className="text-white hover:text-gold py-2 transition-colors duration-300">Artists</a>
          <a href="#testimonials" onClick={closeMobileMenu} className="text-white hover:text-gold py-2 transition-colors duration-300">Testimonials</a>
          <a href="#contact" onClick={closeMobileMenu} className="bg-gold text-black px-6 py-2 rounded hover:bg-gold-light transition-colors duration-300 inline-block w-full text-center">Inquire</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
