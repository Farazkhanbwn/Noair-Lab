'use client';
import { CustomModal } from '@/components/common/custom-modal';
import { Button } from '@/components/ui/button';
import { DialogProps } from '@/types';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useCallback } from 'react';
import AddTopicContent from './components/AddTopicContent';
import { useRouter } from 'next/navigation';
import CrossIcon from '@/components/icons/cross-icon';

interface NewsAndInsightsModalProps extends DialogProps {
  postType: string | null;
  onBack: () => void;
}

function NewsAndInsightsModal(props: NewsAndInsightsModalProps) {
  const router = useRouter();

  const openTextFormattingCard = useCallback(() => {
    if (props.postType?.includes('scientific-documents')) {
      console.log('document is printed');
      router.push(`/feed?page=scientific-document`, { scroll: false });
    } else if (props.postType?.includes('documents')) {
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
            className="bg-light-grey rounded-full p-2.5 hover:bg-light-grey-100 transition-colors"
            onClick={props.onCloseModal}
          >
            <CrossIcon width={12} height={12} />
          </Button>
        </div>
      }
      dialogBodyContent={
        <>
          <AddTopicContent
            {...props}
            handleNext={openTextFormattingCard}
            onBack={props.onBack}
          />
        </>
      }
    />
  );
}

export default NewsAndInsightsModal;
