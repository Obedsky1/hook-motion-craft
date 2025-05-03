
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Marketing Manager at SaaSify",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: 5,
      text: "The UGC videos completely transformed our marketing approach. Within one week of posting these videos, our demo sign-ups increased by 37%. The creator understood our product and translated it into a viral-worthy video."
    },
    {
      name: "Alex Chen",
      title: "Founder of TaskFlow",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5,
      text: "After months of struggling with low conversion rates on our ads, these UGC videos delivered instant results. The Pro package was worth every penny — we now have a library of content that performs consistently across all platforms."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-light">
      <div className="section-container">
        <h2 className="section-title text-center">Client Success Stories</h2>
        <p className="section-subtitle text-center mx-auto">
          Here's what clients say about working with me
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple"
                />
                <div>
                  <h3 className="font-semibold text-gray-dark">{testimonial.name}</h3>
                  <p className="text-gray text-sm">{testimonial.title}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-dark italic">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
