// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Edit, Trash, Eye, EyeOff } from 'lucide-react';
import { Product } from './ProductManagementPage';

interface ProductCardProps {
  product: Product;
  view: 'grid' | 'list';
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
  onToggleVisibility: (productId: string) => void;
}

export default function ProductCard({
  product,
  view,
  onEdit,
  onDelete,
  onToggleVisibility
}: ProductCardProps) {
  return (
    <div className={`
      bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 
      shadow-xl overflow-hidden transition-all duration-300 
      hover:shadow-2xl hover:scale-[1.02]
      ${view === 'grid' ? 'flex flex-col' : 'flex items-center space-x-6'}
      relative group
    `}>
      <div className={`
        relative 
        ${view === 'grid' ? 'w-full h-48' : 'w-32 h-32'} 
        overflow-hidden
      `}>
        <img 
          src={product.image || 'https://via.placeholder.com/300'} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="flex-1 p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{product.category}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => onToggleVisibility(product.id)} 
              className={`
                rounded-full p-1.5 transition-all duration-300
                ${product.visible 
                  ? 'bg-green-50 text-green-600 hover:bg-green-100' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}
              `}
            >
              {product.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-xl font-bold text-[#F4A300]">${product.price.toFixed(2)}</span>
            <span className="ml-3 text-sm text-gray-500">Stock: {product.stock}</span>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => onEdit(product)} 
              className="
                bg-gray-100 text-gray-600 p-2 rounded-full 
                hover:bg-[#F4A300]/10 hover:text-[#F4A300] 
                transition-all duration-300
              "
            >
              <Edit className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onDelete(product.id)} 
              className="
                bg-gray-100 text-gray-600 p-2 rounded-full 
                hover:bg-red-50 hover:text-red-500 
                transition-all duration-300
              "
            >
              <Trash className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
