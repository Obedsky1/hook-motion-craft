
import React from 'react';
import { Check } from 'lucide-react';

const PricingCards = () => {
  const packages = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for testing UGC with a single high-quality video",
      features: [
        "1 video (15-30 seconds)",
        "Basic script",
        "1 revision round",
        "Optimized for one platform",
        "Delivered in 3-5 days"
      ],
      cta: "Order Now",
      popular: false
    },
    {
      name: "Pro",
      price: "$129",
      description: "The most popular choice for serious brands looking for results",
      features: [
        "3 videos + viral variants",
        "Advanced script development",
        "2 revision rounds",
        "Multi-platform optimization",
        "Delivered in 3-5 days",
        "Performance analytics"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Custom",
      price: "Custom",
      description: "Tailored solutions for brands with specific campaign needs",
      features: [
        "Custom video package",
        "Campaign strategy",
        "Unlimited revisions",
        "Multi-platform optimization",
        "Priority delivery",
        "Performance analytics",
        "Dedicated support"
      ],
      cta: "Contact Me",
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-16 md:py-24 bg-gray-light">
      <div className="section-container">
        <h2 className="section-title text-center">Packages & Pricing</h2>
        <p className="section-subtitle text-center mx-auto">
          Choose the right package for your business needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`card relative ${pkg.popular ? 'border-2 border-purple shadow-xl' : ''} flex flex-col h-full`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 inset-x-0 mx-auto w-fit px-4 py-1 bg-purple text-white rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-dark mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-purple">{pkg.price}</span>
              </div>
              <p className="text-gray mb-6">{pkg.description}</p>
              
              <div className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">
                        <Check className="h-5 w-5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="#order" 
                className={`${pkg.popular ? 'btn-primary' : 'btn-secondary'} text-center mt-4 w-full`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
