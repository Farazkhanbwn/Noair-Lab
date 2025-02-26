'use client';
import './styles/editor-styles.css';
import './styles/rich-text-editor.css';
import { SerializedEditorState } from 'lexical';
import { JSX, useEffect, useState } from 'react';
/* Lexical Design System */
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { TRANSFORMERS } from '@lexical/markdown';
import { HashtagNode } from '@lexical/hashtag';

/* Lexical Plugins Local */
import ToolbarPlugin from './plugins/Toolbarplugin/ToolbarPlugin';
import AutoLinkPlugin from './plugins/AutoLinkPlugin';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';

/* Lexical Plugins Remote */
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';

/* Lexical Others */
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import ExampleTheme from './themes/ExampleTheme';
import { EmojiNode } from './nodes/EmojiNode';
import OnChangePlugin from './plugins/OnChangePlugin';
import { HorizontalRuleNode } from './nodes/HorizontalRuleNode';
import { HorizontalRulePlugin } from './plugins/HorizontalRulePlugin';
import { InlineImageNode } from './nodes/InlineImageNode';
import InlineImagePlugin from './plugins/InlineImagePlugin';
import { ToolbarOptions } from './types/toolbar.type';
import PopulatePreviewContent from './plugins/PopulatePreviewContent';

/* Lexical Texts */
interface EditorProps {
  toolbar?: ToolbarOptions;
  editorContainer?: {
    classNames?: string;
  };
  editorInner?: {
    classNames?: string;
  };
  contentEditable?: {
    className: string;
  };
  placeholder?: {
    text: string;
  };
  onChange?: (
    html: string,
    text: string,
    jsonData: SerializedEditorState
  ) => void;
  maxLength?: number;
  readOnly?: boolean;
  editorContent?: SerializedEditorState | null;
}

function Placeholder({ text }: { text: string }) {
  return <div className="editor-placeholder">{text}</div>;
}

export default function RichTextEditor({
  toolbar,
  editorContainer,
  editorInner,
  placeholder,
  onChange,
  maxLength,
  readOnly = false,
  editorContent,
}: EditorProps): JSX.Element | null {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const editorConfig = {
    // The editor theme
    theme: ExampleTheme,
    namespace: 'noair-lab-editor',
    onError(error: unknown) {
      throw error;
    },
    // Any custom nodes go here
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
      HashtagNode,
      EmojiNode,
      HorizontalRuleNode,
      InlineImageNode,
    ],
    editable: !readOnly,
  };

  return (
    <LexicalComposer
      initialConfig={{
        ...editorConfig,
      }}
    >
      <div className={`editor-shell ${editorContainer?.classNames}`}>
        {!readOnly ? <ToolbarPlugin {...(toolbar as ToolbarOptions)} /> : null}
        <div
          className={`editor-container tree-view ${editorInner?.classNames}`}
        >
          {readOnly && editorContent ? (
            <PopulatePreviewContent editorContent={editorContent} />
          ) : null}
          <InlineImagePlugin />
          <RichTextPlugin
            contentEditable={
              <div
                className={`editor-scroller ${readOnly ? '!overflow-visible' : ''}`}
              >
                <div className="editor">
                  <ContentEditable className="p-3" />
                </div>
              </div>
            }
            placeholder={
              readOnly ? (
                <></>
              ) : (
                <Placeholder
                  text={placeholder?.text || 'Enter some rich text...'}
                />
              )
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <ListPlugin />
          <HistoryPlugin />
          <AutoLinkPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <HashtagPlugin />
          <LinkPlugin />
          <TabIndentationPlugin />
          <AutoLinkPlugin />
          <InlineImagePlugin />
          <HorizontalRulePlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <OnChangePlugin
            onChange={(html, text, jsonData) => {
              if (onChange) {
                onChange(html, text, jsonData);
              }
            }}
            maxLength={maxLength}
          />
        </div>
      </div>
    </LexicalComposer>
  );
}
