'use client';
import SearchInput from '@/components/common/search-input/search-input';
import { Button } from '@/components/ui/button';
import { COMMUNITY_SELECTION_TOPICS } from '@/modals/communities/communities.constants';
import SelectedTopic from '@/modals/communities/components/selected-item';
import { TopicSection } from '@/modals/communities/components/topic-section';
import { DialogProps } from '@/types';
import { Search } from 'lucide-react';
import React, { useState } from 'react';

export interface AddTopicContentProps extends DialogProps {
  handleNext: () => void;
  onBack: () => void;
}
function AddTopicContent({
  handleNext,
  // onCloseModal,
  onBack,
}: AddTopicContentProps) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTopicSelect = (topic: string) => {
    setSelectedTopics(prev => {
      if (prev.includes(topic)) {
        return prev.filter(t => t !== topic);
      }
      if (prev.length >= 10) {
        return prev;
      }
      return [...prev, topic];
    });
  };

  const handleRemoveTopic = (topic: string) => {
    setSelectedTopics(prev => prev.filter(t => t !== topic));
  };
  return (
    <div>
      <SearchInput
        Icon={Search}
        className="bg-white shadow-md w-full lg:w-2/5 mb-3"
        placeholder="Search your Topics"
        onChange={e => setSearchQuery(e.target.value)}
      />

      <h2 className="heading-secondary font-semibold mb-2">
        Selected Topics {selectedTopics.length}/10
      </h2>

      <div className="mb-2">
        <div className="flex flex-wrap gap-2">
          {selectedTopics?.length ? (
            selectedTopics.map(topic => (
              <SelectedTopic
                key={topic}
                label={topic}
                onRemove={() => handleRemoveTopic(topic)}
              />
            ))
          ) : (
            <>
              <p className="invisible">Default Hidden Topics</p>
            </>
          )}
        </div>
      </div>

      {/* Topic Sections */}
      <div className="space-y-6 min-h-[10vh] max-h-[40vh] overflow-y-auto">
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
      <div className="flex w-full justify-start gap-3 mt-4">
        <Button
          variant="outline"
          onClick={() => {
            onBack();
          }}
          className="py-5 px-7 bg-light-grey border-none hover:bg-light-grey hover:text-secondary-grey text-secondary-grey font-semibold"
        >
          Back
        </Button>
        <Button
          onClick={() => {
            handleNext();
          }}
          className="bg-primary text-base font-semibold text-white hover:bg-primary py-5 px-7"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default AddTopicContent;
