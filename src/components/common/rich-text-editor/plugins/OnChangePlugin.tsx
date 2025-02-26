import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateHtmlFromNodes } from '@lexical/html';
import { $getRoot, SerializedEditorState } from 'lexical';

interface OnChangePluginProps {
  onChange?: (
    html: string,
    text: string,
    jsonData: SerializedEditorState
  ) => void;
  maxLength?: number;
}

export default function OnChangePlugin({
  onChange,
  maxLength,
}: OnChangePluginProps): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Remove any existing OnChange listeners
    const removeUpdateListener = editor.registerUpdateListener(
      ({ editorState }) => {
        editorState.read(() => {
          // Get the current root and extract text content
          const root = $getRoot();
          const text = root.getTextContent();

          // Check if text exceeds maxLength
          if (maxLength && text.length > maxLength) {
            return;
          }

          // Generate HTML from the current editor state
          const html = $generateHtmlFromNodes(editor);
          const stateJSON = editorState.toJSON();

          // Call the onChange handler with both HTML and text content
          if (onChange) {
            onChange(html, text, stateJSON);
          }
        });
      }
    );

    // Cleanup listener on unmount
    return () => {
      removeUpdateListener();
    };
  }, [editor, onChange, maxLength]);

  return null;
}
