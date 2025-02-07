import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:403-669-2133" className="hover:text-blue-400 transition-colors">403-669-2133</a>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:rvhauling@shaw.ca" className="hover:text-blue-400 transition-colors">rvhauling@shaw.ca</a>
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Chestermere, Alberta
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>Alberta</li>
              <li>British Columbia</li>
              <li>Central & Southern Saskatchewan</li>
              <li>Southern Manitoba</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 7:00 AM - 7:00 PM</li>
              <li>Saturday: 8:00 AM - 12:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} RV HAULING. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;