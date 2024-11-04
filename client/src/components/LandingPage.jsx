// src/pages/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaCalendarAlt, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';
import heroBackground from '../assets/hero-background.jpg';
import eventImage from '../assets/event-preview.jpg';
import testimonialImage from '../assets/testimonial.jpg';
import galleryPreviewImage from '../assets/gallery-preview.jpg';

const LandingPage = () => {
    const calculateCountdown = () => {
        const eventDate = new Date('2024-12-31');
        const now = new Date();
        const timeLeft = eventDate - now;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);
        return { days, hours, minutes, seconds };
    };

    const [countdown, setCountdown] = useState(calculateCountdown());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(calculateCountdown());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 min-h-screen">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBackground})` }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative z-10 max-w-2xl px-6">
                    <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg animate-fade-in">
                        Welcome to the Inter-School Association
                    </h1>
                    <p className="text-lg text-gray-300 mb-8">
                        Uniting students and educators from various schools to foster collaboration, learning, and excellence.
                    </p>
                    <Link
                        to="/about"
                        className="px-8 py-4 text-lg font-semibold bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
                    >
                        Join the Association
                    </Link>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-800">
                <motion.div
                    className="max-w-5xl mx-auto text-center grid grid-cols-2 md:grid-cols-4 gap-8 text-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                        hidden: { opacity: 0 }
                    }}
                >
                    {[{ label: "Growth Rate", value: "300%" }, { label: "Venues", value: "200+" }, { label: "Years", value: "2+" }, { label: "Users", value: "20,000+" }].map((stat, index) => (
                        <motion.div key={index} variants={fadeIn}>
                            <h3 className="text-4xl font-bold text-blue-400">{stat.value}</h3>
                            <p className="text-gray-300 mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Countdown Section */}
            <motion.section
                className="py-16 px-6 text-center bg-gray-900"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-purple-500 mb-6">Countdown to Next Big Event</h2>
                    <div className="flex justify-center space-x-8 text-white text-2xl font-semibold">
                        {Object.keys(countdown).map((unit, index) => (
                            <div key={index} className="text-center">
                                <p>{countdown[unit]}</p>
                                <span className="text-gray-400">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* About Section */}
            <section className="py-16 px-6">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-4xl font-bold text-purple-500 mb-6">About Us</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        The Inter-School Association is dedicated to fostering relationships between schools through joint events, academic collaborations, and sports tournaments. Our mission is to create opportunities for students and educators alike to collaborate, learn, and grow.
                    </p>
                    <Link
                        to="/about"
                        className="mt-6 inline-block px-6 py-3 text-lg font-medium text-purple-500 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                        Learn More About Us
                    </Link>
                </motion.div>
            </section>

            {/* Upcoming Events Section */}
            <section className="py-16 bg-gray-800 px-6">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-4xl font-bold text-white mb-10">Upcoming Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                        {[{ title: "Annual Science Fair", description: "Join us for the Annual Science Fair, where students showcase their innovative projects." },
                          { title: "Inter-School Debate", description: "Participate in our annual debate competition and engage in thought-provoking discussions." }]
                            .map((event, index) => (
                                <motion.div key={index} className="p-6 bg-gray-900 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
                                    <img
                                        src={eventImage}
                                        alt="Event Preview"
                                        className="rounded-lg mb-4 w-full h-56 object-cover"
                                    />
                                    <h3 className="text-2xl font-semibold text-purple-500 mb-2">{event.title}</h3>
                                    <p className="text-gray-300 mb-4">{event.description}</p>
                                    <Link
                                        to="/events"
                                        className="text-purple-400 hover:text-purple-500 transition duration-300"
                                    >
                                        Learn More
                                    </Link>
                                </motion.div>
                        ))}
                    </div>
                    <Link
                        to="/events"
                        className="mt-8 inline-block text-lg font-medium text-purple-500 hover:text-purple-400 transition duration-300"
                    >
                        View All Events
                    </Link>
                </motion.div>
            </section>

            {/* Gallery Preview Section */}
            <section className="py-16 px-6">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-4xl font-bold text-purple-500 mb-6">Gallery Preview</h2>
                    <p className="text-lg text-gray-300 mb-10">
                        Get a glimpse of our latest work. Dive into our full gallery to experience the complete collection.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/gallery" className="group">
                            <motion.img
                                src={galleryPreviewImage}
                                alt="Gallery Preview"
                                className="rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
                            />
                            <p className="mt-4 text-lg text-purple-500 group-hover:text-purple-400 transition duration-300">
                                View Full Gallery
                            </p>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-purple-700 px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-white mb-6"
                >
                    Become a Member
                </motion.h2>
                <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
                    Join the Inter-School Association to access exclusive resources, participate in events, and connect with peers from other schools. Together, we can make a difference.
                </p>
                <Link
                    to="/membership"
                    className="px-8 py-4 text-lg font-semibold bg-white text-purple-700 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
                >
                    Join Us Now
                </Link>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 py-10">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-semibold text-purple-500 mb-4">Connect with Us</h3>
                    <p className="text-gray-300 mb-6">
                        Follow us on social media to stay updated with our latest events and news.
                    </p>
                    <div className="flex justify-center space-x-6 mb-6">
                        {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, index) => (
                            <motion.a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                className="text-gray-400 hover:text-blue-500 transition duration-300 text-2xl"
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm">&copy; 2024 Inter-School Association. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
