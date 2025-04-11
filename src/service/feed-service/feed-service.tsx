import { useMutation, useQuery } from '@tanstack/react-query';
import {
  AddCommentVariables,
  PostLikeParams,
  UnLikeParams,
  UpdateDeleteCommentParams,
} from './feed-service.types';
import axiosInstance from '../axios';

const url = process.env.NEXT_PUBLIC_API_ENDPOINT;

const getToken = () => {
  // First, check localStorage
  const token = localStorage.getItem('token');
  if (token) return token;
};

export const useAddComment = () => {
  const token = getToken();
  const addComment = async (commentData: AddCommentVariables) => {
    const response = await axiosInstance.post(
      `${url}/api/v1/post/comments`,
      commentData,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: addComment,
  });

  return {
    ...mutation,
  };
};

export const useDeleteComment = () => {
  const token = getToken();
  const deleteComment = async ({
    postId,
    commentId,
  }: UpdateDeleteCommentParams) => {
    const response = await axiosInstance.delete(
      `${url}/api/v1/post/comments/${postId}/${commentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: deleteComment,
  });

  return {
    ...mutation,
  };
};

export const useUpdateComment = () => {
  const token = getToken();

  const updateComment = async ({
    postId,
    commentId,
    content,
  }: UpdateDeleteCommentParams) => {
    const response = await axiosInstance.put(
      `${url}/api/v1/post/comments/${postId}/${commentId}`,
      { content }, // Sending 'content' in the request body
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Ensure the content type is set
        },
      }
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: updateComment,
  });

  return {
    ...mutation,
  };
};

export const useLikePost = () => {
  const token = getToken();

  const likePost = async ({
    commentId,
    postId,
    reaction = 'like',
    replyId,
  }: Partial<PostLikeParams>) => {
    const response = await axiosInstance.post(
      `${url}/api/v1/post/likes`,
      { commentId, postId, reaction, replyId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Ensure the content type is set
        },
      }
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: likePost,
  });

  return {
    ...mutation,
  };
};

export const useUnLikePost = () => {
  const token = getToken();

  const unLikePost = async ({ id, type = 'post' }: UnLikeParams) => {
    const response = await axiosInstance.delete(
      `${url}/api/v1/post/likes/${type}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Ensure the content type is set
        },
      }
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: unLikePost,
  });

  return {
    ...mutation,
  };
};

export const useGetPostLikes = (
  postId: number,
  enabled = false,
  postType?: string
) => {
  const fetchLikes = async () => {
    const token = getToken();
    const type = postType ?? 'post';
    const response = await axiosInstance.get(
      `${url}/api/v1/post/likes/likesBy/${type}/${postId}`,
      {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  };

  return useQuery({
    queryKey: ['post-likes', postId],
    queryFn: fetchLikes,
    enabled,
  });
};
