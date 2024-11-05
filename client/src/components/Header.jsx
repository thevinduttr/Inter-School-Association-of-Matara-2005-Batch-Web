// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    <img src="/path/to/logo.svg" className="h-10 w-10 rounded-full" alt="Logo" />
                    <span className="text-2xl font-bold text-gray-800 dark:text-white">MyApp</span>
                </Link>

                {/* Desktop Links */}
                <nav className="hidden md:flex space-x-8 text-lg font-medium">
                    <Link
                        to="/"
                        className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/gallery"
                        className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
                    >
                        Gallery
                    </Link>
                    <Link
                        to="/projects"
                        className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/about"
                        className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Get Started Button */}
                <Link
                    to="/get-started"
                    className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition duration-300"
                >
                    Get Started
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
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
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg">
                    <nav className="flex flex-col p-4 space-y-4 text-lg font-medium">
                        <Link
                            to="/"
                            className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/gallery"
                            className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
                            onClick={toggleMenu}
                        >
                            Gallery
                        </Link>
                        <Link
                            to="/projects"
                            className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
                            onClick={toggleMenu}
                        >
                            Projects
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
                            onClick={toggleMenu}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/get-started"
                            className="text-center mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition duration-300"
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
