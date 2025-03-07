import PinIcon from '@/components/icons/user/profile/pin-icon';
import EditIcon from '@/components/icons/user/profile/edit-icon';
import DeleteIcon from '@/components/icons/user/profile/delete-icon';
import { useState } from 'react';
import EditPost from '../../../../../app/(user)/profile/_components/edit-post';
import CustomDropdown from './custom-dropdown';
import DeleteModal from '@/components/common/delete-modal';

export default function PostOptions() {
  const [isEditPostModal, setIsEditPostModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const dropdownItems = [
    {
      label: 'Pin Post',
      icon: <PinIcon />,
      onClick: () => console.log('Pin post'),
    },
    {
      label: 'Edit Post',
      icon: <EditIcon />,
      onClick: () => setIsEditPostModal(true),
    },
    {
      label: 'Delete Post',
      icon: <DeleteIcon />,
      onClick: () => setIsDeleteModal(true),
    },
  ];

  return (
    <>
      <CustomDropdown items={dropdownItems} />
      <EditPost
        open={isEditPostModal}
        onCloseModal={() => setIsEditPostModal(false)}
      />

      <DeleteModal
        open={isDeleteModal}
        onCloseModal={() => setIsDeleteModal(false)}
        headerTitle={'Delete Post'}
        description={'Are you sure you want to delete this post permanently?'}
        btnCancelText="Cancel"
        btnSubmitText={'Delete'}
        onSubmit={() => {
          console.log('On Submit Clicked');
          setIsDeleteModal(false);
        }}
      />
    </>
  );
}
