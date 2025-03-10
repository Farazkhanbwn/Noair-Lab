import { Input } from '@/components/ui/input';
import EmojiIcon from '@/assets/svgs/EmojiIcon';
import UploadImageIcon from '@/assets/svgs/UploadImageIcon';
import UploadVideoIcon from '@/assets/svgs/UploadVideoIcon';
import UploadFileIcon from '@/assets/svgs/UploadFileIcon';
import InsertLinkIcon from '@/assets/svgs/InsertLinkIcon';
import SendMessageIcon from '@/assets/svgs/SendIcon';

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onEmojiSelect?: (emoji: string) => void;
  onFileUpload?: (file: File) => void;
}

export const MessageInput = ({
  value,
  onChange,
  onSend,
  onEmojiSelect,
  onFileUpload,
}: MessageInputProps) => {
  console.log({ onEmojiSelect, onFileUpload });
  return (
    <div className="px-4 pb-4 w-full flex-none justify-center">
      <div className="flex w-full justify-center   space-x-5">
        <div className="w-full xs:flex xs:flex-col lg:w-2/3 xl:w-3/4 px-4 pt-3 border border-stroke-grey justify-between rounded-3xl lg:flex lg:flex-row lg:items-center relative">
          <div className="flex w-full">
            <Input
              value={value}
              onChange={e => onChange(e.target.value)}
              placeholder="Type your message here..."
              className="max-w-1/2 border-none text-md shadow-none px-0 pl-4"
            />
          </div>
          <div className="flex items-center justify-between pl-4 xl:pl-0">
            <div className="flex items-center space-x-5 mb-2">
              <button className="hover:bg-gray-100 rounded-full">
                <EmojiIcon />
              </button>
              <button className="hover:bg-gray-100 rounded-full">
                <UploadImageIcon />
              </button>
              <button className="hover:bg-gray-100 rounded-full">
                <UploadVideoIcon />
              </button>
              <button className="hover:bg-gray-100 rounded-full">
                <UploadFileIcon />
              </button>
              <button className="hover:bg-gray-100 rounded-full">
                <InsertLinkIcon />
              </button>
            </div>
            <div
              className="flex mb-2 lg:hidden cursor-pointer items-center justify-center rounded-2xl bg-white"
              onClick={onSend}
            >
              <SendMessageIcon />
            </div>
          </div>
        </div>
        <div
          className="px-5 hidden lg:flex cursor-pointer items-center justify-center border rounded-2xl border-stroke-grey bg-white"
          onClick={onSend}
        >
          <SendMessageIcon />
        </div>
      </div>
    </div>
  );
};
