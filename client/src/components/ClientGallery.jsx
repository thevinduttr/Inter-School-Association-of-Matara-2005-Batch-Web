// src/components/ClientGallery.jsx
import React, { useState, useEffect } from 'react';
import { getAllGalleries } from '../api/galleryApi';
import Modal from 'react-modal';
import { FaChevronLeft, FaChevronRight, FaTimes, FaExpand } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

import contactBanner from '../assets/contact-banner.jpg';

Modal.setAppElement('#root'); // Accessibility setting for react-modal

const ClientGallery = () => {
    const [galleries, setGalleries] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState([]);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        fetchAllGalleries();
    }, []);

    const fetchAllGalleries = async () => {
        try {
            const { data } = await getAllGalleries();
            setGalleries(data);
        } catch (error) {
            console.error("Error fetching galleries:", error);
        }
    };

    const openModal = (galleryImages, index) => {
        setImages(galleryImages);
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImageIndex(0);
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white text-gray-800">
            {/* Hero Section with 3D Parallax and Animated Gradient Overlay */}
            <div className="relative h-72 md:h-96 overflow-hidden">
                <div
                    className="absolute inset-0 transform scale-110 transition-transform duration-500 ease-out"
                    style={{
                        backgroundImage: `url(${contactBanner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(10px)',
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-200 opacity-80"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-2">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 drop-shadow-lg">Gallery</h1>
                    <p className="text-gray-600 text-base md:text-lg tracking-wider">Home / Gallery</p>
                </div>
            </div>

            <main className="flex-grow container mx-auto px-4 py-12">
                {galleries.length > 0 ? (
                    galleries.map((gallery) => (
                        <div key={gallery._id} className="mb-16">
                            <h2 className="text-4xl font-bold text-purple-500 mb-6">{gallery.title}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {gallery.images.map((image, index) => (
                                    <div
                                        key={image._id}
                                        className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group hover:shadow-2xl transition-shadow duration-300"
                                        onClick={() => openModal(gallery.images, index)}
                                    >
                                        <img
                                            src={`http://localhost:5000${image.url}`}
                                            alt={image.title}
                                            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 rounded-lg"
                                        />
                                        <div className="absolute inset-0 bg-gray-50 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <p className="text-gray-800 text-lg font-semibold">{image.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No galleries available.</p>
                )}
            </main>

            {/* Modal for Image Viewing */}
            {isOpen && (
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    contentLabel="Image Modal"
                    className={`${
                        isFullscreen ? 'fixed inset-0 bg-white' : 'bg-gray-100 rounded-lg p-6 w-11/12 max-w-5xl mx-auto mt-20 shadow-2xl'
                    } transition-all duration-300 overflow-hidden`}
                    overlayClassName="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        <FaTimes />
                    </button>
                    <button
                        onClick={toggleFullscreen}
                        className="absolute top-4 right-16 text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        <FaExpand />
                    </button>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={goToPreviousImage}
                            className="text-gray-500 hover:text-gray-700 text-3xl p-2"
                        >
                            <FaChevronLeft />
                        </button>
                        <img
                            src={`http://localhost:5000${images[currentImageIndex].url}`}
                            alt={images[currentImageIndex].title}
                            className="max-w-full h-96 object-contain mx-4 transition-transform duration-300"
                        />
                        <button
                            onClick={goToNextImage}
                            className="text-gray-500 hover:text-gray-700 text-3xl p-2"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                    <p className="text-center mt-4 text-lg font-medium text-gray-700">
                        {images[currentImageIndex].title}
                    </p>

                    {/* Thumbnail Navigation */}
                    <div className="mt-6 flex justify-center space-x-3 overflow-x-auto">
                        {images.map((img, idx) => (
                            <img
                                key={img._id}
                                src={`http://localhost:5000${img.url}`}
                                alt={img.title}
                                className={`w-16 h-16 object-cover rounded cursor-pointer transition-transform duration-200 ${
                                    idx === currentImageIndex ? 'border-2 border-purple-500 scale-110' : 'border border-gray-300'
                                } hover:scale-110`}
                                onClick={() => setCurrentImageIndex(idx)}
                            />
                        ))}
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ClientGallery;
