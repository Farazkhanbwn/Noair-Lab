export interface ProfileStats {
  count: number | string;
  label: string;
  borderRight?: boolean;
  index: number;
  classNames?: string;
}

export interface UserProfileInfo {
  name: string;
  profession: string;
  specialization: string;
  currentEmployment: string;
  stats: ProfileStats[];
}

export interface ProfileProps {
  info: UserProfileInfo;
  bannerUrl: string;
  avatarUrl: string;
  onEditProfile?: () => void;
  onPreviewMode?: () => void;
}

export interface TimelineItem {
  title: string;
  institution: string;
  institutionLogo?: string;
  date: string;
  description?: string;
}

export interface ExperienceData extends TimelineItem {
  role: string;
}

export interface EducationData extends TimelineItem {
  degree: string;
}

export interface SectionProps {
  title: string;
  onAdd?: () => void;
  onEdit?: () => void;
}

export interface ProfilePostProps {
  name: string;
  role: string;
  time: string;
  isPinned: boolean;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  userImage: string;
  mutual: number;
  followers: number;
  onOpenLikesModal: () => void;
  onOpenCommentsModal: () => void;
  onOpenSharesModal: () => void;
}
