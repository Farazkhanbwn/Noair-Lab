import Modal from '@/components/common/modal';
import React, { FC } from 'react';

interface ShareModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: FC<ShareModalProps> = ({ isOpen, onClose }) => {
  // const footer = (
  //   <div className="flex justify-between items-center border-t border-light-grey p-5">
  //     <button className="px-5 py-2 flex items-center gap-x-2 bg-light-grey text-secondary-grey font-semibold rounded-full hover:bg-light-grey-50 transition-colors">
  //       <img src="/chain.svg" alt="chain icon" />
  //       Copy link
  //     </button>
  //     <button className="px-6 py-2 bg-primary-color text-white font-semibold rounded-full hover:bg-gray-400 transition-colors">
  //       Share
  //     </button>
  //   </div>
  // );

  const modalStyles = {
    modal: {
      maxHeight: '600px',
      borderRadius: '1rem',
      maxWidth: '45rem',
    },
    closeIcon: {
      fill: '#fff',
    },
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      styles={modalStyles}
      showCloseIcon={false}
    >
      <div className="p-5 bg-pure-white text-pure-black">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex justify-between items-center py-3">
            <div key={i} className="flex items-center gap-x-5">
              <img
                src="/profile.png"
                alt="Connection"
                className="rounded-full w-12 h-12"
              />
              <div>
                <p className="font-semibold">Lewis Morissette</p>
                <p className="text-[10px]">Research Assistant</p>
              </div>
            </div>
            <input
              checked
              id="checkbox"
              type="checkbox"
              className="w-5 h-5 text-primary-color bg-transparent border-secondary-grey rounded checked:bg-primary-color mb-0"
            />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ShareModal;
