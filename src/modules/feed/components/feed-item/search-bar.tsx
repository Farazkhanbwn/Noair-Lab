import React, { ChangeEvent, FC } from 'react';
import PrimaryImage from '@/components/common/primary-image/primary-image';

interface SearchBarProps {
  className?: string;
  imageSrc?: string;
  inputStyles?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  imageSrc,
  className = 'px-5 py-3',
  inputStyles = 'bg-[#f4f4f4]',
  onChange,
}) => {
  return (
    <div className={`w-full mx-auto flex items-center gap-2 ${className}`}>
      <PrimaryImage
        width={32}
        height={32}
        src={imageSrc || '/Ellipse 24.svg'}
        alt=""
        className="w-[32px] h-[32px] object-cover"
      />

      <input
        type="text"
        onChange={onChange}
        placeholder="Write your comment..."
        className={`outline-none heading-tertiary text-gray-600 placeholder:text-gray-400 mb-0 w-full rounded-full p-2.5 border-none ${inputStyles}`}
      />
    </div>
  );
};

export default SearchBar;
