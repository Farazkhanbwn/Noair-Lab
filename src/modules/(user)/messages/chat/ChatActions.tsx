import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Eye, Trash2, MoreHorizontal } from 'lucide-react';

interface ChatActionsProps {
  onViewProfile: () => void;
  onDelete: () => void;
}

export const ChatActions = ({ onViewProfile, onDelete }: ChatActionsProps) => {
  return (
    <div className="flex flex-col items-end gap-1 relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus-visible:outline-none">
          <MoreHorizontal className="h-6 w-6 text-black" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="bg-white cursor-pointer p-3 flex flex-col gap-4 rounded-[10px] m-0"
          align="end"
        >
          <DropdownMenuItem
            className="flex cursor-pointer items-center text-sm gap-2 p-0 "
            onClick={onViewProfile}
          >
            <Eye className="h-4 w-4" /> View Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex cursor-pointer items-center text-sm gap-2 p-0"
            onClick={onDelete}
          >
            <Trash2 className="h-4 w-4" />
            Delete Chat
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
