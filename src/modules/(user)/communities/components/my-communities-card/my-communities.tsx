'use client';

import { Plus } from 'lucide-react';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import Link from '@/components/common/custom-link/custom-link';
import { CommunityItem } from '../../communities.types';

interface MyCommunitiesProps {
  title: string;
  communities: CommunityItem[]; // Now passed from the parent
  classNames?: string;
  selectedCommunity: string;
  onCreateCommunity: () => void;
}

const MyCommunities: React.FC<MyCommunitiesProps> = ({
  title,
  communities,
  selectedCommunity,
  onCreateCommunity,
  classNames,
}) => {
  const displayedCommunities = communities?.slice(0, 3);
  return (
    <div className={`bg-pure-white ${classNames}`}>
      <h2 className="heading-secondary font-semibold px-4 py-2">{title}</h2>
      <hr className="border-t-2 border-light-grey" />
      <div className="p-4">
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          className="heading-secondary rounded-[10px] border border-stroke-grey w-full mb-3 p-2 flex-center gap-2 font-semibold"
          onClick={onCreateCommunity}
        >
          <Plus className="h-4 w-4" />
          Create Community
        </CustomButton>

        {displayedCommunities?.length > 0 ? (
          <ul className="space-y-3">
            {displayedCommunities?.map(community => (
              <Link
                className="w-full !no-underline text-black"
                href={`/communities/${community.id}?community=${community.name}`}
                key={community.id}
              >
                <div
                  className={`w-full border border-stroke-grey flex items-center gap-3 p-2 rounded-[10px] transition-colors
                    ${selectedCommunity === community.name ? 'bg-light-blue !border-light-blue' : 'hover:bg-light-blue hover:border-light-blue'}
                  `}
                >
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <PrimaryImage
                      src={community.imageUrl || '/placeholder.svg'}
                      alt={community.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="heading-tertiary font-medium">
                      {community.name}
                    </h3>
                    <p className="text-description text-primary-grey">
                      {community.members}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 mt-4">
            No communities found.
          </p>
        )}
      </div>

      {/* Footer */}
      {communities?.length > 3 && (
        <>
          <hr className="border-t-2 border-light-grey" />
          <div className="text-center py-2">
            <Link
              href="/communities"
              className="heading-tertiary text-pure-black"
            >
              SEE ALL
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCommunities;
