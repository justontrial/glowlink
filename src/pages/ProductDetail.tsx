
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ContactVendorButtons from '@/components/shared/ContactVendorButtons';
import { products } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button>
              <ArrowLeft size={16} className="mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const contactMessage = `Hi, I'm interested in your product "${product.name}" priced at $${product.price}. Is it available?`;

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <Link to="/products" className="inline-flex items-center text-brand-purple hover:text-brand-dark-purple mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="bg-brand-light-purple text-brand-dark-purple text-sm font-medium px-3 py-1 rounded-full inline-block">
              {product.category}
            </div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold text-brand-dark-purple">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600">Vendor: {product.vendor}</p>
            
            <div className="border-t border-gray-200 my-4 pt-4">
              <h2 className="font-semibold text-lg mb-2">About this product</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="border-t border-gray-200 my-4 pt-4">
              <h2 className="font-semibold text-lg mb-4">Contact the Vendor</h2>
              <ContactVendorButtons 
                whatsapp={product.whatsapp}
                instagram={product.instagram}
                message={contactMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
