'use client';

import React, { useState } from 'react';
import CommunityAccessModal from '@/modals/communities/community-access/community-access';
import CommunityMediaModal from '@/modals/communities/community-media/community-media';
import CommunitySuccessModal from '@/modals/communities/community-success/community-success';
import TopicSelectionModal from '@/modals/communities/topic-selection/topic-selection';
import CommunityDetailPage from './community-detail/community-detail';

const CommunitiesPage = () => {
  const [isCommunityMediaModal, setIsCommunityMediaModal] = useState(false);
  const [isTopicSelectionModal, setIsTopicSelectionModal] = useState(false);
  const [isCommunityAccessModal, setIsCommunityAccessModal] = useState(false);
  const [isCommunitySuccessModal, setIsCommunitySuccessModal] = useState(false);

  return (
    <div className="w-full">
      <CommunityDetailPage />

      <CommunityMediaModal
        isOpen={isCommunityMediaModal}
        onClose={() => setIsCommunityMediaModal(false)}
        onNextButton={() => setIsTopicSelectionModal(true)}
      />

      <TopicSelectionModal
        isOpen={isTopicSelectionModal}
        onClose={() => setIsTopicSelectionModal(false)}
        onNextButton={() => setIsCommunityAccessModal(true)}
      />

      <CommunityAccessModal
        isOpen={isCommunityAccessModal}
        onClose={() => setIsCommunityAccessModal(false)}
        onNextButton={() => setIsCommunitySuccessModal(true)}
      />

      <CommunitySuccessModal
        isOpen={isCommunitySuccessModal}
        onClose={() => setIsCommunitySuccessModal(false)}
        onViewCommunity={() => console.log('View Community')}
      />
    </div>
  );
};

export default CommunitiesPage;
