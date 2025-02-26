'use client';

import { useState, useCallback, FC } from 'react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import FlexContainer from '@/components/common/flex-container/flex-container';
import { useDropzone } from 'react-dropzone';

interface AddVideoPostProps {
  onUpload?: (file: FileList) => void;
  className?: string;
}

const AddVideoPost: FC<AddVideoPostProps> = ({ onUpload, className }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: { 'video/*': [] }, // Allow only video files
  //   maxFiles: 1,
  //   onDrop: acceptedFiles => {
  //     if (acceptedFiles.length > 0 && onUpload) {
  //       const fileList = new DataTransfer();
  //       acceptedFiles.forEach(file => fileList.items.add(file));
  //       onUpload(fileList.files); // Convert to FileList
  //     }
  //   },
  //   onDropRejected: fileRejections => {
  //     // Handle errors here
  //     fileRejections.forEach(rejection => {
  //       rejection.errors.forEach(error => {
  //         setError(error.message);
  //       });
  //     });
  //   },
  // });
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'video/mp4': [], 'video/quicktime': [] }, // Accept MP4 and MOV
    maxFiles: 1,
    onDrop: acceptedFiles => {
      if (acceptedFiles.length > 0) {
        const videoFile = acceptedFiles[0];

        // 1️⃣ Check File Type
        const validTypes = ['video/mp4', 'video/quicktime'];
        if (!validTypes.includes(videoFile.type)) {
          setError('Invalid file type. Only MP4 and MOV are allowed.');
          return;
        }

        // 3️⃣ Check Video Duration & Resolution
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = URL.createObjectURL(videoFile);

        video.onloadedmetadata = () => {
          URL.revokeObjectURL(video.src);

          // Check Duration
          const durationMinutes = video.duration / 60;
          if (durationMinutes > 15) {
            setError('Video duration exceeds 15 minutes.');
            return;
          }

          // Check Resolution
          video.width = video.videoWidth;
          video.height = video.videoHeight;

          const minResolution = { width: 1280, height: 720 };
          const maxResolution = { width: 1920, height: 1080 };

          if (
            video.videoWidth < minResolution.width ||
            video.videoHeight < minResolution.height
          ) {
            setError('Video resolution is too low. Minimum is 1280×720.');
            return;
          }

          if (
            video.videoWidth > maxResolution.width ||
            video.videoHeight > maxResolution.height
          ) {
            setError('Video resolution is too high. Maximum is 1920×1080.');
            return;
          }

          // ✅ All checks passed, proceed with upload
          const fileList = new DataTransfer();
          fileList.items.add(videoFile);
          onUpload?.(fileList.files);
        };

        video.onerror = () => {
          setError('Failed to read video metadata. Please try another file.');
        };
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
          border-2 border-dashed rounded-sm px-8 py-6 border-primary-stroke
          ${isDragging ? 'bg-light-blue-75' : ''}
          transition-colors duration-200
          flex flex-col items-center justify-center
          min-h-[220px] max-w-[30rem] mx-auto
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input {...getInputProps()} />
        <PrimaryImage
          width={42}
          height={42}
          alt="upload"
          src={'/upload.svg'} // Updated to a video upload icon
          className="object-cover w-[42px] h-[42px] mb-3"
        />

        <p className="heading-tertiary mb-2">
          Drag your video to start uploading
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
          Browse video
        </CustomButton>

        <p className="text-sm text-red-500 mt-2">{error}</p>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Supported Formats: MP4, MOV | Max Length: 15 mins | Resolution: 1280×720
        (Min) – 1920×1080 (Max)
      </p>
    </div>
  );
};

export default AddVideoPost;
