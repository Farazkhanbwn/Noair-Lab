'use client';
import { FilterType } from '@/types';
import { SearchSidebar } from './_components/search-sidebar';
import SearchPage from './_all/page';
import PeoplesPages from './_peoples/page';
import { JSX } from 'react';
import PostPage from './_posts/page';
import { useSearchParams } from 'next/navigation';
import SuggestedCommunities from '@/modules/(user)/search/community/SuggestedCommunities';
import InsightsPage from '@/modules/(user)/insights/insights';

const ALL_PAGES: { [key: string]: JSX.Element } = {
  all: <SearchPage />,
  people: <PeoplesPages />,
  post: <PostPage />,
  community: <SuggestedCommunities />,
  insights: (
    <InsightsPage
      breakpoints={{
        200: { slidesPerView: 1 },
        525: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        // 1024: { slidesPerView: 3 },
        1280: { slidesPerView: 3 },
        1800: { slidesPerView: 4 },
      }}
    />
  ),
};
export default function SearchLayoutPage() {
  const searchParams = useSearchParams();

  const validFilters: FilterType[] = [
    'all',
    'people',
    'post',
    'community',
    'insights',
  ]; // Define valid options

  const filter = searchParams.get('filter');
  const activeFilter = validFilters.includes(filter as FilterType)
    ? (filter as FilterType)
    : 'all';

  return (
    <div className="flex flex-col w-full lg:flex lg:flex-row items-start justify-start bg-red py-4 gap-3">
      <SearchSidebar activeFilter={activeFilter} />
      {ALL_PAGES?.[activeFilter]}
    </div>
  );
}
