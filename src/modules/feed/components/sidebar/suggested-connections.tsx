import React from 'react';
import FeedCard from '../feed-card';
import Link from '@/components/common/custom-link/custom-link';
import ConnectionItem from './connection-item';

const SuggestedConnections = () => {
  return (
    <FeedCard
      heading="Suggested Connections"
      classNames="text-pure-black bg-pure-white rounded-[20px]"
    >
      <div className="flex flex-col gap-2 mt-1">
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            <ConnectionItem />
            <hr className="border-light-grey" />
          </React.Fragment>
        ))}
      </div>

      <div className="flex-center py-3">
        <Link href="/suggested-users" className="text-black text-sm">
          SEE ALL
        </Link>
      </div>
    </FeedCard>
  );
};

export default SuggestedConnections;
