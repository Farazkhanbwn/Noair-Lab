import { InsightsDatatem } from '@/modules/(user)/insights/news-section/news.types';

// export const insightsData: Record<string, NewsItem[]> = {
//   Science: [
//     {
//       id: '1',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       imageUrl: '/images/item-news-section-cover-img.png',
//     },
//     {
//       id: '2',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       imageUrl: '/images/item-news-section-cover-img.png',
//     },
//     {
//       id: '3',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       imageUrl: '/images/item-news-section-cover-img.png',
//     },
//     {
//       id: '4',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       // imageUrl: 'deepsek.jpg',
//     },
//     {
//       id: '5',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       imageUrl: '/images/item-news-section-cover-img.png',
//     },
//     {
//       viewAllLink: true,
//       viewAllTitle: 'View all Scientific news',
//     },
//   ],
//   Engineering: [
//     {
//       id: '1',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       imageUrl: '/images/item-news-section-cover-img.png',
//     },
//     {
//       id: '2',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       imageUrl: '/images/item-news-section-cover-img.png',
//     },
//     {
//       id: '3',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       imageUrl: '/images/item-news-section-cover-img.png',
//     },
//     {
//       id: '4',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       // imageUrl: 'deepsek.jpg',
//     },
//     {
//       id: '5',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       imageUrl: '/images/item-news-section-cover-img.png',
//     },
//     {
//       viewAllLink: true,
//       viewAllTitle: 'View all Scientific news',
//     },
//   ],
//   ['Laws & Regulations']: [
//     {
//       id: '1',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       imageUrl: '/images/item-news-section-cover-img.png',
//     },
//     {
//       id: '2',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       imageUrl: '/images/item-news-section-cover-img.png',
//     },
//     {
//       id: '3',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       imageUrl: '/images/item-news-section-cover-img.png',
//     },
//     {
//       id: '4',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       // imageUrl: 'deepsek.jpg',
//     },
//     {
//       id: '5',
//       title: 'Ethiopian runners took the top four news.',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

//       date: '03 June 2025',
//       newsId: 'News98',
//       imageUrl: '/images/item-news-section-cover-img.png',
//     },
//     {
//       viewAllLink: true,
//       viewAllTitle: 'View all Scientific news',
//     },
//   ],
// };
export const insightsCategories = [
  {
    id: '1',
    name: 'Science',
  },
  {
    id: '2',
    name: 'Engineering',
  },
  {
    id: '3',
    name: 'Laws & Regulations',
  },
];

export const insightsData: Record<string, InsightsDatatem[]> = {
  Science: [
    {
      id: 'section-news-id',
      section: 'Science News',
      items: [
        {
          id: '1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: '6',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          viewAllLink: true,
          viewAllTitle: 'View All Scientific News',
          viewAllURL: '/insights/scientific-news',
        },
      ],
    },
    {
      id: 'section-insights-id',
      section: 'Science Insights',
      items: [
        {
          id: '1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: '2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },

        {
          id: '5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          viewAllLink: true,
          viewAllTitle: 'View All Scientific Insights',
          viewAllURL: '/insights/scientific-insights',
        },
      ],
    },
    {
      id: 'section-academic-publication-id',
      section: 'Science Academic Publications',
      items: [
        {
          id: '1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
      ],
    },
    {
      id: 'section-patent-id',
      section: 'Science Patents',
      items: [
        {
          id: '1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
      ],
    },
  ],
  Engineering: [
    {
      id: 'engineering-news-id',
      section: 'Engineering News',
      items: [
        {
          id: '1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          viewAllLink: true,
          viewAllTitle: 'View All Engineering News',
          viewAllURL: '/insights/engineering-news',
        },
      ],
    },
    {
      id: 'engineering-insights-id',
      section: 'Engineering Insights',
      items: [
        {
          id: '1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
      ],
    },
    {
      id: 'engineering-academic-publicaitons-id',
      section: 'Engineering Academic Publications',
      items: [
        {
          id: '1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
      ],
    },
    {
      id: 'engineering-patent-id',
      section: 'Engineering Patents',
      items: [
        {
          id: '1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
      ],
    },
  ],
  ['Laws & Regulations']: [
    {
      id: 'law-and-regulation-news-id',
      section: 'Laws & Regulations News',
      items: [
        {
          id: '1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          viewAllLink: true,
          viewAllTitle: 'View All Laws & Regulations News',
          viewAllURL: '/insights/laws-and-regulation-news',
        },
      ],
    },
    {
      id: 'law-and-regulation-insights-id',
      section: 'Laws & Regulations Insights',
      items: [
        {
          id: '1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
      ],
    },
    {
      id: 'law-and-regulation-acamedic-publicaiton-id',
      section: 'Laws & Regulations Academic Publications',
      items: [
        {
          id: '1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
      ],
    },
    {
      id: 'law-and-regulation-patent-id',
      section: 'Laws & Regulations Patents',
      items: [
        {
          id: '1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
        {
          id: '5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img.png',
        },
      ],
    },
  ],
};

export const previewRichContent = `
  {"root":{"children":[{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Nec dictum aenean purus tortor aene?","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":1,"textStyle":""},{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":1,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Lorem ipsum dolor sit amet consectetur. Amet porttitor amet leo convallis penatibus semper neque. Amet ipsum viverra nunc a. Sollicitudin tincidunt lacus nulla enim nascetur tempus ut velit. Imperdiet risus eu tellus enim consectetur at. ","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Nisi cursus nisi fringilla dolor urna et mauris. Habitant pretium nascetur sagittis ac dignissim proin. Sed justo duis blandit parturient quam. Ac commodo amet etiam ut nisi vitae adipiscing semper. Aliquet urna tortor mattis id. Mauris etiam urna maecenas aliquet aliquam mauris proin.","type":"text","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Nibh ipsum sagittis non in tristique. Senectus sed felis sit eu dignissim semper. A euismod fames nisi ut in dui turpis purus. Nibh ultricies ullamcorper vel arcu amet. Tristique aliquet et dictum auctor.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Aaliquet aliquam mauris proi?","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":1,"textStyle":""},{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":1,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Nisi cursus nisi fringilla dolor urna et mauris. Habitant pretium nascetur sagittis ac dignissim proin. Sed justo duis blandit parturient quam. Ac commodo amet etiam ut nisi vitae adipiscing semper. Aliquet urna tortor mattis id. Mauris etiam urna maecenas aliquet aliquam mauris proin.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}
`;
