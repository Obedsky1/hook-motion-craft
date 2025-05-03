
import React from 'react';
import { Zap, Film, Clipboard, Image } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-purple" />,
      title: "Viral Hook Concepts",
      description: "Attention-grabbing hooks that leverage trending formats to stop the scroll and engage viewers instantly."
    },
    {
      icon: <Film className="h-8 w-8 text-purple" />,
      title: "UGC-Style + Trend Remix",
      description: "Authentic user-generated content style combined with trending formats for maximum engagement and relatability."
    },
    {
      icon: <Clipboard className="h-8 w-8 text-purple" />,
      title: "Script + Editing Included",
      description: "Complete service including scriptwriting, filming guidance, and professional editing with commercial-quality results."
    },
    {
      icon: <Image className="h-8 w-8 text-purple" />,
      title: "Optimized for All Platforms",
      description: "Videos formatted perfectly for TikTok, Instagram Reels, YouTube Shorts, and paid advertising campaigns."
    },
  ];

  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Why UGC Videos Convert Better</h2>
        <p className="section-subtitle text-center mx-auto">
          I create conversion-focused content that drives real business results
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card hover:border-purple hover:border transition-all"
            >
              <div className="bg-purple-light/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-dark">
                {benefit.title}
              </h3>
              <p className="text-gray">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
