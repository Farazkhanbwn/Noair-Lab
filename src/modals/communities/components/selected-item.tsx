import { FC } from 'react';
import CrossIcon from '@/components/icons/cross-icon';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';

interface SelectedTopicProps {
  label: string;
  onRemove: () => void;
}

const SelectedTopic: FC<SelectedTopicProps> = ({ label, onRemove }) => {
  return (
    <div className="flex items-center gap-1 rounded-full bg-light-blue px-4 py-2 text-description font-medium text-primary-grey">
      <span>{label}</span>
      <CustomButton
        styleType={CustomButtonTypes.TERTIARY}
        onClick={onRemove}
        className="ml-1 rounded-full  hover:bg-light-grey-100 p-1"
      >
        <CrossIcon strokeWidth={5} width={6} height={6} />
      </CustomButton>
    </div>
  );
};

export default SelectedTopic;
