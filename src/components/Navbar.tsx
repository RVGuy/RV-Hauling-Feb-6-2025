import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-12 w-auto relative">
                <OptimizedImage
                  src="https://i.ibb.co/wZHqZq2K/rvtoday1.jpg"
                  alt="RV HAULING Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">RV HAULING</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>Home</Link>
            <Link to="/services" className={`${isActive('/services')} transition-colors duration-200`}>Services</Link>
            <Link to="/how-it-works" className={`${isActive('/how-it-works')} transition-colors duration-200`}>How It Works</Link>
            <Link to="/request-quote" className={`${isActive('/request-quote')} transition-colors duration-200`}>Request A Quote</Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors duration-200`}>About</Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors duration-200`}>Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className={`block px-3 py-2 rounded-md ${isActive('/')}`}>Home</Link>
          <Link to="/services" className={`block px-3 py-2 rounded-md ${isActive('/services')}`}>Services</Link>
          <Link to="/how-it-works" className={`block px-3 py-2 rounded-md ${isActive('/how-it-works')}`}>How It Works</Link>
          <Link to="/request-quote" className={`block px-3 py-2 rounded-md ${isActive('/request-quote')}`}>Request A Quote</Link>
          <Link to="/about" className={`block px-3 py-2 rounded-md ${isActive('/about')}`}>About</Link>
          <Link to="/contact" className={`block px-3 py-2 rounded-md ${isActive('/contact')}`}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;