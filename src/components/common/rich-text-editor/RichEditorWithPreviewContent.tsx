'use client';
import PreviewHTML from '@/components/common/rich-text-editor/PreviewContent';
import RichTextEditor from '@/components/common/rich-text-editor/RichTextEditor';
import React, { useState } from 'react';
import { SerializedEditorState } from 'lexical';

function RichEditorWithPreviewContent() {
  const [jsonData, setJSONData] = useState<SerializedEditorState | null>(null);
  return (
    <div className="flex flex-col">
      <RichTextEditor
        toolbar={{
          classNames:
            'flex px-1 w-full align-middle rounded-t-lg border-l border-r border-t border-stroke-grey overflow-auto',
          // exlcudedOptions: ['divider', 'image'],
        }}
        editorInner={{
          classNames:
            'bg-ghost-white w-full min-h-[175px] rounded-b-lg border-t relative border-b border-l border-r border-stroke-grey',
        }}
        editorContainer={{ classNames: 'w-full' }}
        onChange={(html, text, jsonData) => {
          console.log(html, 'HTML');
          console.log(text, 'TEXT');
          console.log(jsonData, 'JSON State');
          setJSONData(jsonData);
        }}
      />
      <PreviewHTML jsonContent={jsonData} />
    </div>
  );
}

export default RichEditorWithPreviewContent;
