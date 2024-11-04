const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config');
const galleryRoutes = require('./routes/galleryRoutes');
const projectRoutes = require('./routes/projectRoutes');
require('dotenv').config();

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); // Serve uploaded images
app.use('/api/gallery', galleryRoutes);
app.use('/api/projects', projectRoutes); // <-- Project routes added

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
