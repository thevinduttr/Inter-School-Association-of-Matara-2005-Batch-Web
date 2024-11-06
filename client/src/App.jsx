// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ClientGallery from './components/ClientGallery';
import ClientProjects from './components/ClientProjects';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

import GalleryManager from './components/admin/GalleryManager';
import ProjectGallery from './components/admin/ProjectGallery';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/admin/Sidebar';

// Layout components
function MainLayout() {
    return (
        <div>
            <Header />
            <main className="container mx-auto bg-transparent bg-slate-900">
                <Outlet /> {/* Renders child routes */}
            </main>
            <Footer />
        </div>
    );
}

function AdminLayout() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-6 bg-white shadow-lg rounded-md m-4">
                <Outlet /> {/* Renders child routes */}
            </main>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                {/* Public routes with Header and Footer */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/gallery" element={<ClientGallery />} />
                    <Route path="/projects" element={<ClientProjects />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/about" element={<AboutUs />} />
                </Route>

                {/* Admin routes with Sidebar layout */}
                <Route element={<AdminLayout />}>
                    <Route path="/admin/gallery" element={<GalleryManager />} />
                    <Route path="/admin/projects" element={<ProjectGallery />} />
                </Route>

                {/* Fallback route */}
                <Route path="*" element={<LandingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
