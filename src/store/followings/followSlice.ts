import { FollowData } from "@/service/follow-service/follow-service.types"
import { handleRequestError } from "@/utils/toast-utils"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk } from "../posts/postSlice"
import { fetchFollowings, followUser, unfollowUser } from "@/service/follow-service/follow-service"
import { User } from "@/types"
import { AppDispatch } from "../store"

interface FollowState {
  followingId: number | null
  unfollowingId: number | null
  userId: number | null
  pending: boolean
  error: string
  success: boolean,
  user: User | null,
  followings: User[],
  followers: User[]
}



const initialState: FollowState = {
  followingId: null,
  unfollowingId: null,
  userId: null,
  pending: false,
  error: '',
  success: false,
  user: null,
  followings: [],
  followers: []
}

const followSlice = createSlice({
  name: 'followings',
  initialState,
  reducers: {
    setFollowingId(state, action: PayloadAction<number>) {
      state.followingId = action.payload
    },
    setUnFollowingId(state, action: PayloadAction<number>) {
      state.unfollowingId = action.payload
    },
    setUserId(state, action: PayloadAction<number>) {
      state.userId = action.payload
    },
    setPending(state, action: PayloadAction<boolean>) {
      state.pending = action.payload
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.pending = false
      state.success = false
    },
    setSuccess(state, action: PayloadAction<boolean>) {
      state.success = action.payload
      state.pending = false
      state.error = ''
    },
    setFollowings(state, action: PayloadAction<User[]>){
      state.followings = action.payload
    },
    addFollowings(state, action: PayloadAction<User>){
      state.followings = state.followings.concat(action.payload)
    },
    removeFollowings(state, action: PayloadAction<User>){
      state.followings = state.followings.filter((following) => following.id !== action.payload.id)
    }
  }
})

// Thunk to make the API call
export const createFollow = (postData: FollowData): AppThunk => async (dispatch: AppDispatch) => {
  try {
    console.log(postData)
    dispatch(followSlice.actions.setPending(true))
    const { data } = await followUser(postData)
    console.log(data)
    dispatch(followSlice.actions.setSuccess(true));
  } catch (error: unknown) {
    if(error instanceof Error){
      handleRequestError(error)
      dispatch(followSlice.actions.setError(error.message || 'Something went wrong'));
    }
  }
};

export const deleteFollow = (postData: FollowData): AppThunk => async (dispatch: AppDispatch) => {
  try {
    console.log(postData)
    dispatch(followSlice.actions.setPending(true))
    const { data } = await unfollowUser(postData)
    console.log(data)
    dispatch(followSlice.actions.setSuccess(true));
  } catch (error: unknown) {
    if(error instanceof Error){
      handleRequestError(error)
      dispatch(followSlice.actions.setError(error.message || 'Something went wrong'));
    }
  }
};

export const fetchFollowing = (userId: number | string): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const { data } = await fetchFollowings(userId)
    dispatch(followSlice.actions.setFollowings(data))
  } catch (error: unknown) {
    if(error instanceof Error){
      handleRequestError(error)
      dispatch(followSlice.actions.setError(error.message || 'Something went wrong'));
    }
  }
}

export const { setFollowingId, setError, setUserId, setPending, setSuccess } = followSlice.actions

export default followSlice.reducer