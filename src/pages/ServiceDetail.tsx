
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ContactVendorButtons from '@/components/shared/ContactVendorButtons';
import { services } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === Number(id));
  
  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-6">The service you're looking for doesn't exist or has been removed.</p>
          <Link to="/services">
            <Button>
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const contactMessage = `Hi, I'd like to book your "${service.name}" service priced at $${service.price}. Is there availability this week?`;

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <Link to="/services" className="inline-flex items-center text-brand-purple hover:text-brand-dark-purple mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to Services
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={service.imageUrl} 
              alt={service.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="bg-brand-soft-green text-green-700 text-sm font-medium px-3 py-1 rounded-full inline-block">
              {service.category}
            </div>
            <h1 className="text-3xl font-bold">{service.name}</h1>
            <p className="text-2xl font-semibold text-brand-dark-purple">
              ${service.price.toFixed(2)}
            </p>
            <div className="flex items-center text-gray-600">
              <Clock size={16} className="mr-2" />
              Duration: {service.duration}
            </div>
            <p className="text-gray-600">Provider: {service.vendor}</p>
            
            <div className="border-t border-gray-200 my-4 pt-4">
              <h2 className="font-semibold text-lg mb-2">About this service</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
            
            <div className="border-t border-gray-200 my-4 pt-4">
              <h2 className="font-semibold text-lg mb-4">Book this Service</h2>
              <ContactVendorButtons 
                whatsapp={service.whatsapp}
                instagram={service.instagram}
                message={contactMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetail;
