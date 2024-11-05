// src/pages/AboutUs.jsx
import React, { useState } from 'react';
import { FaRegSmileBeam, FaLaptopCode, FaPeopleCarry, FaBullhorn, FaFacebook, FaWhatsapp, FaInstagram, FaTimes } from 'react-icons/fa';
import contactBanner from '../assets/contact-banner.jpg';
import teamImage1 from '../assets/member1.jpg';
import teamImage2 from '../assets/member2.jpg';
import teamImage3 from '../assets/member3.jpg';
import teamImage4 from '../assets/member4.jpg';
import workImage from '../assets/member4.jpg';
import img1 from "../assets/logo.jpg";

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
        <div className="min-h-screen text-gray-800">
            {/* Hero Section */}
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
                    <h1 className="text-5xl font-extrabold text-gray-800 md:text-6xl drop-shadow-lg">About Us</h1>
                    <p className="text-base tracking-wider text-gray-600 md:text-lg">Home / About Us</p>
                </div>
            </div>

            {/* Who We Are Section */}
            <section className="py-16 text-center bg-white">
                <h2 className="mb-6 text-4xl font-semibold text-purple-600">Who We Are</h2>
                <div className="flex flex-col items-center max-w-6xl p-4 mx-auto lg:flex-row lg:items-center lg:space-x-8">
                    <img className="w-[400px] h-[380px] mx-auto lg:mx-0 lg:w-[350px] lg:h-[350px] rounded-lg shadow-lg" src={img1} alt="Logo" />
                    <p className="max-w-4xl mx-auto mt-6 text-lg leading-relaxed text-gray-700 lg:mt-0">
                        Shared goal: to strengthen connections, support their former schools, and uphold the values of their education.
                        <br />
                        The association’s primary objective is to build a supportive network for professional growth, mentorship, and the exchange of knowledge among its members.
                        This community fosters collaboration and career guidance, enriching members’ personal and professional lives.
                        <br />
                        The association is also dedicated to supporting its schools through financial assistance, infrastructure improvements, and scholarship programs.
                        <br />
                        By pooling resources and influence, members champion educational initiatives, support teaching excellence, and contribute to the broader education sector's growth.
                    </p>
                </div>
            </section>

            {/* Vision and Mission Section */}
            <section className="py-16 bg-gray-100">
                <div className="flex flex-col max-w-6xl px-6 mx-auto lg:flex-row lg:space-x-8">
                    <div className="w-full lg:w-1/2">
                        <h2 className="mb-4 text-4xl font-semibold text-purple-500">Our Vision</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            To create a strong community of past students who support each other and give back to their schools, helping future generations succeed.
                        </p>
                    </div>
                    <div className="w-full mt-8 lg:w-1/2 lg:mt-0">
                        <h2 className="mb-4 text-4xl font-semibold text-indigo-500">Our Mission</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            To connect alumni and offer support through mentorship, career guidance, and networking. We aim to give back to our schools with financial help, improved facilities, and scholarships, ensuring they remain great places for learning.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-16 bg-white">
                <h2 className="mb-6 text-4xl font-semibold text-center text-indigo-500">What We Do</h2>
                <div className="grid max-w-6xl grid-cols-1 gap-8 px-6 mx-auto text-center sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 transition-transform shadow-lg bg-gray-50 rounded-2xl hover:scale-105">
                        <FaLaptopCode className="mx-auto mb-4 text-5xl text-purple-400" />
                        <h3 className="mb-2 text-xl font-bold text-gray-800">Protecting the Environment</h3>
                        <p className="text-gray-600">
                            We provide cutting-edge software development solutions to address complex business needs.
                        </p>
                    </div>
                    <div className="p-6 transition-transform shadow-lg bg-gray-50 rounded-2xl hover:scale-105">
                        <FaPeopleCarry className="mx-auto mb-4 text-5xl text-indigo-400" />
                        <h3 className="mb-2 text-xl font-bold text-gray-800">Promoting Education</h3>
                        <p className="text-gray-600">
                            Our consulting services ensure that your organization can overcome any challenges.
                        </p>
                    </div>
                    <div className="p-6 transition-transform shadow-lg bg-gray-50 rounded-2xl hover:scale-105">
                        <FaBullhorn className="mx-auto mb-4 text-5xl text-pink-400" />
                        <h3 className="mb-2 text-xl font-bold text-gray-800">Funding Research and Innovation</h3>
                        <p className="text-gray-600">
                            We create impactful marketing strategies to grow your brand and reach a wider audience.
                        </p>
                    </div>
                    <div className="p-6 transition-transform shadow-lg bg-gray-50 rounded-2xl hover:scale-105">
                        <FaRegSmileBeam className="mx-auto mb-4 text-5xl text-green-400" />
                        <h3 className="mb-2 text-xl font-bold text-gray-800">Supporting Health and Wellness</h3>
                        <p className="text-gray-600">
                            Our team provides dedicated support to ensure seamless service for our clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-16 text-center bg-gray-100">
                <h2 className="mb-10 text-4xl font-semibold text-yellow-500">Our Team</h2>
                <div className="grid max-w-6xl grid-cols-1 gap-8 px-6 mx-auto sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            onClick={() => openModal(member)}
                            className="p-6 transition-transform bg-white shadow-lg cursor-pointer rounded-2xl hover:scale-105"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
                            />
                            <h3 className="mb-1 text-xl font-bold text-gray-800">{member.name}</h3>
                            <p className="text-gray-500">{member.position}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal for Team Member Details */}
            {selectedMember && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="relative w-11/12 p-8 bg-white shadow-2xl rounded-2xl sm:w-96">
                        <button
                            className="absolute text-2xl text-gray-400 top-4 right-4 hover:text-gray-600"
                            onClick={closeModal}
                        >
                            <FaTimes />
                        </button>
                        <div className="text-center">
                            <img
                                src={selectedMember.image}
                                alt={selectedMember.name}
                                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
                            />
                            <h3 className="mb-2 text-3xl font-bold text-gray-800">{selectedMember.name}</h3>
                            <p className="mb-2 text-lg text-gray-500">{selectedMember.position}</p>
                            <p className="mb-6 text-gray-600">{selectedMember.description}</p>
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
