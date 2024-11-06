//src/api/galleryApi.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/gallery';

// Fetch all galleries
export const getAllGalleries = async () => {
    return axios.get(API_BASE_URL);
};

// Fetch images by gallery title
export const getGalleryByTitle = async (title) => {
    return axios.get(`${API_BASE_URL}/${title}`);
};

export const addImage = (formData) => axios.post(`${API_BASE_URL}/add-image`, formData);
// export const getAllGalleries = () => axios.get(API_BASE_URL); // New function for fetching all galleries
// export const getGalleryByTitle = (title) => axios.get(`${API_BASE_URL}/${title}`);
export const deleteImage = (title, imageId) => axios.delete(`${API_BASE_URL}/${title}/${imageId}`);
export const deleteGallery = (title) => axios.delete(`${API_BASE_URL}/${title}`);
