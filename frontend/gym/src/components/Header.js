import React from 'react';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import  Card from './CardSection'
import headerPic from '../Images/HeaderPic.png';
import logo from'../Images/logo.webp';
import gym from '../Images/gym.png'

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
        <div>
            <img src={logo} alt="Logo" className="h-16 w-16" />
          </div>
      </div>
    </header>
    <div className="mt-24">
        <img
           src={headerPic} 
          alt="Header Picture"
          className="w-full h-auto object-cover !important "
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
