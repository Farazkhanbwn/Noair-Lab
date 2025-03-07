import React, { FC } from 'react';
import ModalHeader from '../modal-header';
import { DialogProps } from '@/types';
import Modal from '@/components/common/modal';
import UserCard from '@/components/dashboard/components/user-card/user-card';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import Link from '@/components/common/custom-link/custom-link';

interface FollowerModalProps extends DialogProps {
  title?: string;
}

const FollowerModal: FC<FollowerModalProps> = ({
  open,
  onCloseModal,
  title,
}) => {
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
      open={open}
      onClose={onCloseModal}
      styles={modalStyles}
      showCloseIcon={false}
    >
      <div className="bg-pure-white text-pure-black py-2 px-3">
        <ModalHeader title={title} onClose={onCloseModal} className="p-2" />
        <hr className="border-t opacity-30 my-[1px]" />

        <div className="flex flex-col gap-3 mt-3 mb-2 px-2">
          <p className="heading-tertiary mb-4">05 peoples are following you</p>
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
                styleType={
                  i === 3
                    ? CustomButtonTypes.PRIMARY
                    : CustomButtonTypes.SECONDARY
                }
                className="heading-tertiary font-semibold rounded-[20px] !px-3.5 !py-1 border border-primary"
              >
                {i === 3 ? 'Following' : 'Follow'}
              </CustomButton>
            </div>
          ))}

          <hr />

          <div className="text-center heading-tertiary">
            <Link href="#" className="text-pure-black">
              See All Members
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FollowerModal;
