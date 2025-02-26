'use client';
import { useState } from 'react';
import NewsSection from './news-section/NewSection';
import useScrollingHidden from '@/hooks/useScrollingHidden';
import useMaxWidth from '@/hooks/useMaxWidth';
import InsightsCatgories from './news-section/InsightsCatgories';
import { insightsCategories, insightsData } from '@/utils/constants/insights';

function InsightsPage() {
  useScrollingHidden();
  useMaxWidth('main-container');

  const [activeTab, setActiveTab] = useState(insightsCategories[0].name);

  return (
    <div className="w-full flex flex-col h-screen overflow-y-auto min-h-0 p-3 md:p-7">
      <div className="w-full justify-between md:justify-around flex row">
        <InsightsCatgories
          categories={insightsCategories}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </div>

      <div className="flex flex-col mt-5 mb-5">
        {insightsData?.[activeTab]?.map(insightItem => {
          return (
            <NewsSection
              key={insightItem.id}
              title={`${insightItem.section}`}
              news={insightItem?.items}
              slideId={insightItem.id}
              activeTab={`${insightItem.id}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default InsightsPage;
