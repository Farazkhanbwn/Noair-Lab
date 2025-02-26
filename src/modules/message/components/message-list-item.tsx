import React, { FC } from 'react';

interface MessageListItemProps {
  avatar: string;
  name: string;
  message: string;
  time: string;
  isActive?: boolean;
  unreadCount?: number;
}

const MessageListItem: FC<MessageListItemProps> = ({
  avatar,
  name,
  message,
  time,
  isActive,
  unreadCount,
}) => {
  return (
    <div
      className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer ${
        isActive ? 'bg-blue-50' : ''
      }`}
    >
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="ml-3 flex-1">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{message}</p>
      </div>
      {unreadCount && (
        <span className="ml-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {unreadCount}
        </span>
      )}
    </div>
  );
};

export default MessageListItem;
