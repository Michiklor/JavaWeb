import React, { useState } from 'react';


const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newMember = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/members/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMember),
      });

      const data = await response.json();

      if (response.ok) {
        setRegistrationMessage(data.message || 'Registration successful!');
        setName('');
        setEmail('');
        setPassword('');
      } else {
        setRegistrationMessage(data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setRegistrationMessage('An error occurred during registration.');
    }
  };

  const handleGoogleLogin = (response: any) => {
    console.log('Google Login Response:', response);
  };

  return (
    <div className="absolute top-20 left-28 bg-white p-6 rounded-lg shadow-lg w-80">
      <h2 className="text-xl font-semibold mb-4">הירשם עכשיו</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            שם
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            placeholder="הכנס את שמך"
            value={name}
            onChange={(e) => setName(e.target.value)}
            dir="rtl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            דוא"ל
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            placeholder="הכנס מייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            dir="rtl"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            סיסמה
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
            placeholder="הכנס סיסמה"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            dir="rtl"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          הירשם
        </button>
      </form>
      {registrationMessage && (
        <div className="mt-4 text-center text-red-600">{registrationMessage}</div>
      )}

      <div className="mt-4">
        {/* <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => console.log('Google Login Failed')}
          useOneTap
        /> */}
      </div>
    </div>
  );
};

export default RegisterForm;

