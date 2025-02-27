'use client';
import useMaxWidth from '@/hooks/useMaxWidth';
import useScrollingHidden from '@/hooks/useScrollingHidden';
import InsightsPage from '@/modules/(user)/insights/insights';
import React from 'react';

function Insights() {
  useScrollingHidden();
  useMaxWidth('main-container');
  return <InsightsPage />;
}

export default Insights;
