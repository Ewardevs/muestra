import React from 'react'

export default function Nav() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Juan Gabriel PY</h1>
            <div className="hidden md:flex gap-6">
              <a href="#biografia" className="hover:text-primary transition-colors">
                Biografía
              </a>
              <a href="#galeria" className="hover:text-primary transition-colors">
                Galería
              </a>
              <a href="#videos" className="hover:text-primary transition-colors">
                Videos
              </a>
              <a href="#musica" className="hover:text-primary transition-colors">
                Música
              </a>
            </div>
          </nav>
        </div>
      </header>
  )
}
