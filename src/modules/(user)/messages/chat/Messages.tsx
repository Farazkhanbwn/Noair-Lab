import { useState, useEffect } from 'react';

import { Avatar } from '@/components/ui/avatar';
import { ArrowLeft, MoreHorizontal } from 'lucide-react';
import DeleteModal from '@/components/common/delete-modal';
import { Contact, Message } from '../types/message.type';
import { ContactList } from './ContactList';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { useRouter } from 'next/navigation';

export default function MessagesUI() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>({
    id: 1,
    name: 'Clinton Willms',
    lastMessage: 'Lorem ipsum dolor.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    time: '4:52 PM',
  });
  const [messageInput, setMessageInput] = useState('');
  const [isChatOpen, setIsChatopen] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    // Fetch contacts and initial messages
    // You would replace this with your API calls
    fetchContacts().then(setContacts);
    setIsChatopen(true);
    // Fetch messages for selected contact
    fetchMessages(selectedContact?.id as number).then(setMessages);
  }, [selectedContact]);

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
    <>
      <div className="flex w-full h-screen bg-light-grey">
        <div
          className={`w-full md:w-1/3 lg:w-3/12 shadow-md bg-white border-r ${
            isChatOpen ? 'hidden md:flex' : 'flex'
          } flex flex-col`}
        >
          <div className="p-4">
            <h1 className="text-3xl font-bold">Messages</h1>
          </div>
          <ContactList
            contacts={contacts}
            onContactSelect={handleContactSelect}
            onViewProfile={contact => {
              console.log({ contact });
              router.push('/profile');
              /* Handle view profile */
            }}
            onDeleteChat={contact => {
              console.log({ contact });

              setIsDeleteModalOpen(true);
            }}
          />
        </div>

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

      <DeleteModal
        open={isDeleteModalOpen}
        onCloseModal={() => setIsDeleteModalOpen(false)}
        headerTitle="Delete Chat"
        description="Are you sure you want to delete this chat?"
        btnCancelText="Cancel"
        btnSubmitText="Delete"
        onSubmit={() => {
          // Handle delete chat
          setIsDeleteModalOpen(false);
        }}
      />
    </>
  );
}

// API functions (implement these according to your backend)
async function fetchContacts(): Promise<Contact[]> {
  // Implement your API call
  return [
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
    {
      id: 4,
      name: 'Timothy Ruecker',
      lastMessage: 'Lorem ipsum dolor.',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      time: '4:52 PM',
    },
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
      isUnRead: true,
    },
    {
      id: 4,
      name: 'Timothy Ruecker',
      lastMessage: 'Lorem ipsum dolor.',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      time: '4:52 PM',
    },
  ];
}

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
