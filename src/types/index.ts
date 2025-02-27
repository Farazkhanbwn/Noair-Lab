import { SVGProps } from 'react';
import { Swiper } from 'swiper/react';
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  name: string;
  email: string;
  password: string;
}

export interface ResetPasswordCredentials {
  token: string;
  newPassword: string;
}

export interface VerifyCodeCredentials {
  email: string;
  code: string;
}

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  className?: string;
}

export interface Person {
  id: string;
  name: string;
  title: string;
  organization: string;
  avatar: string;
}

export interface Post {
  id: string;
  author: Person;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timeAgo: string;
  mutualFollowers?: number;
}

export interface Community {
  id: string;
  name: string;
  avatar: string;
}

export type FilterType = 'all' | 'people' | 'post' | 'community' | 'insights';

export interface DialogProps {
  open: boolean;
  onCloseModal: () => void;
}

export enum PostType {
  Text = 'text',
  Image = 'image',
  Video = 'video',
  File = 'file',
}

export type SwiperSliderBreakPoints = {
  [width: number]: Parameters<typeof Swiper>[0];
  [ratio: string]: Parameters<typeof Swiper>[0];
};
