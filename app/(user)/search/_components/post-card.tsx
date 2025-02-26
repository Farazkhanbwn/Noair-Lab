import CommunityIcon from '@/assets/svgs/CommunityIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Post } from '@/types';
import { MessageSquare, Share, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { FollowButton } from './person-card';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="rounded-md py-6 bg-white overflow-hidden">
      {post.id === '1' ? (
        <h2 className="text-xl font-semibold mb-3 px-5">Post</h2>
      ) : null}
      <div className="flex items-center justify-between mb-4 px-5">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h3 className="font-semibold">{post.author.name}</h3>
            <p className="text-xs">
              {post.author.title} at {post.author.organization}
            </p>
            <div className="flex flex-col  gap-1 text-[0.675rem] text-secondary-grey">
              <span>{post.timeAgo}</span>
              {post.mutualFollowers && (
                <div className="flex items-center gap-1">
                  <CommunityIcon className="fill-secondary-grey" />
                  <span>{post.mutualFollowers} Mutual Followers</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <FollowButton />
        {/* <Button variant="outline" className="text-blue-600 border-blue-600">
          Follow
        </Button> */}
      </div>
      <p className="text-[0.675rem] mb-3 px-5">{post.content}</p>
      {post.image && (
        <div className="relative h-[300px]  overflow-hidden mb-4">
          <Image
            src={post.image || '/placeholder.svg'}
            alt="Post image"
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex items-center px-5 mb-3 justify-between text-[0.675rem]">
        <span>{post.likes} Likes</span>
        <div className="flex items-center gap-4">
          <span>{post.comments} Comments</span>
          <span>{post.shares} Shares</span>
        </div>
      </div>
      <div className="border-t flex mt-3">
        <button className="flex-1 flex items-center justify-center text-xs gap-2 p-3 hover:bg-gray-50">
          <ThumbsUp className="h-5 w-5" />
          Likes
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 p-3 text-xs hover:bg-gray-50">
          <MessageSquare className="h-5 w-5" />
          Comments
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 p-3 text-xs hover:bg-gray-50">
          <Share className="h-5 w-5" />
          Share
        </button>
      </div>
    </div>
  );
}
