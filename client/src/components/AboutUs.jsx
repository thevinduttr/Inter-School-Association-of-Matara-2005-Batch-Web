// src/pages/AboutUs.jsx
import React, { useState } from 'react';
import { FaRegSmileBeam, FaLaptopCode, FaPeopleCarry, FaBullhorn, FaFacebook, FaWhatsapp, FaInstagram, FaTimes } from 'react-icons/fa';
import contactBanner from '../assets/contact-banner.jpg';
import teamImage1 from '../assets/member1.jpg';
import teamImage2 from '../assets/member2.jpg';
import teamImage3 from '../assets/member3.jpg';
import teamImage4 from '../assets/member4.jpg';
import workImage from '../assets/member4.jpg';

const teamMembers = [
    {
        id: 1,
        name: "John Doe",
        position: "President",
        image: teamImage1,
        description: "John has over 20 years of experience in leadership and is committed to steering the team towards success.",
        facebook: "https://facebook.com",
        whatsapp: "https://wa.me/123456789",
        instagram: "https://instagram.com",
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Vice President",
        image: teamImage2,
        description: "Jane excels in operational strategy, ensuring that every project is executed smoothly and efficiently.",
        facebook: "https://facebook.com",
        whatsapp: "https://wa.me/123456789",
        instagram: "https://instagram.com",
    },
    {
        id: 3,
        name: "Mark Lee",
        position: "Treasurer",
        image: teamImage3,
        description: "With a keen eye for detail, Mark oversees the financial aspects of our projects, ensuring budget alignment and sustainability.",
        facebook: "https://facebook.com",
        whatsapp: "https://wa.me/123456789",
        instagram: "https://instagram.com",
    },
    {
        id: 4,
        name: "Sara Johnson",
        position: "Secretary",
        image: teamImage4,
        description: "Sara ensures seamless communication within the team and with our clients, maintaining a structured workflow.",
        facebook: "https://facebook.com",
        whatsapp: "https://wa.me/123456789",
        instagram: "https://instagram.com",
    },
];

const AboutUs = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const openModal = (member) => setSelectedMember(member);
    const closeModal = () => setSelectedMember(null);

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-gray-100">
            {/* Hero Section */}
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 opacity-80"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-2">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">About Us</h1>
                    <p className="text-gray-300 text-base md:text-lg tracking-wider">Home / About Us</p>
                </div>
            </div>

            {/* Who We Are Section */}
            <section className="text-center mb-16 mt-16">
                <h2 className="text-4xl font-semibold text-purple-500 mb-6">Who We Are</h2>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    We are a team of dedicated professionals with a passion for technology and innovation. Our mission is
                    to provide solutions that empower businesses and drive growth. With expertise across a range of
                    industries, we work closely with our clients to ensure their success.
                </p>
            </section>

            {/* What We Do Section */}
            <section className="mb-16">
                <h2 className="text-4xl font-semibold text-center text-indigo-500 mb-6">What We Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="bg-gray-800 rounded-2xl p-6 transition-transform hover:scale-105 shadow-lg">
                        <FaLaptopCode className="text-purple-400 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-white">Development</h3>
                        <p className="text-gray-300">
                            We provide cutting-edge software development solutions to address complex business needs.
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-6 transition-transform hover:scale-105 shadow-lg">
                        <FaPeopleCarry className="text-indigo-400 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-white">Consulting</h3>
                        <p className="text-gray-300">
                            Our consulting services ensure that your organization can overcome any challenges.
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-6 transition-transform hover:scale-105 shadow-lg">
                        <FaBullhorn className="text-pink-400 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-white">Marketing</h3>
                        <p className="text-gray-300">
                            We create impactful marketing strategies to grow your brand and reach a wider audience.
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-6 transition-transform hover:scale-105 shadow-lg">
                        <FaRegSmileBeam className="text-green-400 text-5xl mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-white">Support</h3>
                        <p className="text-gray-300">
                            Our team provides dedicated support to ensure seamless service for our clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="text-center mb-16">
                <h2 className="text-4xl font-semibold text-pink-500 mb-6">Benefits</h2>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                    We believe in providing our clients with tangible value. Our team focuses on quality, reliability, and
                    innovation to ensure the best results.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
                        <h3 className="text-2xl font-bold text-white mb-2">High Quality</h3>
                        <p className="text-gray-300">We deliver products and services of unmatched quality.</p>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
                        <h3 className="text-2xl font-bold text-white mb-2">Customer Support</h3>
                        <p className="text-gray-300">Round-the-clock support for our clients.</p>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
                        <h3 className="text-2xl font-bold text-white mb-2">Innovation</h3>
                        <p className="text-gray-300">We are committed to pioneering solutions that push boundaries.</p>
                    </div>
                </div>
            </section>

            {/* Our Work Section */}
            <section className="text-center mb-16">
                <h2 className="text-4xl font-semibold text-green-500 mb-6">Our Work</h2>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Our projects have empowered organizations worldwide to excel. We are committed to excellence in every
                    step, ensuring high-quality results for all our clients.
                </p>
                <div className="mt-8">
                    <img
                        src={workImage}
                        alt="Our Work"
                        className="w-full h-64 object-cover rounded-2xl shadow-lg transition-transform hover:scale-105"
                    />
                </div>
            </section>

            {/* Our Team Section */}
            <section className="text-center mb-16">
                <h2 className="text-4xl font-semibold text-yellow-500 mb-10">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            onClick={() => openModal(member)}
                            className="bg-gray-800 rounded-2xl p-6 shadow-lg transition-transform hover:scale-105 cursor-pointer"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-gray-400">{member.position}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal for Team Member Details */}
            {selectedMember && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                    <div className="bg-gray-900 rounded-2xl p-8 w-11/12 sm:w-96 relative">
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                            onClick={closeModal}
                        >
                            <FaTimes />
                        </button>
                        <div className="text-center">
                            <img
                                src={selectedMember.image}
                                alt={selectedMember.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h3>
                            <p className="text-gray-400 text-lg mb-2">{selectedMember.position}</p>
                            <p className="text-gray-300 mb-6">{selectedMember.description}</p>
                            <div className="flex justify-center space-x-6 text-gray-400">
                                <a href={selectedMember.facebook} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-2xl hover:text-blue-500" />
                                </a>
                                <a href={selectedMember.whatsapp} target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp className="text-2xl hover:text-green-500" />
                                </a>
                                <a href={selectedMember.instagram} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-2xl hover:text-pink-500" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutUs;
