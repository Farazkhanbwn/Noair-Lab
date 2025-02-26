export type VerifyUserType = {
  email: string;
  password: string;
};

export interface VerifyUserCardProps {
  isSelected: boolean;
  onSelect: () => void;
}
