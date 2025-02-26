import { useState } from 'react';

type SeeMoreTextProps = {
  text: string;
  wordLimit?: number;
};

export default function SeeMoreText({
  text,
  wordLimit = 20,
}: SeeMoreTextProps) {
  const [expanded, setExpanded] = useState(false);
  const words = text.split(' ');
  const shouldTruncate = words.length > wordLimit;
  const displayedText =
    shouldTruncate && !expanded
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;

  return (
    <div>
      <p className="font-normal text-xs">
        {displayedText}
        {'  '}
        {shouldTruncate && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary underline hover:underline text-xs"
          >
            {expanded ? 'see less' : 'see more'}
          </button>
        )}
      </p>
    </div>
  );
}
