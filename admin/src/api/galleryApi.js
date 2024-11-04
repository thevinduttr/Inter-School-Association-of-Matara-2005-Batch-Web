import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/gallery';

export const addImage = (formData) => axios.post(`${API_BASE_URL}/add-image`, formData);
export const getGalleryByTitle = (title) => axios.get(`${API_BASE_URL}/${title}`);
export const deleteImage = (title, imageId) => axios.delete(`${API_BASE_URL}/${title}/${imageId}`);
export const deleteGallery = (title) => axios.delete(`${API_BASE_URL}/${title}`);
