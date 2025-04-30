
import React from 'react';
import Navbar from '@/components/Navbar';
import FeedbackForm from '@/components/FeedbackForm';
import Footer from '@/components/Footer';

const FeedbackPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#0F172A]">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-tech font-bold tracking-wide text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] bg-clip-text mb-3">
              Share Your Feedback
            </h1>
            <p className="text-xl text-[#8E9196] max-w-2xl mx-auto">
              We'd love to hear your thoughts! Help us grow by sharing your experience with our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#9b87f5]/30 to-[#D6BCFA]/10 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-[#7E69AB]/20 to-[#D6BCFA]/5 blur-xl"></div>
            
            <FeedbackForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeedbackPage;
