// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import GalleryManager from './components/GalleryManager';
import ProjectGallery from './components/ProjectGallery';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                {/* Sidebar Component */}
                <Sidebar />

                {/* Main Content */}
                <main style={styles.content}>
                    <Routes>
                        <Route path="/gallery" element={<GalleryManager />} />
                        <Route path="/projects" element={<ProjectGallery />} />
                        {/* Default Route */}
                        <Route path="*" element={<GalleryManager />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

const styles = {
    content: {
        padding: '20px',
        flex: 1,
    },
};

export default App;
