'use client';

import React, { FC, PropsWithChildren } from 'react';
import Modal from '@/components/common/modal';
import CustomButton from '@/components/common/custom-button/custom-button';
import ModalHeader from '@/modals/modal-header';
import { ImageIcon, Type, Video } from 'lucide-react';
import { PostType } from '@/types';
import PostTypeButton from '../post-type-button';

interface CreatePostModalLayoutProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  onPost?: () => void;
  classNames?: string;
  selectedType: PostType;
  handleSelectType: (post: PostType) => void;
}

const CreatePostModalLayout: FC<CreatePostModalLayoutProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onPost,
  selectedType,
  handleSelectType,
  classNames,
}) => {
  const modalStyles = {
    modal: {
      maxHeight: '520px',
      height: '100%',
      borderRadius: '1rem',
      maxWidth: '60rem',
      backgroundColor: '#fff',
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
      <div className={`h-full flex flex-col justify-between ${classNames}`}>
        {/* Header */}
        <div>
          <ModalHeader title={title} onClose={onClose} className="p-3" />
          <hr className="border-t border-light-grey opacity-10 my-[1px]" />
        </div>

        <div className="px-3 sm:px-6 h-full">{children}</div>

        <div>
          <div className="flex items-center gap-1 my-2 px-6">
            <div className="flex gap-2">
              <PostTypeButton
                icon={Type}
                label="Add Text"
                isActive={selectedType === PostType.Text}
                onClick={() => handleSelectType(PostType.Text)}
              />

              <PostTypeButton
                icon={ImageIcon}
                label="Add Image"
                isActive={selectedType === PostType.Image}
                onClick={() => handleSelectType(PostType.Image)}
              />

              <PostTypeButton
                icon={Video}
                label="Add Video"
                isActive={selectedType === PostType.Video}
                onClick={() => handleSelectType(PostType.Video)}
              />
            </div>
          </div>

          {/* Footer */}
          <hr className="border-t border-stroke-grey" />

          <div className="flex items-center justify-end gap-3 my-3 mr-6">
            {onPost && (
              <CustomButton
                className="!bg-stroke-grey hover:!bg-[#9a9a9a] !font-semibold"
                onClick={onPost}
              >
                Post
              </CustomButton>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePostModalLayout;
