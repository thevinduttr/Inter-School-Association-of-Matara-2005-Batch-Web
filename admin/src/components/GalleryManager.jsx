import React, { useState } from 'react';
import { addImage, getGalleryByTitle, deleteImage, deleteGallery } from '../api/galleryApi';

const GalleryManager = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [gallery, setGallery] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', file);

        try {
            await addImage(formData);
            alert('Image added successfully');
        } catch (error) {
            console.error(error);
        }
    };

    const handleFetchGallery = async () => {
        try {
            const { data } = await getGalleryByTitle(title);
            setGallery(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <button type="submit">Add Image</button>
            </form>

            <button onClick={handleFetchGallery}>Fetch Gallery</button>
            {gallery && (
                <div>
                    <h3>{gallery.title}</h3>
                    {gallery.images.map((image) => (
                        <div key={image._id}>
                            <img src={`http://localhost:5000${image.url}`} alt={image.title} width="100" />
                            <button onClick={() => deleteImage(title, image._id)}>Delete Image</button>
                        </div>
                    ))}
                    <button onClick={() => deleteGallery(title)}>Delete Gallery</button>
                </div>
            )}
        </div>
    );
};

export default GalleryManager;
