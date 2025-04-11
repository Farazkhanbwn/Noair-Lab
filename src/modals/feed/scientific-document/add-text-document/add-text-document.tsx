import FlexContainer from '@/components/common/flex-container/flex-container';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import RichTextEditor from '@/components/common/rich-text-editor/RichTextEditor';
import { useDebouncedDispatch } from '@/modules/feed/feed.hooks';
import { setContent, setContentHtml, setContentJson } from '@/store/posts/postSlice';
import { RootState } from '@/store/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddTextDocument = () => {

  const dispatch = useDispatch()
  const { contentJson } = useSelector((state: RootState) => state.post.addPost)

  const debouncedDispatch = useDebouncedDispatch((html, text, jsonData) => {
    dispatch(setContent(text));
    dispatch(setContentHtml(html));
    if (jsonData?.root?.children?.length > 0) {
      dispatch(setContentJson(jsonData));
    }
  }, 500);

  return (
    <div>
      {/* Person Image */}
      <FlexContainer className="my-3">
        <PrimaryImage
          width={42}
          height={42}
          src="/profile-person.png"
          alt="User avatar"
          className="rounded-full h-[42px] w-[42px]"
        />
        <span className="font-medium">Lewis Morissette</span>
      </FlexContainer>

      <RichTextEditor
        toolbar={{
          classNames:
            'flex px-1 w-full align-middle rounded-t-lg border-l border-r border-t border-stroke-grey overflow-auto',
        }}
        editorInner={{
          classNames:
            'bg-ghost-white w-full min-h-[175px] rounded-b-lg border-t relative border-b border-l border-r border-stroke-grey',
        }}
        editorContainer={{ classNames: 'w-full' }}
        onChange={(html, text, jsonData) => {
          debouncedDispatch(html, text, jsonData)
        }}
        editorContent={contentJson}
      />
    </div>
  );
};

export default AddTextDocument;
