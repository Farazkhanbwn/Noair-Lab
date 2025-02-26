'use client';

import PrimaryImage from '@/components/common/primary-image/primary-image';
import { POPULAR_COMMUNITIES } from '../../communities.contants';
import { FC } from 'react';
import Link from '@/components/common/custom-link/custom-link';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import LockIcon from '@/components/icons/user/communities/lock-icon';

interface PopularCommunitiesProps {
  classNames?: string;
  title: string;
}

const PopularCommunities: FC<PopularCommunitiesProps> = ({
  classNames,
  title,
}) => {
  return (
    <div className={`${classNames}`}>
      <h2 className="heading-secondary font-semibold px-4 py-2">{title}</h2>
      <hr className="border-t-2 border-light-grey mb-4" />
      <div className="space-y-3 px-2">
        {POPULAR_COMMUNITIES.map((community, index) => (
          <div
            key={index}
            className="flex items-center p-2 space-x-3 bg-light-grey rounded-[10px]"
          >
            <PrimaryImage
              width={40}
              height={40}
              src={community.image || '/placeholder.svg'}
              alt={community.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="heading-tertiary font-medium text-pure-black">
                  {community.name}
                </h3>

                <CustomButton
                  styleType={CustomButtonTypes.SECONDARY}
                  className={`px-3 py-0.5 rounded-full heading-tertiary font-medium`}
                >
                  {community.action}
                </CustomButton>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-500 flex items-center gap-1">
                  {community.status === 'Private Community' && (
                    <LockIcon width={10} height={10} />
                  )}
                  {community.status}
                </span>
                {community.hasForums && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="text-blue-500 hover:underline cursor-pointer">
                      Forums
                    </span>
                  </>
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

export default PopularCommunities;
