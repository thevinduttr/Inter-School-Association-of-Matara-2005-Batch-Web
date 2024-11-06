// src/components/GalleryManager.jsx
import React, { useState, useEffect } from 'react';
import { addImage, getAllGalleries, getGalleryByTitle, deleteImage, deleteGallery } from '../../api/galleryApi';
import Sidebar from './Sidebar';

const GalleryManager = () => {
    const [galleries, setGalleries] = useState([]);
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [formData, setFormData] = useState({ title: '', images: [] });
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchGalleries();
    }, []);

    const fetchGalleries = async () => {
        setLoading(true);
        try {
            const response = await getAllGalleries();
            setGalleries(response.data);
            setMessage('Galleries loaded successfully!');
        } catch (error) {
            console.error(error);
            setMessage('Error loading galleries. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleGalleryClick = async (title) => {
        try {
            const response = await getGalleryByTitle(title);
            setSelectedGallery(response.data);
        } catch (error) {
            console.error(error);
            setMessage('Error fetching gallery images.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, images: Array.from(e.target.files) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('title', formData.title);

        formData.images.forEach((image) => {
            data.append('images', image);
        });

        setLoading(true);
        try {
            await addImage(data);
            fetchGalleries();
            setFormData({ title: '', images: [] });
            setMessage('Images added successfully!');
        } catch (error) {
            console.error(error);
            setMessage('Error adding images. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteGallery = async (title) => {
        setLoading(true);
        try {
            await deleteGallery(title);
            fetchGalleries();
            setSelectedGallery(null);
            setMessage('Gallery deleted successfully!');
        } catch (error) {
            console.error(error);
            setMessage('Error deleting gallery. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Filter galleries based on user input
    const filteredGalleries = galleries.filter((gallery) =>
        gallery.title.toLowerCase().includes(filter.toLowerCase())
    ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Latest first

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Gallery Manager</h1>

            {/* Image Upload Form */}
            <form onSubmit={handleSubmit} className="mb-6 p-6 bg-white rounded-lg shadow-md border border-gray-300 space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Upload New Images</h2>
                <input
                    type="text"
                    name="title"
                    placeholder="Gallery Title"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    required
                    className="w-full border border-gray-300 rounded p-3"
                />
                <div className="flex flex-wrap mt-2">
                    {formData.images.map((image, index) => (
                        <div key={index} className="relative w-24 h-24 mr-2 mb-2">
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                className="object-cover w-full h-full rounded-md shadow-sm"
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    const newImages = formData.images.filter((_, i) => i !== index);
                                    setFormData({ ...formData, images: newImages });
                                }}
                                className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 text-xs hover:bg-red-700 transition duration-200"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-gray-700 transition duration-200">Add Images to Gallery</button>
            </form>

            {/* Filter Input */}
            <input
                type="text"
                placeholder="Filter galleries by name"
                className="mb-4 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />

            {/* Message Display */}
            {message && <div className="mb-4 text-green-600">{message}</div>}

            {/* Loading Indicator */}
            {loading && <div className="mb-4 text-gray-600">Loading...</div>}

            {/* Gallery Titles List */}
            <h2 className="text-3xl font-semibold mt-4 mb-2 text-gray-800">Galleries</h2>
            <div className="grid grid-cols-1 gap-4">
                {filteredGalleries.map((gallery) => (
                    <div
                        key={gallery.title}
                        className="p-4 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 transition duration-200"
                        onClick={() => handleGalleryClick(gallery.title)}
                    >
                        <h2 className="text-xl font-semibold text-gray-800">{gallery.title}</h2>
                    </div>
                ))}
            </div>

            {/* Selected Gallery Images */}
            {selectedGallery && (
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">{selectedGallery.title}</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {selectedGallery.images.map((image) => (
                            <div key={image._id} className="relative group">
                                <img
                                    src={`http://localhost:5000${image.url}`}
                                    alt={image.title}
                                    className="w-full h-32 object-cover rounded-lg shadow-md"
                                />
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="bg-white px-4 py-2 rounded text-gray-800 hover:bg-gray-100 transition duration-200" onClick={() => handleDeleteImage(image._id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200" onClick={() => handleDeleteGallery(selectedGallery.title)}>Delete Gallery</button>
                </div>
            )}
        </div>
    );
};

export default GalleryManager;
