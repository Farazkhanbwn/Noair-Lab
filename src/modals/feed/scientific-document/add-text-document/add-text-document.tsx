import FlexContainer from '@/components/common/flex-container/flex-container';
import PrimaryImage from '@/components/common/primary-image/primary-image';
import RichTextEditor from '@/components/common/rich-text-editor/RichTextEditor';
import React from 'react';

const AddTextDocument = () => {
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
        onChange={(html, text) => {
          console.log(html, 'HTML');
          console.log(text, 'TEXT');
        }}
      />
    </div>
  );
};

export default AddTextDocument;
