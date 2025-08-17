import React, { useState } from 'react'
import { Link } from 'react-router'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md  w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Food Recipe
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-9 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Product" className="hover:text-blue-600 transition">
              Product
            </Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex items-center text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-lg font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Product"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 transition"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 transition"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
