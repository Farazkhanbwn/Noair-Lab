import React from 'react';
import UserPost from './user-post';

const UserPosts = () => {
  return (
    <div>
      <h2 className="font-semibold my-2 ml-2">Pinned Post</h2>
      <UserPost isPinned={true} />
      <h2 className="font-semibold my-2 ml-2">Others Post</h2>
      <UserPost isPinned={false} />
    </div>
  );
};

export default UserPosts;
