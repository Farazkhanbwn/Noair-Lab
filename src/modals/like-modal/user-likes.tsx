import React, { FC } from 'react';
import Modal from '@/components/common/Modal';
import ModalHeader from '../modal-header';
import UserCard from '@/components/dashboard/components/user-card/user-card';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import { useGetPostLikes } from '@/service/feed-service/feed-service';
import { UserPostLike } from '@/types/feed-user';
import UserLikes from '@/components/skelton-loader/feed/user-likes';

interface LikeModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  postId: number;
}

const LikesModal: FC<LikeModalProps> = ({ title, isOpen, onClose, postId }) => {
  const { data: likesData, isLoading } = useGetPostLikes(postId, isOpen);
  const modalStyles = {
    modal: {
      maxHeight: '600px',
      borderRadius: '1rem',
      maxWidth: '45rem',
    },
    closeIcon: {
      fill: '#fff',
    },
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      styles={modalStyles}
      showCloseIcon={false}
    >
      <div className="bg-pure-white text-pure-black py-2 px-3">
        <ModalHeader title={title} onClose={onClose} className="p-2" />
        <hr className="border-t opacity-30 my-[1px]" />
        {isLoading && <UserLikes />}

        <div className="flex flex-col gap-3 my-4 px-2">
          {!isLoading && (
            <p className="mb-4 text-primary border-b-2 border-primary w-fit">
              All {likesData && likesData.likes.length}
            </p>
          )}

          {likesData &&
            likesData.likes.map((item: UserPostLike) => (
              <div key={item.id} className="flex justify-between items-start">
                <UserCard
                  userImage={
                    item.user.profileImageUrl || '/images/feed-profile.png'
                  }
                  name={item.user.name}
                  role={item.user.specialization}
                  mutual={item.user.mutualCount || 0}
                  followers={`${item.user.totalFollowersCount || 0}k`}
                  timeStamp={item.createdAt}
                />
                {item.user.userFollow !== null && (
                  <CustomButton
                    styleType={
                      item.user.userFollow
                        ? CustomButtonTypes.PRIMARY
                        : CustomButtonTypes.SECONDARY
                    }
                    className="heading-tertiary font-semibold rounded-[20px] !px-3.5 !py-1"
                  >
                    {item.user.userFollow ? 'Following' : 'Follow'}
                  </CustomButton>
                )}
              </div>
            ))}
        </div>
      </div>
    </Modal>
  );
};

export default LikesModal;
