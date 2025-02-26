import { TopicButton } from './topic-button';

interface TopicSectionProps {
  title: string;
  topics: string[];
  selectedTopics: string[];
  onTopicSelect: (topic: string) => void;
}

export function TopicSection({
  title,
  topics,
  selectedTopics,
  onTopicSelect,
}: TopicSectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map(topic => (
          <TopicButton
            key={topic}
            label={topic}
            selected={selectedTopics.includes(topic)}
            onClick={() => onTopicSelect(topic)}
          />
        ))}
        <TopicButton label="+ Add Topic" />
      </div>
    </div>
  );
}
