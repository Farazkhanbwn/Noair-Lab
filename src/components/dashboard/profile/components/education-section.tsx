import { EducationData } from '../../../../modules/(user)/profile/profile.types';
import { SectionHeader } from './section-header';
import { TimelineCard } from './timeline-card';

interface EducationSectionProps {
  education: EducationData[];
  onAdd?: () => void;
  onEdit?: () => void;
  classNames?: string;
  isPreviewMode?: boolean;
}

export function EducationSection({
  education,
  onAdd,
  onEdit,
  classNames,
  isPreviewMode = false,
}: EducationSectionProps) {
  return (
    <section
      className={`space-y-4 bg-pure-white w-full text-description ${classNames}`}
    >
      <SectionHeader
        isPreviewMode={isPreviewMode}
        title="Education"
        onAdd={onAdd}
        onEdit={onEdit}
      />
      <div className="space-y-4">
        {education.map((edu, index) => (
          <TimelineCard key={index} {...edu} subtitle={edu.degree} />
        ))}
      </div>
    </section>
  );
}
