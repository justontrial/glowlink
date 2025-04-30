
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServiceCard from '../services/ServiceCard';
import { services } from '@/data/mockData';

const FeaturedServices = () => {
  // Display only the first 3 services
  const featuredServices = services.slice(0, 3);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">Featured Services</h2>
          <Link to="/services">
            <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-light-purple">
              View All
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
