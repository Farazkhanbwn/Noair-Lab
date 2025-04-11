import React, { FC, useEffect, useState } from 'react';
import FlexContainer from '@/components/common/flex-container/flex-container';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import { useDropzone } from 'react-dropzone';
import UploadFileItem from './upload-file-item';
import { useDispatch } from 'react-redux';
import { setFiles } from '@/store/posts/postSlice';

interface AddFileDocumentProps {
  onUpload?: (file: FileList) => void;
  className?: string;
}

const AddFileDocument: FC<AddFileDocumentProps> = ({ className }) => {
  // const { files } = useSelector((state: RootState) => state.post.addPost)
  const dispatch = useDispatch()

  const [isDragging, setIsDragging] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [file, setFile] = useState<File | null>(null);
  const [docs, setDocs] = useState<{ url: string; alt: string }[]>([]);

  const [error, setError] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<string>('');
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': [],
      'application/msword': [], // .doc
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        [], // .docx
      'text/csv': [],
      'text/plain': [],
      'application/json': [],
      'image/png': [],
      'image/jpeg': [],
    },
    multiple: false, // Dont Allow multiple files
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
    onDrop: acceptedFiles => {
      setError('');
      setIsDragging(false);
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setFile(file);
        console.log('files are : ', file);
        setFileName(file.name);
        setFileSize((file.size / 1024).toFixed(2) + ' KB'); // Convert size to KB
        setFileType(file.type);

        const newFile = [{
          url: URL.createObjectURL(file),
          alt: file.name,
        }];

        setDocs(prevDocs => [...prevDocs, ...newFile]);
      }
    },

    onDropRejected: fileRejections => {
      setIsDragging(false);
      fileRejections.forEach(rejection => {
        rejection.errors.forEach(error => {
          setError(error.message);
        });
      });
    },
  });

  useEffect(() => {
      if (docs.length > 0) {
        dispatch(setFiles(docs))
      }
    }, [docs])

  return (
    <div className={`mx-auto ${className}`}>
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
          Drag your file to start uploading
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
          Browse file
        </CustomButton>
        <p className="heading-tertiary text-red-500 mt-2">{error}</p>
      </div>
      <p className="text-description mt-4">
        Supported File Types are: PDF, Word Doc, CSV, Plain Text, JSON, PNG &
        JPG
      </p>
      {file && (
        <UploadFileItem
          fileName={fileName}
          fileSize={fileSize}
          fileType={fileType}
          onRemove={() => setFile(null)}
          className="p-3 bg-white rounded-sm border border-stroke-grey-50 my-3"
        />
      )}
    </div>
  );
};

export default AddFileDocument;
