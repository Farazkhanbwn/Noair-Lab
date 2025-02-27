import {
  joinedCommunities,
  popularCommunities,
} from '@/modules/(user)/communities/communities.contants';
import { CommunityCard } from '@/modules/(user)/communities/joined-communties/components/CommunityCard';

export default function CommunitiesPage() {
  return (
    <div className="py-6 px-3 sm:px-12 lg:px-4 space-y-8 w-full">
      <section>
        <h2 className="text-xl font-medium mb-5">Joined Communities</h2>
        <div className="gap-6 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {joinedCommunities.map(community => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-5">Popular Communities</h2>
        <div className="gap-6 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {popularCommunities.map(community => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </section>
    </div>
  );
}
