import React, { useState } from 'react';

const LoginButton = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const loginRequest = {
      email: email, 
      password: password, 
    };

    try {
      const response = await fetch('http://localhost:8080/members/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(loginRequest), 
      });

      const data = await response.json(); 
      console.log('Response:', data);
      setLoginMessage(data.message); 
    } catch (error) {
      console.error('Error:', error);
      setLoginMessage('Error during login'); 
    }
  };

  return (
    <div>
      <button
        type="button"
        className="absolute top-4 left-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={handleLoginClick}
      >
        כניסה
      </button>
      {showLoginForm && (
        <div className="absolute top-20 left-4 bg-white p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                placeholder="Enter your email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                placeholder="Enter your password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              התחברות
            </button>
          </form>
          {loginMessage && (
            <div className="mt-4 text-center text-red-600">
              {loginMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginButton;
