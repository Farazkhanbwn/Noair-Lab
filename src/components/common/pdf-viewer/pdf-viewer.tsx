/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

interface PdfViewerProps {
  file: string;
  onNumPages?: (numPages: number) => void;
  currentPage?: number;
  loading?: React.ReactNode; // Allow passing a loading component from parent
  className?: string; // Allow custom class names for styling
}

const PdfViewer: FC<PdfViewerProps> = ({
  file,
  onNumPages,
  currentPage = 1,
  loading = <div className="w-full h-full bg-gray-200 animate-pulse"></div>,
  className = '',
}) => {
  const handleLoadSuccess = ({ numPages }: { numPages: number }) => {
    if (onNumPages) {
      onNumPages(numPages);
    }
  };

  return (
    <Document
      file={file}
      options={options}
      onLoadSuccess={handleLoadSuccess}
      loading={loading} // Use loading prop from parent
      className={`relative ${className}`} // Allow custom styling
    >
      <Page
        pageNumber={currentPage}
        width={600}
        height={500}
        className="!object-contain w-full max-h-[500px] min-h-[200px] h-full"
      />
    </Document>
  );
};

export default PdfViewer;
