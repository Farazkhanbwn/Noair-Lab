import React from 'react';

const UserLikes = () => {
  return (
    <div className="animate-pulse bg-white dark:bg-[#1a1a1a] rounded-[20px] mt-4">
      <div className='w-16 h-4 bg-gray-300 dark:bg-gray-700'></div>
      {/* UserCard Skeleton */}
      {[...Array(2)].map((_, index) => (
        <div key={index} className="flex justify-between items-start">
          <div className="flex items-start animate-pulse p-4">
            {/* User Image Skeleton */}
            <div className="rounded-full bg-gray-300 dark:bg-gray-700 w-[42px] h-[42px] mr-4"></div>

            <div className="flex flex-col gap-2">
              {/* Name Skeleton */}
              <div className="bg-gray-300 dark:bg-gray-700 h-4 w-28 rounded"></div>

              {/* Role Skeleton */}
              <div className="bg-gray-300 dark:bg-gray-700 h-3 w-24 rounded"></div>

              {/* Timestamp Skeleton */}
              <div className="bg-gray-300 dark:bg-gray-700 h-3 w-20 rounded"></div>

              {/* Mutual and Followers Skeleton */}
              <div className="flex gap-2 mt-2">
                <div className="bg-gray-300 dark:bg-gray-700 h-3 w-16 rounded"></div>
                <div className="bg-gray-300 dark:bg-gray-700 h-3 w-20 rounded"></div>
              </div>
            </div>
          </div>
          <div className="w-20 h-7 m-4 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        </div>
      ))}
    </div>
  );
};

export default UserLikes;
