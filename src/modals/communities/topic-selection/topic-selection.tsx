import ProgressSteps from '@/components/common/progress-steps/progress-steps';
import SearchInput from '@/components/common/search-input/search-input';
import { Search } from 'lucide-react';
import React, { FC, useState } from 'react';
import { COMMUNITY_SELECTION_TOPICS } from '../communities.constants';
import { TopicSection } from '../components/topic-section';
import SelectedTopic from '../components/selected-item';
import { TopicSelectionModalProps } from '../communities.types';
import CommunityModalLayout from '../community.layout';

const TopicSelectionModal: FC<TopicSelectionModalProps> = ({
  isOpen,
  onClose,
  onNextButton,
  onBackButton,
}) => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTopicSelect = (topic: string) => {
    setSelectedTopics(prev => {
      if (prev.includes(topic)) {
        return prev.filter(t => t !== topic);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, topic];
    });
  };

  const handleRemoveTopic = (topic: string) => {
    setSelectedTopics(prev => prev.filter(t => t !== topic));
  };

  return (
    <CommunityModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Let’s Add Some Topics!"
      description="Choose any 3 topics that best represent your community."
      onNext={onNextButton}
      onBack={onBackButton}
    >
      <ProgressSteps
        steps={4}
        currentStep={3}
        classNames="max-w-[14rem] mx-auto mb-4"
      />

      <div>
        <SearchInput
          Icon={Search}
          className="bg-white shadow-md max-w-[14rem] mb-3"
          placeholder="Search your Topics"
          onChange={e => setSearchQuery(e.target.value)}
        />

        <h2 className="heading-secondary font-semibold mb-2">
          Selected Topics {selectedTopics.length}/3
        </h2>

        <div className="mb-2">
          <div className="flex flex-wrap gap-2">
            {selectedTopics.map(topic => (
              <SelectedTopic
                key={topic}
                label={topic}
                onRemove={() => handleRemoveTopic(topic)}
              />
            ))}
          </div>
        </div>

        {/* Topic Sections */}
        <div className="space-y-6 max-h-[260px] overflow-y-auto scrollbar-thin">
          {Object.entries(COMMUNITY_SELECTION_TOPICS).map(([key, section]) => (
            <TopicSection
              key={key}
              title={section.title}
              topics={section.topics.filter(topic =>
                topic.toLowerCase().includes(searchQuery.toLowerCase())
              )}
              selectedTopics={selectedTopics}
              onTopicSelect={handleTopicSelect}
            />
          ))}
        </div>
      </div>
    </CommunityModalLayout>
  );
};

export default TopicSelectionModal;
