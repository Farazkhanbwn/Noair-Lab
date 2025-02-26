import { FC, JSX } from 'react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import VideoPlayer from '@/components/common/video-player/video-player';
import ImageGrid from '../image-grid';
import { FeedPostMedia } from '@/modules/feed/feed.interface';
import PostPdfViewer from '../post-pdf-viewer/post-pdf-viewer';

interface PostMediaProps {
  mediaType?: FeedPostMedia;
  media?: string[] | string;
  onImageClick?: () => void;
  pdfName?: string;
}

const PostMedia: FC<PostMediaProps> = ({
  mediaType,
  media,
  onImageClick,
  pdfName = 'My Pdf',
}) => {
  if (!media) return null;

  const mediaRenderers: Record<FeedPostMedia, JSX.Element | null> = {
    image:
      Array.isArray(media) && media.length > 1 ? (
        <ImageGrid images={media} maxVisible={4} />
      ) : (
        <PrimaryImage
          width={600}
          height={300}
          src={Array.isArray(media) ? media[0] : media}
          alt="Post visual"
          onClick={onImageClick}
          className="w-full h-full min-h-[200px] cursor-pointer"
        />
      ),

    video: typeof media === 'string' ? <VideoPlayer src={media} /> : null,

    pdf:
      typeof media === 'string' ? (
        <div className="w-full flex-center relative">
          <PostPdfViewer pdfName={pdfName} docSrc={media} />
        </div>
      ) : null,
  };

  return mediaType ? mediaRenderers[mediaType] || null : null;
};

export default PostMedia;
