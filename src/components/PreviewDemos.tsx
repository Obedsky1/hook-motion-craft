
import React from 'react';
import { Film } from 'lucide-react';

const PreviewDemos = () => {
  const demoVideos = [
    {
      id: 1,
      title: "SaaS Onboarding Demo",
      description: "Hook video demonstrating quick onboarding flow",
      embedPlaceholder: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Feature Showcase",
      description: "Highlighting key product features in 30 seconds",
      embedPlaceholder: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Viral Hook Trend Remix",
      description: "Trending audio with product integration",
      embedPlaceholder: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="preview" className="bg-gray-light py-16">
      <div className="section-container">
        <h2 className="section-title text-center">Preview Demo Videos</h2>
        <p className="section-subtitle text-center mx-auto">
          See how your SaaS product can be showcased in viral-style videos
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {demoVideos.map((video) => (
            <div key={video.id} className="card group overflow-hidden">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gray-dark">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Replace this with actual video embed in production */}
                <div className="w-full h-full relative">
                  <img 
                    src={video.embedPlaceholder} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-purple/80 hover:bg-purple rounded-full p-4 text-white shadow-lg transform transition-transform group-hover:scale-110">
                      <Film size={24} />
                    </button>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-dark mb-2">{video.title}</h3>
              <p className="text-gray">{video.description}</p>
              
              <div className="mt-4 flex items-center">
                <span className="text-sm text-purple-dark font-medium">0:28</span>
                <div className="h-1 bg-gray-200 rounded-full flex-grow mx-2">
                  <div className="h-full w-3/4 bg-purple rounded-full"></div>
                </div>
              </div>
              
              <button className="w-full mt-4 btn-secondary text-center group-hover:bg-purple group-hover:text-white transition-colors">
                Watch Full Demo
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#packages" className="btn-primary inline-flex items-center gap-2">
            Get Videos Like These
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreviewDemos;
