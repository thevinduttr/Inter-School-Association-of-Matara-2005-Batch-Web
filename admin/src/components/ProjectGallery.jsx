// src/components/ProjectGallery.jsx
import React, { useState, useEffect } from 'react';
import { addProject, getProjects, getProjectById, updateProject, deleteProject } from '../api/projectApi';

const ProjectGallery = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [newProject, setNewProject] = useState({ title: '', details: '', date: '' });
    const [file, setFile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Fetch all projects
    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const { data } = await getProjects();
            setProjects(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Handle form input changes
    const handleChange = (e) => {
        setNewProject({ ...newProject, [e.target.name]: e.target.value });
    };

    // Handle file input
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Add or Edit project
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', newProject.title);
        formData.append('details', newProject.details);
        formData.append('date', newProject.date);
        if (file) formData.append('image', file);

        try {
            if (isEditing) {
                await updateProject(selectedProject._id, formData);
                alert('Project updated successfully');
            } else {
                await addProject(formData);
                alert('Project added successfully');
            }
            fetchProjects();
            setNewProject({ title: '', details: '', date: '' });
            setFile(null);
            setIsEditing(false);
        } catch (error) {
            console.error(error);
        }
    };

    // Select a project to view details
    const handleProjectClick = async (id) => {
        try {
            const { data } = await getProjectById(id);
            setSelectedProject(data);
            setNewProject({ title: data.title, details: data.details, date: data.date.split('T')[0] });
            setIsEditing(true); // Set editing mode
        } catch (error) {
            console.error(error);
        }
    };

    // Delete a project
    const handleDelete = async (id) => {
        try {
            await deleteProject(id);
            alert('Project deleted successfully');
            fetchProjects();
            setSelectedProject(null);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Project Gallery Admin Panel</h1>

            {/* Project Form */}
            <form onSubmit={handleSubmit} className="mb-8 p-6 bg-white rounded-lg shadow-lg space-y-4 border border-gray-300">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">{isEditing ? 'Edit Project' : 'Add Project'}</h2>
                <input
                    type="text"
                    name="title"
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                    name="details"
                    placeholder="Project Details"
                    value={newProject.details}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                    type="date"
                    name="date"
                    value={newProject.date}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full border border-gray-300 rounded mb-4"
                />
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200">
                    {isEditing ? 'Update Project' : 'Add Project'}
                </button>
            </form>

            {/* Projects Table */}
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Projects</h2>
            {loading ? (
                <p className="text-blue-500">Loading projects...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="py-3 px-4 text-left">Title</th>
                                <th className="py-3 px-4 text-left">Date</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project._id} className="border-b hover:bg-gray-100">
                                    <td className="py-2 px-4">{project.title}</td>
                                    <td className="py-2 px-4">{new Date(project.date).toLocaleDateString()}</td>
                                    <td className="py-2 px-4">
                                        <button
                                            onClick={() => handleProjectClick(project._id)}
                                            className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-200 mr-2"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => handleDelete(project._id)}
                                            className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-200"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Selected Project Details */}
            {selectedProject && (
                <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">{selectedProject.title}</h2>
                    {selectedProject.imageUrl && (
                        <img src={`http://localhost:5000${selectedProject.imageUrl}`} alt={selectedProject.title} className="w-full h-48 object-cover rounded mb-4" />
                    )}
                    <p className="text-gray-700 mb-2">{selectedProject.details}</p>
                    <p className="text-gray-600 mb-4">{new Date(selectedProject.date).toLocaleDateString()}</p>
                    <button onClick={() => handleDelete(selectedProject._id)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200">Delete Project</button>
                </div>
            )}
        </div>
    );
};

export default ProjectGallery;
