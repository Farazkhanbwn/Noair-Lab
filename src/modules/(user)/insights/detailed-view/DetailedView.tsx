'use client';
import { insightsData, previewRichContent } from '@/utils/constants/insights';
import Link from 'next/link';
import { NewsCard } from '../news-section/NewsCard';
import Image from 'next/image';
import PreviewHTML from '@/components/common/rich-text-editor/PreviewContent';
import CommentsAction from '@/components/common/comments/CommentsAction';
import SearchBar from '@/modules/feed/components/feed-item/search-bar';
import LikesModal from '@/modals/like-modal/user-likes';
import ShareModal from '@/modals/share-modal/share-modal';
import CommentModal from '@/modals/comment-modal/comments';
import { useState } from 'react';

function DetailedView() {
  // useScrollingHidden();
  // useMaxWidth('main-container');

  const [likeModal, setLikeModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <div className="w-full flex flex-col min-h-0 p-1 xs:p-3 md:p-7">
        <section className="relative py-7 mb-20">
          <div className="flex justify-between w-full px-5 mb-5">
            <h2 className="text-2xl md:text-[2rem] font-bold">
              {insightsData?.['Science']?.[0].section}
            </h2>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-24 justify-between">
            <div className="rounded-2xl xs:rounded-xl flex-1 bg-light-grey ">
              <div className="gap-3 flex flex-col ">
                <h2 className="text-[1.75rem] font-bold px-5 pt-5 pb-2">
                  {insightsData?.['Science']?.[0].items?.[0]?.title}
                </h2>
                <div className="w-full h-1/2 px-5 rounded-xl">
                  {/* <VideoPlayer
                  src={'/videos/natural-beauty.mp4'} // Replace with your video URL
                  className="overflow-hidden shadow-lg w-full h-full rounded-sm"
                /> */}
                  <Image
                    src={'/images/insights-detailed-view-cover-image.png'}
                    width={4000}
                    height={900}
                    priority
                    alt="Cover Image Detailed View"
                    className="w-full  h-full object-fill rounded-sm"
                  />
                </div>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur. Et augue nulla
                  condimentum morbi blandit ante.
                </p>
                <div className="px-2">
                  <PreviewHTML
                    jsonContent={JSON.parse(previewRichContent)}
                    // jsonContent={
                    //   localStorage.getItem('richContent')
                    //     ? JSON.parse(
                    //         localStorage.getItem('richContent') as string
                    //       )
                    //     : null
                    // }
                  />
                </div>
                <CommentsAction
                  likes={120}
                  comments={45}
                  shares={30}
                  onOpenLikesModal={() => setLikeModal(true)}
                  onOpenCommentsModal={() => setCommentModal(true)}
                  onOpenSharesModal={() => setShareModal(false)}
                  btnClassName="flex-grow-0"
                  actionBtnBoxClassName="px-5 py-1"
                />
                <SearchBar
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  inputClassName="bg-white"
                  onSend={() => console.log('Sending Value')}
                  className="px-5 !py-5"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-5 lg:flex lg:w-[20%]  grid-cols-1 xs:grid-cols-2 xs:grid md:grid-cols-3 lg:flex-col">
              {insightsData?.['Science']?.[1].items
                ?.filter(el => !el.viewAllLink)
                ?.map(insightItem => (
                  <div
                    key={insightItem.id}
                    className="group relative h-[233px] overflow-hidden rounded-sm border-none shadow-md w-full transition-all duration-300"
                  >
                    <Link href={`/insights/detailed-view/${insightItem.id}`}>
                      <NewsCard item={insightItem} clampDescription />
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
      <LikesModal
        isOpen={likeModal}
        onClose={() => setLikeModal(false)}
        title="Likes"
        postId={42}
      />

      <ShareModal
        isOpen={shareModal}
        title="Share"
        onClose={() => setLikeModal(false)}
      />

      <CommentModal
        isOpen={commentModal}
        title="Comments"
        onClose={() => setCommentModal(false)}
      />
    </>
  );
}

export default DetailedView;
