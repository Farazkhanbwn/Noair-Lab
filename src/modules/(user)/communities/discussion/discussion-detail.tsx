'use client';

import React, { useState } from 'react';
import MyCommunities from '../components/my-communities-card/my-communities';
import CommunityMessages from '../group-messaging/components/community-messages';
import JoinedCommunities from '../components/joined-communities/joined-communities';
import PopularCommunities from '../components/popular-communities/popular-communities';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import DiscussionPost from './components/discussion-post';
import AnswerCard from './components/answer-card';
import TextEditor from '@/components/common/text-editor/text-editor';
import CreateCommunityModal from '@/modals/communities/create-community/create-community';
import { MY_COMMUNITIES } from '../communities.contants';

const DiscussionDetailPage = () => {
  const [editorContent, setEditorContent] = useState('');
  const [isCreateCommunity, setIsCreateCommunity] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
      <aside className="w-full md:max-w-[330px] flex flex-row md:flex-col gap-4">
        <MyCommunities
          title="Your Communities"
          communities={MY_COMMUNITIES}
          classNames="rounded-md w-full"
          selectedCommunity={''}
          onCreateCommunity={() => setIsCreateCommunity(true)}
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
            Lorem ipsum dolor sit amet consectetur. kifhi Egestas a vel cras a
            augue ultricies ac.
          </h2>
          <CustomButton
            className="font-semibold max-w-[12rem] w-full px-2 py-1.5 rounded-full"
            styleType={CustomButtonTypes.SECONDARY}
          >
            + Create Discussion
          </CustomButton>
        </div>

        <hr className="border-t-2 border-light-grey mb-4" />
        <DiscussionPost />

        <div className="space-y-4 px-4">
          <h3 className="heading-secondary font-semibold">
            Answers <span className="text-description">(2)</span>
          </h3>

          <AnswerCard
            question="You may try"
            answer="Lorem ipsum dolor sit amet consectetur. Ut elit congue nulla faucibus triste sit non purus lorem nec. At massa et accu quam."
            author={{
              name: 'Jhon Doe',
              avatar:
                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design%20asnwers.PNG-RokvBcSxmvZDfjDAvFpCMLJi4JEeg6.png',
              badge: 'purple',
            }}
            timestamp="3m ago"
            onVote={type => console.log('Voted:', type)}
          />

          <AnswerCard
            question="You may try"
            answer="Lorem ipsum dolor sit amet consectetur. Ut elit congue nulla faucibus triste sit non purus lorem nec. At massa et accu quam."
            author={{
              name: 'Jhon Doe',
              avatar:
                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design%20asnwers.PNG-RokvBcSxmvZDfjDAvFpCMLJi4JEeg6.png',
              badge: 'purple',
            }}
            timestamp="3m ago"
            onVote={type => console.log('Voted:', type)}
          />
        </div>
        <hr className="border-t-2 border-light-grey-100 mt-4" />

        <div className="px-4 py-3">
          <h4 className="heading-secondary font-semibold mb-3">
            Join the Discussion
          </h4>
          {/* <AddNewPost /> */}
          <TextEditor
            value={editorContent}
            onChange={setEditorContent}
            height={150}
            classNames="mb-4"
          />

          <CustomButton className="!px-5 border border-primary-color !font-semibold">
            Post Answer
          </CustomButton>
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

      <CreateCommunityModal
        isOpen={isCreateCommunity}
        onClose={() => setIsCreateCommunity(false)}
        onNextButton={() => console.log('Next button Click')}
      />
    </div>
  );
};

export default DiscussionDetailPage;
