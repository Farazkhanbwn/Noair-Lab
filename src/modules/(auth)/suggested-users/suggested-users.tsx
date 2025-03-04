import React from 'react';
import SuggestedUserCard from './components/suggested-user-card';
import { suggestedUsers } from './suggested-users.constants';
import Link from '@/components/common/custom-link/custom-link';

const SuggestedUsersPage = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-4 mt-[4.7rem]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="heading-medium font-bold mb-2">
            Meet Your Campus Community
          </h1>
          <p className="text-description">
            Find friends and classmates within your campus
          </p>
        </div>
        <Link href="/feed" className="text-blue-600 hover:text-blue-700">
          Skip This Step
        </Link>
      </div>

      <div className="grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 !justify-center !items-center">
        {suggestedUsers.map((user, index) => (
          <SuggestedUserCard key={index} user={user} />
        ))}
      </div>

      <div className="mt-6 mb-4">
        <h2 className="heading-medium font-bold">Connect Beyond Your Campus</h2>
        <p className="text-description mt-1">
          Expand your network with students from diverse universities
        </p>
      </div>

      <div className="grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 !justify-center !items-center">
        {suggestedUsers.map((user, index) => (
          <SuggestedUserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsersPage;
