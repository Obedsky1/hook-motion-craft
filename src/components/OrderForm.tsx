
import React, { useState } from 'react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    videoType: 'starter',
    brief: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, you would integrate with Flutterwave API here
    // For now, we'll just show an alert
    alert('Thank you for your order! We will redirect you to payment shortly.');
    // Redirect to Flutterwave would happen here
  };

  return (
    <section id="order" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Order Your Viral Video</h2>
        <p className="section-subtitle text-center mx-auto">
          Fill out the form below to get started with your UGC video
        </p>
        
        <div className="max-w-2xl mx-auto mt-10">
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-dark mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple focus:border-transparent outline-none transition"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-dark mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple focus:border-transparent outline-none transition"
                  placeholder="you@company.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="videoType" className="block text-sm font-medium text-gray-dark mb-1">
                  Video Package
                </label>
                <select
                  id="videoType"
                  name="videoType"
                  value={formData.videoType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple focus:border-transparent outline-none transition"
                  required
                >
                  <option value="starter">Starter - $49 (1 Video)</option>
                  <option value="pro">Pro - $129 (3 Videos + Variants)</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="brief" className="block text-sm font-medium text-gray-dark mb-1">
                  Brief About Your Product
                </label>
                <textarea
                  id="brief"
                  name="brief"
                  value={formData.brief}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple focus:border-transparent outline-none transition"
                  placeholder="Tell me about your product, target audience, and what you want to highlight in your video..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                Proceed to Payment
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="text-center text-sm text-gray mt-4">
                <p>Secure payment powered by Flutterwave</p>
                <div className="flex justify-center mt-2 space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8" viewBox="0 0 24 24" fill="#F5A623">
                    <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8" viewBox="0 0 24 24" fill="#1A1F71">
                    <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8" viewBox="0 0 24 24" fill="#EB001B">
                    <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
