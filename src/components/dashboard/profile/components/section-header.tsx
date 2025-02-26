import { PlusIcon, PencilIcon } from 'lucide-react';
import { SectionProps } from '../../../../modules/(user)/profile/profile.types';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';

export function SectionHeader({ title, onAdd, onEdit }: SectionProps) {
  return (
    <div className="flex-between">
      <h2 className="heading-secondary sm:text-xl font-semibold">{title}</h2>
      <div className="flex-center gap-2">
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          onClick={onAdd}
          className="p-2 bg-light-grey hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Add new item"
        >
          <PlusIcon className="w-4 h-4" />
        </CustomButton>
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          onClick={onEdit}
          className="p-2 bg-light-grey hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Edit section"
        >
          <PencilIcon className="w-4 h-4 text-pure-black" />
        </CustomButton>
      </div>
    </div>
  );
}
