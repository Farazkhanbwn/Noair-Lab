'use client';

import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import Trending from './components/trending/trending';
import FeedItem from './components/feed-item/feed-item';

const FeedPage = () => {
  return (
    <div className="flex flex-col bg-light-grey p-4 px-2 sm:px-4 gap-5 md:flex-row w-full">
      <Sidebar />
      <FeedItem />
      <Trending />
    </div>
  );
};

export default FeedPage;
