import { FC } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import SendIcon from '@/components/icons/send-icon';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';

interface AnswerCardProps {
  question?: string;
  answer?: string;
  author?: {
    name: string;
    avatar: string;
    badge?: 'purple' | 'blue' | 'green';
  };
  timestamp?: string;
  onVote?: (type: 'useful' | 'not-useful') => void;
  onSubmit?: (answer: string) => void;
}

const AnswerCard: FC<AnswerCardProps> = ({
  question = 'You may try',
  answer,
  author,
  timestamp,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onVote,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSubmit,
}) => {
  return (
    <div className="max-w-2xl w-full bg-gray-50 rounded-[10px] p-4">
      {/* Question */}
      <h3 className="text-sm font-medium text-gray-900 mb-2">{question}</h3>

      <div className="space-y-3">
        {/* Answer Content */}
        <p className="text-gray-600 text-sm">{answer}</p>

        {/* Author Info and Actions */}
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex items-center space-x-2">
            <div>
              <PrimaryImage
                src={'/profile-person.png'}
                width={40}
                height={40}
                alt={author?.name ?? ''}
                className="h-8 w-8"
              />
            </div>
            <div className="flex items-center heading-tertiary font-medium text-secondary-grey">
              <span>Answered by</span>
              <span className="text-blue-600 mx-1 pr-1 border-r">
                {author?.name}
              </span>

              <span>{timestamp}</span>
            </div>
          </div>

          {/* Voting Buttons */}
          <div className="flex items-center text-description pt-2 divide-x divide-stroke-grey">
            <CustomButton
              styleType={CustomButtonTypes.TERTIARY}
              className="flex items-center px-4 space-x-1 text-gray-600 hover:text-pure-black"
            >
              <ThumbsUp className="w-4 h-4" />
              <span>Useful</span>
            </CustomButton>
            <CustomButton
              styleType={CustomButtonTypes.TERTIARY}
              className="flex items-center px-4 space-x-1 text-gray-600 hover:text-pure-black"
            >
              <ThumbsDown className="w-4 h-4" />
              <span>Not Useful</span>
            </CustomButton>
          </div>
          <div className="flex items-center mt-1">
            <form className="flex bg-pure-white w-full px-2 rounded-[5px]">
              <input
                placeholder="Type your answer here..."
                className="flex-1 text-description !rounded-[2px] border-none shadow-none mb-0 placeholder:text-secondary-grey"
              />
              <CustomButton
                styleType={CustomButtonTypes.TERTIARY}
                type="submit"
                className="shrink-0"
              >
                <SendIcon />
              </CustomButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
