import React, { useState } from 'react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import SwiperSlider from '@/components/common/swiper-slider/swiper-slider';

interface PostImageDisplayProps {
  images: string[];
  className?: string;
}

const PostImageDisplay: React.FC<PostImageDisplayProps> = ({
  images,
  className,
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = images.map((imageUrl, index) => (
    <div key={index} className="flex-center h-full">
      <PrimaryImage
        src={imageUrl}
        width={600}
        height={500}
        alt={`Slide ${index + 1}`}
        className="!object-contain w-full max-h-[250px] md:max-h-[500px] min-h-[300px] h-full"
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
    <div className={`reltive h-full ${className}`}>
      {images.length === 1 ? (
        <PrimaryImage
          src={images[0]}
          alt="Post image"
          width={500}
          height={200}
          className="!object-contain w-full max-h-[250px] md:max-h-[500px] min-h-[200px] h-full"
        />
      ) : (
        <div className="relative flex-center h-full">
          {/* <PostImageSlider images={sampleImages} className="max-w-[40rem]" /> */}
          <SwiperSlider
            slides={slides}
            swiperOptions={swiperOptions}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onSlideChange={(currentIndex, swiper) => {
              console.log('current index are : ', currentIndex);
              setCurrentSlide(currentIndex + 1);
            }}
            className="flex-1 w-[100%] max-h-[500px] h-full"
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
