import { Avatar } from '@/components/ui/avatar';
import { Message } from '../types/message.type';
import React from 'react';
import { MessageLastSeen } from './MessageLastSeen';
import moment from 'moment';

interface MessageListProps {
  messages: Message[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  let lastMessageDateLabel: string | null = null;
  return (
    <div className="flex flex-col overflow-y-scroll h-full gap-4 px-4 pt-4  space-y-4">
      {messages.map(message => {
        const currentDateLabel = new Date(message.timestamp)
          .toISOString()
          .split('T')[0];

        let showDateLabel = false;
        if (lastMessageDateLabel !== currentDateLabel) {
          showDateLabel = true;
          lastMessageDateLabel = currentDateLabel;
        }
        return (
          <React.Fragment key={message.id}>
            {showDateLabel ? (
              <div className="relative flex items-center justify-center my-6">
                <div className="absolute w-3/4 h-[2px] border border-gray-silver"></div>
                <div className="relative px-7 py-2 border border-gray-silver bg-[#FAFAFA] text-black text-[10px] rounded-[20px]">
                  {moment(message.timestamp).format('DD MMM, Y')}
                </div>
              </div>
            ) : null}
            <div
              key={message.id}
              className={`flex pb-4 ${message.isMe ? 'items-end' : 'items-start'} flex-col`}
            >
              <div
                className={`flex items-end space-x-5 max-w-[70%] ${message.isMe ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <Avatar className="w-8 h-8">
                  <img
                    src={message.sender.avatar}
                    alt={message.sender.name}
                    className="object-cover"
                  />
                </Avatar>
                <div className="chat min-w-48 relative">
                  <div
                    className={`rounded-2xl border flex flex-col gap-1 px-5 py-2 ${
                      message.isMe
                        ? 'right border-primary bg-light-blue text-black'
                        : 'left border-gray-silver bg-off-white'
                    }`}
                  >
                    <p className="font-semibold text-base">
                      {message.sender.name}
                    </p>
                    <p className="text-sm">{message.content}</p>
                    <p className="text-[0.625rem] text-right mt-2 mb-1">
                      {moment(message.timestamp).format('hh:mm A')}
                    </p>
                  </div>
                  {message.seenBy && message.seenBy.length > 0 && (
                    <MessageLastSeen seenBy={message.seenBy} />
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
