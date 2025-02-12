import React from 'react'
import {Phone} from "lucide-react"

export default function Cta() {
    return (
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para contratar?</h2>
                <p className="text-xl text-gray-300 mb-8">Contáctanos ahora para reservar tu fecha</p>
                <a  
                    id="contact-button"
                    href="www.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-4xl hover:bg-green-700 transition duration-300"
                >
                    <Phone className="mr-2 h-5 w-5" />
                    Contratar Ahora
                </a>
            </div>
        </section>
    )
}
