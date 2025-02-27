'use client';

import { FC, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { SwiperOptions } from 'swiper/types';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

interface SwiperSliderProps {
  slides: ReactNode[]; // Array of React nodes for each slide
  className?: string;
  swiperOptions?: SwiperOptions; // Swiper configuration options
  onSlideChange?: (activeIndex: number, swiper: SwiperType) => void;
}

const SwiperSlider: FC<SwiperSliderProps> = ({
  slides,
  className,
  swiperOptions,
  onSlideChange,
}) => {
  return (
    <div className={`h-full ${className}`}>
      <Swiper
        navigation
        pagination
        slidesPerView={'auto'}
        modules={[Navigation, Pagination]}
        onSlideChange={(swiper: SwiperType) => {
          onSlideChange?.(swiper.activeIndex, swiper); // Pass activeIndex + full Swiper instance
        }}
        className={'!h-full !w-full !select-none'}
        {...swiperOptions}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
