export interface AddCommentVariables {
  postId: number;
  content: string;
}

export interface UpdateDeleteCommentParams {
  postId: number;
  commentId: number;
  content?: string;
}

export interface PostLikeParams {
  reaction?: string;
  postId: number;
  commentId: number;
  replyId: number;
}

export interface UnLikeParams {
  id: number;
  type?: string;
}
