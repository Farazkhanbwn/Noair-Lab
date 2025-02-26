import { FC } from 'react';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import { IconProps } from '@/components/icons/app-icon.types';

interface AccessOptionProps {
  icon: FC<IconProps>;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
  classNames?: string;
}

const AccessOption: FC<AccessOptionProps> = ({
  icon: Icon,
  title,
  description,
  selected,
  onClick,
  classNames,
}) => {
  return (
    <CustomButton
      styleType={CustomButtonTypes.TERTIARY}
      onClick={onClick}
      className={`flex items-center w-full gap-4 rounded-lg px-4 py-3 text-left transition-colors
        ${selected ? 'bg-blue-50' : 'hover:bg-gray-50'} ${classNames}`}
    >
      <div
        className={`rounded-md ${selected ? 'text-blue-600' : ' text-gray-600'}`}
      >
        <Icon
          className={`h-5 w-5 ${selected ? 'text-blue-600' : 'text-gray-600'}`}
          fillColor={selected ? '#0029FA' : '#A1A1A1'} // Change fill color
          strokeColor={selected ? '#EDF5FF' : '#D1D5DB'} // Change stroke color
          strokeWidth={2}
        />
      </div>
      <div className="flex-1">
        <h3 className="heading-secondary font-semibold text-pure-black">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex h-4 w-4 items-center justify-center">
        <div
          className={`h-4 w-4 flex-center rounded-full border ${selected ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`}
        >
          {selected && (
            <div className="h-3 w-3 rounded-full bg-primary-color border-2 border-pure-white" />
          )}
        </div>
      </div>
    </CustomButton>
  );
};

export default AccessOption;
