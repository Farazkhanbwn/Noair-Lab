interface FileType {
  id: number;
  url: string;
  fileType: 'image' | 'video' | 'pdf';
}

interface FeedUserType {
  id: number;
  name: string;
  title: string;
  specialization: string;
  mutualCount: number;
  totalFollowersCount: number;
  userFollow: boolean;
  profileImageUrl: null | string;
  userLiked: boolean;
}

export interface FeedPostItem {
  id: number;
  createdAt: string;
  content: string;
  category: string;
  topic: string[];
  totalLikeCount: number;
  totalCommentCount: number | null;
  totalShareCount: number | null;
  files: FileType[];
  user: FeedUserType;
  fileType: string;
  comments: UserComment[];
  hasMoreComments?: boolean;
  nextCursor: string;
  userLike: boolean;
}

interface Like {
  userId: number;
}

export interface UserComment {
  id: number;
  createdAt: string; // ISO 8601 date string
  content: string;
  user: FeedUserType;
  likes: Like[];
  totalLikes: number;
  specialization: string;
  userLiked: boolean;
}

export interface UserPostLike {
  user: FeedUserType;
  id: number;
  createdAt: Date;
  reaction: string;
}
