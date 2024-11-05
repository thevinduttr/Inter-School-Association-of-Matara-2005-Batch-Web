// src/api/projectApi.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/projects';

export const getProjects = async () => {
    return axios.get(API_BASE_URL);
};
