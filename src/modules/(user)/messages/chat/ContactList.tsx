import { Avatar } from '@/components/ui/avatar';
import { ChatActions } from './ChatActions';
import { Contact } from '../types/message.type';
import React from 'react';

interface ContactListProps {
  contacts: Contact[];
  onContactSelect: (contact: Contact) => void;
  onViewProfile: (contact: Contact) => void;
  onDeleteChat: (contact: Contact) => void;
  selectedContact: Contact | null;
}

export const ContactList = ({
  contacts,
  onContactSelect,
  onViewProfile,
  onDeleteChat,
  selectedContact,
}: ContactListProps) => {
  return (
    <div className="flex-1 overflow-y-auto min-h-0">
      {contacts.map(contact => (
        <div
          key={contact.id}
          className={`flex items-center justify-between p-4 ${contact.id === selectedContact?.id ? 'bg-light-blue' : ''} hover:bg-light-blue cursor-pointer`}
          onClick={() => onContactSelect(contact)}
        >
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="object-cover"
              />
            </Avatar>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{contact.name}</h3>
              <p className="text-xs text-gray-500">{contact.lastMessage}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 relative">
            <span className="text-[0.625rem] text-gray-500">
              {contact.time}
            </span>
            <ChatActions
              onViewProfile={() => onViewProfile(contact)}
              onDelete={() => onDeleteChat(contact)}
            />
            {contact?.isUnRead && (
              <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                2
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
