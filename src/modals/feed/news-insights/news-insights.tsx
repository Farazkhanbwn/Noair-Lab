import Modal from '@/components/common/modal';
import { Search } from 'lucide-react';
import SearchInput from '@/components/common/search-input/search-input';
import { COMMUNITY_SELECTION_TOPICS } from '@/modals/communities/communities.constants';
import SelectedTopic from '@/modals/communities/components/selected-item';
import { TopicSection } from '@/modals/communities/components/topic-section';
import { DialogProps } from '@/types';
import React, { FC, useState } from 'react';
import CommunityModalHeader from '@/modals/communities/components/community-header';

interface NewsInsightModalProps extends DialogProps {
  clssNames?: string;
}

const NewsInsightModal: FC<NewsInsightModalProps> = ({
  open,
  onCloseModal,
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
  const modalStyles = {
    modal: {
      maxHeight: '520px',
      height: '100%',
      borderRadius: '1rem',
      maxWidth: '60rem',
      width: '',
      backgroundColor: '#fff',
    },
    closeIcon: {
      fill: '#fff',
    },
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      showCloseIcon={false}
      styles={modalStyles}
    >
      <div className="max-w-[40rem]">
        <CommunityModalHeader
          title={"Let's Add Some Topics!"}
          onClose={onCloseModal}
        />
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
    </Modal>
  );
};

export default NewsInsightModal;
