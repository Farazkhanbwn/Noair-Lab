import { Post } from '@/types';
import { PostCard } from '../_components/post-card';

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
  {
    id: '2',
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
  {
    id: '3',
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

export default function PostPage() {
  return (
    <div className="flex flex-1 h-auto">
      <main className="flex w-full flex-col gap-5 justify-center">
        <div className="w-full lg:w-3/4 xl:w-1/2 rounded-md">
          <section>
            <div className="space-y-6 flex flex-col gap-6">
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
