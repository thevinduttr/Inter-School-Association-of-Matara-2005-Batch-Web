// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav style={styles.sidebar}>
            <h2>Admin Panel</h2>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/gallery" style={styles.navLink}>Gallery</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/projects" style={styles.navLink}>Projects</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    sidebar: {
        width: '200px',
        background: '#333',
        color: '#fff',
        padding: '20px',
        height: '100vh',
        boxSizing: 'border-box',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
    },
    navItem: {
        margin: '10px 0',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Sidebar;
