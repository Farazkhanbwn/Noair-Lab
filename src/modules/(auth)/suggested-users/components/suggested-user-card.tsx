'use client';

import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import SocialButton from '@/components/dashboard/profile/social-button/social-button';
import GithubIcon from '@/components/icons/user/profile/github-icon';
import WebsiteIcon from '@/components/icons/user/profile/website-icon';
import LinkedinIcon from '@/components/icons/user/profile/linkedin-icon';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import SuggestedUserStats from './suggested-user-stats';
import { SuggestedUserCardProps } from '../suggested-users.types';

const SuggestedUserCard = ({ user }: SuggestedUserCardProps) => {
  const buttonClasses =
    'w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-center bg-primary-color text-pure-white';

  // const handleSocialClick = (link: string) => {
  //   if (link) {
  //     window.open(link, '_blank');
  //   } else {
  //     console.log('No link provided');
  //   }
  // };

  return (
    <div className="bg-pure-white rounded-lg shadow-md overflow-hidden max-w-[25rem] justify-self-center sm:justify-self-start">
      {/* Background Image */}
      <div>
        <PrimaryImage
          width={300}
          height={100}
          src={user.backgroundImage}
          alt={`${user.name}'s Background`}
          className="w-full maxh-[300px] h-full object-cover"
        />
        {/* Profile Image */}
        <div className="rounded-full flex justify-center overflow-hidden mt-[-5rem]">
          <PrimaryImage
            width={150}
            height={150}
            src={user.profileImage}
            alt={`${user.name}'s Profile`}
            className="object-cover"
          />
        </div>
      </div>

      {/* Profile Content */}
      <div className="p-5 text-center">
        <div>
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{user.title}</p>
          <p className="text-sm text-gray-600">{user.organization}</p>
        </div>

        {/* Social Icons */}
        <div className="flex-center gap-2 mt-3">
          {user.socialLinks.github && (
            <SocialButton
              icon={<GithubIcon />}
              className={buttonClasses}
              onClick={() => console.log('social link clicked')}
              aria-label="Open GitHub Profile"
              // onClick={() => handleSocialClick(user.socialLinks.github!)}
            />
          )}
          {user.socialLinks.website && (
            <SocialButton
              icon={<WebsiteIcon />}
              className={buttonClasses}
              onClick={() => console.log('social link clicked')}
              aria-label="Open Website"
              // onClick={() => handleSocialClick(user.socialLinks.website!)}
            />
          )}
          {user.socialLinks.linkedin && (
            <SocialButton
              icon={<LinkedinIcon />}
              className={buttonClasses}
              onClick={() => console.log('social link clicked')}
              aria-label="Open Linkedin Profile"
              // onClick={() => handleSocialClick(user.socialLinks.linkedin!)}
            />
          )}
        </div>

        {/* Stats Grid */}
        <SuggestedUserStats
          googleCount={user.googleCount}
          publicationsCount={user.publicationsCount}
          citationsCount={user.citationsCount}
          patentsCount={user.patentsCount}
        />

        {/* Follow Button */}
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          className={
            'mt-6 py-2 px-4 max-w-[10rem] w-full bg-white border border-blue-600 text-blue-600 hover:text-pure-white rounded-full hover:bg-primary-color transition-colors duration-200'
          }
        >
          Follow
        </CustomButton>
      </div>
    </div>
  );
};

export default SuggestedUserCard;
