import { useState, useEffect } from 'react'

const useVisibility = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1, ...options }  // Umbral de visibilidad, ajusta según lo necesites
    )

    const element = document.getElementById('contact-button')  // El componente que quieres observar
    
    if (element || element2) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options])

  return isVisible
}

export default useVisibility
