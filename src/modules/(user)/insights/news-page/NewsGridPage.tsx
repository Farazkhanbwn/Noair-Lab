'use client';
import { useCallback, useState } from 'react';
import useScrollingHidden from '@/hooks/useScrollingHidden';
import useMaxWidth from '@/hooks/useMaxWidth';
import { insightsCategories, insightsData } from '@/utils/constants/insights';
import InsightsCatgories from '../news-section/InsightsCatgories';
import { usePathname } from 'next/navigation';
import { InsightsDatatem } from '../news-section/news.types';
import { NewsCard } from '../news-section/NewsCard';
import RelatedNews from './RelatedNews';
import Link from 'next/link';

const validSections = ['news', 'insights', 'acamedic-publicaiton', 'patents'];
export function getSectionTitleFromSlug(
  insightsData: Record<string, InsightsDatatem[]>,
  slug: string
): { foundedSection: InsightsDatatem | null; sectionTitle: string | null } {
  if (!insightsData) return { foundedSection: null, sectionTitle: null };

  for (const key in insightsData) {
    const sections = insightsData[key];

    const foundedSection = sections.find((item: InsightsDatatem) => {
      const formattedSection = item.id;
      return formattedSection === slug;
    });

    if (foundedSection) {
      return { foundedSection, sectionTitle: key };
    }
  }

  return { foundedSection: null, sectionTitle: null };
}

function NewsGridPage() {
  useScrollingHidden();
  useMaxWidth('main-container');
  const pathname = usePathname();
  const slug = pathname.split('/').pop(); // Get "engineer-news"

  const { sectionTitle, foundedSection } = getSectionTitleFromSlug(
    insightsData,
    slug || ''
  );

  const [activeTab, setActiveTab] = useState<string>(sectionTitle as string);
  const [selectedNewsItemList, setSelectedNewsItemList] =
    useState(foundedSection);

  const fetchSectionDetailsBasedOnActiveTab = useCallback(
    (tab: string) => {
      // Get the relevant tab data
      const tabData = insightsData?.[tab];

      const matchedSection: string | null =
        validSections?.find(section => foundedSection?.id.includes(section)) ||
        null;
      // Find the section within the tab

      const section = tabData?.find(sectionItem =>
        sectionItem.id.toLowerCase().includes(matchedSection as string)
      );
      setActiveTab(tab);
      setSelectedNewsItemList(section as InsightsDatatem);
      console.log({ section });
      return section || null;
    },
    [foundedSection]
  );

  return (
    <div className="w-full flex flex-col h-screen overflow-y-auto min-h-0 p-3 md:p-7">
      <div className="w-full justify-between md:justify-around flex row">
        <InsightsCatgories
          categories={insightsCategories}
          setActiveTab={fetchSectionDetailsBasedOnActiveTab}
          activeTab={activeTab}
        />
      </div>

      <section className="relative row py-7 mb-10">
        <div className="flex justify-between w-full mb-5">
          <h2 className="text-2xl md:text-3xl font-bold">
            {selectedNewsItemList?.section}
          </h2>
        </div>
        <div className="row flex flex-col xs:grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(selectedNewsItemList as InsightsDatatem)?.items
            ?.filter(el => !el.viewAllLink)
            ?.map(insightItem => (
              <div
                key={insightItem.id}
                className="group relative h-[270px] overflow-hidden rounded-sm border-none shadow-md w-full transition-all duration-300"
              >
                <Link href={`/insights/detailed-view/${insightItem.id}`}>
                  <NewsCard item={insightItem} />
                </Link>
              </div>
            ))}
        </div>
        <RelatedNews
          relatedNewsItemList={selectedNewsItemList as InsightsDatatem}
        />
      </section>
    </div>
  );
}

export default NewsGridPage;
