'use client';

import PrimaryImage from '@/components/common/primary-image/primary-image';
import { Contact } from '@/modules/(user)/messages/types/message.type';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface CommunityMessageCardProps {
  contact: Contact;
  onhandleCommunitySelect: (contact: Contact) => void;
}

const AvatarList: FC<{ count: number }> = ({ count }) => {
  const avatars = Array.from({ length: count }).map((_, index) => (
    <div key={index} className="relative h-5 w-5 overflow-hidden rounded-full">
      <PrimaryImage
        src={'/profile-person.png'}
        width={20}
        height={20}
        alt="Member avatar"
        className="border-2 border-white object-cover"
      />
    </div>
  ));

  return <div className="flex -space-x-2">{avatars}</div>;
};

const CommunityMessageCard: FC<CommunityMessageCardProps> = ({
  contact,
  onhandleCommunitySelect,
}) => {
  const router = useRouter();
  return (
    <div
      className="w-full md:max-w-sm cursor-pointer overflow-hidden"
      onClick={() => {
        router.push(`/communities/group-messaging?community=${contact.id}`);
        onhandleCommunitySelect(contact);
      }}
    >
      <div className="flex gap-3">
        {/* Main Community Image */}
        <PrimaryImage
          src={'/profile-person.png'}
          width={40}
          height={40}
          alt={contact.name}
          className="object-cover rounded-full w-8 h-8"
        />

        {/* Content */}
        <div className="flex-1 space-y-1">
          <h3 className="heading-tertiary font-medium text-pure-black">
            {contact.name}
          </h3>

          {/* Member Avatars and Count */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <AvatarList count={contact?.memberCount as number} />
              <span className="text-xs text-gray-500">
                {contact.memberCount || 3} here...
              </span>
            </div>
            {contact.memberCount && (
              <div className="w-5 h-5 flex-center text-primary-color rounded-full bg-light-blue text-description">
                {contact.memberCount}
              </div>
            )}
          </div>

          {/* Message Description */}
          <p className="text-description text-secondary-grey">
            {contact.lastMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityMessageCard;
