'use client';
import RichTextEditor from '@/components/common/rich-text-editor/RichTextEditor';
import { SerializedEditorState } from 'lexical';

function PreviewHTML({
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
}

export default PreviewHTML;
