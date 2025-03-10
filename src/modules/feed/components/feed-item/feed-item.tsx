import { FC, useState } from 'react';
import AddPost from './add-post';
import FeedPost from './feed-post';
import CommentModal from '@/modals/comment-modal/comments';
import LikesModal from '@/modals/like-modal/user-likes';
import ShareModal from '@/modals/share-modal/share-modal';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import SearchBar from './search-bar';
import Comment from '@/components/dashboard/components/comment/comment';
import CreatePostModal from '@/modals/feed/create-post-modal/create-post-modal';
import PostDetailedModal from '@/modals/feed/post-detailed-modal/post-detailed-modal';
import VideoPreviewModal from '@/modals/feed/video-preview-modal/video-preview-modal';
import ArticlePostItem from './components/article-post-item/article-post-item';
import PostMedia from './components/post-media/post-media';
import ScientificDocumentModal from '@/modals/feed/scientific-document/scientific-document';
import NewsAndInsightsModal from '../../add-feed-post/NewsAndInsightsModal';
import { useRouter, useSearchParams } from 'next/navigation';
import ChooseCategoryModal from '../../add-feed-post/ChooseCategoryModal';

const images = [
  '/images/post-background.png',
  '/images/post-background.png',
  '/images/suggested-card-bg.png',
  '/images/profile-background.png',
  '/images/profile-background.png',
  '/images/profile-background.png',
];
const FeedItem: FC = () => {
  const [isImagePreviewModal, setIsImagePreview] = useState(false);
  const [postType, setPostType] = useState<string | null>(null);
  const [likeModal, setLikeModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [isPostDetailModal, setIsPostDetailModal] = useState(false);
  const [isOpenCategoryModal, setIsOpenCategoryModal] = useState(false);
  const [isVideoPreview, setIsVideoPreview] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const isOpenTopicsModal =
    (postType && postType !== 'post') ||
    searchParams.get('page') === 'add-topics' ||
    false;

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

      {/* Feed Post Without Image*/}
      <div className="bg-pure-white rounded-[20px]">
        <FeedPost
          name="Wilma Ullrich"
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
        />

        <SearchBar />

        {/* Comments */}
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
      </div>

      {/* Feed Post with Image */}
      <div className="bg-pure-white rounded-[20px]">
        <FeedPost
          name="Wilma Ullrich"
          role="Research Assistant at University of Chicago"
          time={'2025-02-18T05:30:00Z'}
          content="Lorem ipsum dolor sit amet consectetur. Non nisl in id phasellus."
          likes={6}
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
        />

        <SearchBar />

        {/* Comments */}
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
      </div>

      {/* Image Gallery */}
      <div className="bg-pure-white rounded-[20px]">
        <FeedPost
          name="Wilma Ullrich"
          role="Research Assistant at University of Chicago"
          time={'2025-02-18T05:30:00Z'}
          content="Lorem ipsum dolor sit amet consectetur. Non nisl in id phasellus."
          likes={6}
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
        />

        <SearchBar />

        {/* Comments */}
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
      </div>

      {/* Video Post */}
      <div className="bg-pure-white rounded-[20px]">
        <FeedPost
          name="Wilma Ullrich"
          role="Research Assistant at University of Chicago"
          time={'2025-02-18T05:30:00Z'}
          content="Lorem ipsum dolor sit amet consectetur. Non nisl in id phasellus."
          likes={6}
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
        />

        <SearchBar />

        {/* Comments */}
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
      </div>

      {/* Pdf Post */}
      <div className="bg-pure-white rounded-[20px]">
        <FeedPost
          name="Wilma Ullrich"
          role="Research Assistant at University of Chicago"
          time={'2025-02-18T05:30:00Z'}
          content="Lorem ipsum dolor sit amet consectetur. Non nisl in id phasellus."
          likes={6}
          mediaPost={
            <PostMedia
              mediaType={'pdf'}
              media={'/docs/software-engineering.pdf'}
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
        />

        <SearchBar />
      </div>

      {/* Article Post */}
      <div className="bg-[#f2f2f2] rounded-[20px]">
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
      </div>

      <ChooseCategoryModal
        open={isOpenCategoryModal}
        onCloseModal={() => setIsOpenCategoryModal(false)}
        postType={postType}
        onNext={(post: string | null) => {
          setPostType(post);
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

      <PostDetailedModal
        open={isPostDetailModal}
        images={images}
        onCloseModal={() => setIsPostDetailModal(false)}
      />

      <PostDetailedModal
        open={isImagePreviewModal}
        images={['/images/post-background.png']}
        onCloseModal={() => setIsImagePreview(false)}
      />

      <VideoPreviewModal
        open={isVideoPreview}
        onCloseModal={() => setIsVideoPreview(false)}
        videoSrc="/videos/natural-beauty.mp4"
        className="w-full h-full"
      />

      {/* <NewsInsightModal
        open={commentModal}
        onCloseModal={() => setCommentModal(false)}
      /> */}

      {/* <PdfPreviewModal
        open={isPdfPreview}
        onCloseModal={() => setIsPdfPreview(false)}
      /> */}
    </div>
  );
};

export default FeedItem;
