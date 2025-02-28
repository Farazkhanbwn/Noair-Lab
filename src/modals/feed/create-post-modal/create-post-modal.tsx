import React, { FC, JSX, useState } from 'react';
import CreatePostModalLayout from './create-post.layout';
import AddTextPost from './add-text-post/add-text-post';
import { PostType } from '@/types';
import VideoEditor from './add-video-post/video-editor';
import { HeadingText } from '../feed.types';
import AddImagePost from './add-image-post/add-image-post';

const ALL_PAGES: { [key: string]: JSX.Element } = {
  text: <AddTextPost />,
  image: <AddImagePost />,
  video: <VideoEditor />,
};

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostModal: FC<CreatePostModalProps> = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState<PostType>(PostType.Text);
  return (
    <CreatePostModalLayout
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setSelectedType(PostType.Text);
      }}
      title={HeadingText[selectedType]}
      selectedType={selectedType}
      handleSelectType={setSelectedType}
      onPost={() => console.log('Next button clicked')}
    >
      <div className="w-full">{ALL_PAGES?.[selectedType]}</div>
    </CreatePostModalLayout>
  );
};

export default CreatePostModal;
