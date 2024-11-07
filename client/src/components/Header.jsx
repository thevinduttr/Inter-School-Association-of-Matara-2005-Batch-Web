// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo.jpg";
import qrCode from "../assets/qr.webp"; // Ensure you have a QR code image saved in your assets

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <header className="bg-white border-b border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-800">
                <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={logo} className="rounded-full w-42 h-14" alt="Logo" />
                        <span className="text-xl font-bold text-gray-800 dark:text-white">Inter School Association - Matara 2005 Batch</span>
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden space-x-8 text-lg font-medium md:flex">
                        <Link to="/" className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
                        <Link to="/gallery" className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">Gallery</Link>
                        <Link to="/projects" className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">Projects</Link>
                        <Link to="/about" className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">About Us</Link>
                        <Link to="/contact" className="text-gray-800 transition duration-200 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">Contact</Link>
                    </nav>

                    {/* Bank Details Button */}
                    <button
                        onClick={toggleModal}
                        className="hidden px-4 py-2 font-semibold text-white transition duration-300 rounded-lg shadow-md md:inline-block bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                    >
                        Bank Details
                    </button>

                    {/* Mobile Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className="text-gray-500 md:hidden dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                    >
                        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="bg-white border-t border-gray-200 shadow-lg md:hidden dark:bg-gray-900 dark:border-gray-800">
                        <nav className="flex flex-col p-4 space-y-4 text-lg font-medium">
                            <Link to="/" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" onClick={toggleMenu}>Home</Link>
                            <Link to="/gallery" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" onClick={toggleMenu}>Gallery</Link>
                            <Link to="/projects" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" onClick={toggleMenu}>Projects</Link>
                            <Link to="/about" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" onClick={toggleMenu}>About Us</Link>
                            <Link to="/contact" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" onClick={toggleMenu}>Contact</Link>
                            <button onClick={toggleModal} className="px-4 py-2 mt-2 font-semibold text-center text-white transition duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">Bank Details</button>
                        </nav>
                    </div>
                )}
            </header>

            {/* Bank Details Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-700">
                        <button onClick={toggleModal} className="absolute top-4 right-4 text-gray-500 hover:text-black dark:text-gray-400">
                            ✕
                        </button>
                        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 dark:text-white">Bank Details</h2>
                        <p className="text-center text-gray-600 dark:text-gray-300">Scan the QR code below or use the bank details to make a payment.</p>
                        
                        {/* Bank Information */}
                        <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-200">
                            <div className="flex justify-between">
                                <span className="font-medium">Account Name:</span>
                                <span>Inter School Society - Batch 2005</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Bank Name:</span>
                                <span>Sampath Bank</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Branch:</span>
                                <span>Matara Super Branch</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Account Number:</span>
                                <span>1010 6100 6532</span>
                            </div>
                        </div>

                        {/* QR Code */}
                        <div className="flex justify-center mt-6">
                            <img src={qrCode} alt="QR Code" className="w-40 h-40 rounded-lg shadow-md bg-slate-50" />
                        </div>

                        <div className="mt-6 text-center">
                            <button onClick={toggleModal} className="px-6 py-2 font-semibold text-white transition bg-red-500 rounded-lg hover:bg-red-700">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
