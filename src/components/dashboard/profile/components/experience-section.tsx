import { FC } from 'react';
import { ExperienceData } from '../../../../modules/(user)/profile/profile.types';
import { SectionHeader } from './section-header';
import { TimelineCard } from './timeline-card';

interface ExperienceSectionProps {
  experiences: ExperienceData[];
  onAdd?: () => void;
  onEdit?: () => void;
  classNames?: string;
}

const ExperienceSection: FC<ExperienceSectionProps> = ({
  experiences,
  onAdd,
  onEdit,
  classNames,
}) => {
  return (
    <section className={`space-y-4 bg-pure-white w-full ${classNames}`}>
      <SectionHeader title="Experience" onAdd={onAdd} onEdit={onEdit} />
      <div className="space-y-4 text-description">
        {experiences.map((experience, index) => (
          <TimelineCard
            key={index}
            {...experience}
            subtitle={experience.institution}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
