import { ICommunityCard } from './joined-communties/types/joined-community.type';

export const COMMUNITY_DEMO_MESSAGES = [
  {
    id: '1',
    name: 'Renewable Energy Storage',
    avatar: '/placeholder.svg',
    memberCount: 2,
    timeAgo: '2 min',
    message: 'Introduce yourself! meet new people around the world',
  },
  {
    id: '2',
    name: 'Waste-to-Energy',
    avatar: '/placeholder.svg',
    timeAgo: '5 min',
    message: 'Introduce yourself! meet new people around the world',
  },
  {
    id: '3',
    name: 'Biomimicry',
    avatar: '/placeholder.svg',
    timeAgo: '10 min',
    message: 'Introduce yourself! meet new people around the world',
  },
];

export const COMMUNITY_CONTACTS = [
  {
    id: 1,
    name: 'Clinton Willms',
    lastMessage: 'Lorem ipsum dolor.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    memberCount: 2,
    time: '4:52 PM',
  },
  {
    id: 2,
    name: 'Timothy Ruecker',
    lastMessage: 'Lorem ipsum dolor.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    time: '4:52 PM',
    memberCount: 4,
  },
  {
    id: 3,
    name: 'Clinton Willms',
    lastMessage: 'Lorem ipsum dolor.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    time: '4:52 PM',
    memberCount: 6,
  },
];

export const MY_COMMUNITIES = [
  {
    id: 1,
    name: 'Climate Laws',
    members: '1.2k members',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/communities.PNG-SBpKKPRdDBUAKPO7hmBYn118fmE2Os.png',
  },
  {
    id: 2,
    name: 'Biomimicry',
    members: '1.2k members',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/communities.PNG-SBpKKPRdDBUAKPO7hmBYn118fmE2Os.png',
  },
  {
    id: 3,
    name: 'Waste-to-Energy',
    members: '1.2k members',
    imageUrl: '/images/trending-insights.png',
  },
];

export const SAMPLE_DISCUSSIONS = {
  pinned: [
    {
      id: 1,
      title:
        'Lorem ipsum dolor sit amet consectetur. Egestas a vel eros a augue ultricies ac.',
      author: {
        name: 'John Doe',
        avatar: '/placeholder.svg?height=32&width=32',
      },
      updatedAt: new Date('2025-02-05'),
      tags: ['research', 'authority'],
      preview:
        'Lorem ipsum dolor sit amet consectetur. Ut elit congue nulla facilisis tristie magna. Sit non purus lorem nec. At massa et.',
    },
    {
      id: 2,
      title:
        'Lorem ipsum dolor sit amet consectetur. Egestas a vel eros a augue ultricies ac.',
      author: {
        name: 'John Doe',
        avatar: '/placeholder.svg?height=32&width=32',
      },
      updatedAt: new Date('2025-02-05'),
      tags: ['research', 'authority'],
      imageUrl: '/images/ending-day.png',
    },
  ],
  other: [
    {
      id: 3,
      title:
        'Lorem ipsum dolor sit amet consectetur. Egestas a vel eros a augue ultricies ac.',
      author: {
        name: 'John Doe',
        avatar: '/placeholder.svg?height=32&width=32',
      },
      updatedAt: new Date('2025-02-05'),
      tags: ['research', 'authority'],
      preview:
        'Lorem ipsum dolor sit amet consectetur. Ut elit congue nulla facilisis tristie magna. Sit non purus lorem nec. At massa et.',
    },
  ],
};

export const joinedCommunities: ICommunityCard[] = [
  {
    id: '1',
    name: 'Research Community',
    memberCount: '1.2k members',
    avatarImage:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    coverImage:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%203.28.01%20PM-C8kmXUQYvyNQ8BdYBgfrzesUKlgPn3.png',
    createdAt: 'Jan 8, 2025',
    isPublic: true,
    hasGroupChat: true,
    groupChatStatus: 'On',
    forumCount: 12,
    status: 'joined',
  },
  {
    id: '2',
    name: 'Sports Community',
    memberCount: '1.2k members',
    coverImage:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%203.28.01%20PM-C8kmXUQYvyNQ8BdYBgfrzesUKlgPn3.png',
    avatarImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    createdAt: 'Jan 8, 2025',
    isPublic: true,
    hasGroupChat: true,
    groupChatStatus: 'On',
    forumCount: 12,
    status: 'joined',
  },
  {
    id: '3',
    name: 'Business Idea',
    memberCount: '1.2k members',
    coverImage:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%203.28.01%20PM-C8kmXUQYvyNQ8BdYBgfrzesUKlgPn3.png',
    avatarImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    createdAt: 'Jan 8, 2025',
    isPublic: true,
    hasGroupChat: true,
    groupChatStatus: 'On',
    forumCount: 12,
    status: 'joined',
  },
];

export const popularCommunities: ICommunityCard[] = [
  {
    id: '4',
    name: 'Innovative Minds',
    memberCount: '1.2k members',
    coverImage:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%203.28.01%20PM-C8kmXUQYvyNQ8BdYBgfrzesUKlgPn3.png',
    avatarImage:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    createdAt: 'Jan 8, 2025',
    isPublic: true,
    hasGroupChat: true,
    groupChatStatus: 'On',
    forumCount: 12,
    status: 'not-joined',
  },
  {
    id: '5',
    name: 'Health Ideas',
    memberCount: '1.2k members',
    coverImage:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%203.28.01%20PM-C8kmXUQYvyNQ8BdYBgfrzesUKlgPn3.png',

    avatarImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    createdAt: 'Jan 8, 2025',
    isPublic: false,
    hasGroupChat: false,
    groupChatStatus: 'On',
    forumCount: 12,
    status: 'private',
  },
  {
    id: '6',
    name: 'RainSphere',
    memberCount: '1.2k members',
    coverImage:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%203.28.01%20PM-C8kmXUQYvyNQ8BdYBgfrzesUKlgPn3.png',

    avatarImage:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    createdAt: 'Jan 8, 2025',
    isPublic: true,
    hasGroupChat: false,
    groupChatStatus: 'Off',
    forumCount: 12,
    status: 'joined',
  },
];

export const suggestedCommunties: ICommunityCard[] = [
  {
    id: '1',
    name: 'Research Community',
    memberCount: '1.2k members',
    avatarImage:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    coverImage:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%203.28.01%20PM-C8kmXUQYvyNQ8BdYBgfrzesUKlgPn3.png',
    createdAt: 'Jan 8, 2025',
    isPublic: true,
    hasGroupChat: false,
    groupChatStatus: 'On',
    forumCount: 12,
    status: 'joined',
    mutualConnection: 2,
    tags: 'research, community',
    description:
      'Lorem ipsum dolor sit amet consectetur. Tortor dui mauris eget lectus felis nunc arcu morbi. Sit aliquam sed enim velit ullamcorper. ',
  },
  {
    id: '2',
    name: 'Sports Community',
    memberCount: '1.2k members',
    coverImage:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%203.28.01%20PM-C8kmXUQYvyNQ8BdYBgfrzesUKlgPn3.png',
    avatarImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    createdAt: 'Jan 8, 2025',
    isPublic: true,
    hasGroupChat: false,
    groupChatStatus: 'On',
    forumCount: 12,
    status: 'joined',
    mutualConnection: 4,
    tags: 'research, community',
    description:
      'Lorem ipsum dolor sit amet consectetur. Tortor dui mauris eget lectus felis nunc arcu morbi. Sit aliquam sed enim velit ullamcorper. ',
  },
  {
    id: '3',
    name: 'Business Idea',
    memberCount: '1.2k members',
    coverImage:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%203.28.01%20PM-C8kmXUQYvyNQ8BdYBgfrzesUKlgPn3.png',
    avatarImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    createdAt: 'Jan 8, 2025',
    isPublic: true,
    hasGroupChat: false,
    groupChatStatus: 'On',
    forumCount: 12,
    status: 'joined',
    mutualConnection: 10,
    tags: 'research, community',
    description:
      'Lorem ipsum dolor sit amet consectetur. Tortor dui mauris eget lectus felis nunc arcu morbi. Sit aliquam sed enim velit ullamcorper. ',
  },
];

export const otherCommunties: ICommunityCard[] = [
  {
    id: '1',
    name: 'Research Community',
    memberCount: '1.2k members',
    avatarImage:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    coverImage:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%203.28.01%20PM-C8kmXUQYvyNQ8BdYBgfrzesUKlgPn3.png',
    createdAt: 'Jan 8, 2025',
    isPublic: true,
    hasGroupChat: false,
    groupChatStatus: 'On',
    forumCount: 12,
    status: 'joined',
    mutualConnection: 2,
    tags: 'research, community',
    description:
      'Lorem ipsum dolor sit amet consectetur. Tortor dui mauris eget lectus felis nunc arcu morbi. Sit aliquam sed enim velit ullamcorper. ',
  },
];

export const JOINED_COMMUNITIES = [
  {
    name: 'Renewable Energy Storage',
    members: '100k members',
    image: '/images/joined-community.png',
    hasGroupChat: true,
    hasForums: true,
    joined: true,
  },
  {
    name: 'Waste-to-Energy',
    members: '100k members',
    image: '/images/joined-community.png',
    hasGroupChat: false,
    hasForums: true,
    joined: true,
  },
  {
    name: 'Biomimicry',
    members: '100k members',
    image: '/images/joined-community.png',
    hasGroupChat: true,
    hasForums: true,
    joined: true,
  },
  {
    name: 'Sustainable Agriculture',
    members: '100k members',
    image: '/images/joined-community.png',
    hasGroupChat: true,
    hasForums: true,
    joined: true,
  },
];

export const POPULAR_COMMUNITIES = [
  {
    name: 'Green Patents',
    status: 'Private Community',
    image: '/images/green-patents.png',
    action: 'Request',
    hasForums: false,
  },
  {
    name: 'Uchicago Climate Institute',
    status: '12k members',
    image: '/images/green-patents.png',
    action: 'Join',
    hasForums: true,
  },
  {
    name: 'Carbon Tracking',
    status: 'Private Community',
    image: '/images/green-patents.png',
    action: 'Request',
    hasForums: false,
  },
  {
    name: 'Electric Vehicles',
    status: 'Private Community',
    image: '/images/green-patents.png',
    action: 'Request',
    hasForums: false,
  },
];
