import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Card from './Card';
import headerPic from '../Images/HeaderPic.png';
import gym from '../Images/gym.png';

const Body: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useAuth();

  return (
    <div className="mt-24">
      <div className="relative">
        <img
          src={headerPic || "/placeholder.svg"}
          alt="Header Picture"
          className="w-full h-[600px] object-cover !important"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            {!isLoggedIn ? (
              <>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">ברוכים הבאים למכון הכושר שלנו</h1>
                <p className="text-xl md:text-2xl text-white mb-8">בואו להתאמן בחדר הכושר המתקדם ביותר בירושלים</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
                  <button
                    onClick={() => navigate('/register')}
                    className="w-full px-8 py-4 bg-red-600 text-white text-xl font-semibold rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
                  >
                    הצטרפו עכשיו
                  </button>
                  <button
                    onClick={() => navigate('/login')}
                    className="w-full px-8 py-4 bg-red-600 text-white text-xl font-semibold rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
                  >
                    כניסה
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {`ברוך הבא חזרה, ${user?.username || 'חבר יקר'}`}
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8">
                  מוכנים לאימון היום? בואו נתחיל
                </p>
                <div className="flex justify-center w-full max-w-md mx-auto">
                  <button
                    onClick={() => navigate('/register-lessons')}
                    className="w-full px-8 py-4 bg-red-600 text-white text-xl font-semibold rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
                  >
                    הרשמה לשיעורים
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="mt-8 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <Card title="חדר כושר" imageUrl={gym} link="#" />
        <Card title="פילאטיס מכשירים" imageUrl={gym} link="#" />
        <Card title="סטודיו" imageUrl={gym} link="#" />
        <Card title="ילדים ונוער" imageUrl={gym} link="#" />
        <Card title="מערכת" imageUrl={gym} link="#" />
        <Card title="מנויים וכרטיסיות" imageUrl={gym} link="#" />
      </div>
    </div>
  );
};

export default Body;

