
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-brand-light-purple to-brand-soft-peach py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Discover and Connect with <span className="bg-gradient-to-r from-brand-purple to-brand-dark-purple bg-clip-text text-transparent">Beauty Vendors</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Explore beauty products and services. Contact vendors directly through WhatsApp or Instagram.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button className="glow-btn w-full sm:w-auto">Explore Products</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="w-full sm:w-auto border-brand-purple text-brand-purple hover:bg-brand-light-purple">
                  Browse Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full shadow-lg overflow-hidden grid place-items-center">
                <div className="absolute w-full h-full bg-gradient-to-br from-brand-purple/20 to-brand-soft-peach/40"></div>
                <img 
                  src="https://source.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="Beauty Products" 
                  className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-soft-yellow rounded-full shadow-md flex items-center justify-center">
                <span className="font-bold text-lg text-center">Direct Messaging!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
