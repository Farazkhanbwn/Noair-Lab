'use client';

import MessagesUI from '@/modules/(user)/messages/chat/Messages';
import useScrollingHidden from '@/hooks/useScrollingHidden';
import useMaxWidth from '@/hooks/useMaxWidth';

export default function MessagesPage() {
  useScrollingHidden();
  useMaxWidth('main-container');

  return <MessagesUI />;
}
