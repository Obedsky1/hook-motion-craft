
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import VideoDemo from '../components/VideoDemo';
import Benefits from '../components/Benefits';
import PricingCards from '../components/PricingCards';
import OrderForm from '../components/OrderForm';
import ImageShowcase from '../components/ImageShowcase';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-dark via-[#221F26] to-gray-dark">
      <Navbar />
      <HeroSection />
      <div className="py-6 md:py-8" id="demo">
        <VideoDemo />
      </div>
      <div className="py-6 md:py-8" id="benefits">
        <Benefits />
      </div>
      <div className="py-6 md:py-8" id="packages">
        <PricingCards />
      </div>
      <div className="py-6 md:py-8" id="showcase">
        <ImageShowcase />
      </div>
      <div className="py-6 md:py-8">
        <Testimonials />
      </div>
      <div className="py-6 md:py-8" id="about">
        <AboutMe />
      </div>
      <div className="py-6 md:py-8" id="faq">
        <FaqSection />
      </div>
      <div className="py-6 md:py-10" id="order">
        <OrderForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
