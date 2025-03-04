import Link from '@/components/common/custom-link/custom-link';
import React, { FC } from 'react';
import FeedCard from '../feed-card';
import { insights } from '@/constants/feed/trendings/trendings';
import PrimaryImage from '@/components/common/primary-image/primary-image';

interface TrendingInsightsProps {
  list: { name: string; desc: string; views: string }[];
  className?: string;
}

const TrendingInsights: FC<TrendingInsightsProps> = ({ className }) => {
  return (
    <FeedCard
      heading="Trending Insights"
      classNames={`text-black bg-white rounded-[20px] ${className}`}
    >
      <hr className="border-t border-light-grey" />
      <div className="space-y-4 py-3">
        {insights.map(insight => (
          <div key={insight.id} className="flex items-start gap-3 px-3">
            <PrimaryImage
              src={insight.imageURL}
              alt="insights"
              width={40}
              height={40}
              className="w-[40px] h-[40px] rounded-full mt-1"
            />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="heading-tertiary font-medium">
                  {insight.title}
                </h3>
                <div className="flex items-center text-xs gap-1 text-description text-secondary-grey">
                  <span className="text-xs text-secondary-grey">
                    {insight.views}
                  </span>
                  <span className="text-xs text-secondary-grey">Views</span>
                </div>
              </div>
              <p className="text-description text-dark-grey">
                {insight.description}
              </p>

              <div className="flex items-center gap-2">
                {insight.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs bg-light-blue px-1 py-0.5 rounded-[2px] text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-t-2 border-light-grey" />
      <div className="flex-center uppercase py-3">
        <Link href="/insights" className="text-black text-sm">
          SEE ALL
        </Link>
      </div>
    </FeedCard>
  );
};

export default TrendingInsights;
