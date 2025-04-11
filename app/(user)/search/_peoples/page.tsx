'use client';

import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { Person } from '@/types';
import { PersonCard } from '../_components/person-card';
import FeedbackSection from '../_components/feedback-section';
import { useSearch } from '@/service/search-service/search-service';
import FullScreenLoader from '@/components/common/full-screen-loader/full-screen-loader';
import { handleRequestError } from '@/utils/toast-utils';
import { User } from '@/service/search-service/search-service.types';

export default function PeoplesPages() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');
  
  const { mutateAsync, data: searchResults, isPending } = useSearch();

  const handleSearchWithKeyword = useCallback(async (query: string) => {
    try {
      await mutateAsync({ query });
    } catch (error) {
      handleRequestError(error);
    }
  }, [mutateAsync]);

  // Effect to handle search when keyword changes in URL
  useEffect(() => {
    if (keyword) {
      handleSearchWithKeyword(keyword);
    }
  }, [keyword, handleSearchWithKeyword]);

  // Map API user data to the Person interface
  const mapUsersToPeople = (users: User[]): Person[] => {
    if (!users) return [];
    
    return users.map(user => ({
      id: user.id.toString(),
      name: user.name,
      title: user.title || '',
      organization: user.specialization || '',
      avatar: user.profileImageUrl || '/profile-person.png',
    }));
  };

  const people = searchResults?.users ? mapUsersToPeople(searchResults.users) : [];

  if (isPending) {
    return <FullScreenLoader />;
  }

  return (
    <div className="flex flex-1 w-full h-auto">
      <main className="flex w-full flex-col gap-5 justify-center">
        <div className="w-full lg:w-3/4 xl:w-1/2 py-6 px-5 bg-white rounded-md">
          <h2 className="text-xl font-semibold mb-5">People</h2>
          {people.length > 0 ? (
            <div className="flex flex-col gap-5">
              {people.map(person => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No people found for &quot;{keyword}&quot;</p>
          )}
        </div>
        
        <FeedbackSection />
      </main>
    </div>
  );
}