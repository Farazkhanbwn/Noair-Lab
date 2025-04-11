/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client';

import React, { useEffect } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Trending from './components/trending/trending';
import FeedItem from './components/feed-item/feed-item';
import { useRouter, useSearchParams } from 'next/navigation';
import TextImageFormattingCard from './add-feed-post/TextImageFormattingCard';
import FullScreenLoader from '@/components/common/full-screen-loader/full-screen-loader';
import { useCreatePost } from './feed.hooks';

const FeedPage = () => {
  const searchParams = useSearchParams();
  const isFormattingPage =
    searchParams.get('page') === 'text-formatting' || false;

  const router = useRouter()
  const { isLoading, success, resetState, error } = useCreatePost()
  
  useEffect(() => {
    error == '' && success && setTimeout(() => router.replace('/feed'), 200)  && resetState();
  }, [error, success])

  return (
    <>
    {isLoading && <FullScreenLoader />}

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
    </>
  );
};

export default FeedPage;
