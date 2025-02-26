'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NewsItem } from './news.types';
import { NewsCard } from './NewsCard';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

type SectionProps = {
  title: string;
  news: NewsItem[];
  slideId?: string;
  activeTab: string;
};

export default function NewsSection({
  title,
  news,
  slideId,
  activeTab,
}: SectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-3/4 relative row">
      <div className="flex justify-between w-full mb-5">
        <h2 className="text-lg md:text-[1.75rem] font-bold">{title}</h2>

        {/* Custom navigation and pagination container */}
        <div className="flex items-center justify-end gap-4">
          <button
            className={`custom-prev-button-${slideId} border border-stroke-grey rounded-sm p-3 flex justify-center items-center focus:outline-none`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 text-black h-5" />
          </button>
          <button
            className={`custom-next-button-${slideId} border border-stroke-grey rounded-sm p-3 flex justify-center items-center focus:outline-none`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 text-black h-5" />
          </button>
        </div>
      </div>

      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            prevEl: `.custom-prev-button-${slideId}`,
            nextEl: `.custom-next-button-${slideId}`,
          }}
          breakpoints={{
            200: { slidesPerView: 1 },
            525: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full h-[300px]"
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
        >
          {news.map(newsItem => (
            <SwiperSlide
              className="cursor-pointer"
              key={`${newsItem.title}-${newsItem.id}`}
            >
              <div
                className={
                  'group  relative overflow-hidden rounded-sm border-none shadow-md h-[90%] w-full transition-all duration-300'
                }
              >
                {!newsItem.viewAllLink ? (
                  <Link href={`/insights/detailed-view/${newsItem.id}`}>
                    <NewsCard item={newsItem} />
                  </Link>
                ) : (
                  <div className="flex  h-full flex-col justify-center items-center bg-gray-100 px-4 pt-5 pb-6">
                    <Link
                      href={`/insights/${activeTab.toLowerCase()}`}
                      className="text-black underline text-sm"
                    >
                      {newsItem.viewAllTitle}
                    </Link>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
