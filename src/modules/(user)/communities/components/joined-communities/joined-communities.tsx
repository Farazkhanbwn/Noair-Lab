'use client';

import { FC } from 'react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import { JOINED_COMMUNITIES } from '../../communities.contants';
import Link from '@/components/common/custom-link/custom-link';

interface JoinedCommunitiesProps {
  classNames?: string;
  title: string;
}

const JoinedCommunities: FC<JoinedCommunitiesProps> = ({
  classNames,
  title,
}) => {
  return (
    <div className={`${classNames}`}>
      <h2 className="heading-secondary font-semibold px-4 py-2">{title}</h2>
      <hr className="border-t-2 border-light-grey mb-4" />
      <div className="space-y-3 px-2">
        {JOINED_COMMUNITIES.map((community, index) => (
          <div
            key={index}
            className="flex items-center px-2 py-1 space-x-3 bg-light-grey rounded-[10px]"
          >
            <PrimaryImage
              width={40}
              height={40}
              src={community.image || '/placeholder.svg'}
              alt={community.name}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="heading-tertiary font-medium text-pure-black">
                  {community.name}
                </h3>
              </div>
              <div className="text-description text-secondary-grey mt-0.5">
                <span className="mr-1">{community.members}</span>
                <span className="text-primary-color">• Joined</span>
              </div>
              <div className="flex items-center space-x-2 text-description mt-[2px]">
                {community.hasGroupChat && (
                  <span className="text-green-500 bg-light-green cursor-pointer rounded-[2px] px-1">
                    • Group chat
                  </span>
                )}

                {community.hasForums && (
                  <span className="text-primary bg-light-blue cursor-pointer rounded-[2px] px-1">
                    Forums
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-t-2 mt-3 border-light-grey" />
      <div className="px-4 py-2 text-center">
        <Link href="#" className="heading-tertiary text-pure-black">
          SEE ALL
        </Link>
      </div>
    </div>
  );
};

export default JoinedCommunities;
