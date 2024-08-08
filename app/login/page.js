'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Login = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();
    console.log('Response data:', data);

    if (response.ok) {
      Cookies.set('auth', 'authenticated', { httpOnly: true, secure: true });
      router.push('/');
    } else {
      alert('Incorrect password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
        <h1 className="mb-4 text-lg font-bold">Login</h1>
        <div className="relative mb-4 w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="p-2 border rounded w-full"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
