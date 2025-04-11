const FeedPostSkeletonLoader = () => {
  return (
    <div className="animate-pulse bg-white dark:bg-[#1a1a1a] rounded-[20px] shadow-md">
      {/* UserCard Skeleton */}
      <div className="flex justify-between items-start">
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

      {/* Content Skeleton */}
      <div className="bg-gray-300 dark:bg-gray-700 h-4 w-80 mb-2 mx-4 rounded"></div>

      {/* Media Skeleton */}
      <div className="bg-gray-300 dark:bg-gray-700 h-72 w-full mb-2 rounded"></div>

      {/* Engagement Section */}
      <div className="flex items-center justify-between py-2 px-5 border-b border-gray-200 dark:border-gray-700">
        <div className="bg-gray-300 dark:bg-gray-700 h-4 w-16 rounded"></div>
        <div className="flex gap-4">
          <div className="bg-gray-300 dark:bg-gray-700 h-4 w-16 rounded"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-4 w-16 rounded"></div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between text-sm p-4">
        <div className="flex-center gap-2">
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-6 rounded-full"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-4 w-12 rounded"></div>
        </div>
        <div className="flex-center gap-2">
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-6 rounded-full"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-4 w-12 rounded"></div>
        </div>
        <div className="flex-center gap-2">
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-6 rounded-full"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-4 w-12 rounded"></div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-between p-4 gap-2 pt-0">
        <div className="bg-gray-300 dark:bg-gray-700 h-9 w-9 rounded-full"></div>
        <div className="bg-gray-300 dark:bg-gray-700 w-full h-9 rounded-full"></div>
      </div>
    </div>
  );
};

export default FeedPostSkeletonLoader;
