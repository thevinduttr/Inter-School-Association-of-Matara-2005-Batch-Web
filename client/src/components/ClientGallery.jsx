import React, { useState, useEffect } from 'react';
import { getAllGalleries } from '../api/galleryApi';

const ClientGallery = () => {
    const [galleries, setGalleries] = useState([]);

    useEffect(() => {
        fetchAllGalleries();
    }, []);

    const fetchAllGalleries = async () => {
        try {
            const { data } = await getAllGalleries();
            setGalleries(data);
        } catch (error) {
            console.error("Error fetching galleries:", error);
        }
    };

    return (
        <div>
            <h1>All Galleries</h1>
            {galleries.length > 0 ? (
                galleries.map((gallery) => (
                    <div key={gallery._id} style={styles.galleryContainer}>
                        <h2>{gallery.title}</h2>
                        <div style={styles.galleryImages}>
                            {gallery.images.map((image) => (
                                <div key={image._id} style={styles.galleryItem}>
                                    <img src={`http://localhost:5000${image.url}`} alt={image.title} style={styles.image} />
                                    <p>{image.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>No galleries available.</p>
            )}
        </div>
    );
};

const styles = {
    galleryContainer: {
        marginBottom: '30px',
    },
    galleryImages: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
    },
    galleryItem: {
        border: '1px solid #ddd',
        padding: '10px',
        borderRadius: '5px',
        width: '150px',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '5px',
    },
};

export default ClientGallery;
