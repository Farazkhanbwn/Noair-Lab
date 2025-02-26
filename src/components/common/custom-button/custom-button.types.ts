import { PropsWithChildren } from 'react';

export enum CustomButtonTypes {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
}

export interface CustomButtonProps extends PropsWithChildren {
  styleType?: CustomButtonTypes;
  type?: 'button' | 'submit' | 'reset';
  disable?: boolean;
  onClick?: () => void;
  className?: string;
  hide?: boolean;
}
