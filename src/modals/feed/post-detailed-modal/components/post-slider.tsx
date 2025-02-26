'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PrimaryImage from '@/components/common/primary-image/primary-image';

interface PostImageSliderProps {
  images: string[];
  className?: string;
}

export default function PostImageSlider({
  images,
  className,
}: PostImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className={className}>
      {/* Slide counter */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        onSlideChange={(swiper: SwiperType) =>
          setCurrentSlide(swiper.activeIndex + 1)
        }
        className="h-full relative"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="h-full w-full">
              <PrimaryImage
                src={image}
                width={600}
                height={500}
                alt="background"
                className="!object-contain w-full max-h-[250px] md:max-h-[500px] min-h-[200px] h-full"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
          {currentSlide}/{images.length}
        </div>

        {/* Custom navigation buttons */}
        {/* <button className="swiper-button-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-opacity hover:bg-black/75">
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous slide</span>
        </button>
        <button className="swiper-button-next absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-opacity hover:bg-black/75">
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next slide</span>
        </button> */}
      </Swiper>
    </div>
  );
}
