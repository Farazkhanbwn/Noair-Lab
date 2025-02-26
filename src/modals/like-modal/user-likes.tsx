import React, { FC } from 'react';
import Modal from '@/components/common/modal';
import ModalHeader from '../modal-header';
import UserCard from '@/components/dashboard/components/user-card/user-card';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';

interface LikeModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LikesModal: FC<LikeModalProps> = ({ title, isOpen, onClose }) => {
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
      <div className="bg-pure-white text-pure-black py-2 px-3">
        <ModalHeader title={title} onClose={onClose} className="p-2" />
        <hr className="border-t opacity-30 my-[1px]" />
        <div className="flex flex-col gap-3 my-4 px-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex justify-between items-start">
              <UserCard
                userImage={'/images/feed-profile.png'}
                name={'Lewis Morissette'}
                role={'Research Assistant at Yale University'}
                mutual={2}
                followers="1.2k"
              />
              <CustomButton
                styleType={CustomButtonTypes.SECONDARY}
                className="heading-tertiary font-semibold rounded-[20px] px-3.5 py-1"
              >
                Follow
              </CustomButton>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default LikesModal;
