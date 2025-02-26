import React from 'react';
import TrendingForum from './trending-forum';
import TrendingInsights from './trending-insights';
import { trendings } from '@/constants/feed/trendings/trendings';

const Trending = () => {
  return (
    <div className="hidden lg:flex w-full max-w-[330px] flex-col gap-5">
      <TrendingInsights list={trendings} />
      <TrendingForum list={trendings} />
    </div>
  );
};

export default Trending;
