/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

export interface FeedCardProps {
  heading?: string;
  children: ReactNode;
  classNames?: string;
}

export interface TrendingForumProps {
  list: { name: string; desc: string; views: string }[];
  className?: string;
}

export interface ForumItemProps {
  name: string;
  desc: string;
  views: string;
  imageURL?: string;
}

export interface FeedPostProps {
  name: string;
  role: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  userImage: string;
  followers: number;
  mutual: number;
  mediaPost?: ReactNode;
  userId: number | string;
  userLike: boolean;
  userFollow: boolean;
  // media?: MediaType;
  onOpenLikesModal: () => void;
  onOpenCommentsModal: () => void;
  onOpenSharesModal: () => void;
  onCommentClick: () => void;
  onLikeClick: () => void;
  onShareClick: () => void;
  followUnfollowHandler: (data: {
    action: string;
    userId: string | number;
  }) => void;
  isLoading?: boolean;
}

interface BaseMedia {
  type: 'image' | 'video' | 'pdf';
}

interface ImageMedia extends BaseMedia {
  urls: string[]; // Supports multiple images
}

interface VideoMedia extends BaseMedia {
  url: string; // Only a single video URL
}

interface PdfMedia extends BaseMedia {
  url: string; // PDF URL
}

export type TextEditorNode = {
  type: string;
  src?: string;
  children?: TextEditorNode[];
  [key: string]: any;
};

export type MediaType = ImageMedia | VideoMedia | PdfMedia;

export type FeedPostMedia = 'image' | 'video' | 'pdf';
