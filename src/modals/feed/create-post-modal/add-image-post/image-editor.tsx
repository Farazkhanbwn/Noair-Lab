'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import { Trash2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AddImagePost from '@/modals/feed/components/image-editor/drag-drop-image-uploader';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import SortableImage from '../../components/image-editor/sortable-image';

interface ImageEditorProps {
  initialImages?: { url: string; alt: string }[];
}

const ImageEditor: FC<ImageEditorProps> = ({ initialImages = [] }) => {
  const [images, setImages] = useState(initialImages);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   const validExtensions = ['image/jpeg', 'image/png', 'image/gif'];
  //   const minWidth = 552;
  //   const minHeight = 276;
  //   const maxSizeMB = 5;

  //   if (files && files.length > 0) {
  //     const validImages: { url: string; alt: string }[] = [];

  //     Array.from(files).forEach(file => {
  //       // Validate file type
  //       if (!validExtensions.includes(file.type)) {
  //         alert(`Unsupported file format: ${file.name}`);
  //         return;
  //       }

  //       // Validate file size
  //       if (file.size > maxSizeMB * 1024 * 1024) {
  //         alert(
  //           `File ${file.name} exceeds the maximum size of ${maxSizeMB}MB.`
  //         );
  //         return;
  //       }

  //       // Validate image dimensions
  //       const image = new window.Image() as HTMLImageElement;
  //       image.src = URL.createObjectURL(file);
  //       image.onload = () => {
  //         if (image.width < minWidth || image.height < minHeight) {
  //           alert(
  //             `Image ${file.name} must be at least ${minWidth}x${minHeight} pixels.`
  //           );
  //         } else {
  //           validImages.push({ url: image.src, alt: file.name });
  //           // Update state only after validation
  //           setImages(prevImages => [...prevImages, ...validImages]);
  //         }
  //       };
  //       image.onerror = () => alert(`Failed to load image: ${file.name}`);
  //     });
  //   }
  // };

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map(file => ({
        url: `${URL.createObjectURL(file)}`,
        alt: file.name,
      }));
      setImages(prevImages => [...prevImages, ...newImages]);
    }

    e.target.value = '';
  };

  const handleDelete = () => {
    const newImages = images.filter((_, index) => index !== currentImageIndex);
    setImages(newImages);
    setCurrentImageIndex(0);
  };

  const handleUploadImages = (files: FileList | File[]) => {
    const newImages = Array.from(files).map(file => ({
      url: `${URL.createObjectURL(file)}`,
      alt: file.name,
    }));
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = images.findIndex(img => img.url === active.id);
    const newIndex = images.findIndex(img => img.url === over.id);
    const reorderedImages = arrayMove(images, oldIndex, newIndex);

    setImages(reorderedImages);
    setCurrentImageIndex(newIndex); // Ensure selected index updates
  };

  return (
    <div className="bg-white w-full">
      {images.length === 0 ? (
        <AddImagePost onUpload={handleUploadImages} />
      ) : (
        <div className="flex justify-between h-[300px] flex-col sm:flex-row">
          {/* Main Image Display */}
          <div className="w-full max-h-[300px] h-[300px] bg-gray-50">
            <Image
              src={images[currentImageIndex]?.url || '/placeholder.svg'}
              alt={images[currentImageIndex]?.alt || 'Placeholder'}
              width={500}
              height={300}
              className="object-contain w-full h-full mx-auto"
            />
          </div>

          {/* Drag and Drop Grid */}
          <div className="p-2">
            <div className="mb-2 text-sm text-gray-500">
              {currentImageIndex + 1} of {images.length}
            </div>

            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={images.map(img => img.url)}
                strategy={rectSortingStrategy}
              >
                <div className="!grid !grid-cols-3 sm:!grid-cols-2 gap-2 p-2 max-w-[100rem] md:max-w-[25rem] !text-center max-h-[15rem] overflow-y-auto scrollbar-thin">
                  {images.map((image, index) => (
                    <SortableImage
                      key={image.url}
                      id={image.url}
                      image={image}
                      isSelected={currentImageIndex === index}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>

            {/* Toolbar */}
            <div className="flex items-center justify-center gap-1 mt-1">
              <Button
                variant="ghost"
                size="icon"
                className="bg-light-grey-50 hover:bg-light-grey-100"
                onClick={handleDelete}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <div>
                <input
                  type="file"
                  id="add-image"
                  className="hidden"
                  multiple
                  accept="image/*"
                  onChange={handleAddImage}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-light-grey-50 border-pure-black hover:bg-light-grey-100"
                  onClick={() => document.getElementById('add-image')?.click()}
                >
                  <Plus className="h-8 w-8" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
