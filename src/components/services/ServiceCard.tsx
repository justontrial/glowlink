
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface Service {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  vendor: string;
  description: string;
  duration: string;
  whatsapp?: string;
  instagram?: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="overflow-hidden hover-card">
      <div className="h-48 overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-brand-soft-green text-green-700 text-xs font-medium px-2 py-1 rounded-full">
            {service.category}
          </span>
          <span className="font-semibold text-brand-dark-purple">
            ${service.price.toFixed(2)}
          </span>
        </div>
        <h3 className="card-title mb-1">{service.name}</h3>
        <p className="text-gray-500 text-sm">by {service.vendor}</p>
        <p className="text-gray-500 text-sm mt-1">Duration: {service.duration}</p>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0">
        <Link to={`/services/${service.id}`} className="w-full">
          <Button variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-light-purple">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
