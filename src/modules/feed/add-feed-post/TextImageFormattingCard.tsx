import PrimaryImage from '@/components/common/primary-image/primary-image';
import RichTextEditor from '@/components/common/rich-text-editor/RichTextEditor';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SelectSeparator } from '@/components/ui/select';
import { setContent, setContentHtml, setContentJson } from '@/store/posts/postSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useCreatePost } from '../feed.hooks';
import FullScreenLoader from '@/components/common/full-screen-loader/full-screen-loader';

function TextImageFormattingCard() {
  const router = useRouter();
  const dispatch = useDispatch()
  const { createPost, isLoading } = useCreatePost()

  return (
    <>
      {isLoading && <FullScreenLoader />}
      <div className="flex w-full  justify-center px-4 sm:px-6 lg:px-8">
        <Card className="rounded-sm bg-white items-center w-full max-w-lg lg:w-auto lg:max-w-full">
          <div className="flex flex-col gap-5 h-full py-4">
            <h2 className="text-xl font-bold text-center">Text Formatting</h2>
            <SelectSeparator className="w-full bg-gray-silver" />
            <Link href="/profile" className="flex px-5 items-center gap-3">
              <PrimaryImage
                width={40}
                height={40}
                src="/Ellipse 24.svg"
                alt="User Avatar"
                className="rounded-full w-10 h-10"
              />
              <span className=" text-black font-semibold !no-underline">
                Lewis Morissette
              </span>
            </Link>
            <RichTextEditor
              toolbar={{
                classNames:
                  'flex !rounded-none px-1 !bg-light-grey w-full align-middle  border-t border-stroke-grey overflow-auto',
                // exlcudeToolbarOptions: ['divider', 'image'],
              }}
              editorInner={{
                classNames:
                  'bg-light-grey w-full min-h-[175px]  border-t relative   border-stroke-grey',
              }}
              editorContainer={{
                classNames: 'w-full !m-0 ',
              }}
              editorScroller={{
                classNames: 'max-h-[500px]',
              }}
              onChange={(html, text, jsonData) => {
                // console.log(html, 'HTML');
                // console.log(text, 'TEXT');
                console.log(jsonData, 'JSON State');
                dispatch(setContentHtml(html))
                dispatch(setContentJson(jsonData))
                dispatch(setContent(text))
              }}
            />
            <div className="flex w-full h-full items-end justify-end gap-3 px-5 mt-4">
              <Button
                variant="outline"
                onClick={() => {
                  router.replace('/feed?page=add-topics');
                }}
                className="py-5 px-7 bg-light-grey border-none hover:bg-light-grey hover:text-secondary-grey text-secondary-grey font-semibold"
              >
                Back
              </Button>
              <Button
                onClick={() => {
                  createPost()
                }}
                className="bg-primary text-base font-semibold text-white hover:bg-primary py-5 px-7"
              >
                Publish
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default TextImageFormattingCard;
