// src/pages/AboutUs.jsx
import React, { useState } from 'react';
import { FaRegSmileBeam, FaLaptopCode, FaPeopleCarry, FaBullhorn, FaFacebook, FaWhatsapp, FaInstagram, FaTimes } from 'react-icons/fa';
import contactBanner from '../assets/contact-banner.jpg';
import teamImage1 from '../assets/member1.jpg';
import teamImage2 from '../assets/member2.jpg';
import teamImage3 from '../assets/member3.jpg';
import teamImage4 from '../assets/member4.jpg';
import workImage from '../assets/member4.jpg';
import img1 from "../assets/logo.jpg"

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
        <div className="min-h-screen text-gray-100 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-900 opacity-80"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-2 text-center">
                    <h1 className="text-5xl font-extrabold text-white md:text-6xl drop-shadow-lg">About Us</h1>
                    <p className="text-base tracking-wider text-gray-300 md:text-lg">Home / About Us</p>
                </div>
            </div>

            {/* Who We Are Section */}
            <section className="mt-16 mb-16 text-center">
                <h2 className="mb-6 text-4xl font-semibold text-purple-500">Who We Are</h2>
                <div className="flex flex-col items-center max-w-6xl p-4 mx-auto lg:flex-row lg:items-center lg:space-x-8">
 
                    <img className="w-[450px] h-[420px] mx-auto lg:mx-0 lg:w-[400px] lg:h-[380px]" src={img1} alt="Logo" />

                    
                    <p className="max-w-4xl mx-auto mt-6 text-lg leading-relaxed text-gray-300 lg:mt-0">
                        Shared goal: to strengthen connections, support their former schools, and uphold the values of their education.
                        <br /> 
                        The association’s primary objective is to build a supportive network for professional growth, mentorship, and the exchange of knowledge among its members. This community fosters collaboration and career guidance, enriching members’ personal and professional lives.
                        <br />
                        The association is also dedicated to supporting its schools through financial assistance, infrastructure improvements, and scholarship programs. These initiatives aim to enhance educational quality and maintain a thriving environment for future students.
                        <br /> 
                        Additionally, the association is committed to advocating for educational excellence. By pooling resources and influence, members champion educational initiatives, support teaching excellence, and contribute to the broader education sector's growth. 
                        <br />
                        In essence, the Inter-School Association of Matara City - 2005 Batch is a vibrant network that empowers its members while giving back to the schools that shaped them. Through collaboration, financial aid, and educational advocacy, it aims to make a positive, lasting impact on both its members and their alma maters.
                    </p>
                </div>


                <br />
                <h2 className="mb-6 text-4xl font-semibold text-center text-indigo-500">Our Vision </h2>
            
                <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300">
                "To create a strong community of past students who support each other and give back to 
                their schools, helping future generations succeed."
                </p>
                <br />

                <h2 className="mb-6 text-4xl font-semibold text-center text-indigo-500">Our  Mission  </h2>
             
                <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300">
               
                    "To connect alumni and offer support through mentorship, career guidance, and 
                    networking. We aim to give back to our schools with financial help, improved facilities, and 
                    scholarships, ensuring they remain great places for learning."
                </p>
            </section>

            {/* What We Do Section */}
            <section className="mb-16">
                <h2 className="mb-6 text-4xl font-semibold text-center text-indigo-500">What We Do</h2>
                <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 transition-transform bg-gray-800 shadow-lg rounded-2xl hover:scale-105">
                        <FaLaptopCode className="mx-auto mb-4 text-5xl text-purple-400" />
                        <h3 className="mb-2 text-xl font-bold text-white">Development</h3>
                        <p className="text-gray-300">
                            We provide cutting-edge software development solutions to address complex business needs.
                        </p>
                    </div>
                    <div className="p-6 transition-transform bg-gray-800 shadow-lg rounded-2xl hover:scale-105">
                        <FaPeopleCarry className="mx-auto mb-4 text-5xl text-indigo-400" />
                        <h3 className="mb-2 text-xl font-bold text-white">Consulting</h3>
                        <p className="text-gray-300">
                            Our consulting services ensure that your organization can overcome any challenges.
                        </p>
                    </div>
                    <div className="p-6 transition-transform bg-gray-800 shadow-lg rounded-2xl hover:scale-105">
                        <FaBullhorn className="mx-auto mb-4 text-5xl text-pink-400" />
                        <h3 className="mb-2 text-xl font-bold text-white">Marketing</h3>
                        <p className="text-gray-300">
                            We create impactful marketing strategies to grow your brand and reach a wider audience.
                        </p>
                    </div>
                    <div className="p-6 transition-transform bg-gray-800 shadow-lg rounded-2xl hover:scale-105">
                        <FaRegSmileBeam className="mx-auto mb-4 text-5xl text-green-400" />
                        <h3 className="mb-2 text-xl font-bold text-white">Support</h3>
                        <p className="text-gray-300">
                            Our team provides dedicated support to ensure seamless service for our clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-semibold text-pink-500">Benefits</h2>
                <p className="max-w-4xl mx-auto mb-8 text-lg leading-relaxed text-gray-300">
                    We believe in providing our clients with tangible value. Our team focuses on quality, reliability, and
                    innovation to ensure the best results.
                </p>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-6 bg-gray-800 shadow-lg rounded-2xl">
                        <h3 className="mb-2 text-2xl font-bold text-white">High Quality</h3>
                        <p className="text-gray-300">We deliver products and services of unmatched quality.</p>
                    </div>
                    <div className="p-6 bg-gray-800 shadow-lg rounded-2xl">
                        <h3 className="mb-2 text-2xl font-bold text-white">Customer Support</h3>
                        <p className="text-gray-300">Round-the-clock support for our clients.</p>
                    </div>
                    <div className="p-6 bg-gray-800 shadow-lg rounded-2xl">
                        <h3 className="mb-2 text-2xl font-bold text-white">Innovation</h3>
                        <p className="text-gray-300">We are committed to pioneering solutions that push boundaries.</p>
                    </div>
                </div>
            </section>

            {/* Our Work Section */}
            <section className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-semibold text-green-500">Our Work</h2>
                <p className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300">
                    Our projects have empowered organizations worldwide to excel. We are committed to excellence in every
                    step, ensuring high-quality results for all our clients.
                </p>
                <div className="mt-8">
                    <img
                        src={workImage}
                        alt="Our Work"
                        className="object-cover w-full h-64 transition-transform shadow-lg rounded-2xl hover:scale-105"
                    />
                </div>
            </section>

            {/* Our Team Section */}
            <section className="mb-16 text-center">
                <h2 className="mb-10 text-4xl font-semibold text-yellow-500">Our Team</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            onClick={() => openModal(member)}
                            className="p-6 transition-transform bg-gray-800 shadow-lg cursor-pointer rounded-2xl hover:scale-105"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
                            />
                            <h3 className="mb-1 text-xl font-bold text-white">{member.name}</h3>
                            <p className="text-gray-400">{member.position}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal for Team Member Details */}
            {selectedMember && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="relative w-11/12 p-8 bg-gray-900 rounded-2xl sm:w-96">
                        <button
                            className="absolute text-2xl text-gray-400 top-4 right-4 hover:text-white"
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
                            <h3 className="mb-2 text-3xl font-bold text-white">{selectedMember.name}</h3>
                            <p className="mb-2 text-lg text-gray-400">{selectedMember.position}</p>
                            <p className="mb-6 text-gray-300">{selectedMember.description}</p>
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
