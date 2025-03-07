'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import ThreeDots from '@/components/icons/user/feed/three-dots';

interface DropdownItem {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
  className?: string;
}

interface CustomDropdownProps {
  items: DropdownItem[];
  buttonClassName?: string;
  dropdownClassName?: string;
}

export default function CustomDropdown({
  items,
  buttonClassName = '',
  dropdownClassName = '',
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Three dots button */}
      <CustomButton
        styleType={CustomButtonTypes.TERTIARY}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-1 hover:bg-gray-100 rounded-full ${buttonClassName}`}
      >
        <ThreeDots color="#9a9a9a" />
      </CustomButton>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className={`absolute text-description font-medium right-0 w-auto bg-white rounded-[5px] shadow-lg border border-gray-200 ${dropdownClassName}`}
        >
          {items.map((item, index) => (
            <button
              key={index}
              className={`flex items-center whitespace-nowrap gap-2 w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100 ${item.className}`}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
