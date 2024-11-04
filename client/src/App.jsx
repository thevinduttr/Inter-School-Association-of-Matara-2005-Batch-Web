// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientGallery from './components/ClientGallery';
import ClientProjects from './components/ClientProjects';
import AboutUs from './components/AboutUs';
import ContactUs from './components/Contactus';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div>
                {/* Header Component */}
                <Header />

                {/* Routes */}
                <main className="container mx-auto bg-transparent bg-slate-900">
                    <Routes>
                        <Route path="/gallery" element={<ClientGallery />} />
                        <Route path="/projects" element={<ClientProjects />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="*" element={<ClientGallery />} /> {/* Default route */}
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
