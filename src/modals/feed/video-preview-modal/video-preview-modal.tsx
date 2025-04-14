import React, { FC } from 'react';
import VideoPlayer from '@/components/common/video-player/video-player';
import { DialogProps } from '@/types';
import Modal from '@/components/common/Modal';

interface VideoPreviewModalPros extends DialogProps {
  videoSrc: string;
  className?: string;
}

const VideoPreviewModal: FC<VideoPreviewModalPros> = ({
  open,
  onCloseModal,
  videoSrc,
  className,
}) => {
  const modalStyles = {
    modal: {
      maxHeight: '500px',
      height: '100%',
      borderRadius: '1rem',
      maxWidth: '800px',
      width: '100%',
    },
    closeIcon: {
      fill: '#fff',
    },
  };

  return (
    <Modal
      onClose={onCloseModal}
      open={open}
      styles={modalStyles}
      showCloseIcon={false}
    >
      <div className="relative bg-pure-black w-full h-full group">
        {/* <div className="absolute top-0 left-0 z-[10000] py-2 px-3 bg-pure-black right-0 text-pure-white transform opacity-80 -translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 shadow-sm shadow-pure-black flex-between">
          <div>Natural Beauty Here</div>
          <div className="bg-pure-white p-2 rounded-full">
            <CrossIcon color="#000" width={11} height={11} />
          </div>
        </div> */}
        <VideoPlayer
          src={videoSrc}
          className={`overflow-hidden shadow-lg w-full h-full ${className}`}
        />
      </div>
    </Modal>
  );
};

export default VideoPreviewModal;
