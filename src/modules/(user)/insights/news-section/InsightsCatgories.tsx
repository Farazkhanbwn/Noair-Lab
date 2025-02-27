import Button from '@/components/common/Button';
import { cn } from '@/lib/utils';

type InsightsCatgoriesProps = {
  categories: {
    id: string;
    name: string;
  }[];
  activeTab: string;
  setActiveTab: (category: string) => void;
};

function InsightsCatgories({
  categories,
  activeTab,
  setActiveTab,
}: InsightsCatgoriesProps) {
  return (
    <>
      {categories.map((category, index) => (
        <Button
          key={`category-${index}`}
          onClick={() => setActiveTab(category?.name)}
          className={cn(
            'md:w-1/5 px-0 md:px-6 py-2 font-medium text-sm md:text-lg xl:text-xl',
            activeTab === category?.name
              ? 'border-b-2 border-black text-black'
              : 'text-primary-grey'
          )}
        >
          {category?.name}
        </Button>
      ))}
    </>
  );
}

export default InsightsCatgories;
