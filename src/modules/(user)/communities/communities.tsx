'use client';

import CreateCommunityModal from '@/modals/communities/create-community/create-community';
import React, { useState } from 'react';
import MyCommunities from './components/my-communities-card/my-communities';
import CommunityMessages from './group-messaging/components/community-messages';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import JoinedCommunities from './components/joined-communities/joined-communities';
import PopularCommunities from './components/popular-communities/popular-communities';
import DiscussionSection from './components/discussion-section';
import {
  INTERESTING_DISCUSSIONS,
  MY_COMMUNITIES_ITEMS,
  SAMPLE_DISCUSSIONS,
} from './communities.contants';
import DiscussionCard from './components/discussion-card';
import CreateDiscussion from './components/create-discussion';
import { CommunityModalType } from './communities.types';
import CommunityMediaModal from '@/modals/communities/community-media/community-media';
import TopicSelectionModal from '@/modals/communities/topic-selection/topic-selection';
import CommunityAccessModal from '@/modals/communities/community-access/community-access';
import CommunitySuccessModal from '@/modals/communities/community-success/community-success';

const CommunitiesPage = () => {
  const [isCreateDiscussion, setIsCreateDiscussion] = useState(false);
  const [isCommunityModal, setCommunityModal] =
    useState<CommunityModalType>(null);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
      <aside className="w-full md:max-w-[330px] flex flex-row md:flex-col gap-4">
        <MyCommunities
          title="Your Communities"
          communities={MY_COMMUNITIES_ITEMS}
          classNames="rounded-md w-full"
          selectedCommunity={''}
          onCreateCommunity={() => setCommunityModal('create')}
        />

        <CommunityMessages
          isChatOpen={false}
          onhandleCommunitySelect={() => console.log('Is Chat Closed')}
          classNames="hidden sm:block"
        />
      </aside>

      {/* Design Discussion Cards */}
      <div className="w-full bg-pure-white rounded-md">
        <div className="flex flex-col gap-2 items-end lg:items-center lg:flex-row justify-between p-4">
          <h2 className="heading-secondary font-semibold">
            Pinned Discussions (2)
          </h2>

          <CustomButton
            onClick={() => setIsCreateDiscussion(true)}
            className="font-semibold max-w-[12rem] w-full px-2 py-1.5 rounded-full"
            styleType={CustomButtonTypes.SECONDARY}
          >
            + Create Discussion
          </CustomButton>
        </div>

        <hr className="border-t-2 border-stroke-grey mb-4 opacity-50" />

        {/* Discussions */}
        <div className="bg-pure-white rounded-md px-4 pb-2">
          <DiscussionSection link="/communities/discussion">
            {SAMPLE_DISCUSSIONS.pinned.map(discussion => (
              <DiscussionCard key={discussion.id} {...discussion} />
            ))}
          </DiscussionSection>

          <h2 className="heading-secondary font-semibold my-2">
            Interesting discussions for you (2)
          </h2>
          <hr className="border-t-2 border-stroke-grey mb-4 opacity-50" />

          <DiscussionSection link="/communities/discussion">
            {INTERESTING_DISCUSSIONS.other.map(discussion => (
              <DiscussionCard key={discussion.id} {...discussion} />
            ))}
          </DiscussionSection>
        </div>
      </div>

      <aside className="hidden lg:flex flex-col max-w-[330px] w-full gap-4">
        <JoinedCommunities
          title="Joined Communities"
          classNames="bg-pure-white rouded-md w-full rounded-md"
        />
        <PopularCommunities
          title="Popular Communities"
          classNames="rounded-md bg-pure-white w-full"
        />
      </aside>

      <CreateDiscussion
        onCloseModal={() => setIsCreateDiscussion(false)}
        open={isCreateDiscussion}
        onSubmit={(title, body, image) => {
          console.log({ title, body, image });
        }}
      />

      <CreateCommunityModal
        isOpen={isCommunityModal === 'create'}
        onClose={() => setCommunityModal(null)}
        onNextButton={() => setCommunityModal('media')}
      />

      <CommunityMediaModal
        isOpen={isCommunityModal === 'media'}
        onClose={() => setCommunityModal(null)}
        onNextButton={() => setCommunityModal('topic')}
        onBackButton={() => setCommunityModal('create')}
      />

      <TopicSelectionModal
        isOpen={isCommunityModal === 'topic'}
        onClose={() => setCommunityModal(null)}
        onNextButton={() => setCommunityModal('access')}
        onBackButton={() => setCommunityModal('media')}
      />

      <CommunityAccessModal
        isOpen={isCommunityModal === 'access'}
        onClose={() => setCommunityModal(null)}
        onNextButton={() => setCommunityModal('success')}
        onBackButton={() => setCommunityModal('topic')}
      />

      <CommunitySuccessModal
        isOpen={isCommunityModal === 'success'}
        onClose={() => setCommunityModal(null)}
        onViewCommunity={() => setCommunityModal(null)}
      />
    </div>
  );
};

export default CommunitiesPage;
