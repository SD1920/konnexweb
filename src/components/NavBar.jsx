import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo + Links */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.png" alt="BookEasy" className="h-8 w-auto" />
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              <Link to="/events" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Events</Link>
              <Link to="/venues" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Venues</Link>
              <Link to="/pricing" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Pricing</Link>
            </div>
          </div>

          {/* Search + Auth */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search events"
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Sign In</Link>
              <Link to="/register" className="ml-4 px-3 py-2 bg-accent text-white rounded-md text-sm font-medium hover:bg-accent-dark">Sign Up</Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden -mr-2">
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {open ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link to="/events" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">Events</Link>
          <Link to="/venues" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">Venues</Link>
          <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">Pricing</Link>
          <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">Sign In</Link>
          <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium bg-accent text-white hover:bg-accent-dark">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
