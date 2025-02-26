import type React from 'react';
import { FC, PropsWithChildren } from 'react';

interface DiscussionSectionProps extends PropsWithChildren {
  title: string;
  count: number;
}

const DiscussionSection: FC<DiscussionSectionProps> = ({
  title,
  count,
  children,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="heading-secondary font-semibold py-4">
          {title} ({count})
        </h2>
      </div>
      <hr className="!my-0" />
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default DiscussionSection;
