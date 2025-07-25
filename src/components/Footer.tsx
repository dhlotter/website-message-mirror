import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Copyright and links section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
          <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} MessageMirror. All rights reserved.</p>
          
          {/* Links */}
          <div className="flex space-x-6">
            <Link 
              to="/terms-of-service" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link 
              to="/privacy-policy" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/sitemap" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
