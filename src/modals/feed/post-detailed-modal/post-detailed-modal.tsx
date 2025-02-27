/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from 'react';
import Modal from '@/components/common/modal';
import { DialogProps } from '@/types';
import { Check, CheckCircle, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import UserCard from '@/components/dashboard/components/user-card/user-card';
import SearchBar from '@/modules/feed/components/feed-item/search-bar';
import Comment from '@/components/dashboard/components/comment/comment';
import CrossIcon from '@/components/icons/cross-icon';
import CheckIcon from '@/components/icons/user/feed/check-icon';
import PostImageDisplay from './components/post-image-display';
import SwiperSlider from '@/components/common/swiper-slider/swiper-slider';

interface PostDetailedModalProps extends DialogProps {
  classNames?: string;
  initialLikes?: number;
  initialComments?: number;
  initialShares?: number;
  images?: string[];
}

const PostDetailedModal: FC<PostDetailedModalProps> = ({
  open,
  onCloseModal,
  classNames,
  initialLikes = 100,
  initialComments = 50,
  initialShares = 25,
  images = ['/images/post-background.png', '/images/post-background.png'],
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const [shares, setShares] = useState(initialShares);

  const modalStyles = {
    modal: {
      maxHeight: '500px',
      height: '100%',
      borderRadius: '1rem',
      maxWidth: '1200px',
      width: '100%',
    },
    closeIcon: {
      fill: '#fff',
    },
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      styles={modalStyles}
      showCloseIcon={false}
    >
      <div className={`bg-pure-white row h-full w-full ${classNames}`}>
        <div className="flex flex-col md:flex-row h-full max-h-[500px]">
          {/* Left side - Image */}
          <PostImageDisplay
            images={images}
            className="bg-[#1b1f23] flex-1 max-h-[500px] max-w-[100%] md:max-w-[50%] h-full"
          />

          {/* Right side - Content */}
          <div className="flex flex-col flex-1 h-full">
            <div className="flex justify-between items-start p-3">
              <div className="flex justify-between items-start">
                <UserCard
                  userImage={'/images/feed-profile.png'}
                  name={'Wilma Ullrich, PhD'}
                  role={'Research Assistant at Princeton University'}
                  mutual={2}
                  followers={`${1.2}k`}
                />
              </div>

              <div className="flex-between gap-2">
                <CustomButton
                  styleType={CustomButtonTypes.SECONDARY}
                  className="heading-tertiary font-semibold rounded-[20px] px-3.5 py-1"
                >
                  Follow
                </CustomButton>
                <CustomButton
                  styleType={CustomButtonTypes.TERTIARY}
                  className="hidden md:block p-2.5 hover:bg-light-grey-100 transition-colors cursor-pointer shadow-lg bg-light-grey rounded-full"
                  onClick={onCloseModal}
                >
                  <CrossIcon width={14} height={14} color={'#444'} />
                </CustomButton>
              </div>
            </div>

            <div className="flex-1 max-h-[150px] md:max-h-[500px] h-full overflow-y-scroll">
              <div className="space-y-2 heading-tertiary">
                {/* Post content */}
                <div className="px-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Non nisi in id
                    pharelius. Ac eros justo elementum tincidunt congue risus
                    massa vulputat lorem.
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Avelien accumsan
                    sagittis eros diam vulputate. Aliquet vestibule porta nunc.
                  </p>

                  {/* Checklist */}
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center gap-2">
                      <CheckIcon />
                      <span>Fermentum aliquet odio eleifendu.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon />
                      <span>Eu nullam nunc eget facilisi fereleifend.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon />
                      <span>Nibh ac ultricies et vulputate nunc.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between heading-tertiary font-normal text-dark-grey py-2 px-4 border-b border-stroke-grey">
                  <CustomButton
                    styleType={CustomButtonTypes.TERTIARY}
                    // onClick={onOpenLikesModal}
                  >
                    {likes} likes
                  </CustomButton>
                  <div className="flex items-center gap-x-4">
                    <CustomButton
                      styleType={CustomButtonTypes.TERTIARY}
                      //   onClick={onOpenCommentsModal}
                    >
                      {comments} Comments
                    </CustomButton>
                    <CustomButton
                      styleType={CustomButtonTypes.TERTIARY}
                      //   onClick={onOpenSharesModal}
                    >
                      {shares} Shares
                    </CustomButton>
                  </div>
                </div>
                <div className="px-3">
                  <div className="flex justify-between text-description px-6">
                    <CustomButton
                      styleType={CustomButtonTypes.TERTIARY}
                      className="flex items-end gap-x-2"
                    >
                      <img src="/like.svg" alt="like icon" /> Like
                    </CustomButton>
                    <CustomButton
                      styleType={CustomButtonTypes.TERTIARY}
                      className="flex items-center gap-x-2"
                    >
                      <img src="/comment.svg" alt="comment icon" /> Comment
                    </CustomButton>
                    <CustomButton
                      styleType={CustomButtonTypes.TERTIARY}
                      className="flex items-center gap-x-2"
                    >
                      <img src="/share.svg" alt="share icon" /> Share
                    </CustomButton>
                  </div>

                  <SearchBar className="px-0 py-3" />

                  {/* Comments */}
                  <Comment
                    name="Elmer Erdman"
                    role="Medical Researcher"
                    comment="Lorem ipsum dolor sit amet consectetur. Id et vulputate nulla phasellus risus."
                    time="1h"
                    className="px-0 py-2"
                    followers={1200}
                    mutual={2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PostDetailedModal;
