import PrimaryImage from '@/components/common/primary-image/primary-image';
import { FC } from 'react';

interface ArticlePostProps {
  imageSrc: string;
  date: string;
  title: string;
  onImageClick: () => void;
  className?: string;
}

const ArticlePost: FC<ArticlePostProps> = ({
  imageSrc,
  date,
  title,
  className,
}) => {
  return (
    <div className={`relative mx-auto overflow-hidden rounded-sm ${className}`}>
      {/* Next.js Image with responsive optimization */}
      <PrimaryImage
        src={imageSrc}
        alt="Article Thumbnail"
        width={600} // Adjust width based on your design
        height={300} // Adjust height based on your design
        className="w-full max-h-[500px] h-full object-cover"
      />

      {/* Bottom shadow overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-pure-white to-transparent opacity-80"></div>

      {/* Text content on top of image */}
      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-6 text-pure-black z-10">
        <p className="heading-tertiary xs:text-[28px] mb-0 xs:mb-1 text-primary-grey-100 opacity-60">
          {date}
          {/* INDYNEWS - 03 Jan 2025 */}
        </p>
        <h2 className="heading-secondary xs:heading-primary font-semibold">
          {/* IndyNEWS Detroit: Dixon quickest in second practice */}
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ArticlePost;
