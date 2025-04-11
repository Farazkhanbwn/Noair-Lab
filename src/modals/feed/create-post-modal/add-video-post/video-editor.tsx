'use client';

import { FC, useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AddVideoPost from './add-video-post';
import VideoPlayer from '@/components/common/video-player/video-player';
import { useDispatch } from 'react-redux';
import { setFiles } from '@/store/posts/postSlice';

interface VideoEditorProps {
  initialVideos?: { url: string; alt: string }[];
}

const VideoEditor: FC<VideoEditorProps> = ({ initialVideos = [] }) => {
  const [videos, setVideos] = useState(initialVideos);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const dispatch = useDispatch()

  const handleUploadImages = (files: FileList | File[]) => {
    const newImages = Array.from(files).map(file => ({
      url: URL.createObjectURL(file),
      alt: file.name,
    }));
    setVideos(prevImages => [...prevImages, ...newImages]);
  };

  const handleDelete = () => {
    const newVideos = videos.filter((_, index) => index !== currentVideoIndex);
    setVideos(newVideos);
    setCurrentVideoIndex(0);
  };

  useEffect(() => {
    if (videos.length > 0) {
      dispatch(setFiles(videos))
    }
  }, [videos, dispatch])

  return (
    <div className="bg-white w-full">
      {videos.length === 0 ? (
        <AddVideoPost onUpload={handleUploadImages} />
      ) : (
        <div className="flex justify-between flex-col">
          {/* Main Video Display */}
          <div className="flex flex-row justify-center bg-gray-50">
            <div className="overflow-hidden bg-pure-black">
              <VideoPlayer
                src={videos[currentVideoIndex]?.url || ''} // Replace with your video URL
                className="overflow-hidden shadow-lg max-w-[550px] w-full max-h-[300px] h-full"
              />
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-center gap-1 mt-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-light-grey-50 hover:bg-light-grey-100"
              onClick={handleDelete}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoEditor;
