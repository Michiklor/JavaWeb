import React from 'react';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import headerPic from '../Images/HeaderPic.png';

const Header = () => {
  return (
    <div>
    <header className="bg-gray-800 text-white py-4 px-8 w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center w-full">
        <div className="flex space-x-4">
          <LoginButton />
          <RegisterButton />
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="/" className="hover:text-yellow-400">בית</a></li>
            <li><a href="/" className="hover:text-yellow-400">הצוות שלנו</a></li>
            <li><a href="/" className="hover:text-yellow-400">מסלולי חברות </a></li>
            <li><a href="/about" className="hover:text-yellow-400">אודות</a></li>
            <li><a href="/services" className="hover:text-yellow-400">מערכת אימונים</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">צור קשר</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div className="mt-24">
        <img
           src={headerPic} 
          alt="Header Picture"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
    
  );
};

export default Header;
