// src/api/postsService.ts
import { useMutation, useQuery } from '@tanstack/react-query';
import axiosClient from './axios';

export const getUserProfile = async (token?: string) => {
  console.log(token)

  try {
    const response = await axiosClient.get('/api/v1/user/profile');
    return response.data?.data; // Assuming the response has a data field with posts
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const updateProfileImage = async (profileData: { file: Blob, type: string }) => {
  const url = `api/v1/user/${profileData.type == 'profile' ? 'profile-image' : 'banner-image'}`
  const response = await axiosClient.post(url, profileData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
  return response.data;
};

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ["getUserProfile"],
    queryFn: () => getUserProfile(),
    retry: false,
    staleTime: 15 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useUpdateProfileImage = () => {
  const mutation = useMutation({
    mutationFn: updateProfileImage,
  });

  return {
    ...mutation,
  };
};
