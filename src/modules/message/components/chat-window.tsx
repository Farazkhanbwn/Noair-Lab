import { FC, ReactNode } from 'react';

interface ChatWindowProps {
  recipientName: string;
  recipientAvatar: string;
  children: ReactNode;
}

import React from 'react';

const ChatWindow: FC<ChatWindowProps> = ({
  recipientName,
  recipientAvatar,
  children,
}) => {
  return (
    <div className="flex flex-col h-full bg-light-grey">
      {/* Chat Header */}
      <div className="flex items-center p-5">
        <img
          src={recipientAvatar}
          alt={recipientName}
          className="w-10 h-10 rounded-full"
        />
        <h2 className="ml-3 font-semibold text-[#1A1A1A]">{recipientName}</h2>
      </div>

      {/* Chat Messages */}
      <div className="max-w-[660px] w-full h-full mx-auto flex flex-col justify-end">
        <div className="relative flex items-center justify-center mb-10">
          <div className="absolute w-full h-[2px] bg-white"></div>
          <div className="relative z-10 px-5 py-2 bg-white text-black text-[10px] rounded-[20px]">
            26 Dec, 2024
          </div>
        </div>
        <div className="flex flex-col justify-end overflow-y-auto space-y-4">
          {children}
        </div>

        {/* Message Input */}
        <div className="my-5">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-1 rounded-[20px] text-[10px] text-black p-5 border-none mb-0"
            />
            <button className="bg-white p-[15px] rounded-[10px]">
              <img src="/message.svg" alt="send icon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
