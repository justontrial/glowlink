
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
            <span className="text-white font-bold">G</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-brand-purple to-brand-dark-purple bg-clip-text text-transparent">
            GlowLink
          </span>
        </Link>

        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMobileMenu}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 flex flex-col space-y-4 border-t animate-fade-in">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-brand-purple"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/products" 
                  className="text-gray-700 hover:text-brand-purple"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  to="/services" 
                  className="text-gray-700 hover:text-brand-purple"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/admin" 
                  className="text-gray-700 hover:text-brand-purple"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Vendor Login
                </Link>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-purple font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-brand-purple font-medium">
              Products
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-brand-purple font-medium">
              Services
            </Link>
            <Link to="/admin">
              <Button className="glow-btn">Vendor Login</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
