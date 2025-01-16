import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Images/logo.webp'
//import logo from '../Images/logo.webp';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/members/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setRegistrationMessage('הרשמה בוצעה בהצלחה');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setRegistrationMessage(data.message || 'שגיאה בהרשמה');
      }
    } catch (error) {
      console.error('Error:', error);
      setRegistrationMessage('שגיאה בהרשמה');
    }
  };

  const handleGoogleLogin = (response: any) => {
    console.log('Google Login Response:', response);
    // Implement Google login logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-center mb-8">
            <img src={ logo} alt="Logo" className="h-20 w-20" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">הרשמה</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-2">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-right"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
                הירשם
              </button>
            </div>
          </form>
          {registrationMessage && (
            <p className="mt-4 text-center text-sm text-red-600">{registrationMessage}</p>
          )}
          <div className="mt-6">
            {/* <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => console.log('Google Login Failed')}
              useOneTap
            /> */}
          </div>
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

export default RegisterPage;

