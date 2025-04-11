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

  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading || !hasMore) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting && hasMore && !isLoading) {
            console.log('Fetching more data...');
            setTimeout(() => {
              dispatch(fetchFeed(cursor)).catch(error => {
                console.error('Failed to fetch feed:', error);
              });
            }, 100); // ✅ Slight delay to avoid race conditions
          }
        },
        { threshold: 1.0 }
      );

      if (node) observer.current.observe(node);
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
      {/* Feed Post Without Image*/}
      {/* <div className="bg-pure-white rounded-[20px]">
        <FeedPost
          name="Wilma Ullrich"
          userId={2}
          role="Research Assistant at University of Chicago"
          time={'2025-02-18T05:30:00Z'}
          content="Lorem ipsum dolor sit amet consectetur. Non nisl in id phasellus. Ac cras justo elementum tincidunt congue vitae massa volutpat lorem 😊😊. "
          likes={6}
          comments={4}
          shares={2}
          userImage="/images/feed-profile.png"
          followers={1.2}
          mutual={2}
          onOpenLikesModal={() => setLikeModal(true)}
          onOpenCommentsModal={() => setCommentModal(true)}
          onOpenSharesModal={() => console.log('share button clicked')}
          followUnfollowHandler={followUnfollowHandler}
        />

        <SearchBar />

        <Comment
          name="Elmer Erdman, PhD"
          role="Research Faculty at Harvard University"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <Comment
          name="Elmer Erdman, PhD"
          role="Research Faculty at Harvard University"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <CustomButton
          onClick={() => console.log('More comments clicked')}
          styleType={CustomButtonTypes.TERTIARY}
          className="text-description font-medium text-primary-color underline p-6"
        >
          View more comments
        </CustomButton>
      </div> */}

      {/* Feed Post with Image */}
      {/* <div className="bg-pure-white rounded-[20px]">
        <FeedPost
          name="Wilma Ullrich"
          role="Research Assistant at University of Chicago"
          time={'2025-02-18T05:30:00Z'}
          content="Lorem ipsum dolor sit amet consectetur. Non nisl in id phasellus."
          likes={6}
          userId={3}
          mediaPost={
            <PostMedia
              mediaType={'image'}
              media={['/images/post-background.png']}
              onImageClick={() => setIsImagePreview(true)}
            />
          }
          comments={4}
          shares={2}
          userImage="/images/feed-profile.png"
          followers={1.2}
          mutual={2}
          onOpenLikesModal={() => setLikeModal(true)}
          onOpenCommentsModal={() => setCommentModal(true)}
          onOpenSharesModal={() => console.log('share button clicked')}
          followUnfollowHandler={followUnfollowHandler}
        />

        <SearchBar />

        <Comment
          name="Elmer Erdman, PhD"
          role="Research Faculty at Harvard University"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <Comment
          name="Elmer Erdman, PhD"
          role="Research Faculty at Harvard University"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <CustomButton
          onClick={() => console.log('more comments clicked')}
          styleType={CustomButtonTypes.TERTIARY}
          className="text-description font-medium text-primary-color underline p-6"
        >
          View more comments
        </CustomButton>
      </div> */}

      {/* Image Gallery */}
      {/* <div className="bg-pure-white rounded-[20px]">
        <FeedPost
          name="Wilma Ullrich"
          role="Research Assistant at University of Chicago"
          time={'2025-02-18T05:30:00Z'}
          content="Lorem ipsum dolor sit amet consectetur. Non nisl in id phasellus."
          likes={6}
          userId={4}
          mediaPost={
            <PostMedia
              mediaType={'image'}
              media={images}
              onImageClick={() => setIsPostDetailModal(true)}
            />
          }
          comments={4}
          shares={2}
          userImage="/images/feed-profile.png"
          followers={1.2}
          mutual={2}
          onOpenLikesModal={() => setLikeModal(true)}
          onOpenCommentsModal={() => setCommentModal(true)}
          onOpenSharesModal={() => console.log('share button clicked')}
          followUnfollowHandler={followUnfollowHandler}
        />

        <SearchBar />

        <Comment
          name="Elmer Erdman, PhD"
          role="Research Faculty at Harvard University"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <Comment
          name="Elmer Erdman, PhD"
          role="Research Faculty at Harvard University"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <CustomButton
          onClick={() => console.log('more comments clicked')}
          styleType={CustomButtonTypes.TERTIARY}
          className="text-description font-medium text-primary-color underline p-6"
        >
          View more comments
        </CustomButton>
      </div> */}

      {/* Video Post */}
      {/* <div className="bg-pure-white rounded-[20px]">
        <FeedPost
          name="Wilma Ullrich"
          role="Research Assistant at University of Chicago"
          time={'2025-02-18T05:30:00Z'}
          content="Lorem ipsum dolor sit amet consectetur. Non nisl in id phasellus."
          likes={6}
          userId={5}
          mediaPost={
            <PostMedia
              onImageClick={() => console.log('video is clicked')}
              mediaType={'video'}
              media={'/videos/natural-beauty.mp4'}
            />
          }
          comments={4}
          shares={2}
          userImage="/images/feed-profile.png"
          followers={1.2}
          mutual={2}
          onOpenLikesModal={() => setLikeModal(true)}
          onOpenCommentsModal={() => setCommentModal(true)}
          onOpenSharesModal={() => console.log('share button clicked')}
          followUnfollowHandler={followUnfollowHandler}
        />

        <SearchBar />

        <Comment
          name="Elmer Erdman, PhD"
          role="Research Faculty at Harvard University"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <Comment
          name="Elmer Erdman, PhD"
          role="Research Faculty at Harvard University"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <CustomButton
          onClick={() => console.log('more comments clicked')}
          styleType={CustomButtonTypes.TERTIARY}
          className="text-description font-medium text-primary-color underline p-6"
        >
          View more comments
        </CustomButton>
      </div> */}

      {/* Pdf Post */}
      {/* <div className="bg-pure-white rounded-[20px]">
        <FeedPost
          name="Wilma Ullrich"
          role="Research Assistant at University of Chicago"
          time={'2025-02-18T05:30:00Z'}
          content="Lorem ipsum dolor sit amet consectetur. Non nisl in id phasellus."
          likes={6}
          userId={8}
          mediaPost={
            <PostMedia
              files={[
                {
                  id: 1,
                  url: 'https://d2u26eegcjw767.cloudfront.net/users/11/posts/39/pdf/1742983592894-MuhammadHamza.pdf',
                  fileType: 'pdf',
                },
              ]}
              onImageClick={() => console.log('more comments clicked')}
            />
          }
          comments={4}
          shares={2}
          userImage="/images/feed-profile.png"
          followers={1.2}
          mutual={2}
          onOpenLikesModal={() => setLikeModal(true)}
          onOpenCommentsModal={() => setCommentModal(true)}
          onOpenSharesModal={() => console.log('share button clicked')}
          followUnfollowHandler={followUnfollowHandler}
        />

        <SearchBar />
      </div> */}

      {/* Article Post */}
      {/* <div className="bg-[#f2f2f2] rounded-[20px]">
        <ArticlePostItem
          date="INDYNEWS - 03 Jan 2025"
          imageSrc={'/images/research-image.png'}
          title="IndyNEWS Detroit: Dixon quickest in second practice"
          likes={2}
          comments={4}
          shares={2}
          onImageClick={() => setIsPostDetailModal(true)}
          onOpenLikesModal={() => setLikeModal(true)}
          onOpenCommentsModal={() => setCommentModal(true)}
          onOpenSharesModal={() => console.log('share button clicked')}
        />
        <SearchBar inputStyles={'bg-[#f9f9f9]'} />
      </div> */}

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
