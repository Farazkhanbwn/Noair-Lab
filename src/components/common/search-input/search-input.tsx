'use client';

import React from 'react';

interface SearchInputProps {
  Icon?: React.FC<{ className?: string }>;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  Icon,
  className = '',
  placeholder = 'Search',
  onChange,
}) => {
  return (
    <div
      className={`flex items-center !bg-light-grey rounded-[20px] px-2 py-0.5 md:px-4 text-black ${className}`}
    >
      {Icon && <Icon className="text-secondary-grey" />}
      <input
        type="text"
        className="m-0 border-none bg-transparent outline-none text-sm pl-4"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
