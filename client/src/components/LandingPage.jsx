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
import qrCodeImage from '../assets/school_logo_01.png';
import schoolLogo1 from '../assets/school_logo_01.png';
import schoolLogo2 from '../assets/school_logo_02.png';
import schoolLogo3 from '../assets/school_logo_01.png';

Modal.setAppElement('#root'); // Accessibility setting for react-modal

const LandingPage = () => {
    const [schools] = useState([
        { id: 1, name: 'Matara Central College', logoUrl: schoolLogo1, description: 'An institution known for excellence.', anthemUrl: '/path/to/anthem1.mp3' },
        { id: 2, name: 'St. Thomas College', logoUrl: schoolLogo2, description: 'Educating tomorrow’s leaders.', anthemUrl: '/path/to/anthem2.mp3' },
        { id: 3, name: 'Rahula College', logoUrl: schoolLogo3, description: 'Striving for greatness in all fields.', anthemUrl: '/path/to/anthem3.mp3' },
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
            <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                    <div className="text-center px-4 md:px-10 lg:px-20">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">Inter School Association - Matara 2005 Batch</h1>
                        <p className="text-lg md:text-2xl text-gray-300 mb-8">Connecting the Batch of 2005 across Schools in Matara</p>
                        <Link to="/register" className="px-6 py-3 bg-white text-black font-semibold rounded-lg text-lg hover:bg-gray-300 transition">Join Us</Link>
                    </div>
                </div>
            </section>

            {/* Count Row Section (White) */}
            <section className="container mx-auto px-4 py-10 bg-white text-black">
                <Slide direction="up" triggerOnce>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <FaSchool className="text-gray-700 text-4xl mx-auto mb-3" />
                            <p className="text-lg font-semibold">Batch Year</p>
                            <p className="text-3xl font-bold">2005</p>
                        </div>
                        <div className="p-4">
                            <FaUsers className="text-gray-700 text-4xl mx-auto mb-3" />
                            <p className="text-lg font-semibold">Members</p>
                            <p className="text-3xl font-bold">
                                <CountUp end={50} duration={3} />+
                            </p>
                        </div>
                        <div className="p-4">
                            <FaSchool className="text-gray-700 text-4xl mx-auto mb-3" />
                            <p className="text-lg font-semibold">Schools</p>
                            <p className="text-3xl font-bold">
                                <CountUp end={15} duration={3} />+
                            </p>
                        </div>
                        <div className="p-4">
                            <FaCalendarAlt className="text-gray-700 text-4xl mx-auto mb-3" />
                            <p className="text-lg font-semibold">Events</p>
                            <p className="text-3xl font-bold">
                                <CountUp end={20} duration={3} />+
                            </p>
                        </div>
                    </div>
                </Slide>
            </section>

            {/* Registered Schools Section (Black) */}
            <section className="container mx-auto px-4 py-16 bg-gray-900 text-white">
                <h2 className="text-4xl font-bold text-center mb-5">Registered Schools</h2>
                <hr className="w-24 mx-auto border-b-4 border-purple-600 mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {schools.map((school) => (
                        <div key={school.id} className="bg-gray-800 rounded-lg p-6 shadow-lg text-center cursor-pointer transform hover:scale-105 transition" onClick={() => openModal(school)}>
                            <img src={school.logoUrl} alt={school.name} className="w-24 h-24 mx-auto mb-4 rounded-full" />
                            <h3 className="text-2xl font-bold">{school.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Vision Section (White) */}
            <section className="container mx-auto px-4 py-16 bg-white text-black">
                <h2 className="text-4xl font-bold text-center mb-5">Our Vision</h2>
                <hr className="w-24 mx-auto border-b-4 border-gray-500 mb-8" />
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src={visionImage} alt="Vision" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="w-full md:w-1/2 text-center">
                        <p className="text-xl text-gray-700 max-w-xl mx-auto">To build a stronger, more connected community among the 2005 batch alumni, fostering lifelong friendships and collaboration across schools in Matara.</p>
                    </div>
                </div>
            </section>

            {/* Mission Section (Black) */}
            <section className="container mx-auto px-4 py-16 bg-gray-900 text-white">
                <h2 className="text-4xl font-bold text-center mb-5">Our Mission</h2>
                <hr className="w-24 mx-auto border-b-4 border-purple-600 mb-8" />
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="w-full md:w-1/2 text-center order-2 md:order-1">
                        <p className="text-xl text-gray-300 max-w-xl mx-auto">To facilitate events, resources, and networking opportunities for alumni of the 2005 batch, empowering them to achieve personal and professional growth while contributing to society.</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                        <img src={missionImage} alt="Mission" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            {/* Upcoming Events with Images and Countdown (White) */}
            <section className="container mx-auto px-4 py-16 bg-white text-black">
                <h2 className="text-4xl font-bold text-center mb-5">Upcoming Events</h2>
                <hr className="w-24 mx-auto border-b-4 border-gray-500 mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {(upcomingEvents.length > 0 ? upcomingEvents : pastEvents.slice(0, 4)).map((event) => (
                        <div key={event._id} className="bg-gray-100 rounded-lg shadow-lg p-6 text-center transition transform hover:scale-105">
                            <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>
                            <p className="text-lg text-gray-700 mb-4">{event.description}</p>
                            {upcomingEvents.length > 0 && <Countdown date={new Date(event.date)} renderer={renderCountdown} />}
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link to="/events" className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg text-lg hover:bg-gray-700 transition">View All Events</Link>
                </div>
            </section>

            {/* Support Our Association Section (Black) */}
            <section className="container mx-auto px-4 py-16 bg-gray-900 text-white">
                <h2 className="text-4xl font-bold text-center mb-5">Support Our Association</h2>
                <hr className="w-24 mx-auto border-b-4 border-purple-600 mb-8" />
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    <div>
                        <img src={qrCodeImage} alt="QR Code" className="w-56 h-56" />
                    </div>
                    <div className="text-lg">
                        <h3 className="text-2xl font-bold mb-4">Bank Transfer Details</h3>
                        <p>Bank: ABC Bank</p>
                        <p>Account Name: Inter School Association - Matara 2005 Batch</p>
                        <p>Account Number: 123456789</p>
                        <p>Branch: Matara Branch</p>
                    </div>
                </div>
            </section>

            {/* Gallery Preview (White) */}
            <section className="container mx-auto px-4 py-16 bg-white text-black">
                <h2 className="text-4xl font-bold text-center mb-5">Gallery</h2>
                <hr className="w-24 mx-auto border-b-4 border-gray-500 mb-8" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((img) => (
                        <img key={img._id} src={img.url} alt="Gallery" className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer" onClick={() => window.location.href = '/gallery'} />
                    ))}
                </div>
            </section>

            {/* School Anthem Modal */}
            {selectedSchool && (
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="School Details"
                    className="bg-gray-900 text-gray-100 rounded-lg p-8 w-11/12 max-w-3xl mx-auto mt-20 shadow-2xl"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
                >
                    <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-2xl">
                        <FaTimes />
                    </button>
                    <h2 className="text-4xl font-bold text-center mb-4">{selectedSchool.name}</h2>
                    <hr className="w-16 mx-auto border-b-4 border-purple-600 mb-4" />
                    <p className="text-lg text-center mb-6">{selectedSchool.description}</p>
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
