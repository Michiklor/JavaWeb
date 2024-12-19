import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google'; // יבוא של GoogleOAuthProvider
import RegisterForm from './RegisterForm'; 

const RegisterButton = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleRegisterClick = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div>
        <button
          type="button"
          className="absolute top-4 left-28 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={handleRegisterClick}
        >
          הרשמה
        </button>
        {showRegisterForm && <RegisterForm />}
      </div>
    </GoogleOAuthProvider>
  );
};

export default RegisterButton;
