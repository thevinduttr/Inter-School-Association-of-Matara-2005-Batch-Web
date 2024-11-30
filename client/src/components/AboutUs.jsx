// src/pages/AboutUs.jsx
import React, { useState } from 'react';
import { FaRegSmileBeam, FaLaptopCode, FaPeopleCarry, FaBullhorn, FaFacebook, FaWhatsapp, FaInstagram, FaTimes } from 'react-icons/fa';
import contactBanner from '../assets/contact-banner.jpg';
import teamImage1 from '../assets/team6.jpg';
import teamImage2 from '../assets/team2.jpg';
import teamImage3 from '../assets/team4.jpg';
import teamImage4 from '../assets/team1.jpg';
import teamImage5 from '../assets/team3.jpg';
import teamImage6 from '../assets//team5.jpg';
import workImage from '../assets/team5.jpg';
import img1 from "../assets/logo.jpg";

const teamMembers = [
    {
        id: 1,
        name: "Ravindu Priyanath Runage ",
        position: "President",
        image: teamImage1,
        description: "Managing Director – Rathna Producers Cinnamon Exports (Pvt) Ltd ",
    },
    {
        id: 2,
        name: "Priyankara Sureka ",
        position: "Vice President",
        image: teamImage2,
        description: "Director – Heyleys Agriculture Holdings Ltd.  ",
        
    },
    {
        id: 3,
        name: "Dhanushka Namal ",
        position: "Treasurer",
        image: teamImage3,
        description: "Marketing Executive – Sri Lanka Insurance ",
       
    },
    {
        id: 4,
        name: "Chathuri Alawatta ",
        position: "Secretary",
        image: teamImage4,
        description: "Accountant – Manamperi Hardware Stores  ",
       
    },
    {
        id: 5,
        name: "Hasika Vithanage  ",
        position: "Vice Secretary",
        image: teamImage5,
        description: "St. Marys Convent - Matara",
       
    },
    {
        id: 6,
        name: "Gishan Sri Lankeshwara ",
        position: "Chief Organizer ",
        image: teamImage6,
        description: "Owner – GISH Master of Jewelers  ",
       
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
                    <img className="w-[400px] h-[380px] mx-auto lg:mx-0 lg:w-[450px] lg:h-[350px] rounded-lg shadow-lg" src={img1} alt="Logo" />
                    <p className="max-w-4xl mx-auto mt-6 mb-5 text-lg leading-relaxed text-gray-700 lg:mt-0">
                    The Inter School Association, founded in November 2023, is a collective initiative bringing 
                    together seven prestigious schools under a shared mission of promoting well-being and 
                    fostering collaboration. This unique organization is led and conducted by the dedicated past 
                    pupils of these institutions, who strive to give back to their alma maters and communities 
                    through impactful initiatives.  
                    <br  />
                    The association is built on the principles of unity, mutual respect, and a commitment to 
                    creating opportunities for personal and academic growth. By leveraging the collective 
                    influence and resources of its members, the Inter School Association actively champions 
                    educational causes. Its primary focus is to address the diverse needs of students, enhance 
                    their learning environments, and support their holistic development.  
                    <br />
                    The Inter School Association serves as a platform for innovation and progress, encouraging 
                    cooperation among schools to tackle common challenges and celebrate shared successes. 
                    With a strong emphasis on teamwork and community service, it seeks to inspire a culture of 
                    giving and development that benefits not only the member schools but also the wider 
                    community. 
                    <br />
                    Through its vision and purpose, the Inter School Association aspires to become a model for 
                    collaborative efforts in education, leaving a lasting legacy of positive change. 
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
                            {/* <div className="flex justify-center space-x-6 text-gray-400">
                                <a href={selectedMember.facebook} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-2xl hover:text-blue-500" />
                                </a>
                                <a href={selectedMember.whatsapp} target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp className="text-2xl hover:text-green-500" />
                                </a>
                                <a href={selectedMember.instagram} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-2xl hover:text-pink-500" />
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutUs;
