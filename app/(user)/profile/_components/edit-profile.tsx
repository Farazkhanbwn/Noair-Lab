'use client';

import { DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, X } from 'lucide-react';
import { CustomModal } from '@/components/common/custom-modal';
import Image from 'next/image';
import { useState } from 'react';
import EditIcon from '@/assets/svgs/EditIcon';

function EditProfile({
  open,
  onCloseModal,
}: {
  open: boolean;
  onCloseModal: () => void;
}) {
  const handleSave = () => {
    // Handle save logic here
    onCloseModal();
  };

  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  const handleRemove = () => {
    if (image) {
      URL.revokeObjectURL(image);
      setImage(null);
    }
  };

  const EditProfileContent = () => {
    return (
      <>
        <div className="flex flex-col gap-2 mt-5 relative">
          <div className="flex flex-col md:flex-row w-full justify-between items-start mb-3 md:mb-0">
            <span className="font-semibold">Profile Picture</span>
            <div
              className={`relative overflow-hidden w-64 h-64 m-9 mx-auto rounded-full bg-muted flex items-center justify-center`}
            >
              {image ? (
                <Image
                  src={image}
                  alt={'Profile picture'}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <label className="flex h-full w-full cursor-pointer items-center justify-center">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <Upload className="h-8 w-8" />
                    <span>Upload Profile Picture</span>
                  </div>
                </label>
              )}
            </div>
            <Button
              variant="outline"
              onClick={handleRemove}
              className="text-primary rounded-[10px] px-7 py-3 hover:text-primary"
            >
              <EditIcon className="fill-primary" />
              Edit Profile
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-base font-semibold ml-4">Name</label>
            <Input
              placeholder="Lewis Morissette"
              className="w-full bg-light-grey focus:border focus:border-input"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-base font-semibold ml-4">Profession</label>
            <Input
              placeholder="Environmental Scientist"
              className="w-full bg-light-grey focus:border focus:border-input"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-base font-semibold ml-4">
              Specialization
            </label>
            <Input
              placeholder="Climate Science"
              className="w-full bg-light-grey focus:border focus:border-input"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-base font-semibold ml-4">
              Current Employment
            </label>
            <Input
              placeholder="Northern University"
              className="w-full bg-light-grey focus:border focus:border-input"
            />
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
            Edit Your Profile
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
          <EditProfileContent />
        </>
      }
    />
  );
}

export default EditProfile;
