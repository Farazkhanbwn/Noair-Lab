'use client';

import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import ThreeDots from '@/components/icons/user/feed/three-dots';
import DeleteIcon from '@/components/icons/user/profile/delete-icon';
import EditIcon from '@/components/icons/user/profile/edit-icon';
import PinIcon from '@/components/icons/user/profile/pin-icon';
import { useState, useRef, useEffect } from 'react';
import EditPost from '../../../../../app/(user)/profile/_components/edit-post';

export default function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isEditPostModal, setIsEditPostModal] = useState(false);

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
    <>
      <div className="relative" ref={dropdownRef}>
        {/* Three dots button */}
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <ThreeDots color="#9a9a9a" />
        </CustomButton>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute text-description font-medium right-0 w-36 bg-white rounded-[5px] shadow-lg border border-gray-200">
            <button
              className="flex items-center gap-2 w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => {
                console.log('Pin post');
                setIsOpen(false);
              }}
            >
              <PinIcon />
              Pin Post
            </button>
            <button
              className="flex items-center gap-2 w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => {
                console.log('Edit post');
                // setIsOpen(false);
                setIsEditPostModal(true);
              }}
            >
              <EditIcon />
              Edit Post
            </button>
            <button
              className="flex items-center gap-2 w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => {
                console.log('Delete post');
                setIsOpen(false);
              }}
            >
              <DeleteIcon />
              Delete Post
            </button>
          </div>
        )}
      </div>
      <EditPost
        open={isEditPostModal}
        onCloseModal={() => setIsEditPostModal(false)}
      />
    </>
  );
}
