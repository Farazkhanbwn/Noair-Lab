'use client';

import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import Trending from './components/trending/trending';
import FeedItem from './components/feed-item/feed-item';
import { useSearchParams } from 'next/navigation';
import TextImageFormattingCard from './add-feed-post/TextImageFormattingCard';

const FeedPage = () => {
  const searchParams = useSearchParams();
  const isFormattingPage =
    searchParams.get('page') === 'text-formatting' || false;

  return (
    <div className="flex flex-col bg-light-grey p-4 px-2 sm:px-4 gap-5 md:flex-row w-full">
      {isFormattingPage ? (
        <TextImageFormattingCard />
      ) : (
        <>
          <Sidebar />
          <FeedItem />
          <Trending />
        </>
      )}
    </div>
  );
};

export default FeedPage;
