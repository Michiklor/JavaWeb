import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; 
import { VscAccount, VscGear } from "react-icons/vsc"; 
import RegisterLessonButton from './RegisterLessonButton';
import Card from './CardSection';
import headerPic from '../Images/HeaderPic.png';
import logo from '../Images/logo.webp';
import gym from '../Images/gym.png'; 
import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'
import { IoIosLogOut } from "react-icons/io";
const Header = () => {
  const { isLoggedIn, logout, user } = useAuth(); 
  const [menuOpen, setMenuOpen] = useState(false); 
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  return (
    <div>
      <header className="bg-gray-800 text-white py-4 px-8 w-full fixed top-0 left-0 z-50">
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-4">
            {!isLoggedIn ? (
              <>
                <LoginButton />
                <RegisterButton />
              </>
            ) : (
              <div className="flex items-center space-x-4">
              <VscAccount className="w-8 h-8" onClick={toggleUserMenu} />
              {userMenuOpen && (
                <div className="relative">
                  <div className="absolute left-0 mt-2 w-32 bg-gray-700 text-white rounded-md shadow-md">
                    <ul className="p-2">
                      <li className="p-2 hover:bg-gray-600 flex items-center space-x-2">
                        <IoIosLogOut className="w-5 h-5" />
                        <span 
                          className="w-full text-left p-2 cursor-pointer"
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
                <RegisterLessonButton/>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center w-full">
            <img src={logo} alt="Logo" className="h-16 w-16" />
          </div>
          
          <div className="relative">
            <VscGear 
              onClick={toggleMenu} 
              className="text-white w-8 h-8 cursor-pointer" 
            />
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-700 text-white rounded-md shadow-lg">
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
                  <li className="p-2 hover:bg-gray-600">
                   
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="mt-24">
        <img
          src={headerPic}
          alt="Header Picture"
          className="w-full h-auto object-cover !important"
        />
      </div>
      <div className="mt-8 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <Card title={"חדר כושר"} imageUrl={gym} />
        <Card title={"פילאטיס מכשירים"} imageUrl={gym} />
        <Card title={"סטודיו"} imageUrl={gym} />
        <Card title={"ילדים ונוער"} imageUrl={gym} />
        <Card title={"מערכת"} imageUrl={gym} />
        <Card title={"מנויים וכרטיסיות"} imageUrl={gym} />
      </div>
    </div>
  );
};

export default Header;
