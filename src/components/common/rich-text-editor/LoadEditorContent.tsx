import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { SerializedEditorState } from 'lexical';
import { useEffect } from 'react';

export function LoadEditorContent({ contentJson }: { contentJson: SerializedEditorState }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (contentJson) {
      editor.update(() => {
        try {
          const newEditorState = editor.parseEditorState(contentJson);
          const currentEditorState = editor.getEditorState();

          if (JSON.stringify(currentEditorState.toJSON()) !== JSON.stringify(newEditorState.toJSON())) {
            editor.setEditorState(newEditorState);
          }
        } catch (error) {
          console.error('Error parsing editor state:', error);
        }
      });
    }
  }, [editor, contentJson]);

  return null;
}
