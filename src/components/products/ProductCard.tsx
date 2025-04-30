
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  vendor: string;
  description: string;
  whatsapp?: string;
  instagram?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="overflow-hidden hover-card">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-brand-light-purple text-brand-dark-purple text-xs font-medium px-2 py-1 rounded-full">
            {product.category}
          </span>
          <span className="font-semibold text-brand-dark-purple">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <h3 className="card-title mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm">by {product.vendor}</p>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0">
        <Link to={`/products/${product.id}`} className="w-full">
          <Button variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-light-purple">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
