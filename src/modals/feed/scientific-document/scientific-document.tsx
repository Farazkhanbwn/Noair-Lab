import React, { FC, JSX, useState } from 'react';
import { PostType } from '@/types';
import { HeadingText } from '../feed.types';
import ScientificDocumentModalLayout from './scientific-document.layout';
import AddTextDocument from './add-text-document/add-text-document';
import AddImageDocument from './add-image-document/add-image-document';
import AddFileDocument from './add-file-document/add-file-document';
import { useCreatePost } from '@/modules/feed/feed.hooks';

const ALL_PAGES: { [key: string]: JSX.Element } = {
  text: <AddTextDocument />,
  image: <AddImageDocument />,
  file: <AddFileDocument />,
};

interface ScientificDocumentModal {
  isOpen: boolean;
  onClose: () => void;
}

const ScientificDocumentModal: FC<ScientificDocumentModal> = ({
  isOpen,
  onClose,
}) => {
  const [selectedType, setSelectedType] = useState<PostType>(PostType.Text);
  const { createPost } = useCreatePost()
  
  return (
    <ScientificDocumentModalLayout
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setSelectedType(PostType.Text);
      }}
      title={HeadingText[selectedType]}
      selectedType={selectedType}
      handleSelectType={setSelectedType}
      onUpload={() => {createPost(); onClose()}}
    >
      <div className="w-full">{ALL_PAGES?.[selectedType]}</div>
    </ScientificDocumentModalLayout>
  );
};

export default ScientificDocumentModal;
