'use client';

import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { Person, Post } from '@/types';
import Link from 'next/link';
import { useSearch } from '@/service/search-service/search-service';
import FullScreenLoader from '@/components/common/full-screen-loader/full-screen-loader';
import { handleRequestError } from '@/utils/toast-utils';
import { PostCard } from '../_components/post-card';
import { PersonCard } from '../_components/person-card';
import { User, Post as ApiPost } from '@/service/search-service/search-service.types';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');
  
  const { mutateAsync, data: searchResults, isPending } = useSearch();

  const handleSearchWithKeyword = useCallback(async (query: string) => {
    try {
      await mutateAsync({ query });
    } catch (error) {
      handleRequestError(error);
    }
  }, [mutateAsync]);

  // Effect to handle search when keyword changes in URL
  useEffect(() => {
    if (keyword) {
      handleSearchWithKeyword(keyword);
    }
  }, [keyword, handleSearchWithKeyword]);

  // Map API user data to the Person interface
  const mapUsersToPeople = (users: User[]): Person[] => {
    if (!users) return [];
    
    return users.map(user => ({
      id: user.id.toString(),
      name: user.name,
      title: user.title || '',
      organization: user.specialization || '',
      avatar: user.profileImageUrl || '/profile-person.png',
    }));
  };

  // Map API post data to the Post interface
  const mapApiPostsToUIFormat = (apiPosts: ApiPost[]): Post[] => {
    if (!apiPosts) return [];
    
    return apiPosts.map(post => ({
      id: post.id.toString(),
      author: {
        id: post.user.id.toString(),
        name: post.user.name,
        title: post.user.title || '',
        organization: post.user.specialization || '',
        avatar: post.user.profileImageUrl || '/profile-person.png',
      },
      content: post.content,
      image: post.files?.length > 0 ? post.files[0].url : undefined,
      likes: post.totalLikeCount || 0,
      comments: post.totalCommentCount ? parseInt(post.totalCommentCount) : 0,
      shares: post.totalShareCount || 0,
      timeAgo: new Date(post.createdAt).toLocaleDateString(),
      mutualFollowers: 0, // Default value if not available
    }));
  };

  // Use only the first few results for the main page
  const people = searchResults?.users ? mapUsersToPeople(searchResults.users.slice(0, 2)) : [];
  const posts = searchResults?.posts ? mapApiPostsToUIFormat(searchResults.posts.slice(0, 1)) : [];

  const hasMorePeople = searchResults?.users && searchResults.users.length > 2;
  const hasMorePosts = searchResults?.posts && searchResults.posts.length > 1;

  if (isPending) {
    return <FullScreenLoader />;
  }

  return (
    <div className="flex flex-1 h-auto">
      <main className="flex w-full flex-col gap-5 justify-center">
        {people.length > 0 && (
          <div className="w-full lg:w-3/4 xl:w-1/2 py-6 px-5 bg-white rounded-md">
            <h2 className="text-xl font-semibold mb-5">People</h2>
            <div className="flex flex-col gap-5">
              {people.map(person => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>

            {hasMorePeople && (
              <Link href={`/search/_all?keyword=${encodeURIComponent(keyword || '')}`}>
                <div className="w-full text-black text-center text-sm mt-6 cursor-pointer">
                  SEE ALL PEOPLE
                </div>
              </Link>
            )}
          </div>
        )}

        {posts.length > 0 && (
          <div className="w-full lg:w-3/4 xl:w-1/2 bg-white py-6 px-5 rounded-md">
            <h2 className="text-xl font-semibold mb-5">Posts</h2>
            <section>
              <div className="space-y-6">
                {posts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              
              {hasMorePosts && (
                <Link href={`/search/_all?keyword=${encodeURIComponent(keyword || '')}`}>
                  <div className="w-full text-black text-center text-sm mt-6 cursor-pointer">
                    SEE ALL POSTS
                  </div>
                </Link>
              )}
            </section>
          </div>
        )}

        {!people.length && !posts.length && keyword && (
          <div className="w-full lg:w-3/4 xl:w-1/2 py-6 px-5 bg-white rounded-md">
            <p className="text-center text-gray-500">No results found for &quot;{keyword}&quot;</p>
          </div>
        )}
      </main>
    </div>
  );
}