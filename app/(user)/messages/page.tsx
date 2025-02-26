'use client';

import MessagesUI from '@/modules/(user)/messages/chat/Messages';
import useScrollingHidden from '@/hooks/useScrollingHidden';

export default function MessagesPage() {
  useScrollingHidden();

  return <MessagesUI />;
}
