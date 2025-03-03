import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import Comment from '@/components/dashboard/components/comment/comment';
import SearchBar from '@/modules/feed/components/feed-item/search-bar';
import React, { FC } from 'react';
import ProfilePost from './post-item';

interface UserPostProps {
  isPinned: boolean;
}

const UserPost: FC<UserPostProps> = ({ isPinned }) => {
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
        onOpenLikesModal={() => ''}
        onOpenCommentsModal={() => ''}
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
    </div>
  );
};

export default UserPost;
