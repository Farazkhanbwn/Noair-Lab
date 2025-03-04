'use client';

import { DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { CustomModal } from '@/components/common/custom-modal';
import { PostCard } from '../../search/_components/post-card';
import { Post } from '@/types';

function EditPost({
  open,
  onCloseModal,
}: {
  open: boolean;
  onCloseModal: () => void;
}) {
  const posts: Post[] = [
    {
      id: '1',
      author: {
        id: '3',
        name: 'Wilma Ullrich',
        title: 'Research Assistant',
        organization: 'Princeton University',
        avatar: '/profile-person.png',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur. Non nisi in id phasellus. Ac cras justo elementum tincidunt congue vitae massa volutpat lorem. Ac pellentesque dignissim nunc quam augue et.',
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20at%202.58.42%20PM-lldG7ZAu5GenNl76h4AplCsGlcqOGB.png',
      likes: 6,
      comments: 4,
      shares: 2,
      timeAgo: '12 minutes ago',
      mutualFollowers: 2,
    },
    {
      id: '2',
      author: {
        id: '3',
        name: 'Wilma Ullrich',
        title: 'Research Assistant',
        organization: 'Princeton University',
        avatar: '/profile-person.png',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur. Non nisi in id phasellus. Ac cras justo elementum tincidunt congue vitae massa volutpat lorem. Ac pellentesque dignissim nunc quam augue et.',
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20at%202.58.42%20PM-lldG7ZAu5GenNl76h4AplCsGlcqOGB.png',
      likes: 6,
      comments: 4,
      shares: 2,
      timeAgo: '12 minutes ago',
      mutualFollowers: 2,
    },
    {
      id: '3',
      author: {
        id: '3',
        name: 'Wilma Ullrich',
        title: 'Research Assistant',
        organization: 'Princeton University',
        avatar: '/profile-person.png',
      },
      content:
        'Lorem ipsum dolor sit amet consectetur. Non nisi in id phasellus. Ac cras justo elementum tincidunt congue vitae massa volutpat lorem. Ac pellentesque dignissim nunc quam augue et.',
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20at%202.58.42%20PM-lldG7ZAu5GenNl76h4AplCsGlcqOGB.png',
      likes: 6,
      comments: 4,
      shares: 2,
      timeAgo: '12 minutes ago',
      mutualFollowers: 2,
    },
  ];

  const handleSave = () => {
    onCloseModal();
  };

  const PostContent = () => {
    return (
      <>
        <div className="flex flex-col w-full gap-4 py-4">
          <PostCard key={posts[0].id} post={posts[0]} hideContentOnEditPost />
        </div>

        <div className="flex w-full justify-start gap-3 mt-4">
          <Button
            variant="outline"
            onClick={() => {
              handleSave();
            }}
            className="py-5 px-7 bg-light-grey border-none hover:bg-light-grey hover:text-secondary-grey text-secondary-grey font-semibold"
          >
            Delete
          </Button>
          <Button
            onClick={() => {
              handleSave();
            }}
            className="bg-primary text-base font-semibold text-white hover:bg-primary py-5 px-7"
          >
            Save
          </Button>
        </div>
      </>
    );
  };
  return (
    <CustomModal
      isOpen={open}
      className="max-w-[90%] md:max-w-[75%] xl:max-w-[50%] rounded-lg min-h-[40vh] max-h-[80vh] overflow-y-auto"
      onClose={onCloseModal}
      dialogHeaderContent={
        <div className="w-full flex items-center justify-between">
          <DialogTitle className="text-xl font-bold">Edit Post</DialogTitle>
          <Button
            variant="default"
            size="icon"
            className="h-6 w-6 p-3 rounded-full shadow-none bg-light-grey hover:bg-stroke-grey"
            onClick={onCloseModal}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      }
      dialogBodyContent={
        <>
          <PostContent />
        </>
      }
    />
  );
}

export default EditPost;
