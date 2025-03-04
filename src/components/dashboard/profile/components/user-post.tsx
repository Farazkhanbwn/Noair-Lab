'use client';

import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import Comment from '@/components/dashboard/components/comment/comment';
import SearchBar from '@/modules/feed/components/feed-item/search-bar';
import React, { FC, useState } from 'react';
import ProfilePost from './post-item';
import LikesModal from '@/modals/like-modal/user-likes';
import CommentModal from '@/modals/comment-modal/comments';

interface UserPostProps {
  isPinned: boolean;
}

const UserPost: FC<UserPostProps> = ({ isPinned }) => {
  const [isLikeModal, setIsLikeModal] = useState(false);
  const [isCommentModal, setIsCommentModal] = useState(false);

  return (
    <div className="bg-pure-white rounded-[20px]">
      <ProfilePost
        name="Wilma Ullrich"
        role="Research Assistant at Northern University"
        time="12 minutes ago"
        content="Lorem ipsum dolor sit amet consectetur. Non nisl in id phasellus."
        image="/images/post-background.png"
        likes={6}
        comments={4}
        shares={2}
        userImage="/images/feed-profile.png"
        followers={1.2}
        isPinned={isPinned}
        mutual={2}
        onOpenLikesModal={() => setIsLikeModal(true)}
        onOpenCommentsModal={() => setIsCommentModal(true)}
        onOpenSharesModal={() => ''}
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
        styleType={CustomButtonTypes.TERTIARY}
        className="text-description font-medium text-primary-color underline p-6"
      >
        View more comments
      </CustomButton>

      <LikesModal
        isOpen={isLikeModal}
        onClose={() => setIsLikeModal(false)}
        title="Likes"
      />

      <CommentModal
        isOpen={isCommentModal}
        title="Comments"
        onClose={() => setIsCommentModal(false)}
      />
    </div>
  );
};

export default UserPost;
