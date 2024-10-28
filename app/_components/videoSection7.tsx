import React from 'react';
import useWindowSize from '../_pages/mobileIdentifier';

interface VideoProps {
  path: string;
}

const SmallVideo: React.FC<VideoProps> = ({ path }) => {
  const size = useWindowSize();
  const isMobile = size.width <= 768;

  const videoWidth = isMobile ? 150 : 250;
  const videoHeight = isMobile ? 100 : 100;

  return (
    <div className='flex py-2 justify-center'>
      <video className='rounded-xl' 
      style={{ boxShadow: '6px 6px 0px 0px rgba(233, 153, 12, 1)' }}
        width={videoWidth}
        height={videoHeight}
        src={`${path}?autoplay=0`}
        controls
        title="YouTube video"
      ></video>
    </div>
  );
}

export default SmallVideo;
