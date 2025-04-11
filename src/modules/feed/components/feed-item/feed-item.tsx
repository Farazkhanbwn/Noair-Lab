import { FC, useCallback, useEffect, useRef, useState } from 'react';
import AddPost from './add-post';
import CommentModal from '@/modals/comment-modal/comments';
import LikesModal from '@/modals/like-modal/user-likes';
import ShareModal from '@/modals/share-modal/share-modal';
import CreatePostModal from '@/modals/feed/create-post-modal/create-post-modal';
import VideoPreviewModal from '@/modals/feed/video-preview-modal/video-preview-modal';
import ScientificDocumentModal from '@/modals/feed/scientific-document/scientific-document';
import NewsAndInsightsModal from '../../add-feed-post/NewsAndInsightsModal';
import { useRouter, useSearchParams } from 'next/navigation';
import ChooseCategoryModal from '../../add-feed-post/ChooseCategoryModal';
import { setCategory } from '@/store/posts/postSlice';
import { fetchFeed } from '@/store/slices/feed-slice/feed-thunks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import PostSkeletonLoader from '@/components/skelton-loader/feed/post-skeleton-loader';
import SpinnerLoader from '@/components/common/spinner-loader/spinner-loader';
import FeedUserPost from './feed-user-post';
import { FeedPostItem } from '@/types/feed-user';
// import { FeedPostMedia } from '../../feed.interface';
import { useCreatePost } from '../../feed.hooks';

const FeedItem: FC = () => {
  const { category } = useCreatePost();
  const [postType, setPostType] = useState<string | null>(category);
  const [likeModal, setLikeModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [isOpenCategoryModal, setIsOpenCategoryModal] = useState(false);
  const [isVideoPreview, setIsVideoPreview] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const feed = useAppSelector(state => state.feed.feed);
  const cursor = useAppSelector(state => state.feed.cursor);
  const hasMore = useAppSelector(state => state.feed.hasMore);
  const isLoading = useAppSelector(state => state.feed.loading);

  console.log('feed items are : ', feed);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading || !hasMore) return;

      // Disconnect the previous observer if it exists
      if (observer.current) observer.current.disconnect();

      if (node) {
        observer.current = new IntersectionObserver(
          entries => {
            if (entries[0].isIntersecting && hasMore && !isLoading) {
              console.log('Fetching more data...');
              setTimeout(() => {
                dispatch(fetchFeed(cursor)).catch(error => {
                  console.error('Failed to fetch feed:', error);
                });
              }, 100);
            }
          },
          { threshold: 1.0 }
        );

        observer.current.observe(node);
      }

      // 🔥 Cleanup when node unmounts or ref gets reassigned
      return () => {
        if (observer.current) {
          observer.current.disconnect();
        }
      };
    },
    [cursor, hasMore, isLoading, dispatch]
  );

  useEffect(() => {
    if (!feed.length) {
      dispatch(fetchFeed(cursor)).catch(error =>
        console.error('Failed to fetch feed:', error)
      );
    }
  }, [dispatch, cursor, feed.length]); // ✅ Added feed.length to dependency array

  const isOpenTopicsModal =
    (postType && postType !== 'post') ||
    searchParams.get('page') === 'add-topics';

  const isOpenPostModal =
    (postType && postType === 'post') ||
    searchParams.get('page') === 'add-post' ||
    false;

  const isOpenScientificDocument =
    (postType && postType === 'scientific-document') ||
    searchParams.get('page') === 'scientific-document' ||
    false;

  return (
    <div className="w-full text-black flex flex-col gap-5">
      {/* New Post */}
      <AddPost
        onSelectItem={() => {
          setIsOpenCategoryModal(true);
        }}
      />

      {isLoading && !feed.length && <PostSkeletonLoader />}
      {feed.length > 0 &&
        feed.map((item: FeedPostItem) => (
          <FeedUserPost item={item} key={item.id} />
        ))}

      <div ref={lastItemRef} className="flex justify-center mt-4">
        {isLoading && hasMore && <SpinnerLoader />}

        {!hasMore && !isLoading && feed.length > 0 && (
          <p className="text-gray-500">No more feed items!</p>
        )}

        {!feed.length && !isLoading && (
          <p className="text-gray-500 mt-4">No feed available yet!</p>
        )}
      </div>

      <ChooseCategoryModal
        open={isOpenCategoryModal}
        onCloseModal={() => setIsOpenCategoryModal(false)}
        postType={postType}
        onNext={(post: string | null) => {
          setPostType(post);
          dispatch(setCategory(post as string));
          setIsOpenCategoryModal(false);
          if (post !== 'post') {
            const currentParams = new URLSearchParams(window.location.search);
            currentParams.set('page', 'add-topics');
            router.replace(`?${currentParams.toString()}`, { scroll: false });
          }
        }}
      />

      {/* Modals */}
      <CreatePostModal
        isOpen={isOpenPostModal}
        onClose={() => {
          setPostType(null);
          router.replace(`/feed`, { scroll: false });
        }}
      />

      <CreatePostModal
        isOpen={postType === 'newsInsights'}
        onClose={() => {
          setPostType(null);
          router.replace(`/feed`, { scroll: false });
        }}
      />

      <NewsAndInsightsModal
        open={
          !isOpenPostModal &&
          isOpenTopicsModal &&
          !isOpenCategoryModal &&
          !isOpenScientificDocument
        }
        onCloseModal={() => {
          setPostType(null);
          router.replace(`/feed`, { scroll: false });
        }}
        onBack={() => {
          setIsOpenCategoryModal(true);
          router.replace(`/feed`, { scroll: false });
        }}
        postType={postType}
      />

      {/* Scientific Document Modal */}
      <ScientificDocumentModal
        isOpen={isOpenScientificDocument}
        onClose={() => {
          setPostType(null);
          router.replace(`/feed`, { scroll: false });
        }}
      />

      <LikesModal
        isOpen={likeModal}
        onClose={() => setLikeModal(false)}
        title="Likes"
        postId={42}
      />

      <ShareModal
        isOpen={shareModal}
        title="Share"
        onClose={() => setShareModal(false)}
      />

      <CommentModal
        isOpen={commentModal}
        title="Comments"
        onClose={() => setCommentModal(false)}
      />

      <VideoPreviewModal
        open={isVideoPreview}
        onCloseModal={() => setIsVideoPreview(false)}
        videoSrc="/videos/natural-beauty.mp4"
        className="w-full h-full"
      />
    </div>
  );
};

export default FeedItem;
