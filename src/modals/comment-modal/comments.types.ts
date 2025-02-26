export interface CommentModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface CommentItemProps {
  heading: string;
  designation: string;
  description: string;
}
