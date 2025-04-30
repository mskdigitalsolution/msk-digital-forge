
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      
      {/* Feedback CTA Section */}
      <section className="py-12 bg-gradient-to-r from-[#1A1F2C] to-[#0F172A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-tech font-bold uppercase tracking-wider text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] bg-clip-text mb-4">
            Share Your Experience
          </h2>
          <p className="text-lg text-[#8E9196] mb-8 max-w-2xl mx-auto">
            We'd love to hear your feedback! Help us improve our services by sharing your thoughts.
          </p>
          <Link to="/feedback">
            <Button className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity text-white font-medium">
              Leave Feedback
            </Button>
          </Link>
        </div>
      </section>
      
      <FAQSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default Index;
