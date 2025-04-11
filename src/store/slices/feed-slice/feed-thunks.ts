/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleRequestError } from '@/utils/toast-utils';

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

// ✅ Function to get token from localStorage or cookies
const getToken = () => {
  // First, check localStorage
  const token = localStorage.getItem('token');
  if (token) return token;
};

export const fetchFeed = createAsyncThunk(
  'feed/fetchFeed',
  async (cursor: string | null, { rejectWithValue }) => {
    try {
      const token = getToken();

      const params = cursor ? { cursor } : {}; // ✅ Conditionally include cursor

      const response = await axios.get(`${API_URL}/api/v1/insights`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params, // ✅ Pass params object
      });

      return response.data?.data;
    } catch (error) {
      handleRequestError(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchMoreComments = createAsyncThunk(
  'comments/fetchMore',
  async (
    { postId, cursor = '' }: { postId: number; cursor?: string },
    { rejectWithValue }
  ) => {
    try {
      const token = getToken();
      const response = await axios.get(
        `${API_URL}/api/v1/post/comments/post/${postId}?cursor=${cursor}&limit=5`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      handleRequestError(error);
      return rejectWithValue(error);
    }
  }
);
