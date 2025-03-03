'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import NewsSection from './news-section/NewSection';
import InsightsCatgories from './news-section/InsightsCatgories';
import { insightsCategories, insightsData } from '@/utils/constants/insights';
import { SwiperSliderBreakPoints } from '@/types';

type InsightsPageProps = {
  breakpoints?: SwiperSliderBreakPoints;
  className?: string;
};

function InsightsPage({ breakpoints, className }: InsightsPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get active tab from URL or use default
  const defaultTab = insightsCategories[0].name;
  const initialTab = searchParams.get('tab') || defaultTab;
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set('tab', activeTab);
    router.replace(`?${currentParams.toString()}`, { scroll: false });
  }, [activeTab, router]);

  return (
    <div className={`w-full flex-1 flex flex-col p-3 md:p-7 ${className}`}>
      <div className="w-full justify-between md:justify-around flex row">
        <InsightsCatgories
          categories={insightsCategories}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </div>

      <div className="flex flex-col mt-5 mb-10 md:mb-20">
        {insightsData?.[activeTab]?.map(insightItem => (
          <NewsSection
            key={insightItem.id}
            title={insightItem.section}
            news={insightItem?.items}
            slideId={insightItem.id}
            activeTab={`${insightItem.id}`}
            breakpoints={breakpoints}
          />
        ))}
      </div>
    </div>
  );
}

export default InsightsPage;
