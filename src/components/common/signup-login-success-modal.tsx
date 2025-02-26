import { CustomModal } from '@/components/common/custom-modal';
import { Button } from '@/components/ui/button';
import { DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { DialogProps } from '@/types';
import { X } from 'lucide-react';
import React from 'react';

interface ConfirmationModalProps extends DialogProps {
  title: string;
  description: string;
  onSubmit: () => void;
  btnText?: string;
}

function ConfirmationModal({
  open,
  onCloseModal,
  title,
  description,
  onSubmit,
  btnText = 'Continue',
}: ConfirmationModalProps) {
  return (
    <CustomModal
      isOpen={open}
      onClose={onCloseModal}
      dialogHeaderContent={
        <>
          <div className="w-full flex items-center justify-between">
            <DialogTitle className="text-xl text-center font-bold">
              {title}
            </DialogTitle>
            <Button
              variant="default"
              size="icon"
              className="h-6 w-6 p-3 rounded-full shadow-none bg-light-grey hover:bg-stroke-grey"
              onClick={onCloseModal}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </>
      }
      dialogBodyContent={
        <div className="flex w-full flex-col items-center">
          <DialogDescription className="text-xs w-full md:w-3/4 text-black text-center">
            {description}
          </DialogDescription>
          <div className="flex w-full justify-center gap-3 mt-6">
            <Button
              onClick={onSubmit}
              className="bg-primary text-base font-semibold text-white hover:bg-primary py-5 px-7"
            >
              {btnText}
            </Button>
          </div>
        </div>
      }
    />
  );
}

export default ConfirmationModal;
