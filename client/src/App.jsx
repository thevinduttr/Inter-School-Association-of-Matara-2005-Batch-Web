// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClientGallery from './components/ClientGallery';
import ClientProjects from './components/ClientProjects';

function App() {
    return (
        <Router>
            <div>
                {/* Navbar */}
                <nav style={styles.navbar}>
                    <Link to="/gallery" style={styles.navLink}>Gallery</Link>
                    <Link to="/projects" style={styles.navLink}>Projects</Link>
                </nav>

                {/* Routes */}
                <main style={styles.content}>
                    <Routes>
                        <Route path="/gallery" element={<ClientGallery />} />
                        <Route path="/projects" element={<ClientProjects />} />
                        <Route path="*" element={<ClientGallery />} /> {/* Default route */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

const styles = {
    navbar: {
        background: '#333',
        padding: '10px',
    },
    navLink: {
        color: '#fff',
        margin: '0 15px',
        textDecoration: 'none',
    },
    content: {
        padding: '20px',
    },
};

export default App;
