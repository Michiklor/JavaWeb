import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterLessonButton = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register-lessons'); 
  };

  return (
    <button
      onClick={handleRegisterClick}
      className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      הרשמה לשיעור
    </button>
  );
};

export default RegisterLessonButton;
