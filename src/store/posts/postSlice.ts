// store/postSlice.ts
import { createFeedPost } from '@/service/post-service/post-service';
import { handleRequestError } from '@/utils/toast-utils';
import { Action, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { SerializedEditorState } from 'lexical';
import { feedPostCreated } from '../slices/feed-slice/feed-slice';

interface PostState {
  addPost: {
    content: string;
    contentHtml: string;
    contentJson: SerializedEditorState | null;
    category: string;
    postType: string;
    topic: string[];
    files: { url: string; alt: string }[];
    isLoading: boolean,
    error: string | null,
    success: boolean,
  }
}

const initialState: PostState = {
  addPost: {
    content: '',
    contentHtml: '',
    contentJson: null,
    category: '',
    postType: '',
    topic: [],
    files: [],
    isLoading: false,
    error: '',
    success: false
  }
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setContent(state, action: PayloadAction<string>) {
      state.addPost.content = action.payload;
    },
    setContentHtml(state, action: PayloadAction<string>) {
      state.addPost.contentHtml = action.payload;
    },
    setContentJson(state, action: PayloadAction<SerializedEditorState | null>) {
      state.addPost.contentJson = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.addPost.category = action.payload;
    },
    setPostType(state, action: PayloadAction<string>) {
      state.addPost.postType = action.payload;
    },
    setTopic(state, action: PayloadAction<string[]>) {
      state.addPost.topic = action.payload;
    },
    setFiles(state, action: PayloadAction<{ url: string; alt: string }[]>) {
      state.addPost.files = action.payload;
    },
    resetPostState(state) {
      state.addPost.content = '';
      state.addPost.contentHtml = '';
      state.addPost.contentJson = null;
      state.addPost.category = '';
      state.addPost.postType = '';
      state.addPost.topic = [];
      state.addPost.files = [];
      state.addPost.error = ''
      state.addPost.success = false
    },
    startLoading(state) {
      state.addPost.isLoading = true;
      state.addPost.error = ''; // Reset the error when a new request starts
    },
    postCreated(state) {
      state.addPost.isLoading = false;
      state.addPost.success = true;
    },
    setError(state, action: PayloadAction<string>) {
      state.addPost.isLoading = false;
      state.addPost.error = action.payload;
    },
  },
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,    // This is your application's state type
  undefined,      // You can use 'unknown' or 'undefined' depending on your setup
  Action<string>  // Action type
>;

// Thunk to make the API call
export const createPostItem = (postData: FormData): AppThunk => async (dispatch: AppDispatch) => {
  try {
    console.log(postData)
    const { data } = await createFeedPost(postData)
    dispatch(feedPostCreated(data.data))
    dispatch(postSlice.actions.postCreated(data));
  } catch (error: unknown) {
    if(error instanceof Error){
      handleRequestError(error)
      dispatch(postSlice.actions.setError(error.message || 'Something went wrong'));
    }
  }
};

export const {
  setContent,
  setCategory,
  setPostType,
  setTopic,
  setFiles,
  setContentHtml,
  setContentJson,
  resetPostState,
  startLoading,
  setError
} = postSlice.actions;

export default postSlice.reducer;
