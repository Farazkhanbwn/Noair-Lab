'use client';
import React, { useEffect, useState } from 'react';
import CommunityMessages from './components/community-messages';
import { MessageList } from '../../messages/chat/MessageList';
import { Contact, Message } from '../../messages/types/message.type';
import { ArrowLeft, MoreHorizontal } from 'lucide-react';
import { MessageInput } from '../../messages/chat/MessageInput';
import { Avatar } from '@/components/ui/avatar';
import useScrollingHidden from '@/hooks/useScrollingHidden';
import { useSearchParams } from 'next/navigation';
import { COMMUNITY_CONTACTS } from '../communities.contants';

const CommunityGroupMessagingPage = () => {
  useScrollingHidden();
  const searchParams = useSearchParams();
  const communityId = searchParams.get('community');

  const [messages, setMessages] = useState<Message[]>([]);

  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isChatOpen, setIsChatopen] = useState(false);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    if (!communityId) return;
    const contact: Contact | null =
      COMMUNITY_CONTACTS?.find(el => el.id === Number(communityId)) || null;
    setSelectedContact(contact);
    setIsChatopen(true);
    fetchMessages(Number(communityId)).then(setMessages);
  }, [communityId]);

  const handleContactSelect = (contact: Contact) => {
    setSelectedContact(contact);
    setIsChatopen(true);
    // Fetch messages for selected contact
    fetchMessages(contact.id).then(setMessages);
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedContact) return;

    const newMessage: Message = {
      id: Date.now(),
      content: messageInput,
      sender: {
        id: 1, // current user id
        name: 'Me',
        avatar: 'your-avatar-url',
      },
      timestamp: new Date().toISOString(),
      isMe: true,
    };

    setMessages(prev => [...prev, newMessage]);
    setMessageInput('');
    // Send message to API
    sendMessage(selectedContact.id, messageInput);
  };

  return (
    <div className="flex w-full h-screen gap-4">
      <CommunityMessages
        onhandleCommunitySelect={handleContactSelect}
        isChatOpen={isChatOpen}
      />
      <div
        className={`${
          isChatOpen ? 'flex' : 'hidden md:flex'
        } justify-between flex-col flex-1 w-8/12 m-5 bg-white rounded-2xl`}
      >
        {selectedContact ? (
          <>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ArrowLeft
                  className="flex md:hidden cursor-pointer"
                  onClick={() => setIsChatopen(false)}
                />
                <Avatar className="w-10 h-10">
                  <img
                    src={selectedContact.avatar}
                    alt={selectedContact.name}
                  />
                </Avatar>
                <h2 className="text-base font-semibold">
                  {selectedContact.name}
                </h2>
              </div>
              <MoreHorizontal className="h-6 w-6 cursor-pointer" />
            </div>

            <MessageList messages={messages} />

            <MessageInput
              value={messageInput}
              onChange={setMessageInput}
              onSend={handleSendMessage}
            />
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a contact to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

async function fetchMessages(contactId: number): Promise<Message[]> {
  console.log('Contact ID', contactId);
  // Implement your API call
  return [
    {
      id: 1,
      sender: {
        id: 1,
        name: 'Gerardo',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      timestamp: '2025-05-05T12:00:00Z',

      isMe: false,
      seenBy: [
        {
          id: 1,
          name: 'Clinton Willms',
          lastMessage: 'Lorem ipsum dolor.',
          avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

          time: '4:52 PM',
        },
        {
          id: 2,
          name: 'Timothy Ruecker',
          lastMessage: 'Lorem ipsum dolor.',
          avatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

          time: '4:52 PM',
        },
        {
          id: 3,
          name: 'Clinton Willms',
          lastMessage: 'Lorem ipsum dolor.',
          avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

          time: '4:52 PM',
        },
      ],
    },
    {
      id: 2,
      sender: {
        id: 1,
        name: 'Armstrong',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      timestamp: '2025-05-05T12:00:00Z',

      isMe: true,
    },
    {
      id: 3,
      sender: {
        id: 1,
        name: 'Gerardo',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      timestamp: '2025-05-05T12:00:00Z',

      isMe: false,
    },
    {
      id: 4,
      sender: {
        id: 1,
        name: 'Armstrong',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      timestamp: '2025-05-05T12:00:00Z',

      isMe: true,
    },

    // Add other messages...
  ];
}

async function sendMessage(contactId: number, content: string): Promise<void> {
  console.log('Contact ID', contactId);
  console.log('Message content', content);
  // Implement your API call
}

export default CommunityGroupMessagingPage;
