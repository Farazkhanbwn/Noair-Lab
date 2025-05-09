'use client';

import React, { FC, useState } from 'react';
import moment from 'moment';
import { UserComment } from '@/types/feed-user';
import Comment from '@/components/dashboard/components/comment/comment';
import CommentOptions from './comment-options';

interface UserCommentProps {
  comment: UserComment;
  isEditable?: boolean;
  onSave: (content: string) => void;
  onCancal: () => void;
  isLiked: boolean;
  onLikeClick: () => void;
  handleDeleteComment: (commentId: number) => void;
  mutualCount: number;
  totalFollowers: number;
}

const UserCommentItem: FC<UserCommentProps> = ({
  comment,
  onSave,
  onCancal,
  isLiked,
  onLikeClick,
  handleDeleteComment,
  mutualCount,
  totalFollowers,
}) => {
  const [editingValue, setEditingValue] = useState(comment.content);
  const [isEditable, setIsEditable] = useState(false);

  const handleSaveContent = () => {
    onSave(editingValue);
    setIsEditable(false);
  };

  const onCancalSaveContent = () => {
    onCancal();
    setIsEditable(false);
    setEditingValue(comment.content);
  };

  return (
    <div className="flex gap-2" key={comment.id}>
      <Comment
        key={comment.id}
        name={comment.user.name}
        role={comment.specialization ?? ''}
        comment={comment.content}
        isLiked={isLiked}
        onLikeClick={onLikeClick}
        isEditing={isEditable}
        onEditClick={onCancalSaveContent}
        onSaveClick={handleSaveContent}
        editedContent={editingValue}
        onContentChange={e => setEditingValue(e.target.value)}
        time={moment.utc(comment.createdAt).fromNow()}
        followers={totalFollowers}
        mutual={mutualCount}
        totalLikes={comment.totalLikes}
        className="!px-0"
      />
      <CommentOptions
        handleDeleteComment={() => handleDeleteComment(comment.id)}
        handleEditComment={() => setIsEditable(true)}
      />
    </div>
  );
};

export default UserCommentItem;
