'use client';

import { FC } from 'react';
import CustomButton from '@/components/common/custom-button/custom-button';
import Modal from '@/components/common/Modal';
import ProgressSteps from '@/components/common/progress-steps/progress-steps';
import { CommunitySuccessModalProps } from '../communities.types';
import CommunityModalHeader from '../components/community-header';

const CommunitySuccessModal: FC<CommunitySuccessModalProps> = ({
  isOpen,
  onClose,
  onViewCommunity,
}) => {
  const modalStyles = {
    modal: {
      maxHeight: '600px',
      borderRadius: '1rem',
      maxWidth: '25rem',
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
      <div>
        <CommunityModalHeader onClose={onClose} classNames="mb-4" />

        {/* Progress Steps */}
        <ProgressSteps
          steps={4}
          currentStep={5}
          classNames="max-w-[14rem] mx-auto mb-4"
        />

        {/* Success Message */}
        <div className="mb-6 text-center">
          <h2 className="text-description">
            You ve successfully created your community
          </h2>
        </div>

        {/* Action Button */}
        <div className="text-center mb-4">
          <CustomButton
            className="!px-4 font-semibold"
            onClick={onViewCommunity}
          >
            View Community
          </CustomButton>
        </div>
      </div>
    </Modal>
  );
};

export default CommunitySuccessModal;
