import React from 'react'
import images from '/public/data/images.json'

export default function Galery() {
  return (
    <section id="galeria" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Galería</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
            {images.map((image,i) => (
              <img
                key={i}
                src={image.url}
                alt={image.name}
                width={400}
                height={400}
                className="rounded-lg hover:opacity-75 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>
  )
}
