import { PostType } from '@/types';

export const HeadingText: Record<PostType, string> = {
  [PostType.Image]: 'Add Images',
  [PostType.Text]: 'Text Formatting',
  [PostType.Video]: 'Add Video',
  [PostType.File]: 'Add Files',
};
