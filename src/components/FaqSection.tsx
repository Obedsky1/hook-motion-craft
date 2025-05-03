
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Standard delivery time is 3-5 business days for the Starter and Pro packages. For Custom packages, timeline will be discussed based on the scope of work. Need it faster? Rush delivery is available for an additional fee."
    },
    {
      question: "Can I request revisions?",
      answer: "Absolutely! The Starter package includes 1 round of revisions, the Pro package includes 2 rounds, and Custom packages include unlimited revisions. Additional revision rounds can be purchased if needed."
    },
    {
      question: "What format will I receive the videos in?",
      answer: "You'll receive your videos in high-quality MP4 format, optimized for social media platforms. Each video is delivered in formats suitable for TikTok, Instagram Reels, and YouTube Shorts. For ads, I'll provide specific aspect ratios required by the platforms you want to advertise on."
    },
    {
      question: "Do you work with specific industries only?",
      answer: "I specialize in working with SaaS companies and digital businesses, but I've created successful UGC videos across various industries. My expertise lies in translating complex products into simple, engaging hooks that drive user interest."
    },
    {
      question: "How do I provide feedback on the videos?",
      answer: "After delivery, you'll receive a feedback form where you can provide timestamp-specific comments. For more complex feedback, we can schedule a quick call to discuss changes needed."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <p className="section-subtitle text-center mx-auto">
          Everything you need to know about my UGC video services
        </p>
        
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-light hover:no-underline font-medium text-left text-gray-dark">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12">
            <p className="text-gray mb-4">Don't see your question here?</p>
            <a href="mailto:contact@ugcpro.com" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
