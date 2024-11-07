// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaImages, FaProjectDiagram } from 'react-icons/fa'; // Importing icons from react-icons

const Sidebar = () => {
    return (
        <nav className="w-64 bg-gray-800 text-white min-h-screen p-6 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Admin Panel</h2>
            <ul className="space-y-4">
                <li>
                    <Link
                        to="admin/gallery"
                        className="flex items-center py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
                    >
                        <FaImages className="mr-2" /> {/* Icon for Gallery */}
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link
                        to="admin/projects"
                        className="flex items-center py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
                    >
                        <FaProjectDiagram className="mr-2" /> {/* Icon for Projects */}
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
