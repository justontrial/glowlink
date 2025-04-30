
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ServiceCard from '@/components/services/ServiceCard';
import CategoryFilter from '@/components/shared/CategoryFilter';
import { services, serviceCategories } from '@/data/mockData';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <div>
            <h1 className="section-title mb-2">Beauty Services</h1>
            <p className="text-gray-600">
              Book quality beauty services from our skilled providers
            </p>
          </div>
          <CategoryFilter 
            categories={serviceCategories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
        
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No services found in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Services;
