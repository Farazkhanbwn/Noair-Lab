export interface CommunityItem {
  id: number;
  name: string;
  imageUrl?: string;
  members: string;
}

export type CommunityModalType =
  | 'create'
  | 'media'
  | 'topic'
  | 'access'
  | 'success'
  | null;
