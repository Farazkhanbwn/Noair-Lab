import React, { useState } from 'react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import SwiperSlider from '@/components/common/swiper-slider/swiper-slider';
import useWindowDimensions from '@/hooks/use-window-dimenstion';

interface PostImageDisplayProps {
  images: string[];
  className?: string;
}

const PostImageDisplay: React.FC<PostImageDisplayProps> = ({
  images,
  className,
}) => {
  const { height } = useWindowDimensions();
  const dynamicHeight = height ? height - 150 : 500;
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = images.map((imageUrl, index) => (
    <div key={index} className="flex-center h-full">
      <PrimaryImage
        src={imageUrl}
        width={600}
        height={500}
        alt={`Slide ${index + 1}`}
        className={`!object-contain w-full max-h-[250px] md:max-h-[${dynamicHeight}] min-h-[300px] h-full`}
      />
    </div>
  ));

  const swiperOptions = {
    loop: false,
    pagination: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  return (
    <div className={`reltive flex-center h-full ${className}`}>
      {images.length === 1 ? (
        <PrimaryImage
          src={images[0]}
          alt="Post image"
          width={650}
          height={200}
          className={`!object-contain w-full md:max-h-[${dynamicHeight}px] min-h-[200px] h-full`}
        />
      ) : (
        <div className="relative flex-center h-full">
          <SwiperSlider
            slides={slides}
            swiperOptions={swiperOptions}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onSlideChange={(currentIndex, swiper) => {
              setCurrentSlide(currentIndex + 1);
            }}
            className={`flex-1 w-[100%] max-h-[${dynamicHeight}px] h-full`}
          />
          <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
            {currentSlide}/{images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostImageDisplay;
