// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo.jpg"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white border-b border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-800">
            <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    <img src={logo} className="rounded-full w-42 h-14" alt="Logo" />
                    <span className="text-xl font-bold text-gray-800 dark:text-white">Inter School Association - Matara 2005 Batch</span>
                </Link>

                {/* Desktop Links */}
                <nav className="hidden space-x-8 text-lg font-medium md:flex">
                    <Link
                        to="/"
                        className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Home
                    </Link>
                    <Link
                        to="/gallery"
                        className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Gallery
                    </Link>
                    <Link
                        to="/projects"
                        className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/about"
                        className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Get Started Button */}
                <Link
                    to="/get-started"
                    className="hidden px-4 py-2 font-semibold text-white transition duration-300 rounded-lg shadow-md md:inline-block bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                >
                    Get Started
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    onClick={toggleMenu}
                    className="text-gray-500 md:hidden dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                >
                    {isOpen ? (
                        <FaTimes className="w-6 h-6" />
                    ) : (
                        <FaBars className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="bg-white border-t border-gray-200 shadow-lg md:hidden dark:bg-gray-900 dark:border-gray-800">
                    <nav className="flex flex-col p-4 space-y-4 text-lg font-medium">
                        <Link
                            to="/"
                            className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/gallery"
                            className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                            onClick={toggleMenu}
                        >
                            Gallery
                        </Link>
                        <Link
                            to="/projects"
                            className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                            onClick={toggleMenu}
                        >
                            Projects
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                            onClick={toggleMenu}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/get-started"
                            className="px-4 py-2 mt-2 font-semibold text-center text-white transition duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                            onClick={toggleMenu}
                        >
                            Get Started
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
