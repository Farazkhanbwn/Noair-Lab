import PrimaryImage from '@/components/common/primary-image/primary-image';

interface ImageGridProps {
  images: string[];
  maxVisible?: number;
}

export default function ImageGrid({ images }: ImageGridProps) {
  const maxVisible = 4;
  const visibleImages = images.slice(0, maxVisible);
  const remainingCount = Math.max(0, images.length - maxVisible);

  return (
    <div className="!grid !grid-cols-2 gap-1 sm:gap-3 w-full mx-auto min-h-[150px] xs:min-h-[300px] h-auto">
      {/* Left Column - Single Large Image */}
      <div className="max-w-full md:max-w-[350px] w-full h-full">
        {visibleImages[0] && (
          <div className="w-full h-full overflow-hidden">
            <PrimaryImage
              src={visibleImages[0] || '/placeholder.svg'}
              alt="Main image"
              width={500}
              height={600}
              className={`object-cover cursor-pointer w-full h-full transition-transform duration-300`}
            />
          </div>
        )}
      </div>

      {/* Right Column - Stacked Images */}
      <div className="flex flex-col gap-1 sm:gap-3 w-full">
        {/* Top Image - Large */}
        <div className="w-full flex-1">
          {visibleImages[1] && (
            <div className="w-full h-full overflow-hidden">
              <PrimaryImage
                src={visibleImages[1] || '/placeholder.svg'}
                alt="Secondary image"
                width={500}
                height={300}
                className={`object-cover cursor-pointer w-full h-full transition-transform duration-300`}
              />
            </div>
          )}
        </div>

        {/* Bottom Two Smaller Images */}

        {visibleImages.length > 2 && (
          <div className="flex gap-1 sm:gap-3 w-full flex-1">
            {visibleImages.slice(2, 4).map((image, index) => (
              <div key={index} className="relative w-full h-full">
                <div className="w-full h-full overflow-hidden flex-1">
                  <PrimaryImage
                    src={image || '/placeholder.svg'}
                    alt={`Grid image ${index + 3}`}
                    width={250}
                    height={300}
                    className={`object-cover cursor-pointer w-full h-full transition-transform duration-300`}
                  />
                  {/* Show remaining count on last visible image */}
                  {index === 1 && remainingCount > 0 && (
                    <div className="absolute cursor-pointer inset-0 bg-black/60 flex items-center justify-center text-center text-description sm:heading-secondary">
                      <span className="text-pure-white text-description sm:heading-secondary font-semibold">
                        +{remainingCount} images
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
