'use client';
import React, { memo } from 'react';
import RichTextEditor from '@/components/common/rich-text-editor/RichTextEditor';
import { SerializedEditorState } from 'lexical';

const PreviewHTML = memo(function PreviewHTML({
  jsonContent,
}: {
  jsonContent: SerializedEditorState | null;
}) {
  return (
    <div className="editor-readonly">
      <RichTextEditor
        toolbar={{
          classNames:
            'flex px-1 w-full align-middle rounded-t-lg border-none overflow-auto',
        }}
        editorInner={{
          classNames:
            ' !bg-transparent w-full min-h-[175px] rounded-b-lg border-none relative',
        }}
        editorContainer={{ classNames: 'w-full' }}
        editorContent={jsonContent}
        readOnly
      />
    </div>
  );
});

// Prevents unnecessary re-renders by checking if jsonContent has changed
export default PreviewHTML;
