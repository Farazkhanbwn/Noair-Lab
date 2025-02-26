import React, { FC, useState } from 'react';
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
import ScientificDocumentModal from '@/modals/feed/scientific-document/scientific-document';
import PostDetailedModal from '@/modals/feed/post-detailed-modal/post-detailed-modal';
import VideoPreviewModal from '@/modals/feed/video-preview-modal/video-preview-modal';
import PdfPreviewModal from '@/modals/feed/pdf-preview-modal/pdf-preview-modal';
import ArticlePostItem from './components/article-post-item/article-post-item';
import PostMedia from './components/post-media/post-media';

const images = [
  '/images/climates.png',
  '/images/climates.png',
  '/images/suggested-card-bg.png',
  '/images/climates.png',
  '/images/climates.png',
  '/images/climates.png',
];
const FeedItem: FC = () => {
  const [isCreatePostModal, setIsCreatePostModal] = useState(false);
  const [likeModal, setLikeModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [isScientificModal, setIsScientificModal] = useState(false);
  const [isPostDetailModal, setIsPostDetailModal] = useState(false);
  const [isVideoPreview, setIsVideoPreview] = useState(false);
  const [isPdfPreview, setIsPdfPreview] = useState(false);

  return (
    <div className="w-full text-black flex flex-col gap-5">
      {/* New Post */}
      <AddPost onCreatePost={() => setIsCreatePostModal(true)} />

      {/* Feed Post Without Image*/}
      <div className="bg-pure-white rounded-[20px]">
        <FeedPost
          name="Wilma Ullrich"
          role="Research Assistant at Northern University"
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
          onOpenSharesModal={() => setIsScientificModal(true)}
        />

        <SearchBar />

        {/* Comments */}
        <Comment
          name="Elmer Erdman"
          role="Medical Researcher"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <Comment
          name="Elmer Erdman"
          role="Medical Researcher"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <CustomButton
          onClick={() => setIsPdfPreview(true)}
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
          role="Research Assistant at Northern University"
          time={'2025-02-18T05:30:00Z'}
          content="Lorem ipsum dolor sit amet consectetur. Non nisl in id phasellus."
          likes={6}
          mediaPost={
            <PostMedia
              mediaType={'image'}
              media={['/images/post-background.png']}
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
          onOpenSharesModal={() => setIsScientificModal(true)}
        />

        <SearchBar />

        {/* Comments */}
        <Comment
          name="Elmer Erdman"
          role="Medical Researcher"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <Comment
          name="Elmer Erdman"
          role="Medical Researcher"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <CustomButton
          onClick={() => setIsPdfPreview(true)}
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
          role="Research Assistant at Northern University"
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
          onOpenSharesModal={() => setIsScientificModal(true)}
        />

        <SearchBar />

        {/* Comments */}
        <Comment
          name="Elmer Erdman"
          role="Medical Researcher"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <Comment
          name="Elmer Erdman"
          role="Medical Researcher"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <CustomButton
          onClick={() => setIsPdfPreview(true)}
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
          role="Research Assistant at Northern University"
          time={'2025-02-18T05:30:00Z'}
          content="Lorem ipsum dolor sit amet consectetur. Non nisl in id phasellus."
          likes={6}
          mediaPost={
            <PostMedia
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
          onOpenSharesModal={() => setIsScientificModal(true)}
        />

        <SearchBar />

        {/* Comments */}
        <Comment
          name="Elmer Erdman"
          role="Medical Researcher"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <Comment
          name="Elmer Erdman"
          role="Medical Researcher"
          comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
          time="1h"
          followers={1200}
          mutual={2}
        />

        <CustomButton
          onClick={() => setIsPdfPreview(true)}
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
          role="Research Assistant at Northern University"
          time={'2025-02-18T05:30:00Z'}
          content="Lorem ipsum dolor sit amet consectetur. Non nisl in id phasellus."
          likes={6}
          mediaPost={
            <PostMedia
              mediaType={'pdf'}
              media={'/docs/software-engineering.pdf'}
              onImageClick={() => setIsPdfPreview(true)}
            />
          }
          comments={4}
          shares={2}
          userImage="/images/feed-profile.png"
          followers={1.2}
          mutual={2}
          onOpenLikesModal={() => setLikeModal(true)}
          onOpenCommentsModal={() => setCommentModal(true)}
          onOpenSharesModal={() => setIsScientificModal(true)}
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
          onOpenSharesModal={() => setIsScientificModal(true)}
        />
        <SearchBar inputStyles={'bg-[#f9f9f9]'} />
      </div>

      {/* Modals */}
      <CreatePostModal
        isOpen={isCreatePostModal}
        onClose={() => setIsCreatePostModal(false)}
      />

      {/* Scientific Document Modal */}
      <ScientificDocumentModal
        isOpen={isScientificModal}
        onClose={() => setIsScientificModal(false)}
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
        onCloseModal={() => setIsPostDetailModal(false)}
      />

      <VideoPreviewModal
        open={isVideoPreview}
        onCloseModal={() => setIsVideoPreview(false)}
        videoSrc="/videos/natural-beauty.mp4"
        className="w-full h-full"
      />

      <PdfPreviewModal
        open={isPdfPreview}
        onCloseModal={() => setIsPdfPreview(false)}
      />
    </div>
  );
};

export default FeedItem;
