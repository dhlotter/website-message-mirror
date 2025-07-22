import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left side - Brand and description */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-4">
              Message<span className="text-blue-400">Mirror</span>
            </h3>
            <p className="text-gray-400 max-w-md">
              Securely back up your text messages and call logs to Gmail for
              easy searching and permanent storage.
            </p>
          </div>

          {/* Right side - Legal links */}
          <div className="text-right">
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} MessageMirror. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
