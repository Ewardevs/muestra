import React from 'react'
import { Phone } from "lucide-react"
import img from "../../public/images/bio-img.png"

export default function Hero() {
    const whatsappNumber = "+595981194444"
    const whatsappMessage = "Hola, me interesa contratar tus servicios"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    return (
        <section id="inicio" className="relative h-screen">
            <img
                src={img}
                className="object-cover w-full h-full"
                alt="Fondo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Juan Gabriel PY</h1>
                    <p className="text-xl md:text-2xl text-gray-300">Cantante • Compositor • Artista</p>
                    <a
                        id="contact-button"
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-4xl hover:bg-green-700 transition duration-300"
                    >
                        <Phone className="mr-2 h-5 w-5" />
                        Contratar Ahora
                    </a>
                </div>
            </div>
        </section>


    )
}
