'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Trash2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import SortableImage from './sortable-image';
import DragDropImageUploader from '@/modals/feed/components/image-editor/drag-drop-image-uploader';

interface ImageEditorProps {
  images: { url: string; alt: string }[]; // Images passed from parent
  currentImageIndex: number; // Current selected image index passed from parent
  onAddImage: (files: FileList | File[]) => void; // Callback for adding images
  onDeleteImage: (index: number) => void; // Callback for deleting an image
  onReorderImages: (reorderedImages: { url: string; alt: string }[]) => void; // Callback for reordering images
  onSelectImage: (index: number) => void; // Callback for selecting an image
}

const ImageEditor: FC<ImageEditorProps> = ({
  images,
  currentImageIndex,
  onAddImage,
  onDeleteImage,
  onReorderImages,
  onSelectImage,
}) => {
  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onAddImage(files);
    }
    e.target.value = ''; // Reset input to allow adding the same file again
  };

  const handleDelete = () => {
    onDeleteImage(currentImageIndex);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = images.findIndex(img => img.url === active.id);
    const newIndex = images.findIndex(img => img.url === over.id);
    const reorderedImages = arrayMove(images, oldIndex, newIndex);

    onReorderImages(reorderedImages);
    onSelectImage(newIndex); // Update selected index after reordering
  };

  return (
    <div className="bg-white w-full">
      {images.length === 0 ? (
        <DragDropImageUploader onUpload={onAddImage} />
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
                      onClick={() => onSelectImage(index)}
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
