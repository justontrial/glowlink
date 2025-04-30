
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '../products/ProductCard';
import { products } from '@/data/mockData';

const FeaturedProducts = () => {
  // Display only the first 3 products
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">Featured Products</h2>
          <Link to="/products">
            <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-light-purple">
              View All
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
