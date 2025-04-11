import axiosInstance from "../axios"


export const createFeedPost = async (postdata: FormData) => {
  const url = `/api/v1/insights/add-feed-post`
  return axiosInstance.post(url, postdata, { headers: {'Content-Type': 'multipart/form-data'} })
}