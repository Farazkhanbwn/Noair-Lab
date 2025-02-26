import { Person, Post } from '@/types';
import { PersonCard } from '../_components/person-card';
import { PostCard } from '../_components/post-card';

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
];

const posts: Post[] = [
  {
    id: '1',
    author: {
      id: '3',
      name: 'Wilma Ullrich',
      title: 'Research Assistant',
      organization: 'Princeton University',
      avatar: '/profile-person.png',
    },
    content:
      'Lorem ipsum dolor sit amet consectetur. Non nisi in id phasellus. Ac cras justo elementum tincidunt congue vitae massa volutpat lorem. Ac pellentesque dignissim nunc quam augue et.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20at%202.58.42%20PM-lldG7ZAu5GenNl76h4AplCsGlcqOGB.png',
    likes: 6,
    comments: 4,
    shares: 2,
    timeAgo: '12 minutes ago',
    mutualFollowers: 2,
  },
];

export default function SearchPage() {
  return (
    <div className="flex h-auto">
      <main className="flex w-full flex-col gap-5 justify-center">
        <div className="w-full lg:w-3/4 xl:w-1/2 py-6 px-5 bg-white rounded-md">
          <h2 className="text-xl font-semibold mb-5">People</h2>
          <div className="flex flex-col gap-5">
            {people.map(person => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
          <div className="w-full text-center text-sm mt-6 cursor-pointer">
            SEE ALL PEOPLE
          </div>
        </div>
        <div className="w-full lg:w-3/4 xl:w-1/2 bg-white rounded-md">
          <section>
            <div className="space-y-6">
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
