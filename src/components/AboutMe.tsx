
import React from 'react';
import { Users, Clock, CheckCircle } from 'lucide-react';

const AboutMe = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-purple" />,
      value: "100+",
      label: "Satisfied Clients"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple" />,
      value: "500+",
      label: "Videos Created"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-purple" />,
      value: "98%",
      label: "Client Satisfaction"
    }
  ];
  
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple to-purple-dark blur-md opacity-30 rounded-full"></div>
              <div className="relative rounded-full overflow-hidden aspect-square">
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  alt="UGC Creator"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-dark">Hi, I'm Jordan</h2>
            <h3 className="text-xl text-purple font-medium mb-6">UGC Creator & Video Marketing Specialist</h3>
            
            <p className="text-gray mb-6">
              With over 5 years of experience in digital marketing and video production, I specialize in creating scroll-stopping UGC videos that convert viewers into customers. 
              My background includes working with top SaaS brands to develop authentic-looking content that resonates with their target audience.
            </p>
            
            <p className="text-gray mb-8">
              I combine deep understanding of social media algorithms, trending formats, and consumer psychology to craft videos that not only look good but deliver measurable results.
              My approach focuses on creating content that feels genuine, addresses pain points, and showcases your solution in an engaging way.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-light rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-dark">{stat.value}</div>
                  <div className="text-sm text-gray">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <a href="#order" className="btn-primary inline-flex">
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
