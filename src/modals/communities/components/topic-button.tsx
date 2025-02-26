import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';

interface TopicButtonProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export function TopicButton({ label, selected, onClick }: TopicButtonProps) {
  return (
    <CustomButton
      styleType={CustomButtonTypes.TERTIARY}
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-description font-medium transition-colors
          ${selected ? 'bg-light-blue text-primary-grey' : 'bg-light-grey text-gray-700 hover:bg-light-grey-100'}`}
    >
      {label}
    </CustomButton>
  );
}
