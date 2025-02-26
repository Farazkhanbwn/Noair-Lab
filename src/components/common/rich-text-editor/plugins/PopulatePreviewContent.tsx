'use clietn';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { SerializedEditorState } from 'lexical';
import { useEffect } from 'react';

export default function PopulatePreviewContent({
  editorContent,
}: {
  editorContent?: SerializedEditorState;
}) {
  const [editor] = useLexicalComposerContext();
  console.log({ editorContent });
  useEffect(() => {
    if (editorContent) {
      editor.setEditorState(editor.parseEditorState(editorContent));
    }
  }, [editor, editorContent]);

  return null;
}
