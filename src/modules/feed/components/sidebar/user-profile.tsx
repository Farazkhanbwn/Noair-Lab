/* eslint-disable @next/next/no-img-element */
import React from 'react';
import FeedCard from '../feed-card';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import { profileStats } from '@/constants/feed/sidebar/sidebar';
import ProfileStats from './profile-stats';
import Link from '@/components/common/custom-link/custom-link';
import Fragment from '@/components/fragment/fragment';

interface UserProfileProps {
  hideHistory?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ hideHistory }) => {
  return (
    <FeedCard>
      <div className="bg-white rounded-[20px] overflow-hidden">
        <div className="flex items-center justify-start sm:justify-center md:justify-start lg:justify-start xl:justify-start gap-x-5 p-5">
          <PrimaryImage
            src={'/Ellipse 24.svg'}
            width={60}
            height={60}
            alt="Profile Image"
            className="rounded-full w-[60px] h-[60px] object-cover"
          />
          <div className="text-pure-black">
            <h3 className="heading-secondary font-semibold mb-2">
              Lewis Morissette
            </h3>
            <p className="heading-tertiary">lewis@gmail.com</p>
          </div>
        </div>
        <div className="bg-light-grey-50 text-pure-black text-[12px] font-medium grid !grid-cols-2 p-6 pt-3 !gap-y-5">
          {profileStats.map((stat, index) => (
            <ProfileStats
              key={index}
              number={stat.number}
              text={stat.text}
              borderRight={stat.borderRight}
            />
          ))}
        </div>
        <Fragment hide={hideHistory}>
          <div className="text-black text-[12px] space-y-5 p-5">
            <div className="flex items-center gap-x-3">
              <span>
                <img src="/briefcase.svg" alt="briefcase icon" />
              </span>
              Profession Environmental Scientist
            </div>
            <div className="flex items-center gap-x-3">
              <span>
                <img src="/arrows.svg" alt="briefcase icon" />
              </span>
              Specialization in Climate Science
            </div>

            <div className="flex items-center gap-x-3">
              <span>
                <img src="/employment.svg" alt="briefcase icon" />
              </span>
              Current Employment in Northern University
            </div>
          </div>
          <hr className="border-t-2 border-light-grey" />
          <div className="flex-center uppercase py-3">
            <Link href="#" className="text-black text-sm">
              View Profile
            </Link>
          </div>
        </Fragment>
      </div>
    </FeedCard>
  );
};

export default UserProfile;
