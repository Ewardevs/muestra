import React from 'react'
import { Phone } from 'lucide-react'
import useVisibility from '../hooks/IntersectionObserver'

export default function WhatsAppIcon() {
  const isVisible = useVisibility()
  return (
    <>
      {!isVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
          }}
        >
          <a
            href="https://wa.me/+595981194444"  // Cambia con tu número de WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden inline-flex items-center px-4 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
          >
            <Phone />
          </a>
        </div>
      )}
    </>
  )
}
