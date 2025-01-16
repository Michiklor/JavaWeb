import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';


export const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Body/>
      <Footer />
    </div>
  );
};

export default HomePage;

