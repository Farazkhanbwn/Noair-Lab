import axiosInstance from "../axios"
import { FollowData } from "./follow-service.types"

export const followUser = async (postdata: FollowData) => {
  const url = `/api/v1/followers`
  return axiosInstance.post(url, postdata)
}

export const unfollowUser = async (postdata: FollowData) => {
  const url = `/api/v1/followers`
  return axiosInstance.delete(url, { data: postdata })
}

export const fetchFollowings = async (userId: number | string) => {
  const url = `/api/v1/followers/${userId}/following`
  return axiosInstance.get(url)
}