'use client';

import { FC, useState } from 'react';
import ProgressSteps from '@/components/common/progress-steps/progress-steps';
import AccessOption from '../components/access-option';
import { COMMUNITY_ACCESS_OPTIONS } from '../communities.constants';
import { AccessLevel, CommunityAccessModalProps } from '../communities.types';
import CommunityModalLayout from '../community.layout';
import { Upload } from 'lucide-react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import { Switch } from '@/components/ui/switch';

const CommunityAccessModal: FC<CommunityAccessModalProps> = ({
  isOpen,
  onClose,
  onNextButton,
}) => {
  const [selectedAccess, setSelectedAccess] = useState<AccessLevel>('public');
  const [isEnabled, setIsEnabled] = useState(false);
  const [icon, setIcon] = useState<File | null>(null);

  const handleIconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setIcon(file);
  };

  return (
    <CommunityModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Who Can Join Your Community?"
      onNext={onNextButton}
      onBack={() => console.log('back button clicked')}
    >
      {/* Progress Steps */}
      <ProgressSteps
        steps={4}
        currentStep={4}
        classNames="max-w-[14rem] mx-auto mb-4"
      />

      {/* Access Options */}
      <div className="space-y-2">
        {COMMUNITY_ACCESS_OPTIONS.map(option => (
          <AccessOption
            key={option.id}
            icon={option.icon}
            title={option.title}
            description={option.description}
            selected={selectedAccess === option.id}
            onClick={() => setSelectedAccess(option.id)}
          />
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex gap-2 ml-2 mt-2">
          <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
          <h3 className="heading-secondary font-semibold">Group Chat</h3>
        </div>

        {isEnabled && (
          <div>
            {/* icon upload */}
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
                    <Upload className="w-4 h-4" />
                  )}
                </div>
                <p className="text-sm text-center">Click to Upload Your Icon</p>
              </label>
            </div>
            <input
              name="groupName"
              placeholder="Group Name"
              className="!border-secondary-grey rounded-md text-description outline-none max-w-[21rem] bg-light-grey focus:border-primary-grey p-2 mt-3"
            />
          </div>
        )}
      </div>
    </CommunityModalLayout>
  );
};

export default CommunityAccessModal;
