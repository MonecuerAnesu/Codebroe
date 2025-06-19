import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('socialmediametaplatform@gmail.com');
  const [password, setPassword] = useState('Elshaddai2007');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Wrong email or password. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-2xl text-white font-bold mb-4 text-center">Admin Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            placeholder="Admin Email"
            className="p-2 rounded bg-black text-white border border-gray-600"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="p-2 rounded bg-black text-white border border-gray-600"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-accent hover:bg-accent-dark transition px-4 py-2 rounded text-white font-bold"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
