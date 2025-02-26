import React, { useState } from 'react';
import ImageEditor from '../../components/image-editor/image-editor';

const AddImageDocument = () => {
  const [images, setImages] = useState<{ url: string; alt: string }[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddImage = (files: FileList | File[]) => {
    const newImages = Array.from(files).map(file => ({
      url: URL.createObjectURL(file),
      alt: file.name,
    }));
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  const handleDeleteImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    setCurrentImageIndex(0); // Reset to the first image
  };

  const handleReorderImages = (
    reorderedImages: { url: string; alt: string }[]
  ) => {
    setImages(reorderedImages);
  };

  return (
    <ImageEditor
      images={images}
      currentImageIndex={currentImageIndex}
      onAddImage={handleAddImage}
      onDeleteImage={handleDeleteImage}
      onReorderImages={handleReorderImages}
      onSelectImage={setCurrentImageIndex}
    />
  );
};

export default AddImageDocument;
