'use client';

import { useRouter, usePathname } from 'next/navigation';
import FeedIcon from '@/assets/icons/feed.svg';
import ResearchIcon from '@/assets/icons/research.svg';
import MessageIcon from '@/assets/icons/message.svg';
import NotificationIcon from '@/assets/icons/notification.svg';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import UsersIcon from '@/components/icons/user/feed/users-icon';
import Link from '@/components/common/custom-link/custom-link';

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const navigationItems = [
    {
      name: 'Feed',
      icon: <FeedIcon />,
      path: '/feed',
      active: pathname.startsWith('/feed'),
    },
    {
      name: 'Insights',
      icon: <ResearchIcon />,
      path: '/insights',
      active: pathname.startsWith('/insights'),
    },
    {
      name: 'Message',
      icon: <MessageIcon />,
      path: '/messages',
      active: pathname.startsWith('/messages'),
    },
    {
      name: 'Communities',
      icon: <UsersIcon width={22} height={16} />,
      path: '/communities',
      active: pathname.startsWith('/communities'),
    },
    {
      name: 'Notifications',
      icon: <NotificationIcon />,
      path: '/notifications',
      active: pathname.startsWith('/notifications'),
    },
  ];

  return (
    <header className="w-[100vw] fixed top-0 left-0 right-0 z-[1000] bg-pure-white p-4 pb-2 shadow-md h-[74px]">
      <div className="row flex items-center justify-between gap-2">
        <h1 className="heading-primary font-bold text-pure-black">NOAIR</h1>
        <div className="flex items-center bg-transparent md:bg-light-grey  rounded-[20px] px-0 py-0.5 md:px-4 text-black">
          <img className="w-5 h-5" src="/search.svg" alt="search icon" />
          <input
            type="text"
            className="m-0 border-none bg-transparent outline-none text-sm pl-4 hidden md:block"
            placeholder="Search"
          />
        </div>

        <nav className="flex items-center gap-3 xs:gap-2 sm:gap-4 md:gap-2 lg:gap-6">
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

              <span className="hidden sm:block text-description sm:heading-tertiary md:heading-secondary">
                {item.name}
              </span>
            </div>
          ))}
        </nav>

        <Link href="/profile" className="flex items-center gap-3">
          <PrimaryImage
            width={40}
            height={40}
            src="/Ellipse 24.svg"
            alt="User Avatar"
            className="rounded-full w-10 h-10"
          />
          <span className="hidden md:block text-gray-500 font-semibold !no-underline">
            Lewis Morissette
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
