export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface Message {
  id: number;
  sender: User;
  content: string;
  timestamp: string;
  isMe: boolean;
  seenBy?: Contact[];
}

export interface Contact {
  id: number;
  name: string;
  lastMessage: string;
  avatar: string;
  time: string;
  isUnRead?: boolean;
  members?: User[];
  memberCount?: number;
}
