import React, { FC, useState } from 'react';
import { Upload } from 'lucide-react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import ProgressSteps from '@/components/common/progress-steps/progress-steps';
import { CommunityMediaModalProps } from '../communities.types';
import CommunityModalLayout from '../community.layout';

const CommunityMediaModal: FC<CommunityMediaModalProps> = ({
  isOpen,
  onClose,
  onNextButton,
  onBackButton,
}) => {
  const [icon, setIcon] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null);

  const handleIconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setIcon(file);
  };

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setBanner(file);
  };

  return (
    <CommunityModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Empower Your Community"
      onNext={onNextButton}
      onBack={onBackButton}
    >
      <ProgressSteps
        steps={4}
        currentStep={2}
        classNames="max-w-[14rem] mx-auto mb-4"
      />

      <h3 className="heading-secondary font-semibold mb-2">
        Upload Your Community Icon or Banner
      </h3>
      <div className="flex flex-col gap-3">
        <div>
          <label className="cursor-pointer flex items-center gap-3">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleIconUpload}
            />
            <div className="w-11 h-11 rounded-full border bg-light-grey border-primary-grey flex items-center justify-center text-pure-black">
              {icon ? (
                <div className="bg-light-grey h-full rounded-full overflow-hidden">
                  <PrimaryImage
                    src={URL.createObjectURL(icon) || '/placeholder.svg'}
                    alt="Community icon"
                    width={42}
                    height={42}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div>
                  <Upload className="w-4 h-4" />
                </div>
              )}
            </div>
            <p className="text-sm text-center">Click to Upload Your Icon</p>
          </label>
        </div>

        {/* Banner Upload */}
        <div>
          <label className="cursor-pointer block">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleBannerUpload}
            />
            <div className="h-36 max-w-[21rem] bg-light-grey rounded-lg border border-primary-grey flex flex-col text-pure-black items-center justify-center ">
              {banner ? (
                <div className="h-full rounded-lg overflow-hidden">
                  <PrimaryImage
                    src={URL.createObjectURL(banner) || '/placeholder.svg'}
                    alt="Community banner"
                    width={400}
                    height={140}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <>
                  <Upload className="w-6 h-6" />
                  <p className="mt-2 text-sm">Click to Upload Your Banner</p>
                </>
              )}
            </div>
          </label>
        </div>
      </div>
    </CommunityModalLayout>
  );
};

export default CommunityMediaModal;
