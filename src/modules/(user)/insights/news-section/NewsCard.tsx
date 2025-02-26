'use client';

import { NewsItem } from './news.types';
import Image from 'next/image';

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <>
      {item.imageUrl ? (
        <>
          <div className="absolute top-0 bottom-0 left-0 right-0 h-[95%] bg-transparent border-none">
            <Image
              src={item.imageUrl}
              fill
              priority
              className="h-full w-full rounded-none object-fill"
              alt="Cover Image"
            />
          </div>
          <div className="absolute bottom-0 px-4 py-5 z-50 ">
            <p className="mb-1 text-sm text-charcol opacity-60">
              {item.newsId} - {item.date}
            </p>
            <h3 className="text-base font-semibold text-charcol w-4/5">
              {item.title}
            </h3>
          </div>
          <Image
            src="/images/gradient-overlay.svg"
            fill
            priority
            alt="Gradient Overlay"
            className="!h-auto absolute bottom-0 !top-auto border-none shadow-none"
          />
        </>
      ) : (
        <div className="flex h-full flex-col justify-between bg-gray-100 px-4 pt-5 pb-6">
          <div>
            <p className="mb-1 text-sm text-charcol opacity-60">
              {item.newsId} - {item.date}
            </p>
            <h3 className="text-base font-semibold text-charcol w-4/5">
              {item.title}
            </h3>
            <p className="text-sm text-black  mt-3">{item.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
