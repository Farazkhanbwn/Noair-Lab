import PrimaryImage from '@/components/common/primary-image/primary-image';
import { FC } from 'react';
import { ContentTypeDropdown } from './content-type-dropdown';
import { Button } from '@/components/ui/button';
import { contentTypes } from '@/utils/constants/feed';
import { useDispatch } from 'react-redux';
import { setPostType } from '@/store/posts/postSlice';

interface AddPostProps {
  onSelectItem: (value: string) => void;
  classNames?: string;
}

const AddPost: FC<AddPostProps> = ({ onSelectItem, classNames }) => {
  const dispatch = useDispatch()

  const handleSelect = (value: string) => {
    onSelectItem(value);
    console.log(`Selected: ${value}`);
    dispatch(setPostType(value))
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
            // <img
            //   src="/file_upload.svg"
            //   alt="Upload"
            //   // className="max-w-[16px] h-[16px] ml-auto cursor-pointer"
            // />
            <Button size={'sm'} className="text-white text-sm w-auto">
              Create Update
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default AddPost;
