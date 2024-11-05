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
