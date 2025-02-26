'use client';

import { useEffect, useState } from 'react';
import { $getRoot } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export default function CharacterCounterPlugin() {
  const [editor] = useLexicalComposerContext();
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const textContent = $getRoot().getTextContent();
        setCharCount(textContent.length);
      });
    });
  }, [editor]);

  return <span className="text-sm px-3 md:px-0">{charCount}/2200 C</span>;
}
