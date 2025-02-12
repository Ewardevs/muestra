import React from 'react'
import bioImg from '/public/images/bio-img.png'

export default function Biografia() {
  return (
    <section id="biografia" className="py-20 bg-gradient-to-b from-black to-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Biografía</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={bioImg}
          alt="Foto del artista"
          width={800}
          height={600}
          className="rounded-lg"
        />
        <div className="space-y-4">
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </p>
          <p className="text-gray-300">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
