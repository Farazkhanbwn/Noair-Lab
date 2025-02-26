'use client';
import { Person } from '@/types';
import { PersonCard } from '../_components/person-card';
import FeedbackSection from '../_components/feedback-section';

// This would typically come from an API
const people: Person[] = [
  {
    id: '1',
    name: 'Jamie Bauch, PhD',
    title: 'Climate Scientists',
    organization: 'Massachusetts Institute of Technology',
    avatar: '/profile-person.png',
  },
  {
    id: '2',
    name: 'Jamie Bauch, PhD',
    title: 'Climate Scientists',
    organization: 'Massachusetts Institute of Technology',
    avatar: '/profile-person.png',
  },
  {
    id: '2',
    name: 'Jamie Bauch, PhD',
    title: 'Climate Scientists',
    organization: 'Massachusetts Institute of Technology',
    avatar: '/profile-person.png',
  },
  {
    id: '2',
    name: 'Jamie Bauch, PhD',
    title: 'Climate Scientists',
    organization: 'Massachusetts Institute of Technology',
    avatar: '/profile-person.png',
  },
  {
    id: '2',
    name: 'Jamie Bauch, PhD',
    title: 'Climate Scientists',
    organization: 'Massachusetts Institute of Technology',
    avatar: '/profile-person.png',
  },
  {
    id: '2',
    name: 'Jamie Bauch, PhD',
    title: 'Climate Scientists',
    organization: 'Massachusetts Institute of Technology',
    avatar: '/profile-person.png',
  },
  {
    id: '2',
    name: 'Jamie Bauch, PhD',
    title: 'Climate Scientists',
    organization: 'Massachusetts Institute of Technology',
    avatar: '/profile-person.png',
  },
];

export default function PeoplesPages() {
  return (
    <div className="flex flex-1 h-auto">
      <main className="flex w-full flex-col gap-5 justify-center">
        <div className="w-full lg:w-3/4 xl:w-1/2 py-6 px-5 bg-white rounded-md">
          <h2 className="text-xl font-semibold mb-5">People</h2>
          <div className="flex flex-col gap-5">
            {people.map(person => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </div>

        <FeedbackSection />
      </main>
    </div>
  );
}
