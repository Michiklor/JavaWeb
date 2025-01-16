import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Gym Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">מכון כושר שלנו</h3>
            <p className="mb-2 flex items-center">
              <MapPin className="w-5 h-5 ml-2" />
              רחוב הכושר 123, תל אביב
            </p>
            <p className="mb-2 flex items-center">
              <Phone className="w-5 h-5 ml-2" />
              03-1234567
            </p>
            <p className="flex items-center">
              <Mail className="w-5 h-5 ml-2" />
              info@gymwebsite.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-red-500">דף הבית</Link></li>
              <li><Link to="/classes" className="hover:text-red-500">שיעורים</Link></li>
              <li><Link to="/trainers" className="hover:text-red-500">מאמנים</Link></li>
              <li><Link to="/membership" className="hover:text-red-500">מנויים</Link></li>
              <li><Link to="/contact" className="hover:text-red-500">צור קשר</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">שעות פתיחה</h3>
            <ul className="space-y-2">
              <li>ראשון - חמישי: 06:00 - 23:00</li>
              <li>שישי: 06:00 - 20:00</li>
              <li>שבת: 08:00 - 20:00</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">הירשמו לניוזלטר</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="הכנס את כתובת האימייל שלך"
                className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
              >
                הרשמה
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Facebook</span>
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Instagram</span>
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Twitter</span>
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} מכון כושר שלנו. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

