import { FC } from 'react';

interface CommunityStatsProps {
  members: string | number;
  messages: string | number;
  discussions: string | number;
  classNames?: string;
}

const CommunityStats: FC<CommunityStatsProps> = ({
  members,
  messages,
  discussions,
  classNames,
}) => {
  return (
    <div className={`w-full px-4 ${classNames}`}>
      <div className="grid !grid-cols-3 divide-x divide-primary-grey bg-pure-white border-y border-gray-200 py-3">
        <div className="flex-center flex-col text-center">
          <span className="heading-secondary font-semibold text-primary-color">
            {members}
          </span>
          <span className="text-description">Members</span>
        </div>

        <div className="flex-center flex-col text-center">
          <span className="heading-secondary font-semibold text-primary-color">
            {messages}
          </span>
          <span className="text-description">Community Messages</span>
        </div>

        <div className="flex-center flex-col text-center">
          <span className="heading-secondary font-semibold text-primary-color">
            {discussions}
          </span>
          <span className="text-description">Discussions</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityStats;
