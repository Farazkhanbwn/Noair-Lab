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
  // media?: MediaType;
  onOpenLikesModal: () => void;
  onOpenCommentsModal: () => void;
  onOpenSharesModal: () => void;
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

export type MediaType = ImageMedia | VideoMedia | PdfMedia;

export type FeedPostMedia = 'image' | 'video' | 'pdf';
