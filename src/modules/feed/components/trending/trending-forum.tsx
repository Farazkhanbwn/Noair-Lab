import React, { FC } from 'react';
import { TrendingForumProps } from '../../feed.interface';
import Link from '@/components/common/custom-link/custom-link';
import ForumItem from './forum-item';
import FeedCard from '../feed-card';

const TrendingForum: FC<TrendingForumProps> = ({ list, className }) => {
  return (
    <FeedCard
      heading="Trending Forums"
      classNames={`text-black bg-white rounded-[20px] ${className}`}
    >
      <hr className="border-t border-light-grey" />
      {list.map((item, index) => (
        <ForumItem key={index} {...item} />
      ))}

      <hr className="border-t-2 border-light-grey" />
      <div className="flex-center uppercase py-3">
        <Link href="/communities" className="text-black text-sm">
          SEE ALL
        </Link>
      </div>
    </FeedCard>
  );
};

export default TrendingForum;
