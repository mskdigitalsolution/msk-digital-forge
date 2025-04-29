
import React from 'react';
import Navbar from '@/components/Navbar';
import FeedbackForm from '@/components/FeedbackForm';
import Footer from '@/components/Footer';

const FeedbackPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center">Share Your Feedback</h1>
          <p className="section-subtitle text-center">
            We'd love to hear your thoughts! Help us grow by sharing your experience.
          </p>
          <div className="max-w-3xl mx-auto mt-12">
            <FeedbackForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeedbackPage;
