'use client';

import Link from '@/components/common/custom-link/custom-link';
import { COMMUNITY_CONTACTS } from '../../communities.contants';
import CommunityMessageCard from './community-messages-card';
import { FC } from 'react';
import { Contact } from '@/modules/(user)/messages/types/message.type';

interface CommunityMessagesProps {
  classNames?: string;
  onhandleCommunitySelect: (contact: Contact) => void;
  isChatOpen: boolean;
}

const CommunityMessages: FC<CommunityMessagesProps> = ({
  classNames,
  onhandleCommunitySelect,
  isChatOpen,
}) => {
  return (
    // <div
    //   className={`w-full max-h-fit overflow-hidden rounded-lg bg-pure-white shadow-sm ${classNames}`}
    // >
    <div
      className={`w-full h-fit shadow-sm overflow-hidden rounded-lg bg-pure-white  ${classNames ? classNames : 'md:w-1/3 lg:w-3/12'} ${
        isChatOpen ? 'hidden md:flex' : 'flex'
      } flex flex-col`}
    >
      <div className="border-gray-100 px-4 py-2">
        <h2 className="heading-secondary font-semibold text-gray-900">
          Communities Messages
        </h2>
      </div>
      <hr className="border-t-2 border-light-grey" />
      {/* Messages */}
      <div className="p-4 space-y-4">
        {COMMUNITY_CONTACTS.map(contact => (
          <CommunityMessageCard
            key={contact.id}
            contact={contact}
            onhandleCommunitySelect={onhandleCommunitySelect}
          />
        ))}
      </div>
      {/* Footer */}
      <hr className="border-t-2 border-light-grey" />
      <div className="px-4 py-2 text-center">
        <Link
          href="/communities/group-messaging"
          className="heading-tertiary text-pure-black"
        >
          SEE ALL
        </Link>
      </div>
    </div>
  );
};

export default CommunityMessages;
