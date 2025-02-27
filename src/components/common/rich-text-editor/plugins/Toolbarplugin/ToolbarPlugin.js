'use client';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  $getSelection,
  $isRangeSelection,
  $createTextNode,
} from 'lexical';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { $wrapNodes, $isAtNodeEnd } from '@lexical/selection';
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode,
} from '@lexical/list';
import { createPortal } from 'react-dom';
import { $createQuoteNode, $isHeadingNode } from '@lexical/rich-text';
import { $isCodeNode } from '@lexical/code';
import { $createHashtagNode, $isHashtagNode } from '@lexical/hashtag';
// import { EmojiPickerPlugin } from './EmojiPickerPlugin';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { $createEmojiNode } from '../../nodes/EmojiNode';
import { Check, Pencil, X } from 'lucide-react';
import CharacterCounterPlugin from '../CharacterCounterPlugin';
import { insertHorizontalRule } from '../HorizontalRulePlugin';
import { InsertInlineImageDialog } from '../InlineImagePlugin';
import useModal from '../../hooks/useModal';
import useClickOutside from '../../hooks/useClickOutside';

const LowPriority = 1;

function positionEditorElement(editor, rect) {
  if (rect === null) {
    editor.style.opacity = '0';
    editor.style.top = '-1000px';
    editor.style.left = '-1000px';
  } else {
    editor.style.opacity = '1';
    editor.style.top = `${rect.top + rect.height + window.pageYOffset + 10}px`;
    editor.style.left = `${
      rect.left + window.pageXOffset - editor.offsetWidth / 2 + rect.width / 2
    }px`;
  }
}

export function FloatingLinkEditor({ editor }) {
  const editorRef = useRef(null);
  const inputRef = useRef(null);
  const mouseDownRef = useRef(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [isEditMode, setEditMode] = useState(false);
  const [lastSelection, setLastSelection] = useState(null);

  const updateLinkEditor = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent)) {
        setLinkUrl(parent.getURL());
      } else if ($isLinkNode(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl('');
      }
    }
    const editorElem = editorRef.current;
    const nativeSelection = window.getSelection();
    const activeElement = document.activeElement;

    if (editorElem === null) {
      return;
    }

    const rootElement = editor.getRootElement();
    if (
      selection !== null &&
      !nativeSelection.isCollapsed &&
      rootElement !== null &&
      rootElement.contains(nativeSelection.anchorNode)
    ) {
      const domRange = nativeSelection.getRangeAt(0);
      let rect;
      if (nativeSelection.anchorNode === rootElement) {
        let inner = rootElement;
        while (inner.firstElementChild != null) {
          inner = inner.firstElementChild;
        }
        rect = inner.getBoundingClientRect();
      } else {
        rect = domRange.getBoundingClientRect();
      }

      if (!mouseDownRef.current) {
        positionEditorElement(editorElem, rect);
      }
      setLastSelection(selection);
    } else if (!activeElement || activeElement.className !== 'link-input') {
      positionEditorElement(editorElem, null);
      setLastSelection(null);
      setEditMode(false);
      setLinkUrl('');
    }

    return true;
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateLinkEditor();
        });
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateLinkEditor();
          return true;
        },
        LowPriority
      )
    );
  }, [editor, updateLinkEditor]);

  useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor();
    });
  }, [editor, updateLinkEditor]);

  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  const saveLinkURL = useCallback(
    event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (lastSelection !== null) {
          if (linkUrl !== '') {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl);
          }
          setEditMode(false);
        }
      } else if (event.key === 'Escape') {
        event.preventDefault();
        setEditMode(false);
      }
    },
    [editor, lastSelection, linkUrl]
  );

  return (
    <div
      ref={editorRef}
      className="link-editor !z-[1000] translate-x-36 min-w-[400px]"
    >
      {isEditMode ? (
        <div className="flex items-center relative pr-2 ">
          <input
            ref={inputRef}
            className="link-input w-full"
            value={linkUrl}
            onChange={event => {
              setLinkUrl(event.target.value);
            }}
            onKeyDown={saveLinkURL}
          />
          <div className="flex gap-1">
            <button
              className="p-2 text-black rounded-full bg-light-grey hover:bg-secondary-grey"
              onClick={() => {
                setEditMode(false);
              }}
            >
              <X size={18} />
            </button>
            <button
              className="p-2 text-black rounded-full bg-light-grey hover:bg-secondary-grey"
              onClick={() => {
                if (lastSelection !== null) {
                  if (linkUrl !== '') {
                    editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl);
                  }
                  setEditMode(false);
                }
              }}
            >
              <Check size={18} />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center relative pr-2 ">
          <div className="link-input w-full">
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-sm"
            >
              {linkUrl}
            </a>
          </div>
          <div className="flex gap-1">
            <button
              className="p-2 text-black rounded-full bg-light-grey hover:bg-secondary-grey"
              onClick={() => {
                setEditMode(true);
              }}
            >
              <Pencil size={18} />
            </button>
            <button
              className="p-2 text-black rounded-full bg-light-grey hover:bg-secondary-grey"
              onClick={() => {
                setEditMode(false);
                editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function getSelectedNode(selection) {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}

const ToolbarButton = ({ onClick, isActive = false, icon, label }) => (
  <button
    onClick={onClick}
    className={`toolbar-item spaced ${isActive ? 'active' : ''}`}
    aria-label={label}
  >
    <img className="w-4 h-4" src={icon} alt={`${label} Editor Icon`} />
  </button>
);

const defaultToolbarOptions = [
  {
    id: 'bold',
    icon: '/icon-editor-bold.svg',
    label: 'Format Bold',
    isActive: format => format.isBold,
  },
  {
    id: 'italic',
    icon: '/icon-editor-italic.svg',
    label: 'Format Italics',
    isActive: format => format.isItalic,
  },
  {
    id: 'underline',
    icon: '/icon-editor-underline.svg',
    label: 'Format Underline',
    isActive: format => format.isUnderline,
  },
  {
    id: 'unordered-list',
    icon: '/icon-editor-unordered-list.svg',
    label: 'Unordered List',
  },
  {
    id: 'ordered-list',
    icon: '/icon-editor-ordered-list.svg',
    label: 'Ordered List',
  },
  {
    id: 'emoji',
    icon: '/icon-editor-emoji.svg',
    label: 'Insert Emoji',
  },
  {
    id: 'link',
    icon: '/icon-editor-link.svg',
    label: 'Insert Link',
    isActive: format => format.isLink,
  },
  {
    id: 'code',
    icon: '/icon-editor-code.svg',
    label: 'Insert Code',
    isActive: format => format.isCode,
  },
  {
    id: 'quote',
    icon: '/icon-editor-quote.svg',
    label: 'Insert Quote',
  },
  {
    id: 'hashtag',
    icon: '/icon-editor-hash.svg',
    label: 'Insert Hashtag',
  },
  {
    id: 'divider',
    icon: '/icon-editor-divider.svg',
    label: 'Insert Divider',
  },
  {
    id: 'image',
    icon: '/icon-editor-image.svg',
    label: 'Insert Image',
  },
];

const EditorToolbar = ({
  editor,
  className = '',
  toolbarRef,
  showCharacterCounter = true,
  exlcudeToolbarOptions,
  CharacterCounter,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [blockType, setBlockType] = useState('paragraph');

  const [modal, showModal] = useModal();
  const [format, setFormat] = useState({
    isBold: false,
    isItalic: false,
    isUnderline: false,
    isCode: false,
    isLink: false,
  });

  const pickerRef = useRef(null);

  useClickOutside(pickerRef, () => setShowPicker(false));

  const insertHashtag = () => {
    editor.update(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        const nodes = selection.getNodes();

        // Check if the selected node is already a hashtag
        const hasHashtag = nodes.some(node => $isHashtagNode(node));

        if (hasHashtag) {
          // If it's a hashtag, unwrap it back to regular text
          nodes.forEach(node => {
            if ($isHashtagNode(node)) {
              // Remove the # symbol if it exists
              const text = node.getTextContent().replace(/^#/, '');
              node.replace($createTextNode(text));
            }
          });
        } else {
          // Get the selected text or use a default hashtag text
          const selectedText = selection.getTextContent().trim();
          // Remove any existing # symbol to avoid doubles
          const cleanText = selectedText.replace(/^#/, '');
          // Create the hashtag node with the text
          const hashtagNode = $createHashtagNode('#' + cleanText);
          // Insert the hashtag node at the current selection
          selection.insertNodes([hashtagNode]);
        }
      }
    });
  };

  const insertEmoji = emojiData => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const emojiNode = $createEmojiNode(emojiData.native);
        selection.insertNodes([emojiNode]);
      }
    });
    setShowPicker(false);
  };

  const insertLink = useCallback(() => {
    if (!format.isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://');
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, format.isLink]);

  const formatQuote = () => {
    if (blockType !== 'quote') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createQuoteNode());
        }
      });
    }
  };

  const filteredOptions = exlcudeToolbarOptions
    ? defaultToolbarOptions.filter(
        option => !exlcudeToolbarOptions.includes(option.id)
      )
    : defaultToolbarOptions;

  const handleSpecialActions = option => {
    switch (option.id) {
      case 'bold':
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        break;
      case 'italic':
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        break;
      case 'underline':
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        break;
      case 'unordered-list':
        if (editor.blockType !== 'ul') {
          editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND);
        } else {
          editor.dispatchCommand(REMOVE_LIST_COMMAND);
        }
        break;
      case 'ordered-list':
        if (editor.blockType !== 'ol') {
          editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND);
        } else {
          editor.dispatchCommand(REMOVE_LIST_COMMAND);
        }
        break;
      case 'emoji':
        setShowPicker(!showPicker);
        break;
      case 'link':
        insertLink();
        break;
      case 'code':
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code');
        break;
      case 'quote':
        formatQuote();
        break;
      case 'hashtag':
        insertHashtag();
        break;
      case 'divider':
        insertHorizontalRule(editor);
        break;
      case 'image':
        showModal('Insert Inline Image', onClose => (
          <InsertInlineImageDialog activeEditor={editor} onClose={onClose} />
        ));
        break;
      default:
        return null;
    }
  };

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        // setSelectedElementKey(elementKey);
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getTag() : element.getTag();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();
          setBlockType(type);
          if ($isCodeNode(element)) {
            // setCodeLanguage(element.getLanguage() || getDefaultCodeLanguage());
          }
        }
      }

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setFormat({
          ...format,
          isBold: selection.hasFormat('bold'),
          isCode: selection.hasFormat('code'),
          isItalic: selection.hasFormat('italic'),
          isUnderline: selection.hasFormat('underline'),
          isLink: true,
        });
      } else {
        setFormat({
          ...format,
          isBold: selection.hasFormat('bold'),
          isCode: selection.hasFormat('code'),
          isItalic: selection.hasFormat('italic'),
          isUnderline: selection.hasFormat('underline'),
          isLink: false,
        });
      }
    }
  }, [editor, format]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateToolbar();
          return false;
        },
        LowPriority
      )
    );
  }, [editor, updateToolbar]);

  return (
    <React.Fragment>
      <div
        className={`toolbar ${className} gap-1 flex-col md:flex-row md:gap-3`}
        ref={toolbarRef}
      >
        <span className="text-sm px-3 py-4 items-center flex">Formatting</span>
        <div className="md:border-none md:w-[1px] md:bg-secondary-grey md:mx-1" />

        <div className="flex items-start md:items-center gap-1 md:gap-14 px-3 w-full justify-between flex-col md:flex-row">
          <div className="flex items-center gap-1">
            {filteredOptions.map(option => {
              return (
                <ToolbarButton
                  key={option.id}
                  onClick={() => handleSpecialActions(option)}
                  isActive={option.isActive?.(format)}
                  icon={option.icon}
                  label={option.label}
                />
              );
            })}
          </div>

          {showCharacterCounter && CharacterCounter && <CharacterCounter />}
        </div>
      </div>
      <div className="absolute z-[9999] translate-x-40 flex items-center w-fit justify-end">
        {showPicker && (
          <div ref={pickerRef}>
            <Picker
              data={data}
              className="absolute w-12"
              style={{ width: '20px' }}
              theme="light"
              set="native"
              onEmojiSelect={insertEmoji}
            />
          </div>
        )}
      </div>
      {format.isLink &&
        createPortal(<FloatingLinkEditor editor={editor} />, document.body)}
      {modal}
    </React.Fragment>
  );
};

/**
 * @param {Object} props
 * @param {string} [props.classNames]
 * @param {("bold" | "italic" | "underline" | "unordered-list" | "ordered-list" | "emoji" | "link" | "code" | "quote" | "hashtag" | "divider" | "image")[] | null} [props.exlcudeToolbarOptions]
 * @param {boolean} [props.isCharacterCountPlugin]
 */

export default function ToolbarPlugin({
  classNames = '',
  exlcudeToolbarOptions = null,
  isCharacterCountPlugin = true,
}) {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  return (
    <React.Fragment>
      <EditorToolbar
        className={classNames}
        toolbarRef={toolbarRef}
        editor={editor}
        // Only show specific tools
        exlcudeToolbarOptions={exlcudeToolbarOptions}
        CharacterCounter={
          isCharacterCountPlugin ? CharacterCounterPlugin : null
        }
      />
      {/* <div
        className={`toolbar ${classNames} gap-1 flex-col md:flex-row md:gap3`}
        ref={toolbarRef}
      >
        <span className="text-sm px-3 py-4 items-center flex ">Formatting</span>
        <Divider className="md:border-none md:w-[1px] md:bg-secondary-grey md:mx-1" />

        <div className="flex items-start md:items-center gap-1 md:gap-14 px-3 w-full justify-between flex-col md:flex-row">
          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
              }}
              className={'toolbar-item spaced ' + (isBold ? 'active' : '')}
              aria-label="Format Bold"
            >
              <img
                className="w-4 h-4"
                src="/icon-editor-bold.svg"
                alt="Bold Editor Icon"
              />
            </button>
            <button
              onClick={() => {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
              }}
              className={'toolbar-item spaced ' + (isItalic ? 'active' : '')}
              aria-label="Format Italics"
            >
              <img
                className="w-4 h-4"
                src="/icon-editor-italic.svg"
                alt="Italic Editor Icon"
              />
            </button>
            <button
              onClick={() => {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
              }}
              className={'toolbar-item spaced ' + (isUnderline ? 'active' : '')}
              aria-label="Format Underline"
            >
              <img
                className="w-4 h-4"
                src="/icon-editor-underline.svg"
                alt="Underline Editor Icon"
              />
            </button>
            <button
              onClick={() => {
                if (blockType !== 'ul') {
                  editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND);
                } else {
                  editor.dispatchCommand(REMOVE_LIST_COMMAND);
                }
              }}
              className={'toolbar-item spaced' + (isBold ? 'active' : '')}
              aria-label="Format unorder-list"
            >
              <img
                className="w-4 h-4"
                src="/icon-editor-unordered-list.svg"
                alt="Unordered List Editor Icon"
              />
            </button>
            <button
              onClick={() => {
                if (blockType !== 'ol') {
                  editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND);
                } else {
                  editor.dispatchCommand(REMOVE_LIST_COMMAND);
                }
              }}
              className={'toolbar-item spaced' + (isBold ? 'active' : '')}
              aria-label="Format unorder-list"
            >
              <img
                className="w-4 h-4"
                src="/icon-editor-ordered-list.svg"
                alt="Ordered List Editor Icon"
              />
            </button>
            <button
              onClick={() => {
                setShowPicker(!showPicker);
              }}
              className={'toolbar-item spaced ' + (showPicker ? 'active' : '')}
              aria-label="Insert Emoji"
            >
              <img
                className="w-4 h-4"
                src="/icon-editor-emoji.svg"
                alt="Emoji Editor Icon"
              />
            </button>
            <button
              onClick={insertLink}
              className={'toolbar-item spaced ' + (isLink ? 'active' : '')}
              aria-label="Insert Link"
            >
              <img
                className="w-4 h-4"
                src="/icon-editor-link.svg"
                alt="Link Editor Icon"
              />
            </button>
            {isLink &&
              createPortal(
                <FloatingLinkEditor editor={editor} />,
                document.body
              )}
            <button
              onClick={() => {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code');
              }}
              className={'toolbar-item spaced ' + (isCode ? 'active' : '')}
              aria-label="Insert Code"
            >
              <img
                className="w-4 h-4"
                src="/icon-editor-code.svg"
                alt="Code Editor Icon"
              />
            </button>
            <button
              onClick={formatQuote}
              className="toolbar-item"
              aria-label="Insert Quote"
            >
              <img
                className="w-4 h-4"
                src="/icon-editor-quote.svg"
                alt="Quote Editor Icon"
              />
            </button>
            <button
              onClick={insertHashtag}
              className="toolbar-item"
              aria-label="Insert Hashtag"
            >
              <img
                className="w-4 h-4"
                src="/icon-editor-hash.svg"
                alt="Hash Editor Icon"
              />
            </button>
            <button
              onClick={() => {
                insertHorizontalRule(editor);
              }}
              className={'toolbar-item spaced' + (isBold ? 'active' : '')}
              aria-label="Format unorder-list"
            >
              <img
                className="w-4 h-4"
                src="/icon-editor-divider.svg"
                alt="Divider Editor Icon"
              />
            </button>
            <button
              onClick={() => {
                showModal('Insert Inline Image', onClose => (
                  <InsertInlineImageDialog
                    activeEditor={editor}
                    onClose={onClose}
                  />
                ));
              }}
              className={'toolbar-item spaced' + (isBold ? 'active' : '')}
              aria-label="Format unorder-list"
            >
              <img
                className="w-4 h-4"
                src="/icon-editor-image.svg"
                alt="Image Editor Icon"
              />
            </button>
          </div>

          <CharacterCounterPlugin />
        </div>
      </div>
      <div className="absolute z-[9999] translate-x-40 flex items-center w-fit justify-end">
        {showPicker ? (
          <div ref={pickerRef}>
            <Picker
              ref={pickerRef}
              data={data}
              className="absolute w-12"
              style={{ width: '20px' }}
              theme="light"
              set="native"
              onEmojiSelect={insertEmoji}
            />
          </div>
        ) : null}
        {modal}
      </div> */}
    </React.Fragment>
  );
}
