import Link from '@/components/common/custom-link/custom-link';
import type React from 'react';
import { FC, PropsWithChildren } from 'react';

interface DiscussionSectionProps extends PropsWithChildren {
  title?: string;
  count?: number;
  link: string;
}

const DiscussionSection: FC<DiscussionSectionProps> = ({
  title,
  count,
  children,
  link,
}) => {
  return (
    <div className="space-y-4">
      {title && (
        <>
          <h2 className="heading-secondary font-semibold py-4">
            {title} ({count})
          </h2>
          <hr className="!my-0" />
        </>
      )}

      <Link href={link} className="space-y-2 text-pure-black !no-underline">
        {children}
      </Link>
    </div>
  );
};

export default DiscussionSection;
