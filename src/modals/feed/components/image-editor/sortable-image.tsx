import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Image from 'next/image';
import React from 'react';

interface SortableImageProps {
  id: string;
  image: { url: string; alt: string };
  isSelected: boolean;
  onClick: () => void;
}

const SortableImage: React.FC<SortableImageProps> = ({
  id,
  image,
  isSelected,
  onClick,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: isSelected ? '1px solid blue' : '1px solid #ccc',
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onMouseDown={onClick}
      className="p-1 rounded-sm mx-auto"
    >
      <Image
        src={image.url}
        alt={image.alt}
        width={80}
        height={80}
        className="object-cover w-[120px] h-[100px] rounded-sm"
      />
    </button>
  );
};

export default SortableImage;
