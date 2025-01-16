import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { VscAccount, VscGear } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import logo from '../Images/logo.webp'
const Header: React.FC = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
  const navigate = useNavigate();
  

  return (
    <header className="bg-gray-800 text-white py-4 px-8 w-full fixed top-0 left-0 z-50">
      <div className="grid grid-cols-3 items-center w-full">
        {/* Left section - always takes up 1/3 of space */}
        <div className="flex justify-start">
          {isLoggedIn && (
            <div className="flex items-center gap-4">
              <VscAccount className="w-8 h-8 cursor-pointer" onClick={toggleUserMenu} />
              {userMenuOpen && (
                <div className="relative">
                  <div className="absolute left-0 mt-2 w-32 bg-gray-700 text-white rounded-md shadow-md">
                    <ul className="p-2">
                      <li className="p-2 hover:bg-gray-600 flex items-center gap-2">
                        <IoIosLogOut className="w-5 h-5" />
                        <span 
                          className="w-full text-right p-2 cursor-pointer"
                          onClick={logout}
                        >
                          יציאה
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <span>{user?.username}</span>
            </div>
          )}
        </div>

        {/* Center section - Logo */}
        <div className="flex justify-center">
          <img 
            src={logo } 
            alt="Logo" 
            className="h-20 w-20 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>

        {/* Right section - Settings */}
        <div className="flex justify-end">
          <VscGear 
            onClick={toggleMenu} 
            className="text-white w-8 h-8 cursor-pointer" 
          />
          {menuOpen && (
            <div className="absolute right-8 mt-10 w-48 bg-gray-700 text-white rounded-md shadow-lg">
              <ul className="p-2">
                <li className="p-2 hover:bg-gray-600">
                  <a href="/" className="hover:text-yellow-400">בית</a>
                </li>
                <li className="p-2 hover:bg-gray-600">
                  <a href="/" className="hover:text-yellow-400">הצוות שלנו</a>
                </li>
                <li className="p-2 hover:bg-gray-600">
                  <a href="/" className="hover:text-yellow-400">מסלולי חברות</a>
                </li>
                <li className="p-2 hover:bg-gray-600">
                  <a href="/about" className="hover:text-yellow-400">אודות</a>
                </li>
                <li className="p-2 hover:bg-gray-600">
                  <a href="/services" className="hover:text-yellow-400">מערכת אימונים</a>
                </li>
                <li className="p-2 hover:bg-gray-600">
                  <a href="/contact" className="hover:text-yellow-400">צור קשר</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

