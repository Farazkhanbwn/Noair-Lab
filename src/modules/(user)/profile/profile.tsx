/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { ProfileBanner } from '../../../components/dashboard/profile/components/profile-banner';
import ProfileInfo from '../../../components/dashboard/profile/components/profile-info';
import StatCard from '../../../components/dashboard/profile/components/stats-card';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import ActionButtons from '../../../components/dashboard/profile/components/actions-buttons';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import CapIcon from '@/components/icons/user/profile/cap-icon';
import GithubIcon from '@/components/icons/user/profile/github-icon';
import WebsiteIcon from '@/components/icons/user/profile/website-icon';
import LinkedinIcon from '@/components/icons/user/profile/linkedin-icon';
import { PlusIcon, X } from 'lucide-react';
import ExperienceSection from '../../../components/dashboard/profile/components/experience-section';
import { EducationSection } from '../../../components/dashboard/profile/components/education-section';
import { education, experiences, notificationMessages, profileData } from './profile.constants';
import UserPosts from '../../../components/dashboard/profile/components/user-posts';
import SocialButton from '@/components/dashboard/profile/social-button/social-button';
import { CustomModal } from '@/components/common/custom-modal';
import { DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import CoverPhotoModal from '../../../../app/(user)/profile/_components/cover-photo-modal';
import AddPortfolioLink from '../../../../app/(user)/profile/_components/add-portfolio-link';
import EditProfile from '../../../../app/(user)/profile/_components/edit-profile';
import AddExperience from '../../../../app/(user)/profile/_components/add-experience';
import AddEducation from '../../../../app/(user)/profile/_components/add-education';
import FollowerModal from '@/modals/follower-modal/follower-modal';
import { useGetUserProfile, useUpdateProfileImage } from '@/service/userProfile';
import { UserProfileInfo } from './profile.types';
import { convertBlobUrlToBlob } from '@/utils/fileUtils';
import { handleRequestError } from '@/utils/toast-utils';
import { ShowToast } from '@/components/common/Toast';

const buttonClasses =
  'w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-center bg-primary-color text-pure-white';
const secondaryButtonClasses =
  'w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-center';

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPortfolioModal, setIsPortoflioModal] = useState(false);
  const [isExperienceModal, setIsExperienceModal] = useState(false);
  const [isEducationModal, setisEducationModal] = useState(false);
  const [isFollowerModal, setIsFollowerModal] = useState(false);

  const [isEditProfileModal, setIsEditProfileModal] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [type, setType] = useState('');
  const [profileCoverImage, setProfileCoverImage] = useState<string | null>(
    null
  );

  const {
    data: profileDataa
  } = useGetUserProfile();

  const { mutateAsync } = useUpdateProfileImage();


  const profileDataForm = () => {
    const data: UserProfileInfo = {
      ...profileDataa,
      stats: [
        { count: profileDataa?.totalFollowerCount, label: 'Followers', index: 0 },
        { count: 12, label: 'Publications', index: 0 },
        { count: '02', label: 'Citations', index: 0 },
        { count: '02', label: 'Patents', index: 0 },
      ],
    }

    console.log(data)
    return data
  }

  const handleImageUpload = async (file: string) => {
    try {
      // Use the utility function to convert the file to Base64
      const fileBlob = await convertBlobUrlToBlob(file);
      await mutateAsync({file: fileBlob, type})
      ShowToast(notificationMessages['SUCCESS_UPLOADING_IMAGE'], { variant: 'success' })
      setIsModalOpen(false);
    } catch (error) {
      handleRequestError(error)
    }
  }

  return (
    <>
      <section className="max-w-4xl px-0 sm:px-4 mx-auto bg-light-grey overflow-hidden mt-[1rem] md:mt-[1.2rem]">
        <ProfileBanner
          onEditCoverOptions={() => {
            setProfileCoverImage(null);
            setIsModalOpen(true);
            setType('cover');
          }}
          onDeleteCover={() => {
            setIsDeleteModalOpen(true);
          }}
          bannerUrl={ profileData?.bannerUrl || '/images/profile-background.png'}
        >
          <div className="flex flex-col px-4">
            {/* profile with buttons */}
            <div className="flex justify-between items-start flex-col sm:flex-row mt-4">
              <div className="mt-[-6rem]">
                <PrimaryImage
                  key={profileDataa?.profileImageUrl}
                  src={ profileDataa?.profileImageUrl || '/profile-person.png' }
                  alt="Porfile"
                  width={150}
                  height={150}
                  className="w-150 h-150 z-1"
                  onClick={() => {
                    console.log('Modal Opened!');
                    setProfileCoverImage(null);
                    setIsModalOpen(true);
                    setType('profile');
                  }}
                />
                <ProfileInfo info={profileDataForm()} classNames="mt-4" />
              </div>

              <div className="flex flex-col gap-4 mt-4 sm:mt-0">
                <div className="flex gap-2 text-pure-black">
                  <CustomButton
                    styleType={CustomButtonTypes.TERTIARY}
                    className={`${buttonClasses}`}
                  >
                    R
                  </CustomButton>
                  <SocialButton
                    icon={<CapIcon />}
                    onClick={() => setisEducationModal(true)}
                    className={buttonClasses}
                  />
                  <SocialButton
                    icon={<GithubIcon />}
                    onClick={() => console.log('social button click')}
                    className={buttonClasses}
                  />
                  <SocialButton
                    icon={<WebsiteIcon />}
                    onClick={() => console.log('social button click')}
                    className={buttonClasses}
                  />
                  <SocialButton
                    icon={<LinkedinIcon />}
                    onClick={() => setIsExperienceModal(true)}
                    className={buttonClasses}
                  />
                  <SocialButton
                    icon={<PlusIcon />}
                    onClick={() => {
                      setIsPortoflioModal(true);
                    }}
                    className={secondaryButtonClasses}
                    styleType={CustomButtonTypes.SECONDARY}
                  />
                </div>
                <ActionButtons
                  onEditProfile={() => setIsEditProfileModal(true)}
                  previewLink={'/profile-preview'}
                />
              </div>
            </div>
          </div>
        </ProfileBanner>
        <div className="grid !grid-cols-2 xs:!grid-cols-4 border-y border-gray-200 mt-6 text-pure-black py-4">
          {profileDataForm()?.stats?.map((stat, index) => (
            <StatCard
              onClick={
                stat.label === 'Followers'
                  ? () => setIsFollowerModal(true)
                  : undefined
              }
              key={index}
              {...stat}
              index={index}
            />
          ))}
        </div>

        <div className="flex items-center flex-col md:flex-row mx-auto w-full py-6 gap-5">
          <ExperienceSection
            experiences={experiences}
            onAdd={() => setIsExperienceModal(true)}
            onEdit={() => setIsExperienceModal(true)}
            classNames="flex-1 p-4 rounded-md shadow-lg"
          />
          <EducationSection
            education={education}
            onAdd={() => setisEducationModal(true)}
            onEdit={() => setisEducationModal(true)}
            classNames="flex-1 p-4 rounded-md shadow-lg"
          />
        </div>

        <hr className="bg-secondary-grey opacity-70" />

        <div className="max-w-[40rem] mx-auto">
          <UserPosts />
        </div>
      </section>

      <CoverPhotoModal
        image={profileCoverImage}
        setImage={setProfileCoverImage}
        headerTitle={type === 'cover' ? 'Cover Photo' : 'Profile Picture'}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          console.log('Modal Closed!');
        }}
        type={type === 'profile' ? 'profile' : 'cover'}
        onSubmit={image => {
          console.log(image, 'image');
          handleImageUpload(image)
        }}
      />

      <CustomModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        dialogHeaderContent={
          <div className="w-full flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">
              Remove Cover
            </DialogTitle>
            <Button
              variant="default"
              size="icon"
              className="h-6 w-6 p-3 rounded-full shadow-none bg-light-grey hover:bg-stroke-grey"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        }
        dialogBodyContent={
          <>
            <DialogDescription className="text-xs  text-black text-center">
              Are you sure you want to remove your cover photo?
            </DialogDescription>
            <div className="flex w-full justify-center gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setIsDeleteModalOpen(false);
                }}
                className="py-5 px-7 bg-light-grey border-none hover:bg-light-grey hover:text-secondary-grey text-secondary-grey font-semibold"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setIsDeleteModalOpen(false);
                }}
                className="bg-primary text-base font-semibold text-white hover:bg-primary py-5 px-7"
              >
                Remove
              </Button>
            </div>
          </>
        }
      />
      <AddPortfolioLink
        open={isPortfolioModal}
        onCloseModal={() => setIsPortoflioModal(false)}
      />
      <EditProfile
        open={isEditProfileModal}
        onCloseModal={() => setIsEditProfileModal(false)}
      />

      <AddExperience
        open={isExperienceModal}
        onCloseModal={() => setIsExperienceModal(false)}
      />

      <AddEducation
        open={isEducationModal}
        onCloseModal={() => setisEducationModal(false)}
      />

      <FollowerModal
        title="Followers"
        open={isFollowerModal}
        onCloseModal={() => setIsFollowerModal(false)}
      />
    </>
  );
};

export default ProfilePage;
