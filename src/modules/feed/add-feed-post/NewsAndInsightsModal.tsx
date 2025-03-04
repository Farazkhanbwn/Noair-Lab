'use client';
import { CustomModal } from '@/components/common/custom-modal';
import { Button } from '@/components/ui/button';
import { DialogProps } from '@/types';
import { DialogTitle } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import React, { useCallback } from 'react';
import AddTopicContent from './components/AddTopicContent';
import { useRouter } from 'next/navigation';

interface NewsAndInsightsModalProps extends DialogProps {
  postType: string | null;
}

function NewsAndInsightsModal(props: NewsAndInsightsModalProps) {
  const router = useRouter();

  const openTextFormattingCard = useCallback(() => {
    if (props.postType?.includes('documents')) {
      router.push(`/feed?page=add-post`, { scroll: false });
    } else {
      router.push(`/feed?page=text-formatting`, { scroll: false });
    }
  }, [props, router]);

  return (
    <CustomModal
      isOpen={props.open}
      className="max-w-[90%] md:max-w-[75%] xl:max-w-[50%] rounded-lg  overflow-hidden"
      onClose={props.onCloseModal}
      dialogHeaderContent={
        <div className="w-full flex items-center justify-between">
          <DialogTitle className="text-xl font-bold">
            Let’s Add Some Topics!
          </DialogTitle>
          <Button
            variant="default"
            size="icon"
            className="h-6 w-6 p-3 rounded-full shadow-none bg-light-grey hover:bg-stroke-grey"
            onClick={props.onCloseModal}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      }
      dialogBodyContent={
        <>
          <AddTopicContent {...props} handleNext={openTextFormattingCard} />
        </>
      }
    />
  );
}

export default NewsAndInsightsModal;
