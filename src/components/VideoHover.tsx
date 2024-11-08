import React, { useRef, useState } from 'react';

interface VideoHoverProps {
  src: string;
  width?: string;
  height?: string;
}

const VideoHover: React.FC<VideoHoverProps> = ({ src, width = 'w-64', height = 'h-48' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className={`video-container relative ${width} ${height} overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video 
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        loop
        muted
        playsInline
      />
      {!isHovering && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <span className="text-white">Hover to play</span>
        </div>
      )}
    </div>
  );
};

export default VideoHover;