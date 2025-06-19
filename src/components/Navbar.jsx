import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }, // ✅ fixed lowercase
    { name: 'Admin', path: '/admin' }
  ];

  return (
    <nav className="bg-black bg-opacity-30 backdrop-blur-md text-white py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <h1 className="text-accent font-extrabold text-2xl tracking-wide">
        CodeBro
      </h1>

      <div className="flex gap-4 text-sm md:text-base">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`px-2 py-1 transition duration-200 ${
              isActive(item.path)
                ? 'text-accent font-semibold underline underline-offset-4'
                : 'text-gray-300 hover:text-accent'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
