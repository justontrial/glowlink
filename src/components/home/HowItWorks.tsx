
import React from 'react';
import { Search, Phone, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="text-brand-purple" size={32} />,
      title: "Find Products & Services",
      description: "Browse through our catalog of beauty products and services offered by verified vendors."
    },
    {
      icon: <ArrowRight className="text-brand-purple" size={32} />,
      title: "Choose What You Need",
      description: "Select products or book appointments for services that interest you."
    },
    {
      icon: <Phone className="text-brand-purple" size={32} />,
      title: "Connect Directly",
      description: "Contact the vendor directly via WhatsApp or Instagram to finalize your purchase or booking."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="section-title">How GlowLink Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          GlowLink makes it simple to discover beauty products and services, then connect directly with vendors.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-brand-light-purple rounded-full flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
