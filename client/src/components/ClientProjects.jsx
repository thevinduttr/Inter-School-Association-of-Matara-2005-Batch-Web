// src/components/ClientProjects.jsx
import React, { useState, useEffect } from 'react';
import { getProjects } from '../api/projectApi';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt, FaSearch, FaTimes, FaClock } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';

import contactBanner from '../assets/contact-banner.jpg';

Modal.setAppElement('#root'); // Accessibility setting for react-modal

const ClientProjects = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [filters, setFilters] = useState({ name: '', startDate: null, endDate: null });
    const [loading, setLoading] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const { data } = await getProjects();
            setProjects(data);
            setFilteredProjects(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching projects:", error);
            setLoading(false);
        }
    };

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleStartDateChange = (date) => setFilters((prev) => ({ ...prev, startDate: date }));
    const handleEndDateChange = (date) => setFilters((prev) => ({ ...prev, endDate: date }));

    useEffect(() => {
        applyFilters();
    }, [filters]);

    const applyFilters = () => {
        const filtered = projects.filter((project) => {
            const projectDate = new Date(project.date);
            const matchesName = filters.name ? project.title.toLowerCase().includes(filters.name.toLowerCase()) : true;
            const matchesDateRange = filters.startDate && filters.endDate
                ? projectDate >= filters.startDate && projectDate <= filters.endDate
                : true;
            return matchesName && matchesDateRange;
        });
        setFilteredProjects(filtered);
    };

    const currentDate = new Date();
    const ongoingProjects = filteredProjects.filter(project => new Date(project.date) >= currentDate);
    const completedProjects = filteredProjects.filter(project => new Date(project.date) < currentDate);

    const calculateDaysRemaining = (projectDate) => {
        const differenceInTime = new Date(projectDate) - currentDate;
        return Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    };

    return (
        <div className="bg-gradient-to-br from-gray-100 via-white to-gray-50 min-h-screen text-gray-800">
            {/* Hero Section with Light Gradient Overlay */}
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-indigo-200 to-blue-200 opacity-80"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-2">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 drop-shadow-lg">Projects</h1>
                    <p className="text-gray-600 text-base md:text-lg tracking-wider">Home / Projects</p>
                </div>
            </div>

            {/* Toggleable Filter Panel for Mobile */}
            <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-6 sm:hidden"
            >
                <FaSearch className="inline mr-2" /> Filter Projects
            </button>

            <div className={`flex flex-wrap justify-center gap-4 mb-12 mt-16 ${isFilterOpen ? 'block' : 'hidden'} sm:flex`}>
                <input
                    type="text"
                    name="name"
                    value={filters.name}
                    onChange={handleFilterChange}
                    placeholder="Filter by Name"
                    className="p-2 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 outline-none"
                />
                <DatePicker
                    selected={filters.startDate}
                    onChange={handleStartDateChange}
                    placeholderText="Start Date"
                    className="p-2 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 outline-none"
                    selectsStart
                    startDate={filters.startDate}
                    endDate={filters.endDate}
                />
                <DatePicker
                    selected={filters.endDate}
                    onChange={handleEndDateChange}
                    placeholderText="End Date"
                    className="p-2 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 outline-none"
                    selectsEnd
                    startDate={filters.startDate}
                    endDate={filters.endDate}
                    minDate={filters.startDate}
                />
                <button
                    onClick={applyFilters}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center"
                >
                    <FaSearch className="mr-2" /> Apply Filters
                </button>
            </div>

            {/* Skeleton Loader while loading projects */}
            {loading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    {[...Array(6)].map((_, idx) => (
                        <div key={idx} className="bg-gray-200 rounded-lg shadow-lg p-6 animate-pulse h-64"></div>
                    ))}
                </div>
            )}

            {/* Projects List */}
            {!loading && (
                <>
                    {ongoingProjects.length > 0 && (
                        <div className='px-4 py-8 sm:px-8'>
                            <h2 className="text-3xl font-bold mb-6 text-green-600">Ongoing Projects</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 ">
                                {ongoingProjects.map((project) => (
                                    <div
                                        key={project._id}
                                        className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-200 cursor-pointer border border-transparent hover:border-purple-500"
                                        onClick={() => openModal(project)}
                                    >
                                        <img
                                            src={`http://localhost:5000${project.imageUrl}`}
                                            alt={project.title}
                                            className="w-full h-48 object-cover rounded-lg mb-4"
                                        />
                                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                                        <p className="text-gray-600 mb-2 flex items-center">
                                            <FaCalendarAlt className="mr-2" />
                                            {new Date(project.date).toLocaleDateString()}
                                        </p>
                                        <p className="text-gray-600 flex items-center">
                                            <FaClock className="mr-2" /> {calculateDaysRemaining(project.date)} days remaining
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {completedProjects.length > 0 && (
                        <div className='px-4 py-8 sm:px-8'>
                            <h2 className="text-3xl font-bold mb-6 text-red-500">Completed Projects</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {completedProjects.map((project) => (
                                    <div
                                        key={project._id}
                                        className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-300 cursor-pointer border border-transparent hover:border-gray-500"
                                        onClick={() => openModal(project)}
                                    >
                                        <img
                                            src={`http://localhost:5000${project.imageUrl}`}
                                            alt={project.title}
                                            className="w-full h-48 object-cover rounded-lg mb-4"
                                        />
                                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                                        <p className="text-gray-600 flex items-center">
                                            <FaCalendarAlt className="mr-2" />
                                            {new Date(project.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* Project Details Modal */}
            {selectedProject && (
                <Modal
                    isOpen={!!selectedProject}
                    onRequestClose={closeModal}
                    contentLabel="Project Details"
                    className="bg-white text-gray-800 rounded-lg p-8 w-11/12 max-w-3xl mx-auto shadow-2xl transition-all duration-300 border border-purple-500"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        <FaTimes />
                    </button>
                    <div className="flex flex-col items-center">
                        <img
                            src={`http://localhost:5000${selectedProject.imageUrl}`}
                            alt={selectedProject.title}
                            className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">{selectedProject.title}</h2>
                        <p className="text-gray-700 mb-4">{selectedProject.details}</p>
                        <p className="text-gray-600 mb-2">
                            Date: {new Date(selectedProject.date).toLocaleDateString()}
                        </p>
                        {new Date(selectedProject.date) >= currentDate && (
                            <p className="text-purple-600 text-lg font-semibold flex items-center">
                                <FaClock className="mr-2" /> {calculateDaysRemaining(selectedProject.date)} days remaining
                            </p>
                        )}
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ClientProjects;
