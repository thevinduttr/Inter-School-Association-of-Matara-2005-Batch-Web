// src/components/ClientProjects.jsx
import React, { useState, useEffect } from 'react';
import { getProjects } from '../api/projectApi';

const ClientProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const { data } = await getProjects();
            setProjects(data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    return (
        <div>
            <h1>Projects</h1>
            <div style={styles.projectContainer}>
                {projects.map((project) => (
                    <div key={project._id} style={styles.projectItem}>
                        <img src={`http://localhost:5000${project.imageUrl}`} alt={project.title} style={styles.image} />
                        <h3>{project.title}</h3>
                        <p>{new Date(project.date).toLocaleDateString()}</p>
                        <p>{project.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    projectContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
    },
    projectItem: {
        border: '1px solid #ddd',
        padding: '10px',
        borderRadius: '5px',
        width: '250px',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '5px',
    },
};

export default ClientProjects;
