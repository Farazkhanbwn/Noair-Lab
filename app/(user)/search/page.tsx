'use client';
import { FilterType } from '@/types';
import { SearchSidebar } from './_components/search-sidebar';
import SearchPage from './_all/page';
import PeoplesPages from './_peoples/page';
import { JSX } from 'react';
import PostPage from './_posts/page';
import { useSearchParams } from 'next/navigation';
import SuggestedCommunities from '@/modules/(user)/search/community/SuggestedCommunities';

const ALL_PAGES: { [key: string]: JSX.Element } = {
  all: <SearchPage />,
  people: <PeoplesPages />,
  post: <PostPage />,
  community: <SuggestedCommunities />,
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
    <div className="flex flex-col w-full md:flex md:flex-row items-start justify-start bg-red p-4 gap-3">
      <SearchSidebar activeFilter={activeFilter} />
      {ALL_PAGES?.[activeFilter]}
    </div>
  );
}
