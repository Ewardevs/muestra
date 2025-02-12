import React from 'react'
import videos from '../../public/data/videos.json'

export default function Videos() {
    return (
        <section id="videos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Videos</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Reemplazar los src con los IDs reales de YouTube */}
                    {videos.map((video, i) => (

                        <div key={i} className="aspect-video my-10">
                            <iframe
                                
                                className="w-full h-full rounded-lg"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
