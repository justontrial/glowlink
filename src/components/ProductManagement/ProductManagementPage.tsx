import React, { useState } from 'react';
import { Plus, Grid, List, User, Calendar, Box, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import AddEditProductModal from './AddEditProductModal';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  visible: boolean;
}

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Glow Serum',
    description: 'Brightening facial serum',
    category: 'Skincare',
    price: 29.99,
    stock: 50,
    image: 'https://images.pexels.com/photos/3738341/pexels-photo-3738361.jpeg?auto=compress&w=200',
    visible: true
  },
  {
    id: '2',
    name: 'Satin Scrunchie',
    description: 'Soft hair accessory',
    category: 'Accessories',
    price: 6.50,
    stock: 42,
    image: 'https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg?auto=compress&w=200',
    visible: false
  }
];

const accent = "#F4A300";
const bg = "#F5F5F5";

export default function ProductManagementPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = (newProduct: Product) => {
    setProducts([...products, { ...newProduct, id: Date.now().toString() }]);
    setIsModalOpen(false);
  };

  const handleEditProduct = (updatedProduct: Product) => {
    setProducts(products.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    ));
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const handleToggleVisibility = (productId: string) => {
    setProducts(products.map(p => 
      p.id === productId ? { ...p, visible: !p.visible } : p
    ));
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-white/70 backdrop-blur-lg border-r border-gray-200/50 p-6 shadow-xl rounded-r-2xl">
        <div className="w-full">
          <div className="mb-10 flex items-center space-x-3">
            <div className="bg-[#F4A300] p-2 rounded-full">
              <Box className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">GlowLink</h1>
          </div>
          <nav className="space-y-2">
            {[
              { icon: <Grid />, label: 'Dashboard', path: '/dashboard' },
              { icon: <Calendar />, label: 'Appointments', path: '/BookAppointment' },
              { icon: <Box />, label: 'Products', path: '/products', active: true },
              { icon: <Settings />, label: 'Settings', path: '/settings' },
              { icon: <LogOut />, label: 'Logout', path: '/logout' }
            ].map(({ icon, label, path, active }) => (
              <Link
                key={label}
                to={path}
                className={`
                  flex items-center p-3 rounded-lg transition-all duration-300 group
                  ${active 
                    ? 'bg-[#F4A300]/10 text-[#F4A300] font-semibold' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
                `}
              >
                {React.cloneElement(icon, { 
                  className: `w-5 h-5 transition-all 
                    ${active ? 'text-[#F4A300]' : 'text-gray-500 group-hover:text-gray-800'}
                  `, 
                  strokeWidth: active ? 2.5 : 1.5 
                })}
                <span className="ml-3">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
      
      <main className="flex-1 flex flex-col">
        {/* Topbar/Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Product Management</h1>
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-100 rounded-lg">
              <button 
                onClick={() => setView('grid')}
                className={`p-2 ${view === 'grid' ? 'bg-[#F4A300] text-white' : 'text-gray-500'}`}
              >
                <Grid />
              </button>
              <button 
                onClick={() => setView('list')}
                className={`p-2 ${view === 'list' ? 'bg-[#F4A300] text-white' : 'text-gray-500'}`}
              >
                <List />
              </button>
            </div>
            
            <button 
              onClick={() => {
                setEditingProduct(null);
                setIsModalOpen(true);
              }}
              className="flex items-center bg-[#F4A300] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition"
            >
              <Plus className="mr-2" /> Add Product
            </button>
          </div>
        </header>
        
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Products</h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex bg-white rounded-lg shadow-sm">
                <button 
                  onClick={() => setView('grid')}
                  className={`p-2 ${view === 'grid' ? 'bg-[#F4A300] text-white' : 'text-gray-500'}`}
                >
                  <Grid />
                </button>
                <button 
                  onClick={() => setView('list')}
                  className={`p-2 ${view === 'list' ? 'bg-[#F4A300] text-white' : 'text-gray-500'}`}
                >
                  <List />
                </button>
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center bg-[#F4A300] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition"
              >
                <Plus className="mr-2" /> Add Product
              </button>
            </div>
          </div>
          
          <ProductList 
            products={products}
            view={view}
            onEdit={(product) => {
              setEditingProduct(product);
              setIsModalOpen(true);
            }}
            onDelete={handleDeleteProduct}
            onToggleVisibility={handleToggleVisibility}
          />
        </div>

        {isModalOpen && (
          <AddEditProductModal
            product={editingProduct}
            onClose={() => {
              setIsModalOpen(false);
              setEditingProduct(null);
            }}
            onSave={editingProduct ? handleEditProduct : handleAddProduct}
          />
        )}
      </main>
    </div>
  );
}
