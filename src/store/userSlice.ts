import { User } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: User | null; // Store user details
  loading: boolean; // Loading state while signup is happening
  error: string | null; // Error message if signup fails
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    // Action to start the signup process
    signupStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    // Action to handle successful signup
    signupSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload; // Store user info
      state.loading = false;
      state.error = null;
    },
    // Action to handle signup failure
    signupFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload; // Store error message
    },
    // Action to clear user error state
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { signupStart, signupSuccess, signupFailure, clearError } = userSlice.actions;

export default userSlice.reducer;
