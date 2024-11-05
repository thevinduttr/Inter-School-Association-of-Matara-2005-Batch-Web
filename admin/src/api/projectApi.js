// src/api/projectApi.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/projects';

export const addProject = (formData) => axios.post(API_BASE_URL, formData);
export const getProjects = () => axios.get(API_BASE_URL);
export const getProjectById = (id) => axios.get(`${API_BASE_URL}/${id}`);
export const updateProject = (id, formData) => axios.put(`${API_BASE_URL}/${id}`, formData);
export const deleteProject = (id) => axios.delete(`${API_BASE_URL}/${id}`);
