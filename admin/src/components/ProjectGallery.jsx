// src/components/ProjectGallery.jsx
import React, { useState, useEffect } from 'react';
import { addProject, getProjects, getProjectById, updateProject, deleteProject } from '../api/projectApi';

const ProjectGallery = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [newProject, setNewProject] = useState({ title: '', details: '', date: '' });
    const [file, setFile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Fetch all projects
    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const { data } = await getProjects();
            setProjects(data);
        } catch (error) {
            console.error(error);
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
        } catch (error) {
            console.error(error);
        }
    };

    // Set project for editing
    const handleEdit = (project) => {
        setNewProject({ title: project.title, details: project.details, date: project.date.split('T')[0] });
        setSelectedProject(project);
        setIsEditing(true);
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
        <div>
            <h1>Project Gallery Admin Panel</h1>
            
            {/* Project Form */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newProject.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="details"
                    placeholder="Details"
                    value={newProject.details}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={newProject.date}
                    onChange={handleChange}
                    required
                />
                <input type="file" onChange={handleFileChange} />
                <button type="submit">{isEditing ? 'Update Project' : 'Add Project'}</button>
            </form>

            {/* Project List */}
            <h2>Projects</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project._id} onClick={() => handleProjectClick(project._id)}>
                        <img src={`http://localhost:5000${project.imageUrl}`} alt={project.title} width="100" />
                        <h3>{project.title}</h3>
                        <p>{new Date(project.date).toLocaleDateString()}</p>
                        <button onClick={() => handleEdit(project)}>Edit</button>
                        <button onClick={() => handleDelete(project._id)}>Delete</button>
                    </li>
                ))}
            </ul>

            {/* Selected Project Details */}
            {selectedProject && (
                <div>
                    <h2>Project Details</h2>
                    <img src={`http://localhost:5000${selectedProject.imageUrl}`} alt={selectedProject.title} width="300" />
                    <h3>{selectedProject.title}</h3>
                    <p>{selectedProject.details}</p>
                    <p>{new Date(selectedProject.date).toLocaleDateString()}</p>
                    <button onClick={() => handleDelete(selectedProject._id)}>Delete Project</button>
                </div>
            )}
        </div>
    );
};

export default ProjectGallery;
