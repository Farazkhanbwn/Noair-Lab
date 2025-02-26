import React from 'react';
import { EducationSection } from '@/components/dashboard/profile/components/education-section';
import UserPosts from '@/components/dashboard/profile/components/user-posts';
import {
  education,
  experiences,
  profileData,
} from '../profile/profile.constants';
import ExperienceSection from '@/components/dashboard/profile/components/experience-section';
import StatCard from '@/components/dashboard/profile/components/stats-card';
import SocialButton from '@/components/dashboard/profile/social-button/social-button';
import ProfileInfo from '@/components/dashboard/profile/components/profile-info';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import { ProfileBanner } from '@/components/dashboard/profile/components/profile-banner';
import CustomButton from '@/components/common/custom-button/custom-button';
import CapIcon from '@/components/icons/user/profile/cap-icon';
import GithubIcon from '@/components/icons/user/profile/github-icon';
import WebsiteIcon from '@/components/icons/user/profile/website-icon';
import LinkedinIcon from '@/components/icons/user/profile/linkedin-icon';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import { PlusIcon } from 'lucide-react';

const buttonClasses =
  'w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-center bg-primary-color text-pure-white';
const secondaryButtonClasses =
  'w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-center';

const ProfilePreviewPage = () => {
  return (
    <section className="max-w-4xl px-0 sm:px-4 mx-auto bg-light-grey rounded-lg overflow-hidden mt-[5.2rem] md:mt-[5.8rem]">
      <ProfileBanner bannerUrl={'/images/profile-background.png'}>
        <div className="flex flex-col px-4">
          {/* profile with buttons */}
          <div className="flex justify-between items-start flex-col sm:flex-row mt-4">
            <div className="mt-[-6rem]">
              <PrimaryImage
                src={'/profile-person.png'}
                alt="Porfile"
                width={150}
                height={150}
                className="w-150 h-150 z-1"
              />
              <ProfileInfo
                onBetaUserClick={() => console.log('Beta User')}
                info={profileData.info}
                classNames="mt-4"
              />
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
                  onClick={() => console.log('social button click')}
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
                  onClick={() => console.log('social button click')}
                  className={buttonClasses}
                />
                <SocialButton
                  icon={<PlusIcon />}
                  onClick={() => console.log('social button click')}
                  className={secondaryButtonClasses}
                  styleType={CustomButtonTypes.SECONDARY}
                />
              </div>
            </div>
          </div>
        </div>
      </ProfileBanner>
      <div className="grid !grid-cols-2 xs:!grid-cols-4 border-y border-gray-200 mt-6 text-pure-black py-4">
        {profileData.info.stats.map((stat, index) => (
          <StatCard
            key={index}
            {...stat}
            borderRight={index !== 3}
            index={index}
          />
        ))}
      </div>

      <div className="flex items-center flex-col md:flex-row mx-auto w-full py-6 gap-5">
        <ExperienceSection
          experiences={experiences}
          onAdd={() => console.log('Add experience')}
          onEdit={() => console.log('Edit experiences')}
          classNames="flex-1 p-4 rounded-md shadow-lg"
        />
        <EducationSection
          education={education}
          onAdd={() => console.log('Add education')}
          onEdit={() => console.log('Edit education')}
          classNames="flex-1 p-4 rounded-md shadow-lg"
        />
      </div>

      <hr className="bg-secondary-grey opacity-70" />

      <div className="max-w-[40rem] mx-auto">
        <UserPosts />
      </div>
    </section>
  );
};

export default ProfilePreviewPage;
