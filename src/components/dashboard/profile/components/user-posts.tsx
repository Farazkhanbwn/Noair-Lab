import React from 'react';
import UserPost from './user-post';

const UserPosts = () => {
  return (
    <div>
      <h2 className="font-semibold my-2 ml-2">Pinned Post</h2>
      <UserPost />
      <h2 className="font-semibold my-2 ml-2">Others Post</h2>
      <UserPost />
    </div>
  );
};

export default UserPosts;
