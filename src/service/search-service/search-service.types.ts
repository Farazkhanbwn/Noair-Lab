export interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  username: string;
  name: string;
  email: string;
  title: string;
  specialization: string;
  profileImageUrl: string | null;
  bannerImageUrl: string | null;
  password?: string;
  resetPasswordToken?: null | string;
  resetPasswordExpires?: null | string;
}

export interface PostFile {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  url: string;
  fileType: string;
  uploadedAt: string;
}

export interface Post {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  content: string;
  contentJson: string;
  category: string;
  postType: string;
  topic: string[];
  totalLikeCount: number | null;
  totalCommentCount: string | null;
  totalShareCount: number | null;
  user: User;
  files: PostFile[];
}

export interface SearchResponse {
  status: string;
  users: User[];
  posts: Post[];
}

export interface SearchParams {
  query: string;
}