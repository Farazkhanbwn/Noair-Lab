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
          id: 'S1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-1.png',
        },
        {
          id: 'S2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: 'S3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-2.png',
        },
        {
          id: 'S4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-3.png',
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
          imageUrl: '/images/item-news-section-cover-img-3.png',
        },
        {
          id: '3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-2.png',
        },
        {
          id: '4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-1.png',
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
          id: 'S1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: 'S2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-8.png',
        },
        {
          id: 'S3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-5.png',
        },

        {
          id: 'S5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-12.png',
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
          id: 'S1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-4.png',
        },
        {
          id: 'S2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-6.png',
        },
        {
          id: 'S3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-7.png',
        },
        {
          id: 'S4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-8.png',
        },
        {
          id: 'S5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          viewAllLink: true,
          viewAllTitle: 'View All Science Academic Publications',
          viewAllURL: '/insights/scientific-academic-publication',
        },
      ],
    },
    {
      id: 'section-patent-id',
      section: 'Science Patents',
      items: [
        {
          id: 'S1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-9.png',
        },
        {
          id: 'S2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: 'S3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-10.png',
        },
        {
          id: 'S4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-11.png',
        },
        {
          id: 'S5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-4.png',
        },
        {
          viewAllLink: true,
          viewAllTitle: 'View All Science Patents',
          viewAllURL: '/academic-publications/academic-publication',
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
          id: 'E1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-1.png',
        },
        {
          id: 'E2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: 'E3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-2.png',
        },
        {
          id: 'E4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-3.png',
        },
        {
          id: 'E5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: 'E6',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-3.png',
        },
        {
          id: 'E7',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-2.png',
        },
        {
          id: 'E8',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-1.png',
        },
        {
          viewAllLink: true,
          viewAllTitle: 'View All Engineering News',
          viewAllURL: '/insights/scientific-news',
        },
      ],
    },
    {
      id: 'engineering-insights-id',
      section: 'Engineering Insights',
      items: [
        {
          id: 'I1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: 'I2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-8.png',
        },
        {
          id: 'I3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-5.png',
        },

        {
          id: 'I5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-12.png',
        },
        {
          viewAllLink: true,
          viewAllTitle: 'View All Scientific Insights',
          viewAllURL: '/insights/scientific-insights',
        },
      ],
    },
    {
      id: 'engineering-academic-publication-id',
      section: 'Engineering Academic Publications',
      items: [
        {
          id: 'E1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-4.png',
        },
        {
          id: 'E2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-6.png',
        },
        {
          id: 'E3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-7.png',
        },
        {
          id: 'E4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-8.png',
        },
        {
          id: 'E5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          viewAllLink: true,
          viewAllTitle: 'View All Engineering Academic Publications',
          viewAllURL: '/insights/engineering-academic-publication',
        },
      ],
    },
    {
      id: 'engineering-patent-id',
      section: 'Engineering Patents',
      items: [
        {
          id: 'E1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-9.png',
        },
        {
          id: 'E2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: 'E3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-10.png',
        },
        {
          id: 'E4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-11.png',
        },
        {
          id: 'E5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-4.png',
        },
        {
          viewAllLink: true,
          viewAllTitle: 'View All Engineering Patents',
          viewAllURL: '/insights/engineering-patent',
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
          id: 'L1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-1.png',
        },
        {
          id: 'L2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: 'L3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-2.png',
        },
        {
          id: 'L4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-3.png',
        },
        {
          id: 'L5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: 'L6',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-3.png',
        },
        {
          id: 'L7',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-2.png',
        },
        {
          id: 'L8',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-1.png',
        },
        {
          viewAllLink: true,
          viewAllTitle: 'View All Law & Regulation News',
          viewAllURL: '/insights/scientific-news',
        },
      ],
    },
    {
      id: 'law-and-regulation-insights-id',
      section: 'Laws & Regulations Insights',
      items: [
        {
          id: 'L1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: 'L2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-8.png',
        },
        {
          id: 'L3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-5.png',
        },

        {
          id: 'L5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-12.png',
        },
        {
          viewAllLink: true,
          viewAllTitle: 'View All Scientific Insights',
          viewAllURL: '/insights/scientific-insights',
        },
      ],
    },
    {
      id: 'law-and-regulation-academic-publication-id',
      section: 'Laws & Regulations Academic Publications',
      items: [
        {
          id: 'L1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-4.png',
        },
        {
          id: 'L2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-6.png',
        },
        {
          id: 'L3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-7.png',
        },
        {
          id: 'L4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-8.png',
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
          viewAllLink: true,
          viewAllTitle: 'View All Laws & Regulations Academic Publications',
          viewAllURL: '/insights/scientific-news',
        },
      ],
    },
    {
      id: 'law-and-regulation-patent-id',
      section: 'Laws & Regulations Patents',
      items: [
        {
          id: 'L1',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-9.png',
        },
        {
          id: 'L2',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: null,
        },
        {
          id: 'L3',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-10.png',
        },
        {
          id: 'L4',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-11.png',
        },
        {
          id: 'L5',
          title: 'Ethiopian runners took the top four news.',
          description:
            'Lorem ipsum dolor sit amet consectetur. Sagittis massa sed eget faucibus tincidunt nunc cursus massa. Pharetra vitae bibendum elementum orci mauris phasellus euismod. Congue in nunc orci dui.',

          date: '03 June 2025',
          newsId: 'News98',
          imageUrl: '/images/item-news-section-cover-img-4.png',
        },
        {
          viewAllLink: true,
          viewAllTitle: 'View All Laws & Regulations Patents',
          viewAllURL: '/insights/Laws-and-regulations-patent',
        },
      ],
    },
  ],
};

export const previewRichContent = `
  {"root":{"children":[{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Nec dictum aenean purus tortor aene?","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":1,"textStyle":""},{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":1,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Lorem ipsum dolor sit amet consectetur. Amet porttitor amet leo convallis penatibus semper neque. Amet ipsum viverra nunc a. Sollicitudin tincidunt lacus nulla enim nascetur tempus ut velit. Imperdiet risus eu tellus enim consectetur at. ","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Nisi cursus nisi fringilla dolor urna et mauris. Habitant pretium nascetur sagittis ac dignissim proin. Sed justo duis blandit parturient quam. Ac commodo amet etiam ut nisi vitae adipiscing semper. Aliquet urna tortor mattis id. Mauris etiam urna maecenas aliquet aliquam mauris proin.","type":"text","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"Nibh ipsum sagittis non in tristique. Senectus sed felis sit eu dignissim semper. A euismod fames nisi ut in dui turpis purus. Nibh ultricies ullamcorper vel arcu amet. Tristique aliquet et dictum auctor.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Aaliquet aliquam mauris proi?","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":1,"textStyle":""},{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":1,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Nisi cursus nisi fringilla dolor urna et mauris. Habitant pretium nascetur sagittis ac dignissim proin. Sed justo duis blandit parturient quam. Ac commodo amet etiam ut nisi vitae adipiscing semper. Aliquet urna tortor mattis id. Mauris etiam urna maecenas aliquet aliquam mauris proin.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}
`;
