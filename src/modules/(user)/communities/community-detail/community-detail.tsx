'use client';

import Link from '@/components/common/custom-link/custom-link';
import { ChevronDown, Trash2, UploadIcon } from 'lucide-react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import PencilIcon from '@/components/icons/user/profile/pencil-icon';
import GlobeIcon from '@/components/icons/user/communities/globe-icon';
import CreatedTimeIcon from '@/components/icons/user/communities/created-time';
import GroupChatIcon from '@/components/icons/user/communities/group-chat';
import CommunityStats from '../components/community-stats';
import UserApprovalCard from '../components/user-approval-card';
import DiscussionSection from '../components/discussion-section';
import DiscussionCard from '../components/discussion-card';
import { SAMPLE_DISCUSSIONS } from '../communities.contants';
import MyCommunities from '../components/my-communities-card/my-communities';
import CommunityMessages from '../group-messaging/components/community-messages';
import { useRouter, useSearchParams } from 'next/navigation';
import CommunityActions from './components/community-actions';
import CoverPhotoModal from '../../../../../app/(user)/profile/_components/cover-photo-modal';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import DeleteModal from '@/components/common/delete-modal';
import CreateDiscussion from '../components/create-discussion';
import EditCommunityProfile from '../components/edit-community-info/edit-community-profile';
import CreateCommunityModal from '@/modals/communities/create-community/create-community';
import CommunityMediaModal from '@/modals/communities/community-media/community-media';
import TopicSelectionModal from '@/modals/communities/topic-selection/topic-selection';
import CommunityAccessModal from '@/modals/communities/community-access/community-access';
import CommunitySuccessModal from '@/modals/communities/community-success/community-success';

type CommunityModalType =
  | 'create'
  | 'media'
  | 'topic'
  | 'access'
  | 'success'
  | null;

const CommunityDetailPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const communityName = searchParams.get('community') ?? 'Climate Laws';
  const [isEditCommunityProfileInfo, setIsEditCommunityProfileInfo] =
    useState(false);
  const [isCommunityModal, setCommunityModal] =
    useState<CommunityModalType>(null);

  const [isCreateDiscussionModal, setIsCreateDiscussionModal] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteModalType, setDeleteModalType] = useState('');

  const [isProfileCoverPhotoModalOpen, setIsProfileCoverPhotoModalOpen] =
    useState(false);

  const [type, setType] = useState('');
  const [profileCoverImage, setProfileCoverImage] = useState<string | null>(
    null
  );

  return (
    <>
      <div className="p-4 flex flex-col md:flex-row gap-4 w-full">
        <aside className="w-full md:max-w-72 flex flex-col sm:flex-row md:flex-col gap-4">
          <MyCommunities
            title="Your Communities"
            classNames="rounded-md w-full md:max-w-72"
            selectedCommunity={communityName}
            onCreateCommunity={() => setCommunityModal('create')}
          />
          <CommunityMessages
            classNames=" w-full md:max-w-72"
            isChatOpen={false}
            onhandleCommunitySelect={contact => {
              console.log('Community Selected');
              router.push(
                `/communities/group-messaging?community=${contact.id}`
              );
            }}
          />
        </aside>

        <div className="w-full flex flex-col gap-4">
          {/* Climate Information */}
          <div className="bg-pure-white pb-4 h-fit rounded-lg shadow-sm">
            {/* <div className="relative"> */}
            {/* Hero Image */}
            <div className="h-48 relative w-full overflow-hidden rounded-t-lg">
              <PrimaryImage
                width={800}
                height={200}
                src="/images/climates.png"
                alt="Lightning in purple sky"
                className="w-full h-full object-cover"
              />

              <DropdownMenu>
                <DropdownMenuTrigger className="focus-visible:outline-none absolute top-2 right-2 rounded-full p-2 bg-pure-white m-3 cursor-pointer">
                  <PencilIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="bg-white cursor-pointer shadow-md p-3 flex flex-col gap-5 rounded-[0.625rem]  m-0"
                  align="center"
                >
                  <DropdownMenuItem
                    className="flex cursor-pointer items-center text-sm gap-3 p-0"
                    onClick={() => {
                      setProfileCoverImage(null);
                      setType('cover');
                      setIsProfileCoverPhotoModalOpen(true);
                    }}
                  >
                    <UploadIcon /> Upload Cover Photo
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="flex  cursor-pointer items-center text-sm gap-3 p-0"
                    onClick={() => {
                      setDeleteModalType('banner');
                      setIsDeleteModalOpen(true);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Profile Section with overlap */}
            <div className="px-8 w-32 h-32">
              <div className="relative items-start -mt-20">
                {/* Profile Image */}
                <div
                  onClick={() => {
                    setProfileCoverImage(null);
                    setType('profile');
                    setIsProfileCoverPhotoModalOpen(true);
                  }}
                  className="h-32 w-32 aspect-square  cursor-pointer rounded-full border-4 border-white overflow-hidden bg-white"
                >
                  <PrimaryImage
                    width={120}
                    height={120}
                    src="/images/climate-profile.png"
                    alt="Sabin Center Logo"
                    className="h-32 w-32  object-cover bg-blue-600 rounded-full"
                  />
                </div>
              </div>
            </div>
            {/* </div> */}

            {/* Content Section */}
            <div className="px-8 space-y-4 ml-[1rem] lg:ml-[8.5rem] mt-[0] lg:mt-[-2.5rem]">
              {/* Title and Description */}
              <div className="w-full flex-between items-center">
                <div className="flex flex-col gap-2">
                  <h1 className="heading-secondary font-semibold">
                    Climate Laws
                  </h1>
                  <p className="text-description text-pure-black">
                    Lorem ipsum dolor sit amet consectetur. Rhoncus nibh massa.
                  </p>
                </div>
                <div
                  onClick={() => {
                    setIsEditCommunityProfileInfo(true);
                  }}
                  className="cursor-pointer w-auto"
                >
                  <PencilIcon />
                </div>
              </div>

              {/* Status and Creation Date */}
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div>
                    <GlobeIcon fillColor="#373737" width={16} height={16} />
                  </div>
                  Public
                </div>
                <div className="flex items-center gap-2">
                  <CreatedTimeIcon />
                  Created Jan 8, 2025
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <GroupChatIcon className="h-4 w-4" />
                    Group Chat
                  </div>
                  <div className="rounded-[4px] px-1 flex items-end bg-light-green text-lime-green cursor-pointer">
                    On
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <CommunityActions
                onCreateDiscussion={() => {
                  console.log('Create Discussion');
                  setIsCreateDiscussionModal(true);
                }}
                onInviteMember={() => console.log('Invite Member')}
                onLeaveCommunity={() => {
                  console.log('Leave Community');
                  setDeleteModalType('community');
                  setIsDeleteModalOpen(true);
                }}
              />
            </div>

            {/* Community Stats */}
            <CommunityStats
              members="1.2k"
              messages="12"
              discussions="02"
              classNames="mt-4"
            />
          </div>

          {/* Community Access  Request */}
          <div className="rounded-md bg-pure-white">
            <h3 className="heading-secondary font-semibold p-4">
              Community Access Request (2)
            </h3>
            <div className="flex flex-col gap-4 px-4 md:px-1 lg:px-4">
              <UserApprovalCard
                userImage="/profile-person.png"
                name="Lewis Morissette"
                role="Research Assistant at Yale University"
                mutual={2}
                followers="1.2"
                onApprove={() => console.log('User Approved')}
                onIgnore={() => console.log('User Ignored')}
                classNames="!flex-col sm:!flex-row gap-2 !items-start"
              />

              <UserApprovalCard
                userImage="/profile-person.png"
                name="Lewis Morissette"
                role="Research Assistant at Yale University"
                mutual={2}
                followers="1.2"
                onApprove={() => console.log('User Approved')}
                onIgnore={() => console.log('User Ignored')}
                classNames="!flex-col sm:!flex-row gap-2 !items-start"
              />
            </div>

            <hr className="my-2" />
            <div className="text-center heading-tertiary font-medium pb-4">
              <Link href="#" className="text-pure-black">
                See All Members
              </Link>
            </div>
          </div>

          {/* Discussions */}
          <div className="bg-pure-white rounded-md px-4">
            <DiscussionSection
              link="/communities/discussion"
              title="Pinned Discussions"
              count={SAMPLE_DISCUSSIONS.pinned.length}
            >
              {SAMPLE_DISCUSSIONS.pinned.map(discussion => (
                <DiscussionCard key={discussion.id} {...discussion} />
              ))}
            </DiscussionSection>

            <DiscussionSection
              link="/communities/discussion"
              title="Other Discussions"
              count={SAMPLE_DISCUSSIONS.other.length}
            >
              {SAMPLE_DISCUSSIONS.other.map(discussion => (
                <DiscussionCard key={discussion.id} {...discussion} />
              ))}
            </DiscussionSection>
          </div>
        </div>
      </div>
      <CoverPhotoModal
        image={profileCoverImage}
        setImage={setProfileCoverImage}
        headerTitle={type === 'cover' ? 'Community Banner' : 'Community Icon'}
        isOpen={isProfileCoverPhotoModalOpen}
        onClose={() => {
          setIsProfileCoverPhotoModalOpen(false);
          console.log('Modal Closed!');
        }}
        type={type === 'profile' ? 'profile' : 'cover'}
        onSubmit={image => {
          console.log(image, 'image');
        }}
      />

      <DeleteModal
        open={isDeleteModalOpen}
        onCloseModal={() => setIsDeleteModalOpen(false)}
        headerTitle={
          deleteModalType === 'banner' ? 'Remove Banner' : 'Leave Community'
        }
        description={
          deleteModalType === 'banner'
            ? 'Are you sure you want to remove your community banner?'
            : 'Are you sure you want to leave community?'
        }
        btnCancelText="Cancel"
        btnSubmitText={deleteModalType === 'banner' ? 'Remove' : 'Leave'}
        onSubmit={() => {
          console.log('On Submit Clicked');

          if (deleteModalType === 'banner') {
            console.log('On Submit Clicked For Banner');
          } else {
            console.log('On Submit Clicked For Community Leave');
          }
          setIsDeleteModalOpen(false);
        }}
      />

      <CreateDiscussion
        onCloseModal={() => setIsCreateDiscussionModal(false)}
        open={isCreateDiscussionModal}
        onSubmit={(title, body, image) => {
          console.log({ title, body, image });
        }}
      />

      <EditCommunityProfile
        open={isEditCommunityProfileInfo}
        onCloseModal={() => setIsEditCommunityProfileInfo(false)}
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
        onViewCommunity={() => console.log('View Community')}
      />
    </>
  );
};

export default CommunityDetailPage;
