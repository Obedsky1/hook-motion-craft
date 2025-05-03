
import React from 'react';

const ImageShowcase = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Content creator editing video",
      caption: "Professional Video Editing"
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Production setup with lights and camera",
      caption: "High-Quality Production"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Person working on laptop",
      caption: "Creative Direction & Strategy"
    }
  ];

  return (
    <section id="showcase" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Behind the Scenes</h2>
        <p className="section-subtitle text-center mx-auto">
          A glimpse into my creative process and production quality
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-light to-purple opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative h-full">
                <div className="overflow-hidden rounded-xl h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-dark/80 to-transparent p-6">
                    <h3 className="text-white font-medium text-lg">{image.caption}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
