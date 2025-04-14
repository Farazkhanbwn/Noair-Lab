import React, { FC } from 'react';
import Modal from '@/components/common/Modal';
import ModalHeader from '../modal-header';
import { CommentModalProps } from './comments.types';
import CommentItem from './components/comment-item';

const CommentModal: FC<CommentModalProps> = ({ isOpen, onClose, title }) => {
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
      <div className="p-3 bg-pure-white text-pure-black">
        <ModalHeader title={title} onClose={onClose} className="mb-2" />
        <hr className="border-t opacity-30 my-[1px]" />
        <div className="flex flex-col gap-3 my-4">
          {[...Array(4)].map((_, index) => (
            <CommentItem
              heading="Elmer Erdman"
              designation="Medical Researcher"
              description="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
              key={index}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default CommentModal;
