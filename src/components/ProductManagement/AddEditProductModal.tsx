import React, { useState, useEffect, FC } from 'react';
import { X, Upload } from 'lucide-react';
import { Product } from './ProductManagementPage';

interface ModalProps {
  product?: Product | null;
  onClose: () => void;
  onSave: (product: Product) => void;
}

const AddEditProductModal: FC<ModalProps> = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState<Product>({
    id: '',
    name: '',
    description: '',
    category: '',
    price: 0,
    stock: 0,
    image: '',
    visible: true
  });

  const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (product) {
      setFormData(product);
      setImagePreview(product.image);
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      price: parseFloat(formData.price.toString()),
      stock: parseInt(formData.stock.toString())
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({...prev, image: reader.result as string}));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({...prev, [name]: type === 'number' ? parseFloat(value) : value}));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="
        bg-white/90 backdrop-blur-lg rounded-2xl border border-gray-200/50 
        shadow-2xl p-8 w-[32rem] max-w-full relative
      ">
        <button 
          onClick={onClose} 
          className="
            absolute top-4 right-4 p-2 rounded-full bg-gray-100/50 
            hover:bg-gray-200/70 transition-all duration-300
          "
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          {product ? 'Edit Product' : 'Add New Product'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-2.5 rounded-xl border border-gray-300/50 
                    bg-white/50 shadow-sm focus:border-[#F4A300]/50 focus:ring 
                    focus:ring-[#F4A300]/20 transition-all duration-300
                  "
                  required
                  placeholder="Enter product name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-2.5 rounded-xl border border-gray-300/50 
                    bg-white/50 shadow-sm focus:border-[#F4A300]/50 focus:ring 
                    focus:ring-[#F4A300]/20 transition-all duration-300 h-24
                  "
                  placeholder="Describe your product"
                />
              </div>
            </div>
            
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
              <div className="
                border-2 border-dashed border-gray-300 rounded-xl 
                aspect-square flex items-center justify-center 
                bg-gray-100/50 overflow-hidden
              ">
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Product Preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <Upload className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                    <p>Upload Image</p>
                  </div>
                )}
              </div>
              <input
                type="file"
                onChange={handleImageUpload}
                className="hidden"
                id="product-image-upload"
                accept="image/*"
              />
              <label 
                htmlFor="product-image-upload" 
                className="
                  mt-3 block text-center px-4 py-2 bg-[#F4A300]/10 
                  text-[#F4A300] rounded-lg hover:bg-[#F4A300]/20 
                  transition-all duration-300 cursor-pointer
                "
              >
                Choose Image
              </label>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="
                  w-full px-4 py-2.5 rounded-xl border border-gray-300/50 
                  bg-white/50 shadow-sm focus:border-[#F4A300]/50 focus:ring 
                  focus:ring-[#F4A300]/20 transition-all duration-300
                "
                step="0.01"
                min="0"
                required
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="
                  w-full px-4 py-2.5 rounded-xl border border-gray-300/50 
                  bg-white/50 shadow-sm focus:border-[#F4A300]/50 focus:ring 
                  focus:ring-[#F4A300]/20 transition-all duration-300
                "
                min="0"
                required
                placeholder="0"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="
                w-full px-4 py-2.5 rounded-xl border border-gray-300/50 
                bg-white/50 shadow-sm focus:border-[#F4A300]/50 focus:ring 
                focus:ring-[#F4A300]/20 transition-all duration-300
              "
              required
            >
              <option value="">Select Category</option>
              <option value="Skincare">Skincare</option>
              <option value="Makeup">Makeup</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="product-visibility"
              name="visible"
              checked={formData.visible}
              onChange={(e) => setFormData({...formData, visible: e.target.checked})}
              className="
                h-5 w-5 rounded border-gray-300 text-[#F4A300] 
                focus:ring-[#F4A300] transition-all duration-300
              "
            />
            <label 
              htmlFor="product-visibility" 
              className="text-sm text-gray-700"
            >
              Visible in Store
            </label>
          </div>
          
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200/50">
            <button
              type="button"
              onClick={onClose}
              className="
                px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl 
                hover:bg-gray-200 transition-all duration-300
              "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="
                px-6 py-2.5 bg-[#F4A300] text-white rounded-xl 
                hover:bg-opacity-90 transition-all duration-300 
                shadow-md hover:shadow-lg
              "
            >
              {product ? 'Update' : 'Add'} Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEditProductModal;
