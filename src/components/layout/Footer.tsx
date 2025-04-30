
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-brand-purple to-brand-dark-purple bg-clip-text text-transparent">
                GlowLink
              </span>
            </Link>
            <p className="text-gray-600 text-sm">
              Connecting customers with beauty and lifestyle vendors, simply and directly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-purple">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-brand-purple">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-brand-purple">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-600 hover:text-brand-purple">
                  Vendor Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Are you a vendor?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Join GlowLink to increase your visibility and connect with new customers.
            </p>
            <Link to="/admin" className="glow-btn inline-block">
              Join Now
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} GlowLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
