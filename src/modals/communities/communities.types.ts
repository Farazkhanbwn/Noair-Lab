export type AccessLevel = 'public' | 'restricted' | 'private' | 'group';

export interface CreateCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNextButton?: () => void;
  onBackButton?: () => void;
}

export interface CommunityFormData {
  communityName: string;
  description: string;
}

export interface CommunityMediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNextButton?: () => void;
  onBackButton?: () => void;
}

export interface TopicSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNextButton?: () => void;
  onBackButton?: () => void;
}

export interface CommunityAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNextButton?: () => void;
  onBackButton?: () => void;
}

export interface CommunitySuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewCommunity: () => void;
  onBackButton?: () => void;
}
