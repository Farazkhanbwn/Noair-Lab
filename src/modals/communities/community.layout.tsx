'use client';

import { FC, ReactNode } from 'react';
import Modal from '@/components/common/Modal';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import CommunityModalHeader from './components/community-header';

interface CommunityModalLayoutProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  onBack?: () => void;
  onNext?: () => void;
}

const CommunityModalLayout: FC<CommunityModalLayoutProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  onBack,
  onNext,
}) => {
  const modalStyles = {
    modal: {
      maxHeight: '600px',
      borderRadius: '1rem',
      maxWidth: '40rem',
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
        {/* Header */}
        <CommunityModalHeader
          description={description}
          title={title}
          onClose={onClose}
        />

        <hr className="border-t-2 border-light-grey my-3" />

        <div className="px-3 sm:px-6">{children}</div>

        {/* Footer */}

        {(onBack || onNext) && (
          <div className="flex items-center gap-3 my-3 ml-6">
            {onBack && (
              <CustomButton
                styleType={CustomButtonTypes.TERTIARY}
                className="bg-light-grey rounded-md px-8 py-2 font-semibold text-secondary-grey hover:bg-light-grey-100 transition-colors duration-200"
                onClick={onBack}
              >
                Back
              </CustomButton>
            )}
            {onNext && <CustomButton onClick={onNext}>Next</CustomButton>}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CommunityModalLayout;
