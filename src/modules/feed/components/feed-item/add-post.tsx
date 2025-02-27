import PrimaryImage from '@/components/common/primary-image/primary-image';
import React, { FC } from 'react';
import { FileText, ScrollText } from 'lucide-react';
import { ContentTypeDropdown, ContentTypeItem } from './content-type-dropdown';

interface AddPostProps {
  onSelectItem: (value: string) => void;
  classNames?: string;
}

const contentTypes: ContentTypeItem[] = [
  {
    icon: FileText,
    label: 'Post',
    value: 'post',
  },
  {
    icon: ScrollText,
    label: 'Scientific Document',
    value: 'scientific-document',
  },
];

const AddPost: FC<AddPostProps> = ({ onSelectItem, classNames }) => {
  const handleSelect = (value: string) => {
    onSelectItem(value);
    console.log(`Selected: ${value}`);
  };

  return (
    <div className={`bg-white rounded-[20px] ${classNames}`}>
      <h3 className="heading-secondary p-5 pb-3 border-b border-stroke-grey text-black font-semibold">
        New Feed
      </h3>
      <div className="flex items-center gap-x-8 p-5">
        <PrimaryImage
          width={42}
          height={42}
          src="/Ellipse 24.svg"
          alt="Profile"
          className="rounded-full w-[42px] h-[42px]"
        />
        <input
          name="addPost"
          type="text"
          placeholder="Write your update here..."
          className="w-full text-black m-0 text-sm border-none focus:outline-none flex-2 focus:ring-0"
        />
        <ContentTypeDropdown
          items={contentTypes}
          onSelect={handleSelect}
          triggerButton={
            <img
              src="/file_upload.svg"
              alt="Upload"
              className="max-w-[16px] h-[16px] ml-auto"
            />
          }
        />
      </div>
    </div>
  );
};

export default AddPost;
