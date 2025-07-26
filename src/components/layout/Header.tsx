import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If we're already on the home page, scroll to top
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Otherwise, navigate to home
      navigate('/');
      // Scroll to top after navigation
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {/* Backdrop blur when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a 
                href="/" 
                onClick={handleLogoClick}
                className="logo-link text-2xl font-bold text-white hover:opacity-90 transition-opacity"
              >
                Message<span className="text-blue-400">Mirror</span>
              </a>
            </div>
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-10">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#faq"
                className="text-gray-300 hover:text-white transition-colors"
              >
                FAQ
              </a>
            </nav>
            {/* Mobile menu button */}
            <div className="md:hidden z-50">
              <button
                type="button"
                className="p-2 text-gray-300 hover:text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 transition-transform rotate-180" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu with slide-in animation */}
        <div 
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full flex flex-col pt-20 pb-6 px-6 overflow-y-auto">
            <nav className="flex-1 space-y-3">
              <a
                href="#features"
                className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#faq"
                className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </nav>
            
            <div className="mt-auto pt-6 border-t border-gray-800">
              <p className="px-4 text-sm text-gray-400">
                Secure your messages with MessageMirror
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
