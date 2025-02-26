import { TimelineItem } from '../../../../modules/(user)/profile/profile.types';
import { InstitutionLogo } from './institution-logo';

interface TimelineCardProps extends TimelineItem {
  subtitle: string;
}

export function TimelineCard({
  title,
  institution,
  institutionLogo,
  date,
  description,
  subtitle,
}: TimelineCardProps) {
  return (
    <div className="timeline-card">
      <div className="flex gap-4">
        <InstitutionLogo logo={institutionLogo} name={institution} />
        <div className="flex-1">
          <h3 className="heading-tertiary sm:heading-secondary font-semibold">
            {title}
          </h3>
          <p>{subtitle}</p>
          <p className="text-secondary-grey mt-1">{date}</p>
          {description && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
}
