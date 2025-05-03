
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark leading-tight mb-6">
              Get Viral <span className="text-purple">UGC Videos</span> That Sell Your SaaS in 30 Seconds or Less
            </h1>
            <p className="text-lg md:text-xl text-gray mb-8 max-w-2xl">
              I create viral-style videos that mix trending content with your SaaS product to drive clicks, signups, and conversions.
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
