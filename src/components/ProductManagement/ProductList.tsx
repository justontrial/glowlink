import React from 'react';
import ProductCard from './ProductCard';
import { Product } from './ProductManagementPage';

interface ProductListProps {
  products: Product[];
  view: 'grid' | 'list';
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
  onToggleVisibility: (productId: string) => void;
}

export default function ProductList({
  products,
  view,
  onEdit,
  onDelete,
  onToggleVisibility
}: ProductListProps) {
  return (
    <div className={`
      grid gap-6 p-6 
      ${view === 'grid' 
        ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' 
        : 'grid-cols-1'}
      transition-all duration-300 ease-in-out
    `}>
      {products.length === 0 ? (
        <div className="
          col-span-full flex flex-col items-center justify-center 
          bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 
          shadow-xl p-10 text-center
        ">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-gray-300 mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h2 className="text-xl font-bold text-gray-600 mb-2">No Products Yet</h2>
          <p className="text-gray-500">Start by adding your first product</p>
        </div>
      ) : (
        products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            view={view}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleVisibility={onToggleVisibility}
          />
        ))
      )}
    </div>
  );
}
