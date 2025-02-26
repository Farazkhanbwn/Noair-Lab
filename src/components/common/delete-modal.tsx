import { DialogProps } from '@/types';
import React from 'react';
import { Button } from '../ui/button';
import { DialogDescription, DialogTitle } from '../ui/dialog';
import { CustomModal } from './custom-modal';
import { X } from 'lucide-react';

interface DeleteModalProps extends DialogProps {
  headerTitle: string;
  description: string;
  btnCancelText: string;
  btnSubmitText: string;
  onSubmit: () => void;
}

function DeleteModal({
  open,
  onCloseModal,
  headerTitle,
  description,
  btnCancelText = 'Cancel',
  btnSubmitText = 'Delete',
  onSubmit,
}: DeleteModalProps) {
  return (
    <CustomModal
      isOpen={open}
      onClose={onCloseModal}
      dialogHeaderContent={
        <div className="w-full flex items-center justify-between">
          <DialogTitle className="text-xl font-bold">{headerTitle}</DialogTitle>
          <Button
            variant="default"
            size="icon"
            className="h-6 w-6 p-3 rounded-full shadow-none bg-light-grey hover:bg-stroke-grey"
            onClick={onCloseModal}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      }
      dialogBodyContent={
        <>
          <DialogDescription className="text-xs  text-black text-center">
            {description}
          </DialogDescription>
          <div className="flex w-full justify-center gap-3 mt-6">
            <Button
              variant="outline"
              onClick={onCloseModal}
              className="py-5 px-7 bg-light-grey border-none hover:bg-light-grey hover:text-secondary-grey text-secondary-grey font-semibold"
            >
              {btnCancelText}
            </Button>
            <Button
              onClick={onSubmit}
              className="bg-primary text-base font-semibold text-white hover:bg-primary py-5 px-7"
            >
              {btnSubmitText}
            </Button>
          </div>
        </>
      }
    />
  );
}

export default DeleteModal;
