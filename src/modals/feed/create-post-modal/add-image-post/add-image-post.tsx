import React, { useEffect, useState } from 'react';
import ImageEditor from '../../components/image-editor/image-editor';
import { useDispatch, useSelector } from 'react-redux';
import { setFiles } from '@/store/posts/postSlice';
import { RootState } from '@/store/store';

const AddImagePost = () => {
  const dispatch = useDispatch()
  const { files } = useSelector((state: RootState) => state.post.addPost)
  
  const [images, setImages] = useState<{ url: string; alt: string }[]>(files);
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

  useEffect(() => {
    if(images.length > 0){
      dispatch(setFiles(images))
    }
  }, [images])

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

export default AddImagePost;
