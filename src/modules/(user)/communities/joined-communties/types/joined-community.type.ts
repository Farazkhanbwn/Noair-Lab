export interface ICommunityCard {
  id: string;
  name: string;
  memberCount: string;
  coverImage: string;
  avatarImage: string;
  createdAt: string;
  isPublic: boolean;
  hasGroupChat: boolean;
  groupChatStatus: 'On' | 'Off';
  forumCount: number;
  status: 'joined' | 'not-joined' | 'private';
  mutualConnection?: number;
  tags?: string;
  description?: string;
}
