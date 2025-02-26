'use client';

import { DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, X } from 'lucide-react';
import { useState } from 'react';
import { CustomModal } from '@/components/common/custom-modal';

interface PortfolioLink {
  platform: string;
  url: string;
}

function AddPortfolioLink({
  open,
  onCloseModal,
}: {
  open: boolean;
  onCloseModal: () => void;
}) {
  const [links, setLinks] = useState<PortfolioLink[]>([
    { platform: 'Behance', url: 'https://known-steeple.biz/' },
    { platform: 'LinkedIn', url: 'https://known-steeple.biz/' },
    { platform: 'GitHub', url: 'https://known-steeple.biz/' },
    { platform: 'Research Gate', url: 'https://known-steeple.biz/' },
  ]);
  const handleSave = () => {
    // Handle save logic here
    onCloseModal();
  };

  const handleDelete = (platform: string) => {
    setLinks(links.filter(link => link.platform !== platform));
  };

  const PortfolioContent = () => {
    return (
      <>
        <div className="space-y-6 mt-5">
          <div className="space-y-2">
            <label className="text-base font-semibold ml-4">Add new Link</label>
            <Input
              placeholder="Ex: Add Link here"
              className="w-full bg-light-grey focus:border focus:border-input"
            />
          </div>

          <div className="space-y-2">
            <div className="text-base font-semibold ml-4 mb-3">Other Links</div>
            {links.map(link => (
              <div key={link.platform} className="flex flex-col gap-2">
                <label className="text-sm font-medium ml-4">
                  {link.platform}
                </label>
                <div className="flex gap-2">
                  <div className="relative w-full">
                    <Input
                      className="bg-light-grey pr-10 focus:border focus:border-input w-full"
                      placeholder="Enter text"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(link.platform)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 -mt-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-start gap-3 mt-4">
          <Button
            variant="outline"
            onClick={() => {
              handleSave();
            }}
            className="py-5 px-7 bg-light-grey border-none hover:bg-light-grey hover:text-secondary-grey text-secondary-grey font-semibold"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleSave();
            }}
            className="bg-primary text-base font-semibold text-white hover:bg-primary py-5 px-7"
          >
            Save
          </Button>
        </div>
      </>
    );
  };
  return (
    <CustomModal
      isOpen={open}
      className="max-w-[90%] md:max-w-[75%] xl:max-w-[50%] rounded-lg min-h-[40vh] max-h-[90vh] overflow-y-auto"
      onClose={onCloseModal}
      dialogHeaderContent={
        <div className="w-full flex items-center justify-between">
          <DialogTitle className="text-xl font-bold">
            Add Your Portfolio Link
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
      }
      dialogBodyContent={
        <>
          <PortfolioContent />
        </>
      }
    />
  );
}

export default AddPortfolioLink;
