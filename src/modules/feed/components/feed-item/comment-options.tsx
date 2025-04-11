'use client';

import { FC, useState } from 'react';
import CustomDropdown from '@/components/dashboard/profile/components/custom-dropdown';
import DeleteIcon from '@/components/icons/user/profile/delete-icon';
import EditIcon from '@/components/icons/user/profile/edit-icon';
import DeleteModal from '@/components/common/delete-modal';

interface CommentOptionsProps {
  handleDeleteComment: () => void;
  handleEditComment: () => void;
}

const CommentOptions: FC<CommentOptionsProps> = ({
  handleDeleteComment,
  handleEditComment,
}) => {
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const dropdownItems = [
    {
      label: 'Edit',
      icon: <EditIcon />,
      onClick: handleEditComment,
    },
    {
      label: 'Delete',
      icon: <DeleteIcon />,
      onClick: () => setIsDeleteModal(true),
    },
  ];

  return (
    <>
      <CustomDropdown items={dropdownItems} />

      <DeleteModal
        open={isDeleteModal}
        onCloseModal={() => setIsDeleteModal(false)}
        headerTitle={'Delete Comment'}
        description={'Are you sure you want to delete this Comment?'}
        btnCancelText="Cancel"
        btnSubmitText={'Delete'}
        onSubmit={() => {
          handleDeleteComment();
          setIsDeleteModal(false);
        }}
      />
    </>
  );
};

export default CommentOptions;
