import React, { FC, PropsWithChildren } from 'react';
import MessageListItem from './message-list-item';

const MessageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-[85vh] bg-white">
      <div className="w-[320px] border-r  border-gray-200">
        <h1 className="text-2xl font-bold p-6 text-[#1A1A1A]">Messages</h1>
        <MessageListItem
          avatar="/Ellipse 24.svg"
          name="Clinton Willms"
          message="Lorem ipsum dolor."
          time="4:52 PM"
          isActive={true}
          unreadCount={2}
        />
        <MessageListItem
          avatar="/Ellipse 24.svg"
          name="Clinton Willms"
          message="Lorem ipsum dolor."
          time="4:52 PM"
          isActive={false}
          unreadCount={2}
        />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default MessageLayout;
