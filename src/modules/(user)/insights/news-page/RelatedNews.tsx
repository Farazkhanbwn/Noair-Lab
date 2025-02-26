import React from 'react';
import { NewsCard } from '../news-section/NewsCard';
import { InsightsDatatem } from '../news-section/news.types';

type RelatedNewsPrpps = {
  relatedNewsItemList: InsightsDatatem;
};

function RelatedNews({ relatedNewsItemList }: RelatedNewsPrpps) {
  return (
    <>
      <div className="flex justify-between w-full mt-10 mb-5">
        <h2 className="text-2xl md:text-3xl font-bold">Related News</h2>
      </div>
      <div className="row flex flex-col xs:grid  grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(relatedNewsItemList as InsightsDatatem)?.items
          ?.filter(el => !el.viewAllLink)
          ?.map(insightItem => (
            <div
              key={insightItem.id}
              className="group relative h-[270px] overflow-hidden rounded-sm border-none shadow-md w-full transition-all duration-300"
            >
              <NewsCard item={insightItem} />
            </div>
          ))}
      </div>
    </>
  );
}

export default RelatedNews;
