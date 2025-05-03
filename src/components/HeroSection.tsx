
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-gradient-to-b from-gray-dark to-gray-dark/90">
      <div className="section-container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              1 Billion on TikTok. 2 Billion on Facebook Reels. 3 Billion on YouTube Shorts. 4 Billion on Instagram.
              <span className="text-purple block mt-2">And you're still struggling to get 10,000 users?</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              I create viral UGC videos that remix trends and showcase your SaaS product — so people stop scrolling and start signing up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#demo" className="btn-primary flex items-center justify-center gap-2">
                Watch Demo
                <ArrowRight size={18} />
              </a>
              <a href="#order" className="btn-secondary flex items-center justify-center gap-2">
                Order Your Video
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple to-purple-dark blur-md opacity-30 rounded-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Content creator editing video"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
