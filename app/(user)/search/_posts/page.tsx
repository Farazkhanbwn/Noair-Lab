'use client';

import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { Post } from '@/types';
import { PostCard } from '../_components/post-card';
import { useSearch } from '@/service/search-service/search-service';
import FullScreenLoader from '@/components/common/full-screen-loader/full-screen-loader';
import { handleRequestError } from '@/utils/toast-utils';
import { Post as ApiPost } from '@/service/search-service/search-service.types';

export default function PostPage() {
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

  const posts = searchResults?.posts ? mapApiPostsToUIFormat(searchResults.posts) : [];

  if (isPending) {
    return <FullScreenLoader />;
  }

  return (
    <div className="flex flex-1 h-auto">
      <main className="flex w-full flex-col gap-5 justify-center">
        <div className="w-full lg:w-3/4 xl:w-1/2 bg-white py-6 px-5 rounded-md">
          <h2 className="text-xl font-semibold mb-5">Posts</h2>
          <section>
            {posts.length > 0 ? (
              <div className="space-y-6 flex flex-col gap-6">
                {posts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No posts found for &quot;{keyword}&quot;</p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}