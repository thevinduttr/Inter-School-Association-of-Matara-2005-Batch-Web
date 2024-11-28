// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import contactBanner from '../assets/contact-banner.jpg';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/contact/send-email', formData);
            setStatusMessage('Message sent successfully');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatusMessage('Failed to send message');
        }
    };

    return (
        <div className="min-h-screen text-gray-800 bg-gradient-to-br from-gray-100 via-white to-gray-50">
            {/* Hero Section with Light Gradient Overlay */}
            <div className="relative overflow-hidden h-72 md:h-96">
                <div
                    className="absolute inset-0 transition-transform duration-500 ease-out transform scale-110"
                    style={{
                        backgroundImage: `url(${contactBanner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(10px)',
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-indigo-200 to-blue-200 opacity-80"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-2 text-center">
                    <h1 className="text-5xl font-extrabold text-gray-800 md:text-6xl drop-shadow-lg">Contact Us</h1>
                    <p className="text-base tracking-wider text-gray-600 md:text-lg">Home / Contact Us</p>
                </div>
            </div>

            <div className="px-5 py-16 md:px-10 lg:px-24">
                <div className="flex flex-col gap-12 md:flex-row md:gap-16">
                    {/* Contact Form */}
                    <div className="p-10 transition-transform transform bg-white border shadow-lg md:w-1/2 bg-opacity-40 backdrop-blur-lg rounded-3xl border-gradient-to-br from-purple-300 via-indigo-300 to-blue-300 hover:scale-105 hover:shadow-xl">
                        <h3 className="flex items-center mb-6 space-x-3 text-2xl font-semibold text-gray-800">
                            <i className="text-indigo-500 fas fa-envelope animate-pulse"></i>
                            <span>Get in Touch</span>
                        </h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 transition-all duration-300 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 transition-all duration-300 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 transition-all duration-300 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 transition-all duration-300 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-3 font-semibold text-white transition-all duration-300 transform shadow-md bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 rounded-xl hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                        {statusMessage && (
                            <p className="mt-4 text-center text-green-500">{statusMessage}</p>
                        )}
                    </div>

                    {/* Contact Details */}
                    <div className="p-10 transition-transform transform bg-white border shadow-lg md:w-1/2 bg-opacity-40 backdrop-blur-lg rounded-3xl border-gradient-to-br from-purple-300 via-indigo-300 to-blue-300 hover:scale-105 hover:shadow-xl">
                        <h3 className="flex items-center mb-6 space-x-3 text-2xl font-semibold text-gray-800">
                            <i className="text-indigo-500 fas fa-info-circle animate-pulse"></i>
                            <span>Contact Information</span>
                        </h3>
                        <p className="mb-6 text-gray-700">
                            Feel free to reach out with any questions or inquiries. We’re here to help!
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <i className="text-lg text-indigo-500 fas fa-phone-alt"></i>
                                <span className="text-gray-800">+94 779019696 </span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="text-lg text-indigo-500 fas fa-envelope"></i>
                                <span className="text-gray-800">isamc2005b@gmail.com </span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="text-lg text-indigo-500 fas fa-map-marker-alt"></i>
                                <span className="text-gray-800">Matara , Sri Lanka</span>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="mt-8">
                            <h4 className="mb-4 text-xl font-semibold text-gray-800">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="text-green-500 transition duration-300 transform hover:text-green-600 hover:scale-110" title="WhatsApp">
                                    <i className="fab fa-whatsapp fa-2x"></i>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61554034890178" target="_blank" rel="noopener noreferrer" className="text-blue-500 transition duration-300 transform hover:text-blue-600 hover:scale-110" title="Facebook">
                                    <i className="fab fa-facebook fa-2x"></i>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-500 transition duration-300 transform hover:text-red-600 hover:scale-110" title="YouTube">
                                    <i className="fab fa-youtube fa-2x"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 transition duration-300 transform hover:text-pink-600 hover:scale-110" title="Instagram">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <h3 className="mb-6 text-3xl font-bold text-center text-gray-800">Our Location</h3>
                    <div className="relative w-full h-64 overflow-hidden bg-gray-300 rounded-lg shadow-lg md:h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63492.95565772318!2d80.55074799999998!3d5.951992199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae138d151937cd9%3A0x1d711f45897009a3!2sMatara!5e0!3m2!1sen!2slk!4v1730884734146!5m2!1sen!2slk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Our Location"
                        ></iframe>
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-100 to-transparent opacity-80"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
