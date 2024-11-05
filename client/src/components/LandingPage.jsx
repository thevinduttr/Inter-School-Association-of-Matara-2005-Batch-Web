// src/pages/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaCalendarAlt, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';
import heroBackground from '../assets/hero-background.jpg';
import eventImage from '../assets/event-preview.jpg';
import testimonialImage from '../assets/testimonial.jpg';
import galleryPreviewImage from '../assets/gallery-preview.jpg';
import img1 from "../assets/logo.jpg"


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
        <div className="min-h-screen text-gray-100 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative flex flex-col items-center justify-center h-screen text-center bg-center bg-cover"
                style={{ backgroundImage: `url(${heroBackground})` }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative z-10 max-w-2xl px-6">
                    <h1 className="mb-4 text-5xl font-extrabold text-white drop-shadow-lg animate-fade-in">
                        Welcome to the Inter-School Association
                    </h1>
                    <p className="mb-8 text-lg text-gray-300">
                        Uniting students and educators from various schools to foster collaboration, learning, and excellence.
                    </p>
                    <Link
                        to="/about"
                        className="px-8 py-4 text-lg font-semibold text-white transition duration-300 bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700"
                    >
                        Join the Association
                    </Link>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-800">
                <motion.div
                    className="grid max-w-5xl grid-cols-2 gap-8 mx-auto text-center text-white md:grid-cols-4"
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
                            <p className="mt-2 text-gray-300">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Countdown Section */}
            <motion.section
                className="px-6 py-16 text-center bg-gray-900"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="mb-6 text-4xl font-bold text-purple-500">Countdown to Next Big Event</h2>
                    <div className="flex justify-center space-x-8 text-2xl font-semibold text-white">
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
            <section className="px-6 py-16">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="mb-6 text-4xl font-bold text-purple-500">About Us</h2>
                    <div className="flex items-center ">
                        <img className="w-[350px] h-[320px] mx-auto" src={img1} alt="" />
                    </div>
                
                    <br />
                    <p className="text-lg leading-relaxed text-gray-300">
                    shared goal: to strengthen connections, support their former schools, and uphold the values of 
                    their education.
                    <br /> 
                    The association’s primary objective is to build a supportive network for professional growth, 
                    mentorship, and the exchange of knowledge among its members. This community fosters 
                    collaboration and career guidance, enriching members’ personal and professional lives. 
                    </p>
                    <Link
                        to="/about"
                        className="inline-block px-6 py-3 mt-6 text-lg font-medium text-purple-500 transition duration-300 bg-gray-800 rounded-lg hover:bg-gray-700"
                    >
                        Learn More About Us
                    </Link>
                </motion.div>
            </section>

            {/* Upcoming Events Section */}
            <section className="px-6 py-16 bg-gray-800">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="mb-10 text-4xl font-bold text-white">Upcoming Events</h2>
                    <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2">
                        {[{ title: "Annual Science Fair", description: "Join us for the Annual Science Fair, where students showcase their innovative projects." },
                          { title: "Inter-School Debate", description: "Participate in our annual debate competition and engage in thought-provoking discussions." }]
                            .map((event, index) => (
                                <motion.div key={index} className="p-6 bg-gray-900 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
                                    <img
                                        src={eventImage}
                                        alt="Event Preview"
                                        className="object-cover w-full h-56 mb-4 rounded-lg"
                                    />
                                    <h3 className="mb-2 text-2xl font-semibold text-purple-500">{event.title}</h3>
                                    <p className="mb-4 text-gray-300">{event.description}</p>
                                    <Link
                                        to="/events"
                                        className="text-purple-400 transition duration-300 hover:text-purple-500"
                                    >
                                        Learn More
                                    </Link>
                                </motion.div>
                        ))}
                    </div>
                    <Link
                        to="/events"
                        className="inline-block mt-8 text-lg font-medium text-purple-500 transition duration-300 hover:text-purple-400"
                    >
                        View All Events
                    </Link>
                </motion.div>
            </section>

            {/* Gallery Preview Section */}
            <section className="px-6 py-16">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="mb-6 text-4xl font-bold text-purple-500">Gallery Preview</h2>
                    <p className="mb-10 text-lg text-gray-300">
                        Get a glimpse of our latest work. Dive into our full gallery to experience the complete collection.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/gallery" className="group">
                            <motion.img
                                src={galleryPreviewImage}
                                alt="Gallery Preview"
                                className="transition-transform duration-300 transform rounded-lg shadow-lg group-hover:scale-105"
                            />
                            <p className="mt-4 text-lg text-purple-500 transition duration-300 group-hover:text-purple-400">
                                View Full Gallery
                            </p>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Call to Action */}
            <section className="px-6 py-16 text-center bg-purple-700">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 text-4xl font-bold text-white"
                >
                    Become a Member
                </motion.h2>
                <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-200">
                    Join the Inter-School Association to access exclusive resources, participate in events, and connect with peers from other schools. Together, we can make a difference.
                </p>
                <Link
                    to="/membership"
                    className="px-8 py-4 text-lg font-semibold text-purple-700 transition duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-200"
                >
                    Join Us Now
                </Link>
            </section>

            {/* Footer Section */}
            
        </div>
    );
};

export default LandingPage;
