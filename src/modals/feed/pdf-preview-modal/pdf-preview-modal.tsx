/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useCallback, useRef, useState } from 'react';
import { DialogProps } from '@/types';
import Modal from '@/components/common/modal';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { pdfjs, Document, Page } from 'react-pdf';
import SwiperSlider from '@/components/common/swiper-slider/swiper-slider';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import { PdfViewerControls } from './pdf-viewer-controls';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url
// ).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

interface PdfPreviewModalProps extends DialogProps {
  className?: string;
}

const PdfPreviewModal: FC<PdfPreviewModalProps> = ({ open, onCloseModal }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Store timeout ref
  const swiperRef = useRef<any>(null);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
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
      console.log('active index are : ', swiper.activeIndex);
    },
    onSwiper: (swiper: any) => (swiperRef.current = swiper),
  };

  React.useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(currentIndex); // Move swiper to the selected index
    }
  }, [currentIndex]);

  const modalStyles = {
    modal: {
      maxHeight: '500px',
      height: '100%',
      borderRadius: '1rem',
      maxWidth: '800px',
      width: '100%',
      margin: '0 auto',
      backgroundColor: '#edf5ff',
      overflow: 'hidden',
    },
    closeIcon: {
      fill: '#fff',
    },
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      styles={modalStyles}
      showCloseIcon={false}
      classNames="group"
    >
      <div
        ref={contentRef}
        onMouseMove={handleMouseMove}
        className={`w-full bg-[#edf5ff] max-w-[600px] max-h-[500px] scrollbar-thin mx-auto ${isFullscreen ? 'overflow-hidden' : 'overflow-y-auto'} pr-[10px]`}
      >
        <div
          className={`absolute top-0 left-0 z-[10000] py-2 px-3 bg-pure-black right-0 text-pure-white transform opacity-60 
  ${isHovered ? 'translate-y-0' : '-translate-y-full'} 
  transition-all duration-500 ease-in-out shadow-sm shadow-pure-black flex-between`}
        >
          <div>
            {`My PDF . ${numPages} Pages`}
            <X
              onClick={onCloseModal}
              className="absolute top-2 w-8 h-8 right-2 text-pure-white bg-transparent hover:bg-primary-grey p-1 rounded-full transition-all cursor-pointer"
              color="#fff"
            />
          </div>
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
          file="/docs/software-engineering.pdf"
          options={options}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          className={'relative'}
        >
          {numPages && (
            <SwiperSlider
              slides={Array.from(new Array(numPages), (_, index) => (
                <div key={index} className="flex-center h-full">
                  <Page
                    pageNumber={index + 1}
                    width={600}
                    height={500}
                    className="!object-contain flex-center w-full max-h-[500px] min-h-[200px] h-full"
                  />
                </div>
              ))}
              swiperOptions={swiperOptions}
              onSlideChange={() => {}}
              className="flex-1 w-full max-h-[500px] h-full"
            />
          )}
        </Document>

        <PdfViewerControls
          currentPage={currentIndex}
          totalPages={numPages || 0}
          onPageChange={setCurrentIndex}
          isFullscreen={isFullscreen}
          onFullscreenToggle={handleFullscreenToggle}
          className={`w-full px-4 absolute bottom-0 left-0 z-[10000] p-1 bg-pure-black right-0 text-pure-white transform opacity-60  ${isHovered ? 'translate-y-0' : 'translate-y-full'}  transition-all duration-500 ease-in-out shadow-sm shadow-pure-black`}
        />
      </div>
    </Modal>
  );
};

export default PdfPreviewModal;
