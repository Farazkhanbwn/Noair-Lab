import { FC } from 'react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import { ForumItemProps } from '../../feed.interface';

const ForumItem: FC<ForumItemProps> = ({ name, desc, views, imageURL }) => (
  <div className="p-3">
    <div className="flex gap-x-3">
      <PrimaryImage
        src={imageURL || ''}
        alt="Connection"
        width={40}
        height={40}
        className="rounded-full w-[40px] h-[40px]"
      />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h3 className="heading-tertiary font-medium">{name}</h3>
          <p className="text-description text-secondary-grey">{views} Views</p>
        </div>
        <p className="text-description text-dark-grey">{desc}</p>
      </div>
    </div>
  </div>
);

export default ForumItem;
