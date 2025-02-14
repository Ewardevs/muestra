import React, { useState } from 'react';
import AudioPlayer from './music/Player';
import audio1 from "/public/music/1.mp3";
import audio2 from "/public/music/2.mp3";
import audio3 from "/public/music/3.mp3";
import images from '/public/data/images.json';

export default function MusicSection() {
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const handlePlay = (index) => {
    setCurrentPlaying(index);
  };

  return (
    <div className="">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Canciones</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-40'>
        <AudioPlayer
          audioUrl={audio1}
          coverImage={images[2].url}
          title={"Nuestro amor es oro "}
          isPlaying={currentPlaying === 0}
          onPlay={() => handlePlay(0)}
        />
        <AudioPlayer
          audioUrl={audio2}
          coverImage={images[5].url}
          title={"Te amo"}
          isPlaying={currentPlaying === 1}
          onPlay={() => handlePlay(1)}
        />
        <AudioPlayer
          audioUrl={audio3}
          coverImage={images[0].url}
          title={"Casarme contigo"}
          isPlaying={currentPlaying === 2}
          onPlay={() => handlePlay(2)}
        />
      </div>
    </div>
  );
}
