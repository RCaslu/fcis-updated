import React from 'react';
import useWindowSize from '../_pages/mobileIdentifier';

interface VideoProps {
  path: string;
}

const Video: React.FC<VideoProps> = ({ path }) => {
  const size = useWindowSize();
  const isMobile = size.width <= 768;

  const videoWidth = isMobile ? 300 : 700;
  const videoHeight = isMobile ? 200 : 400;

  return (
    <div className='flex py-2 justify-center'>
      <iframe className='rounded-xl' 
      style={{ boxShadow: '6px 6px 0px 0px rgba(233, 153, 12, 1)' }}
        width={videoWidth}
        height={videoHeight}
        src={path}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
}

export default Video;
