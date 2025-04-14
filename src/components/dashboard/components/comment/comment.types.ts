export interface CommentProps {
  name: string;
  role: string;
  comment: string;
  time: string;
  className?: string;
  followers: number;
  mutual: number;

  isEditing?: boolean;
  editedContent?: string;
  onEditClick?: () => void;
  onContentChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSaveClick?: () => void;
  totalLikes: number;
  isLiked?: boolean;
  onLikeClick?: () => void;
  onReplyClick?: () => void;
  isLoading?: boolean;
}
