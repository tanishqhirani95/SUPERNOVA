import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import ArtistsSection from '@/components/home/ArtistsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ArtistsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
