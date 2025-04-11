import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FilterType } from '@/types';
import PageIcon from '@/assets/svgs/PageIcon';
import PersonIcon from '@/assets/svgs/PersonIcon';
import PostIcon from '@/assets/svgs/PostIcon';
import CommunityIcon from '@/assets/svgs/CommunityIcon';
import InsightsIcon from '@/assets/svgs/InsightsIcon';
import PageActiveIcon from '@/assets/svgs/PageActiveIcon';
import { useSearchParams } from 'next/navigation';

interface SearchSidebarProps {
  activeFilter: FilterType;
}

export function SearchSidebar({ activeFilter }: SearchSidebarProps) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const filters: {
    label: string;
    value: FilterType;
    Icon: React.ElementType;
  }[] = [
    {
      label: 'All',
      value: 'all',
      Icon: activeFilter === 'all' ? PageActiveIcon : PageIcon,
    },
    {
      label: 'People',
      value: 'people',
      Icon: PersonIcon,
    },
    {
      label: 'Post',
      value: 'post',
      Icon: PostIcon,
    },
    {
      label: 'Community',
      value: 'community',
      Icon: CommunityIcon,
    },
    {
      label: 'Insights',
      value: 'insights',
      Icon: InsightsIcon,
    },
  ];

  return (
    <div className="w-full lg:w-72 h-auto max-h-max py-6 bg-white rounded-3xl">
      <h2 className="text-base font-semibold mb-4 px-6">Search Results</h2>
      <div className="border-b mb-3" />
      <div className="space-y-1 px-6">
        <h3 className="text-sm font-medium mb-5">Filters</h3>
        {filters.map(({ label, value, Icon }) => (
          <Link
            key={value}
            href={`/search?keyword=${encodeURIComponent(keyword)}&filter=${value}`}
            className={cn(
              'flex items-center gap-3 text-black px-3 py-2 rounded-[0.625rem] text-sm transition-colors no-underline',
              activeFilter === value
                ? 'bg-[#EDF5FF] hover:no-underline'
                : 'hover:bg-gray-100 hover:no-underline'
            )}
          >
            <div
              className={`rounded-full ${activeFilter === value ? 'bg-primary' : 'bg-light-grey'} text-secondary-grey w-9 h-9 flex items-center justify-center`}
            >
              <Icon
                className={`${activeFilter === value ? 'fill-white text-white stroke-white' : 'fill-secondary-grey stroke-secondary-grey'}`}
              />
            </div>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}