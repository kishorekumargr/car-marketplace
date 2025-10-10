"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 z-50 sticky bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <Link href="/">
              <span className="font-bold text-blue-600 text-2xl cursor-pointer">CarBuy</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/cars" className="text-gray-700 hover:text-indigo-600">
              Cars
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
            <Link
              href="/signin"
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-white"
            >
              Sign In
            </Link>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center ml-6">
            <div className="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search cars..."
                className="bg-gray-100 px-5 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 h-10 text-sm"
              />
              <button type="submit" className="top-0 right-0 absolute mt-2 mr-3"></button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-700 hover:text-indigo-600"
            ></button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden space-y-1 bg-white shadow-md px-2 pt-2 pb-3">
          <Link href="/cars" className="block hover:bg-gray-100 px-3 py-2 rounded-md text-gray-700">
            Cars
          </Link>
          <Link
            href="/about"
            className="block hover:bg-gray-100 px-3 py-2 rounded-md text-gray-700"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block hover:bg-gray-100 px-3 py-2 rounded-md text-gray-700"
          >
            Contact
          </Link>
          <Link
            href="/signin"
            className="block bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md text-white"
          >
            Sign In
          </Link>
          <div className="mt-2 px-3">
            <input
              type="search"
              placeholder="Search cars..."
              className="bg-gray-100 px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full text-sm"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
