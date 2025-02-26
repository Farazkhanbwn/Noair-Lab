import React, { FC } from 'react';

interface MessageBubbleProps {
  content: string;
  timestamp: string;
  isOwn?: boolean;
}

const MessageBubble: FC<MessageBubbleProps> = ({
  content,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  timestamp,
  isOwn,
}) => {
  return (
    <div
      className={`flex text-black ${isOwn ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[490px] p-5 ${
          isOwn ? 'bg-light-blue rounded-tr-none' : 'bg-white rounded-tl-none'
        } rounded-2xl`}
      >
        <p className="text-[10px]">{content}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
