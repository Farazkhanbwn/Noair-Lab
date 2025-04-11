import React, { ChangeEvent, FC } from 'react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import AutoResizingTextarea from '@/hooks/use-auto-resize-textarea';
import CustomButton from '@/components/common/custom-button/custom-button';

interface SearchBarProps {
  className?: string;
  imageSrc?: string;
  inputClassName?: string;
  inputStyles?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  isSending?: boolean;
  onSend: () => void;
}

const SearchBar: FC<SearchBarProps> = ({
  imageSrc,
  className = 'px-5 pt-3',
  inputStyles = 'bg-[#f4f4f4]',
  onChange,
  value = '',
  isSending = false,
  onSend,
}) => {
  return (
    <div className={`w-full mx-auto flex gap-2 ${className}`}>
      <PrimaryImage
        width={32}
        height={32}
        src={imageSrc || '/Ellipse 24.svg'}
        alt=""
        className="w-[32px] h-[32px] object-cover"
      />

      <div className="relative flex-grow">
        <AutoResizingTextarea
          value={value}
          onChange={onChange}
          placeholder="Write your comment..."
          className={`${inputStyles}`} // Add padding to avoid overlapping button
        />

        {/* Send Button Positioned at Bottom-Right */}
        <CustomButton
          onClick={onSend}
          disable={value === '' || isSending}
          className="absolute top-1 right-4 heading-tertiary !px-2 !py-1 disabled:!bg-slate-300"
        >
          Send
        </CustomButton>
      </div>
    </div>
  );
};

export default SearchBar;
