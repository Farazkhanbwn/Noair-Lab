/* eslint-disable @typescript-eslint/no-explicit-any */
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import SwiperSlider from '@/components/common/swiper-slider/swiper-slider';
import { PdfViewerControls } from '@/modals/feed/pdf-preview-modal/pdf-viewer-controls';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

interface PostPdfViewerProps {
  docSrc: string;
  className?: string;
  pdfName: string;
}

const PostPdfViewer: FC<PostPdfViewerProps> = ({
  docSrc,
  className,
  pdfName,
}) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Store timeout ref
  const swiperRef = useRef<any>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Track hover effect visibility

  const handleFullscreenToggle = useCallback(() => {
    if (!document.fullscreenElement) {
      // Request fullscreen on the specific contentRef
      if (contentRef.current) {
        if (contentRef.current.requestFullscreen) {
          contentRef.current.requestFullscreen();
        } else if ((contentRef.current as any).webkitRequestFullscreen) {
          (contentRef.current as any).webkitRequestFullscreen();
        } else if ((contentRef.current as any).mozRequestFullScreen) {
          (contentRef.current as any).mozRequestFullScreen();
        } else if ((contentRef.current as any).msRequestFullscreen) {
          (contentRef.current as any).msRequestFullscreen();
        }
        setIsFullscreen(true);
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  }, []);

  // Function to show the top bar and reset any hide timeout
  const handleMouseMove = () => {
    setIsHovered(true);

    // Clear any previous timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    // Set a timeout to hide the bar after 2.5 seconds of inactivity
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  const swiperOptions = {
    loop: false,
    pagination: false,
    autoplay: false,
    navigation: {
      nextEl: '.custom-button-next',
      prevEl: '.custom-button-prev',
    },
    onSlideChange: (swiper: any) => {
      setCurrentIndex(swiper.activeIndex);
    },
    onSwiper: (swiper: any) => (swiperRef.current = swiper),
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(currentIndex); // Move swiper to the selected index
    }
  }, [currentIndex]);

  return (
    <div
      ref={contentRef}
      onMouseMove={handleMouseMove}
      // className={`w-full bg-pure-white max-w-[600px] min-h-[100vh] h-full scrollbar-thin mx-auto pr-[10px] ${className}`}
      className={`w-full bg-pure-white max-w-[600px] flex-center h-full scrollbar-thin pr-[10px] ${className}`}
    >
      <div
        className={`absolute top-0 left-0  py-2 px-3 z-[10] bg-pure-black right-0 text-pure-white transform
${isHovered ? 'opacity-60' : 'opacity-0 pointer-events-none'} 
transition-all duration-500 ease-in-out shadow-sm shadow-pure-black flex-between`}
      >
        <div>{`${pdfName} . ${numPages} Pages`}</div>
      </div>

      {numPages && numPages > 1 && (
        <>
          <CustomButton
            styleType={CustomButtonTypes.TERTIARY}
            className={`custom-button-prev text-[20px] absolute left-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full z-10 transition-all
        ${currentIndex === 0 ? 'bg-gray-300 text-gray-500' : 'bg-secondary-grey-500 text-white'}
      `}
            disable={currentIndex === 0}
          >
            <ChevronLeft />
          </CustomButton>

          <CustomButton
            styleType={CustomButtonTypes.TERTIARY}
            className={`custom-button-next text-[20px] absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full z-10 transition-all
        ${currentIndex === numPages - 1 ? 'bg-gray-300 text-gray-500' : 'bg-secondary-grey-500 text-white'}
      `}
            disable={currentIndex === numPages - 1}
          >
            <ChevronRight />
          </CustomButton>
        </>
      )}

      <Document
        loading={<p>Pdf are Loading...</p>}
        file={docSrc}
        options={options}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className={'relative'}
      >
        {numPages && (
          <SwiperSlider
            slides={Array.from(new Array(numPages), (_, index) => (
              <div key={index} className="max-w-[600px] w-full mx-auto">
                <Page
                  pageNumber={index + 1}
                  // width={600}
                  // height={500}
                  // max-h-[500px]
                  className="!object-contain flex-center w-full !mx-0 md:!mx-auto h-full"
                />
              </div>
            ))}
            swiperOptions={swiperOptions}
            onSlideChange={() => {}}
            className="flex-1 w-full  h-full"
          />
        )}
      </Document>

      <div>
        <PdfViewerControls
          currentPage={currentIndex}
          totalPages={numPages || 0}
          onPageChange={setCurrentIndex}
          isFullscreen={isFullscreen}
          onFullscreenToggle={handleFullscreenToggle}
          className={`w-full px-4 absolute bottom-0 left-0 z-[1] p-1 bg-pure-black right-0 text-pure-white transform  ${isHovered ? 'opacity-60' : 'opacity-0 pointer-events-none'} transition-all duration-500 ease-in-out shadow-sm shadow-pure-black`}
        />
      </div>
    </div>
  );
};

export default PostPdfViewer;
