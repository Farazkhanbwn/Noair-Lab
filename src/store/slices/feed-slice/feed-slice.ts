import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFeed, fetchMoreComments } from './feed-thunks';
import { FeedPostItem } from '@/types/feed-user';

interface FeedState {
  feed: FeedPostItem[];
  loading: boolean;
  error: string | null;
  cursor: string | null;
  hasMore: boolean;
}

const initialState: FeedState = {
  feed: [],
  loading: true,
  error: null,
  cursor: null,
  hasMore: false,
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    updateFeedItem(state, action: PayloadAction<FeedPostItem>) {
      const index = state.feed.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.feed[index] = action.payload;
      }
    },
    feedPostCreated: (state, action: PayloadAction<FeedPostItem>) => {
      // Add post to the beginning of the feed
      state.feed = [action.payload, ...state.feed];
    },

    toggleLike(state, action: PayloadAction<{ postId: number }>) {
      const { postId } = action.payload;
      const post = state.feed.find(item => item.id === postId);
      if (post) {
        post.userLike = !post.userLike;
        const currentLikes = Number(post.totalLikeCount) || 0;
        post.totalLikeCount = post.userLike
          ? currentLikes + 1
          : currentLikes - 1;
      }
    },

    updateCommentCount: (state, action) => {
      const { postId, value } = action.payload;
      const post = state.feed.find(p => p.id === postId);
      if (post) {
        const currentCommentCount = Number(post.totalCommentCount) || 0;
        post.totalCommentCount = Math.max(0, currentCommentCount + value);
      }
    },

    updateCommentLikeStatus: (state, action) => {
      const { postId, commentId, isLiked } = action.payload;
      const post = state.feed.find(p => p.id === postId);

      if (post) {
        const comment = post.comments.find(c => c.id === commentId);
        if (comment) {
          const currentLikeCount = Number(comment.totalLikes) || 0;

          // Update like count
          comment.totalLikes = isLiked
            ? currentLikeCount + 1
            : Math.max(0, currentLikeCount - 1);

          // Toggle user like status
          // if (!comment.user) comment.user = {};
          comment.user.userLiked = isLiked;
        }
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFeed.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeed.fulfilled, (state, action) => {
        state.loading = false;

        // Append new feed items to existing list
        state.feed = [...state.feed, ...action.payload.posts];

        // Update cursor and hasMore from response
        state.cursor = action.payload.nextCursor || null;
        state.hasMore = !!action.payload.nextCursor;
      })
      .addCase(fetchFeed.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchMoreComments.fulfilled, (state, action) => {
        const { postId, comments, nextCursor } = action.payload;

        const post = state.feed.find(post => post.id === postId);
        if (post) {
          post.comments = [...post.comments, ...comments];
          post.hasMoreComments = !!nextCursor;
          post.nextCursor = nextCursor || null;
        }
      });
  },
});

export const {
  updateFeedItem,
  toggleLike,
  updateCommentCount,
  updateCommentLikeStatus,
  feedPostCreated,
} = feedSlice.actions;
export default feedSlice.reducer;
