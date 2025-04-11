'use client';

import { useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Trash2, Upload, X } from 'lucide-react';
import EditIcon from '@/assets/svgs/EditIcon';
import { CustomModal } from '@/components/common/custom-modal';

interface CoverPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'cover' | 'profile'; // Determines layout
  onSubmit: (image: string) => void;
  headerTitle: string;
  image: string | null;
  setImage: (image: string | null) => void;
}

export default function CoverPhotoModal({
  isOpen,
  onClose,
  type,
  onSubmit,
  headerTitle,
  setImage,
  image,
}: CoverPhotoModalProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleRemove = useCallback(() => {
    if (image) {
      URL.revokeObjectURL(image);
      setImage(null);
    }
  }, [image, setImage]);

  const CoverPhotoModalContent = useMemo(() => {
    return (
      <div className="w-full max-w-full bg-white flex rounded-lg flex-col [&>button]:hidden">
        {/* Image Preview */}
        <div
          className={`relative overflow-hidden ${
            type === 'cover'
              ? 'aspect-[3/1] w-full rounded-md bg-muted'
              : 'w-64 h-64 m-9 mx-auto rounded-full bg-muted flex items-center justify-center'
          }`}
        >
          {image ? (
            <Image
              src={image}
              alt={type === 'cover' ? 'Cover photo' : 'Profile picture'}
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
                <span>
                  Upload {type === 'cover' ? 'Cover Photo' : 'Profile Picture'}
                </span>
              </div>
            </label>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row justify-end gap-2 mt-8 md:mt-16">
          <Button
            variant="outline"
            onClick={handleRemove}
            className="text-primary rounded-[10px] px-7 py-3"
          >
            <Trash2 />
            Remove
          </Button>
          <Button
            variant={'secondary'}
            onClick={() => onSubmit(image ?? "")}
            className="text-white rounded-[10px] px-7 py-3 bg-primary flex items-center justify-center hover:bg-primary"
          >
            <EditIcon />
            Edit Profile
          </Button>
        </div>
      </div>
    );
  }, [type, image, handleRemove, onSubmit]);

  return (
    <CustomModal
      isOpen={isOpen}
      className="max-w-[90%] md:max-w-[75%] xl:max-w-[80%] rounded-lg min-h-[40vh] max-h-[90vh] overflow-y-auto"
      onClose={onClose}
      dialogHeaderContent={
        <div className="w-full flex items-center justify-between">
          <span className="text-md font-bold">{headerTitle}</span>
          <Button
            variant="default"
            size="icon"
            className="h-6 w-6 rounded-full shadow-none bg-light-grey hover:bg-stroke-grey"
            onClick={onClose}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      }
      dialogBodyContent={<>{CoverPhotoModalContent}</>}
    />
  );
}
