import { Avatar } from '@/components/ui/avatar';
import { Contact } from '../types/message.type';

interface MessageLastSeenProps {
  seenBy: Contact[];
}

export const MessageLastSeen = ({ seenBy }: MessageLastSeenProps) => {
  const visibleAvatars = seenBy.slice(0, 3);
  const remainingCount = seenBy.length - 3;

  return (
    <div className={`flex items-center gap-2 mt-1 justify-end`}>
      <span className="text-xs text-secondary-grey">
        Seen by {seenBy.length} people
      </span>
      <div className="flex items-center -space-x-2">
        {visibleAvatars.map(contact => (
          <Avatar key={contact.id} className="w-5 h-5 border-2 border-white">
            <img
              src={contact.avatar}
              alt={contact.name}
              className="object-cover"
            />
          </Avatar>
        ))}
        {remainingCount > 0 && (
          <span className="text-xs text-gray-500 ml-2">
            +{remainingCount} others
          </span>
        )}
      </div>
    </div>
  );
};
