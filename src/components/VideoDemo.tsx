
import React from 'react';

const VideoDemo = () => {
  return (
    <section id="demo" className="bg-gray-light py-16">
      <div className="section-container">
        <h2 className="section-title text-center">See Results in Action</h2>
        <p className="section-subtitle text-center mx-auto">
          Example of a viral SaaS product hook video
        </p>
        
        <div className="max-w-4xl mx-auto mt-10">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple to-purple-light blur-md opacity-30 rounded-2xl"></div>
            <div className="relative aspect-video bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Replace with actual video embed */}
              <div className="w-full h-full bg-gray-dark flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg font-medium">Video Demo Placeholder</p>
                  <p className="text-sm opacity-75 mt-2">Your viral SaaS demo will appear here</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a href="#order" className="btn-primary inline-flex items-center gap-2">
              Get a Video Like This
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
