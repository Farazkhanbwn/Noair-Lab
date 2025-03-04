/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { FC } from 'react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import UsersIcon from '@/components/icons/user/feed/users-icon';
import { UserCardProps } from './user-card.types';
import PersonIcon from '@/components/icons/user/feed/person-icon';

const UserCard: FC<UserCardProps> = ({
  name,
  role,
  userImage,
  followers,
  mutual,
  timeStamp,
  classNames,
}) => {
  return (
    <div className={`flex items-start ${classNames}`}>
      <PrimaryImage
        width={42}
        height={42}
        src={userImage}
        alt={name}
        className="rounded-full w-[42px] h-[42px] mr-4"
      />
      <div>
        <h4 className="heading-secondary font-semibold text-black">{name}</h4>
        <p className="text-description mb-0.5">{role}</p>
        <p className="text-description text-secondary-grey">
          {/* {moment(timeStamp).format('YYYY-MM-DD HH:mm:ss')} */}
          {'12 minutes ago'}
        </p>
        <div className="flex gap-1.5">
          <p className="text-description border-r border-stroke-grey pr-1 text-secondary-grey mt-1 flex items-center gap-1">
            <UsersIcon /> {mutual} Mutual
          </p>
          <p className="text-description text-secondary-grey mt-1 flex items-center gap-1">
            <PersonIcon width={10} height={10} /> {followers} Followers
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
