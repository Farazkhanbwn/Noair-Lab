import { CustomModal } from '@/components/common/custom-modal';
import CrossIcon from '@/components/icons/cross-icon';
import { Button } from '@/components/ui/button';
import { DialogProps } from '@/types';
import { DialogTitle } from '@radix-ui/react-dialog';
import React from 'react';
import ChooseCategoryContent from './components/ChooseCategoryContent';

interface ChooseCategoryModalProps extends DialogProps {
  postType: string | null;
  onNext?: (post: string | null) => void;
}

function ChooseCategoryModal(props: ChooseCategoryModalProps) {
  return (
    <CustomModal
      isOpen={props.open}
      className="max-w-[90%] md:max-w-[75%] lg:max-w-[55%] xl:max-w-[50%] 2xl:max-w-[40%] rounded-lg  overflow-hidden p-0"
      onClose={props.onCloseModal}
      bodyClassName="p-0"
      dialogHeaderContent={
        <div className="w-full flex items-center justify-between p-3 md:p-6">
          <DialogTitle className="text-lg md:text-xl flex-1 items-center justify-start md:justify-center flex font-bold">
            Choose What to Create
          </DialogTitle>
          <Button
            variant="default"
            size="icon"
            className="bg-light-grey rounded-full p-1 md:p-2.5 hover:bg-light-grey-100 transition-colors"
            onClick={props.onCloseModal}
          >
            <CrossIcon width={12} height={12} />
          </Button>
        </div>
      }
      dialogBodyContent={
        <>
          <ChooseCategoryContent {...props} onNext={props.onNext} />
        </>
      }
    />
  );
}

export default ChooseCategoryModal;
