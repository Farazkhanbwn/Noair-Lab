// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import feedReducer from './slices/feed-slice/feed-slice';
import userReducer from './userSlice'
import postReducer from './posts/postSlice'
import followReducer from './followings/followSlice'
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    feed: feedReducer,
    following: followReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
