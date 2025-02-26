import { FC } from 'react';
import ArticlePost from './article-post';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';

interface ArticlePostItemProps {
  imageSrc: string;
  date: string;
  title: string;
  className?: string;
  likes: number;
  comments: number;
  shares: number;
  onImageClick: () => void;
  onOpenLikesModal: () => void;
  onOpenCommentsModal: () => void;
  onOpenSharesModal: () => void;
}

const ArticlePostItem: FC<ArticlePostItemProps> = ({
  imageSrc,
  date,
  title,
  className,
  likes,
  comments,
  shares,
  onImageClick,
  onOpenLikesModal,
  onOpenCommentsModal,
  onOpenSharesModal,
}) => {
  return (
    <div className={`${className}`}>
      <ArticlePost
        imageSrc={imageSrc}
        date={date}
        title={title}
        onImageClick={onImageClick}
      />

      <div className="flex items-center justify-between heading-tertiary font-normal text-dark-grey py-2 px-5 border-b border-stroke-grey">
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          onClick={onOpenLikesModal}
        >
          {likes} likes
        </CustomButton>
        <div className="flex items-center gap-x-4">
          <CustomButton
            styleType={CustomButtonTypes.TERTIARY}
            onClick={onOpenCommentsModal}
          >
            {comments} Comments
          </CustomButton>
          <CustomButton
            styleType={CustomButtonTypes.TERTIARY}
            onClick={onOpenSharesModal}
          >
            {shares} Shares
          </CustomButton>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          className="flex-center gap-x-3 py-3 flex-1"
        >
          <img src="/like.svg" alt="like icon" /> Like
        </CustomButton>
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          className="flex-center gap-x-3 py-3 flex-1"
        >
          <img src="/comment.svg" alt="comment icon" /> Comment
        </CustomButton>
        <CustomButton
          styleType={CustomButtonTypes.TERTIARY}
          className="flex-center gap-x-3 py-3 flex-1"
        >
          <img src="/share.svg" alt="share icon" /> Share
        </CustomButton>
      </div>
    </div>
  );
};

export default ArticlePostItem;
