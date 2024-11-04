// src/pages/ContactUs.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import contactBanner from '../assets/contact-banner.jpg';

const ContactUs = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-gray-100">
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 opacity-80 animate-gradient-slow"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-2">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-fade-in">Contact Us</h1>
                    <p className="text-gray-300 text-base md:text-lg tracking-wider">Home / Contact Us</p>
                </div>
            </div>

            <div className="py-16 px-5 md:px-10 lg:px-24">
                <div className="flex flex-col md:flex-row gap-12 md:gap-16">
                    {/* Contact Form with Enhanced Glassmorphism and 3D Hover */}
                    <div className="md:w-1/2 bg-opacity-30 bg-gray-800 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 transition-transform transform hover:scale-105 hover:shadow-3xl hover:shadow-purple-500/50">
                        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-3">
                            <i className="fas fa-envelope text-indigo-400 animate-pulse"></i>
                            <span>Get in Touch</span>
                        </h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-gray-700 bg-opacity-60 text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-400"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 bg-gray-700 bg-opacity-60 text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-400"
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-3 bg-gray-700 bg-opacity-60 text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-400"
                                required
                            />
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full px-4 py-3 bg-gray-700 bg-opacity-60 text-white border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-400"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Details with Glassmorphism and Animated Icons */}
                    <div className="md:w-1/2 bg-opacity-30 bg-gray-800 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 transition-transform transform hover:scale-105 hover:shadow-3xl hover:shadow-indigo-500/50">
                        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-3">
                            <i className="fas fa-info-circle text-indigo-400 animate-pulse"></i>
                            <span>Contact Information</span>
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Feel free to reach out with any questions or inquiries. We’re here to help!
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-phone-alt text-indigo-400 text-lg"></i>
                                <span className="text-gray-200">+92 (020)-9850</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-envelope text-indigo-400 text-lg"></i>
                                <span className="text-gray-200">support@company.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-map-marker-alt text-indigo-400 text-lg"></i>
                                <span className="text-gray-200">1234 Elm St, Anytown, USA</span>
                            </div>
                        </div>

                        {/* Social Media Icons with Scale and Glowing Hover Effect */}
                        <div className="mt-8">
                            <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/50" title="WhatsApp">
                                    <i className="fab fa-whatsapp fa-2x"></i>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50" title="Facebook">
                                    <i className="fab fa-facebook fa-2x"></i>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/50" title="YouTube">
                                    <i className="fab fa-youtube fa-2x"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50" title="Instagram">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section with Custom Overlay and Dark Mode Adjustments */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-gray-100 text-center mb-6">Our Location</h3>
                    <div className="relative w-full h-64 md:h-96 bg-gray-300 rounded-lg shadow-2xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.112733692354!2d-0.1254872842555648!3d50.83770297953186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4ef0cf7c7b7a750d!2sGrafton%20Street!5e0!3m2!1sen!2suk!4v1642962937845!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Our Location"
                        ></iframe>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
