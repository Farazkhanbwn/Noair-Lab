import {
  otherCommunties,
  suggestedCommunties,
} from '@/modules/(user)/communities/communities.contants';
import { CommunityCard } from '@/modules/(user)/communities/joined-communties/components/CommunityCard';

export default function SuggestedCommunities() {
  return (
    <div className="py-6 flex-1 px-5 lg:px-4 space-y-8 w-full">
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-xl font-medium mb-5">
            Suggested Communities
          </h2>
          <h2 className="text-sm sm:text-xl text-primary underline font-medium mb-5">
            {'See all >'}
          </h2>
        </div>
        <div className="gap-6 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {suggestedCommunties.map(community => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-medium mb-5">Other Communities</h2>
        <div className="gap-6 grid-cols-1 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {otherCommunties.map(community => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </section>
    </div>
  );
}
