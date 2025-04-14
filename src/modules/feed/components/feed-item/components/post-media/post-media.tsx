import { FC, JSX } from 'react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import VideoPlayer from '@/components/common/video-player/video-player';
import ImageGrid from '../image-grid';
import PostPdfViewer from '../post-pdf-viewer/post-pdf-viewer';

interface FileItem {
  id: number;
  url: string;
  fileType: 'image' | 'video' | 'pdf';
}

interface PostMediaProps {
  files: FileItem[];
  onImageClick: () => void;
  pdfName?: string;
}

const PostMedia: FC<PostMediaProps> = ({
  files,
  onImageClick,
  pdfName = 'My Pdf',
}) => {
  if (!files || files.length === 0) return null;

  // Get the file type and URL from the first file
  const fileType = files[0]?.fileType;
  const mediaUrls = files.map(file => file.url);

  const mediaRenderers: Record<string, JSX.Element | null> = {
    image:
      mediaUrls.length > 1 ? (
        <ImageGrid
          onImageClick={onImageClick}
          images={mediaUrls}
          maxVisible={4}
        />
      ) : (
        <PrimaryImage
          width={600}
          height={300}
          src={mediaUrls[0]}
          alt="Post visual"
          onClick={onImageClick}
          className="w-full max-h-[650px] h-full min-h-[200px] cursor-pointer"
        />
      ),

    video: <VideoPlayer src={mediaUrls[0]} />,

    pdf: (
      <div className="w-full flex-center relative">
        <PostPdfViewer pdfName={pdfName} docSrc={mediaUrls[0]} />
      </div>
    ),
  };

  return fileType ? mediaRenderers[fileType] || null : null;
};

export default PostMedia;
