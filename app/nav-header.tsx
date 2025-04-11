'use client';

import { useRouter, usePathname } from 'next/navigation';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import Link from '@/components/common/custom-link/custom-link';
import HomeIcon from '@/assets/svgs/HomeIcon';
import InsightIcon from '@/assets/svgs/InsightIcon';
import MessageIcon from '@/assets/svgs/MessageIcon';
import GroupIcon from '@/assets/svgs/GroupIcon';
import NotificationBellIcon from '@/assets/svgs/NotificationBellIcon';
import NavLogo from '@/components/common/logo/NavLogo';
import { useState } from 'react';

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const navigationItems = [
    {
      name: 'Feed',
      icon: (
        <HomeIcon
          className={`${pathname.startsWith('/feed') ? 'fill-black' : ''}`}
        />
      ),
      path: '/feed',
      active: pathname.startsWith('/feed'),
    },
    {
      name: 'Insights',
      icon: (
        <InsightIcon
          className={`${pathname.startsWith('/insights') ? 'fill-black' : ''}`}
        />
      ),
      path: '/insights',
      active: pathname.startsWith('/insights'),
    },
    {
      name: 'Message',
      icon: (
        <MessageIcon
          className={`${pathname.startsWith('/messages') ? 'fill-black' : ''}`}
        />
      ),
      path: '/messages',
      active: pathname.startsWith('/messages'),
    },
    {
      name: 'Communities',
      icon: (
        <GroupIcon
          className={`${pathname.startsWith('/communities') ? 'fill-black' : ''}`}
        />
      ),
      path: '/communities',
      active: pathname.startsWith('/communities'),
    },
    {
      name: 'Notifications',
      icon: (
        <NotificationBellIcon
          className={`${pathname.startsWith('/notifications') ? 'fill-black' : ''}`}
        />
      ),
      path: '/notifications',
      active: pathname.startsWith('/notifications'),
    },
  ];

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      router.push(`/search?keyword=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchIconClick = () => {
    if (searchValue.trim()) {
      router.push(`/search?keyword=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  return (
    <header className="w-[100vw] fixed top-0 left-0 right-0 z-[50]  bg-pure-white p-2 md:p-4 pb-2 shadow-md h-[74px]">
      <div className="row flex items-center md:items-start justify-between gap-2">
        <Link href={'/feed'} className="flex items-center h-12 max-h-20">
          <NavLogo className="w-20 md:w-28 h-24 md:h-28" />
        </Link>
        <nav className="flex items-center lg:items-start gap-2 sm:gap-4 md:gap-2 lg:gap-6">
          <div
            className="flex items-center bg-transparent lg:bg-light-grey  rounded-[20px] px-0 py-0.5 lg:px-4 text-black"
          >
            <img 
              className="w-5 h-5 cursor-pointer" 
              src="/search.svg" 
              alt="search icon" 
              onClick={handleSearchIconClick}
            />
            <input
              type="text"
              className="m-0 border-none bg-transparent outline-none text-sm pl-4 hidden lg:block"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchInput}
              onKeyDown={handleSearch}
            />
          </div>
          {navigationItems.map(item => (
            <div
              key={item.name}
              className={`flex flex-col items-center gap-1 cursor-pointer px-1 pb-1 ${
                item.active
                  ? 'text-black font-bold border-b-2 border-black'
                  : 'text-gray-500'
              }`}
              onClick={() => router.push(item.path)}
            >
              {item.icon}

              <span
                className={`hidden sm:block text-description sm:heading-tertiary  md:heading-secondary ${item.active ? 'font-bold' : ''}`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </nav>

        <Link
          href="/profile"
          className="hidden xs:flex items-center gap-3 mr-1"
        >
          <PrimaryImage
            width={40}
            height={40}
            src="/Ellipse 24.svg"
            alt="User Avatar"
            className="rounded-full w-10 h-10"
          />
          <span className="hidden lg:block text-gray-500 font-semibold !no-underline">
            Lewis Morissette
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;