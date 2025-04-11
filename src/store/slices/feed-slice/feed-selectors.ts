import { RootState } from '@/store/store';

export const selectFeed = (state: RootState) => state.feed.feed;
export const selectFeedLoading = (state: RootState) => state.feed.loading;
export const selectFeedError = (state: RootState) => state.feed.error;
