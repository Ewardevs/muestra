import React, { useState } from 'react';
import images from '/public/data/images.json';

export default function Galery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const isMobile = () => window.innerWidth <= 768;

  const handleImageClick = (image) => {
    if (isMobile()) {
      setSelectedImage(image);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="galeria" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Galería</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
          {images.map((image, i) => (
            <img
              key={i}
              src={image.url}
              alt={image.name}
              width={400}
              height={400}
              className="rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage.url}
            alt={selectedImage.name}
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
