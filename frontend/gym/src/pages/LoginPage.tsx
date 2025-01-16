import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../Images/logo.webp'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/members/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('memberId', data.memberId);
        setLoginMessage('התחברות בוצעה בהצלחה');
        login(data.username);
        setTimeout(() => navigate('/'), 2000);
      } else {
        setLoginMessage(data.message || 'שגיאה בהתחברות');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginMessage('שגיאה בהתחברות');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-center mb-8">
            <img src={ logo} alt="Logo" className="h-20 w-20" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">התחברות</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">
                כתובת אימייל
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">
                סיסמה
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                התחבר
              </button>
            </div>
          </form>
          {loginMessage && (
            <p className="mt-4 text-center text-sm text-red-600">{loginMessage}</p>
          )}
        </div>
      </div>
      <button
        onClick={() => navigate('/')}
        className="mt-4 text-sm text-gray-600 hover:text-gray-800"
      >
        חזרה לדף הבית
      </button>
    </div>
  );
};

export default LoginPage;

