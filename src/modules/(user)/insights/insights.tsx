'use client';
import { useState } from 'react';
import NewsSection from './news-section/NewSection';
import InsightsCatgories from './news-section/InsightsCatgories';
import { insightsCategories, insightsData } from '@/utils/constants/insights';
import { SwiperSliderBreakPoints } from '@/types';

type InsightsPageProps = {
  breakpoints?: SwiperSliderBreakPoints;
};

function InsightsPage({ breakpoints }: InsightsPageProps) {
  const [activeTab, setActiveTab] = useState(insightsCategories[0].name);

  return (
    <div className="w-full flex-1 flex flex-col h-screen scroll-container overflow-y-auto min-h-0 p-3 md:p-7">
      <div className="w-full justify-between md:justify-around flex row ">
        <InsightsCatgories
          categories={insightsCategories}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </div>

      <div className="flex flex-col mt-5 mb-10 md:mb-20">
        {insightsData?.[activeTab]?.map(insightItem => {
          return (
            <NewsSection
              key={insightItem.id}
              title={`${insightItem.section}`}
              news={insightItem?.items}
              slideId={insightItem.id}
              activeTab={`${insightItem.id}`}
              breakpoints={breakpoints}
            />
          );
        })}
      </div>
    </div>
  );
}

export default InsightsPage;
