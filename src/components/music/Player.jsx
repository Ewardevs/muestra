import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6';

const AudioPlayer = ({ audioUrl, title, coverImage, isPlaying, onPlay }) => {


  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [seeking, setSeeking] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    audio.addEventListener('timeupdate', () => {
      if (!seeking) setCurrentTime(audio.currentTime);
    });
    return () => {
      audio.removeEventListener('loadedmetadata', () => {});
      audio.removeEventListener('timeupdate', () => {});
    };
    
  }, [seeking]);
  useEffect(() => {
    if (!isPlaying) {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      onPlay(); // Notifica al padre para detener otros audios
      audioRef.current.play();
    }
  };

  const handleSeekChange = (e) => {
    setCurrentTime(e.target.value);
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = (e) => {
    setSeeking(false);
    audioRef.current.currentTime = e.target.value;
  };

  const handleVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-lg p-6">
      <audio ref={audioRef} src={audioUrl} />

      <div className="flex items-center space-x-4 mb-6">
        <img
          src={coverImage || 'https://placehold.co/200x200?text=No+Cover'}
          alt={`Cover for ${title}`}
          className="w-24 h-24 rounded-lg object-cover shadow-lg"
        />
        <h2 className="text-white text-xl font-semibold">{title}</h2>
      </div>

      <div className="flex flex-col space-y-4">
        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          step="0.1"
          onChange={handleSeekChange}
          onMouseDown={handleSeekMouseDown}
          onMouseUp={handleSeekMouseUp}
          className="w-full cursor-pointer"
        />

        {/* Time Display */}
        <div className="flex justify-between text-sm text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={togglePlay}
            className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            {isPlaying ? <FaPause className="text-white w-4 h-4" /> : <FaPlay className="text-white w-4 h-4" />}
          </button>

          <div className="flex items-center space-x-4">
            <button onClick={toggleMute} className="text-gray-400 hover:text-white transition-colors">
              {isMuted ? <FaVolumeXmark className="w-5 h-5" /> : <FaVolumeHigh className="w-5 h-5" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolume}
              className="w-24 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
