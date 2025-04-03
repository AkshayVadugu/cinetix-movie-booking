import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Film className="h-8 w-8" />
            <span className="text-2xl font-bold">CineTix</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/movies" className="hover:text-gray-200">Movies</Link>
            <Link to="/user-login" className="hover:text-gray-200">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;