"use client";

import { useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (user: { username: string; password: string }) => 
        user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem('loggedInUser', username);
      router.push('/');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: { username: string }) => user.username === username);

    if (user) {
      setError('Username already exists');
      return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    setError('User registered successfully');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Logg inn / Registrer</h1>
      <input
        type="text"
        placeholder="Brukernavn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border px-4 py-2 mb-2 w-full"
      />
      <input
        type="password"
        placeholder="Passord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border px-4 py-2 mb-4 w-full"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-2"
        onClick={handleLogin}
      >
        Logg inn
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
        onClick={handleRegister}
      >
        Registrer
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default LoginPage;
