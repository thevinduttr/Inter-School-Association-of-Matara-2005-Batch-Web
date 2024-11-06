// src/pages/LandingPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSchool, FaUsers, FaCalendarAlt, FaRegClock, FaTimes } from 'react-icons/fa';
import { getProjects } from '../api/projectApi';
import { getAllGalleries } from '../api/galleryApi';
import CountUp from 'react-countup';
import { Slide } from 'react-awesome-reveal';
import Countdown from 'react-countdown';
import Modal from 'react-modal';

// Importing images
import heroImage from '../assets/banner1.jpg';
import visionImage from '../assets/vision.png';
import missionImage from '../assets/misson.png';
import qrCodeImage from '../assets/qr.webp';
import schoolLogo1 from '../assets/central.jpg';
import schoolLogo2 from '../assets/school_logo_02.png';
import schoolLogo3 from '../assets/school_logo_01.png';
import schoolLogo4 from '../assets/sujatha.png';
import schoolLogo5 from '../assets/servatius.jpg';
import schoolLogo6 from '../assets/covent.webp';
import schoolLogo7 from '../assets/girls.jpg';

import img1 from "../assets/img13.jpg"
import img2 from "../assets/img16.jpg"
import img3 from "../assets/img2.jpg"
import img4 from "../assets/img5.jpg"

Modal.setAppElement('#root'); // Accessibility setting for react-modal

const LandingPage = () => {
    const [schools] = useState([
        { id: 3, name: 'Rahula College', logoUrl: schoolLogo3, description: 'Striving for greatness in all fields.', anthemUrl: '/path/to/anthem3.mp3' },
        { id: 2, name: 'St. Thomas College Matara', logoUrl: schoolLogo2, description: 'Educating tomorrow’s leaders.', anthemUrl: '/path/to/anthem2.mp3' },
        { id: 1, name: 'Matara Central College', logoUrl: schoolLogo1, description: 'An institution known for excellence.', anthemUrl: '/path/to/anthem1.mp3' },
        { id: 5, name: 'St.servatius collegeMatara', logoUrl: schoolLogo5, description: 'Science and innovation for a brighter future.', anthemUrl: '/path/to/anthem5.mp3' },
        { id: 4, name: 'Sujatha Vidyalaya', logoUrl: schoolLogo4, description: 'Empowering young minds.', anthemUrl: '/path/to/anthem4.mp3' },
        { id: 6, name: 'St. Mary’s College', logoUrl: schoolLogo6, description: 'Faith, learning, and leadership.', anthemUrl: '/path/to/anthem6.mp3' },
        { id: 7, name: 'St Thomas Girls High School', logoUrl: schoolLogo7, description: 'Inspiring young women to achieve greatness.', anthemUrl: '/path/to/anthem7.mp3' },
    ]);

    const [projects, setProjects] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSchool, setSelectedSchool] = useState(null);

    useEffect(() => {
        fetchProjects();
        fetchGalleryImages();
    }, []);

    const fetchProjects = async () => {
        try {
            const { data } = await getProjects();
            setProjects(data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    const fetchGalleryImages = async () => {
        try {
            const { data } = await getAllGalleries();
            setGalleryImages(data.slice(0, 6)); // Show a sample of 6 images for preview
        } catch (error) {
            console.error("Error fetching gallery images:", error);
        }
    };

    const openModal = (school) => {
        setSelectedSchool(school);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSchool(null);
    };

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    // Determine upcoming and past events
    const currentDate = new Date();
    const upcomingEvents = projects.filter(event => new Date(event.date) > currentDate);
    const pastEvents = projects.filter(event => new Date(event.date) <= currentDate);

    // Countdown renderer with conditional display
    const renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>Event Started</span>;
        } else if (days > 0) {
            return (
                <span>{days} Days {hours} Hours {minutes} Min</span>
            );
        } else {
            return (
                <span>{hours} Hours {minutes} Min {seconds} Sec</span>
            );
        }
    };
    

    return (
        <div className="min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative h-screen bg-center bg-cover" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="px-4 text-center md:px-10 lg:px-20">
                        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl drop-shadow-lg">
                            Inter School Association - Matara 2005 Batch
                        </h1>
                        <p className="mb-8 text-lg text-gray-300 md:text-2xl">
                            Connecting the Batch of 2005 across Schools in Matara
                        </p>
                        <button onClick={handleModalOpen} className="px-6 py-3 text-lg font-semibold text-black transition bg-white rounded-lg hover:bg-gray-300">
                            Join Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-full max-w-lg p-6 mx-auto bg-white rounded-lg shadow-lg md:max-w-2xl">
                        <button onClick={handleModalClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
                            ✕
                        </button>
                        <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">Contact Us</h2>
                        <p className="mb-6 text-center text-gray-600">Feel free to reach out to us through any of the following:</p>
                        <div className="space-y-4 text-gray-700">
                            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                                <span className="text-lg font-medium">Email</span>
                                <a href="mailto:example@example.com" className="text-blue-600 hover:underline">example@example.com</a>
                            </div>
                            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                                <span className="text-lg font-medium">WhatsApp</span>
                                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    +123 456 7890
                                </a>
                            </div>
                            <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                                <span className="text-lg font-medium">Phone</span>
                                <a href="tel:+1234567890" className="text-blue-600 hover:underline">+123 456 7890</a>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <button onClick={handleModalClose} className="px-6 py-2 font-semibold text-white transition bg-gray-800 rounded-lg hover:bg-gray-700">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Count Row Section (White) */}
            <section className="container px-4 py-10 mx-auto text-black bg-white">
                <Slide direction="up" triggerOnce>
                    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                        <div className="p-4">
                            <FaSchool className="mx-auto mb-3 text-4xl text-gray-700" />
                            <p className="text-lg font-semibold">Batch Year</p>
                            <p className="text-3xl font-bold">2005</p>
                        </div>
                        <div className="p-4">
                            <FaUsers className="mx-auto mb-3 text-4xl text-gray-700" />
                            <p className="text-lg font-semibold">Members</p>
                            <p className="text-3xl font-bold">
                                <CountUp end={50} duration={3} />+
                            </p>
                        </div>
                        <div className="p-4">
                            <FaSchool className="mx-auto mb-3 text-4xl text-gray-700" />
                            <p className="text-lg font-semibold">Schools</p>
                            <p className="text-3xl font-bold">
                                <CountUp end={7} duration={3} />+
                            </p>
                        </div>
                        <div className="p-4">
                            <FaCalendarAlt className="mx-auto mb-3 text-4xl text-gray-700" />
                            <p className="text-lg font-semibold">Events</p>
                            <p className="text-3xl font-bold">
                                <CountUp end={20} duration={3} />+
                            </p>
                        </div>
                    </div>
                </Slide>
            </section>

            {/* Registered Schools Section (Black) */}
            <section className="container px-4 py-16 mx-auto bg-gray-900">
                <h2 className="mb-5 text-4xl font-bold text-center text-white">Registered Schools</h2>
                <hr className="w-24 mx-auto mb-8 border-b-4 border-purple-600" />
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                    {schools.map((school) => (
                        <div 
                            key={school.id} 
                            className="p-5 text-black transition-all duration-300 transform bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105"
                            onClick={() => openModal(school)}
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                <img src={school.logoUrl} alt={school.name} className="object-cover w-20 h-20 mb-4" />
                                <h3 className="mb-2 text-xl font-semibold">{school.name}</h3>
                                <p className="text-sm leading-tight text-gray-600">Learn more about our esteemed alumni network.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Vision Section (White, Enhanced Layout) */}
            <section className="container relative px-4 py-20 mx-auto overflow-hidden text-black bg-white">
                <h2 className="mb-8 text-4xl font-bold text-center">Our Vision</h2>
                <hr className="w-24 mx-auto mb-12 border-b-4 border-gray-500" />
                <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-8">
                    <div className="flex justify-center w-full transition-transform duration-500 transform md:w-1/2 hover:scale-105">
                        <img src={visionImage} alt="Vision" className="object-cover rounded-lg max-h-80" />
                    </div>
                    <div className="w-full text-center md:w-1/2 md:text-left">
                        <p className="max-w-xl mx-auto text-xl leading-relaxed text-gray-700">
                        To create a strong community of past students who support each other and give back to 
                        their schools, helping future generations succeed.
                        </p>
                    </div>
                </div>
                {/* Decorative Accent */}
                <div className="absolute w-40 h-40 bg-purple-200 rounded-full -top-10 -left-10 opacity-30 blur-xl"></div>
            </section>

            {/* Mission Section (Black, Enhanced Layout) */}
            <section className="container relative px-4 py-20 mx-auto overflow-hidden text-white bg-gray-900">
                <h2 className="mb-8 text-4xl font-bold text-center">Our Mission</h2>
                <hr className="w-24 mx-auto mb-12 border-b-4 border-purple-600" />
                <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-8">
                    <div className="order-2 w-full text-center md:w-1/2 md:text-right md:order-1">
                        <p className="max-w-xl mx-auto text-xl leading-relaxed text-center text-gray-300">
                            To connect alumni and offer support through mentorship, career guidance, and 
                            networking. We aim to give back to our schools with financial help, improved facilities, and 
                            scholarships, ensuring they remain great places for learning.
                        </p>
                    </div>
                    <div className="flex justify-center order-1 w-full transition-transform duration-500 transform md:w-1/2 md:order-2 hover:scale-105">
                        <img src={missionImage} alt="Mission" className="object-cover rounded-lg max-h-80" />
                    </div>
                </div>
                {/* Decorative Accent */}
                <div className="absolute w-40 h-40 bg-purple-700 rounded-full -bottom-10 -right-10 opacity-20 blur-xl"></div>
            </section>


            {/* Upcoming Events with Images and Countdown (White) */}
            <section className="container px-4 py-16 mx-auto text-black bg-white">
                <h2 className="mb-5 text-4xl font-bold text-center">Upcoming Events</h2>
                <hr className="w-24 mx-auto mb-8 border-b-4 border-gray-500" />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {(upcomingEvents.length > 0 ? upcomingEvents : pastEvents.slice(0, 4)).map((event) => (
                        <div key={event._id} className="p-6 text-center transition transform bg-gray-100 rounded-lg shadow-lg hover:scale-105">
                            <img 
                                src={`http://localhost:5000${event.imageUrl}`} 
                                alt={event.title} 
                                className="object-cover w-full h-48 mb-4 rounded-md" 
                            />
                            <h3 className="mb-3 text-2xl font-semibold">{event.title}</h3>
                            <p className="mb-4 text-lg text-gray-700">{event.description}</p>
                            {upcomingEvents.length > 0 && <Countdown date={new Date(event.date)} renderer={renderCountdown} />}
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <Link to="/projects" className="px-6 py-3 text-lg font-semibold text-white transition bg-gray-800 rounded-lg hover:bg-gray-700">View All Events</Link>
                </div>
            </section>


            {/* Support Our Association Section (Enhanced Layout) */}
            <section className="container relative px-4 py-20 mx-auto overflow-hidden text-white bg-gray-900">
                <h2 className="mb-8 text-4xl font-bold text-center">Support Our Association</h2>
                <hr className="w-24 mx-auto mb-12 border-b-4 border-purple-600" />
                
                <div className="relative z-10 flex flex-col items-center justify-center gap-12 p-8 bg-gray-800 rounded-lg shadow-xl md:flex-row">
                    <div className="flex flex-col items-center">
                        <img src={qrCodeImage} alt="QR Code" className="w-56 h-56 mb-4 transition-transform transform rounded-lg shadow-lg hover:scale-105 bg-gray-100" />
                        <p className="text-sm text-center text-gray-400">Scan the QR code to donate</p>
                    </div>
                    
                    <div className="max-w-md text-lg leading-relaxed text-gray-300">
                        <h3 className="mb-4 text-2xl font-bold text-purple-500">Bank Transfer Details</h3>
                        <p className="mb-1"><span className="font-semibold text-white">Bank:</span> Sampath Bank</p>
                        <p className="mb-1"><span className="font-semibold text-white">Account Name:</span> Matara Inter School Society - Batch 2005</p>
                        <p className="mb-1"><span className="font-semibold text-white">Account Number:</span> 1010 6100 6532</p>
                        <p><span className="font-semibold text-white">Branch:</span> Matara Branch</p>
                    </div>
                </div>
                
               
            </section>


            {/* About & Contact Us Section (Enhanced Layout) */}
            <section className="container relative px-6 py-20 mx-auto text-black bg-white">
                <h2 className="mb-10 text-4xl font-bold text-center">
                    About & Contact Us
                </h2>
                <hr className="w-24 mx-auto mb-12 border-b-4 border-gray-500" />
                
                <div className="relative z-10 flex flex-col items-center justify-center gap-12 text-center md:flex-row md:gap-16 md:text-left">
                    <div className="p-8 transition-transform transform bg-gray-100 rounded-lg shadow-lg md:w-1/2 hover:scale-105">
                        <h3 className="mb-4 text-2xl font-bold text-purple-700">About Us</h3>
                        <p className="text-lg leading-relaxed text-gray-600">
                            The Inter School Association - Matara 2005 Batch is a platform aimed at connecting alumni from various schools in Matara who graduated in 2005. We organize events, networking sessions, and resources for personal and professional growth.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/about">
                                <button
                                type="submit"
                                className="mt-8 w-[150px] py-3 font-semibold text-white transition-all duration-300 transform shadow-md bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 rounded-xl hover:scale-105"
                                >
                                See More
                                </button>
                            </Link>
                        </div>

                       
                    </div>
                    
                    <div className="p-8 transition-transform transform bg-gray-100 rounded-lg shadow-lg md:w-1/2 hover:scale-105">
                        <h3 className="mb-4 text-2xl font-bold text-purple-700">Contact Us</h3>
                        <p className="mb-4 text-lg leading-relaxed text-gray-600">
                            Feel free to reach out to us for any inquiries, collaborations, or support for our association.
                        </p>
                        <p className="text-lg text-gray-600">
                            Email: <a href="mailto:contact@matara2005association.com" className="text-purple-500 hover:underline">contact@matara2005association.com</a>
                        </p>
                        <p className="text-lg text-gray-600">
                            Phone: <a href="tel:+94123456789" className="text-purple-500 hover:underline">+94 123 456 789</a>
                        </p>

                        <div className="flex justify-center">
                            <Link to="/contact">
                                <button
                                type="submit"
                                className="mt-8 w-[150px] py-3 font-semibold text-white transition-all duration-300 transform shadow-md bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 rounded-xl hover:scale-105"
                                >
                                See More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </section>

            {/* Gallery Preview (White) */}
            <section className="container px-4 py-16 mx-auto text-black bg-white">
                <h2 className="mb-5 text-4xl font-bold text-center">Gallery</h2>
                <hr className="w-24 mx-auto mb-8 border-b-4 border-gray-500" />
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <Link to="/gallery">
                        <img className="object-cover w-full transition-transform rounded-lg cursor-pointer h-[330px] hover:scale-105" src={img1} alt="" />
                    </Link>
                    <Link to="/gallery">
                        <img className="object-cover w-full transition-transform rounded-lg cursor-pointer h-[330px] hover:scale-105" src={img2} alt="" />
                    </Link>
                    <Link to="/gallery">
                        <img className="object-cover w-full transition-transform rounded-lg cursor-pointer h-[330px] hover:scale-105" src={img3} alt="" />
                    </Link>
                    <Link to="/gallery">
                        <img className="object-cover w-full transition-transform rounded-lg cursor-pointer h-[330px] hover:scale-105" src={img4} alt="" />
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Link to="/gallery" className="px-6 py-3 text-lg font-semibold text-white transition bg-gray-800 rounded-lg hover:bg-gray-700">View Gallery</Link>
                </div>
            </section>

            {/* School Anthem Modal */}
            {selectedSchool && (
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="School Details"
                    className="w-11/12 max-w-3xl p-8 mx-auto mt-20 text-gray-100 bg-gray-900 rounded-lg shadow-2xl"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
                >
                    <button onClick={closeModal} className="absolute text-2xl text-gray-400 top-4 right-4 hover:text-gray-200">
                        <FaTimes />
                    </button>
                    <h2 className="mb-4 text-4xl font-bold text-center">{selectedSchool.name}</h2>
                    <hr className="w-16 mx-auto mb-4 border-b-4 border-purple-600" />
                    <p className="mb-6 text-lg text-center">{selectedSchool.description}</p>
                    <audio controls className="mx-auto">
                        <source src={selectedSchool.anthemUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </Modal>
            )}
        </div>
    );
};

export default LandingPage;
