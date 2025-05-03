
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VideoDemo />
      <Benefits />
      <PricingCards />
      <ImageShowcase />
      <Testimonials />
      <AboutMe />
      <FaqSection />
      <OrderForm />
      <Footer />
    </div>
  );
};

export default Index;
