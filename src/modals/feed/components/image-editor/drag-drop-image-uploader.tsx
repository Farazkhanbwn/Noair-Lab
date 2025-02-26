'use client';

import { useState, useCallback, FC } from 'react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import FlexContainer from '@/components/common/flex-container/flex-container';
import { useDropzone } from 'react-dropzone';

interface DragDropImageUploaderProps {
  onUpload?: (file: FileList) => void;
  className?: string;
}

const DragDropImageUploader: FC<DragDropImageUploaderProps> = ({
  onUpload,
  className,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/jpeg': [], 'image/png': [], 'image/gif': [] },
    multiple: true, // Allow multiple files
    onDrop: acceptedFiles => {
      if (acceptedFiles.length > 0 && onUpload) {
        const maxSizeMB = 5;
        const minWidth = 552;
        const minHeight = 276;
        let validationError = '';

        const fileList = new DataTransfer();

        acceptedFiles.forEach(file => {
          const image = new Image();
          image.src = URL.createObjectURL(file);

          image.onload = () => {
            const { width, height } = image;

            if (file.size > maxSizeMB * 1024 * 1024) {
              validationError = `File "${file.name}" exceeds ${maxSizeMB}MB.`;
              setError(validationError);
              return;
            }

            if (width < minWidth || height < minHeight) {
              validationError = `Image "${file.name}" must be at least ${minWidth}x${minHeight} pixels.`;
              setError(validationError);
              return;
            }

            fileList.items.add(file);

            if (fileList.files.length === acceptedFiles.length) {
              onUpload(fileList.files);
            }
          };

          image.onerror = () => {
            setError(`Invalid image file: "${file.name}".`);
          };
        });
      }
    },

    onDropRejected: fileRejections => {
      fileRejections.forEach(rejection => {
        rejection.errors.forEach(error => {
          setError(error.message);
        });
      });
    },
  });

  return (
    <div className={`w-full mx-auto ${className}`}>
      <FlexContainer className="my-3">
        <PrimaryImage
          width={42}
          height={42}
          src="/profile-person.png"
          alt="User avatar"
          className="rounded-full h-[42px] w-[42px]"
        />
        <span className="font-medium">Lewis Morissette</span>
      </FlexContainer>

      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-sm px-4 py-6 border-primary-stroke
          ${isDragging ? 'bg-light-blue-75' : ''}
          transition-colors duration-200
          flex flex-col items-center justify-center
          min-h-[220px] max-w-[30rem] mx-auto
        `}
        // onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input {...getInputProps()} />
        <PrimaryImage
          width={42}
          height={42}
          alt="upload"
          src={'/upload.svg'}
          className="object-cover w-[42px] h-[42px] mb-3"
        />

        <p className="heading-tertiary mb-2">
          Drag your image(s) to start uploading
        </p>

        <div className="flex items-center gap-2 mb-2">
          <div className="h-px w-20 bg-light-grey-100" />
          <span className="text-description">OR</span>
          <div className="h-px w-20 bg-light-grey-100" />
        </div>

        <CustomButton
          styleType={CustomButtonTypes.SECONDARY}
          className="px-3 py-1 rounded-[7px] heading-tertiary font-semibold"
        >
          Browse images
        </CustomButton>
        <p className="heading-tertiary text-red-500 mt-2">{error}</p>
      </div>
      <p className="text-description mt-4">
        Minimum Size: 552 × 276 pixels, Supported Formats: JPEG, PNG, GIF, Max
        File Size: 5MB
      </p>
    </div>
  );
};

export default DragDropImageUploader;
