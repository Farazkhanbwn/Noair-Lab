import PrimaryImage from '@/components/common/primary-image/primary-image';
import moment from 'moment';
import { FC } from 'react';

interface DiscussionCardProps {
  title: string;
  author: {
    name: string;
    avatar?: string;
  };
  updatedAt: Date;
  tags: string[];
  imageUrl?: string;
  preview?: string;
  classNames?: string;
}

const DiscussionCard: FC<DiscussionCardProps> = ({
  title,
  author,
  updatedAt,
  tags,
  imageUrl,
  preview,
  classNames,
}) => {
  return (
    <div className={`px-4 py-2 bg-light-grey rounded-[10px] ${classNames}`}>
      <h3 className="mb-2 font-medium text-gray-900">{title}</h3>
      <div className="flex gap-3">
        <PrimaryImage
          src={'/profile-person.png'}
          alt="Discusson-card"
          width={40}
          height={40}
          className="h-8 w-8"
        />
        <div className="flex items-center gap-2 heading-tertiary font-medium text-secondary-grey">
          <p>
            Posted by <span className="text-primary-color">{author.name}</span>
          </p>
          <p>•</p>
          <p>Last Updated: {moment(updatedAt).fromNow()}</p>
        </div>
      </div>
      <div>
        {preview && <p className="mt-1 text-sm text-gray-600">{preview}</p>}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map(tag => (
            <div
              key={tag}
              className="bg-light-blue heading-tertiary font-medium rounded-[2px] px-1 py-0.5 "
            >
              #{tag}
            </div>
          ))}
        </div>
        {imageUrl && (
          <div className="mt-4">
            <PrimaryImage
              src={imageUrl || '/placeholder.svg'}
              alt=""
              width={600}
              height={200}
              className="w-full max-h-[300px] h-full object-cover mx-auto max-w-[850px] rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscussionCard;
