import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $insertNodes, LexicalEditor } from 'lexical';
import { useEffect } from 'react';
import { HorizontalRuleNode } from '../nodes/HorizontalRuleNode';

export function HorizontalRulePlugin(): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Register custom command for inserting horizontal rule
    if (!editor.hasNodes([HorizontalRuleNode])) {
      throw new Error(
        'HorizontalRulePlugin: HorizontalRuleNode not registered on editor'
      );
    }
  }, [editor]);

  return null;
}

// Helper function to insert horizontal rule
export function insertHorizontalRule(editor: LexicalEditor): void {
  editor.update(() => {
    const horizontalRule = new HorizontalRuleNode();
    $insertNodes([horizontalRule]);
  });
}
