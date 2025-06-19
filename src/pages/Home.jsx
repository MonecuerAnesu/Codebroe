import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white bg-black px-4">
      {/* 🔐 Admin Login Button in top-right corner */}
      <Link
        to="/admin"
        className="absolute top-4 right-4 bg-accent text-black text-sm font-semibold px-4 py-1.5 rounded hover:bg-white transition"
      >
        Admin Login
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4 text-center animate-pulse drop-shadow-lg">
        Welcome to CodeBro
      </h1>

      <p className="text-gray-300 text-center max-w-lg text-lg">
        Eshadai's creative software agency — explore our services, latest portfolio, and more.
      </p>

      <Link
        to="/services"
        className="mt-6 bg-accent text-black px-6 py-2 rounded hover:bg-white font-bold transition"
      >
        View Our Services
      </Link>
    </div>
  );
}
