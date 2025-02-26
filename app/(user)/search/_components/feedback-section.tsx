import ThumbsDownIcon from '@/assets/svgs/ThumbsDownIcon';
import ThumbsUp from '@/assets/svgs/ThumbsUpIcon';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface FeedbackSectionProps {
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  onFeedback?: (isHelpful: boolean) => void;
}
function FeedbackSection({
  totalPages = 2,
  currentPage = 1,
  onPageChange,
  onFeedback,
}: FeedbackSectionProps) {
  return (
    <>
      <div className="w-full lg:w-3/4 xl:w-1/2 py-6 px-5 bg-white rounded-md flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium">Are these results helpful?</h2>
          <p className="text-sm">
            Your feedback helps us improve search results
          </p>
        </div>
        <div className="flex gap-4">
          <div
            onClick={() => onFeedback}
            className={cn(
              'rounded-full flex justify-center p-2 items-center w-10 h-10  transition-colors',
              'border border-primary hover:bg-blue-50'
            )}
            aria-label="Mark as helpful"
          >
            <ThumbsUp className=" text-primary" />
          </div>
          <div
            onClick={() => {}}
            className={cn(
              'rounded-full w-10 h-10 flex p-2 justify-center items-center transition-colors',
              'border border-primary hover:bg-blue-50'
            )}
            aria-label="Mark as not helpful"
          >
            <ThumbsDownIcon className=" text-primary" />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/4 xl:w-1/2 py-6 px-5 bg-white rounded-md flex items-center justify-between">
        <div className="invisible"></div>
        <div className="flex items-center gap-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => onPageChange?.(page)}
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center text-sm  transition-colors',
                currentPage === page
                  ? 'bg-primary text-white'
                  : ' bg-light-grey hover:light-grey'
              )}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => onPageChange?.(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={cn(
            'flex items-center gap-2 text-sm transition-colors',
            ' hover:text-gray-900 disabled:opacity-50'
          )}
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </>
  );
}

export default FeedbackSection;
