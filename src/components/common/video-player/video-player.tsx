import PlayIcon from '@/components/icons/user/feed/play-icon';
import React, { useState, useRef, FC } from 'react';

type VideoPlayerProps = {
  src: string;
  thumbnail?: string;
  className?: string;
};

const VideoPlayer: FC<VideoPlayerProps> = ({ src, className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle play event
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video with poster */}
      <video
        ref={videoRef}
        src={src}
        controls={isPlaying}
        className="w-full h-full object-cover"
      />

      {/* Play button overlay */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
        >
          <PlayIcon className="h-16 w-16 text-white" />
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
