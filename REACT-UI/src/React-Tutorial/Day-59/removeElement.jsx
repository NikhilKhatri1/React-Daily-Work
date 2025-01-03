import React, { useState } from 'react';

const links = ["https://bit.ly/3xXPxPR", "https://bit.ly/4de3sQr"];

const ImageGallery = () => {
    const [images, setImages] = useState(links);

    const handleRemove = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
        
    };

    return (
        <div>
            {images.map((link, index) => (
                link !== null && (  // Only render non-null images
                    <div className="image" key={index}>
                        <img src={link} alt={`${index}`} />
                        <button className="remove" onClick={() => handleRemove(index)}>
                            X
                        </button>
                    </div>
                )
            ))}
        </div>
    );
};

export default ImageGallery;

