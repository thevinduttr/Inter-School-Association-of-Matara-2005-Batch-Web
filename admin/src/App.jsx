// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import GalleryManager from './components/GalleryManager';
import ProjectGallery from './components/ProjectGallery';

function App() {
    return (
        <Router>
            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar Component */}
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 p-6 bg-white shadow-lg rounded-md m-4">
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

export default App;
