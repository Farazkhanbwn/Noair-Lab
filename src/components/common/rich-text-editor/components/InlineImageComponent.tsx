/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use client';

import type {
  LexicalEditor,
  NodeKey,
  NodeSelection,
  RangeSelection,
} from 'lexical';

import type { Position } from '../nodes/InlineImageNode';

import '../styles/InlineImageNode.css';

import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { LexicalNestedComposer } from '@lexical/react/LexicalNestedComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { useLexicalNodeSelection } from '@lexical/react/useLexicalNodeSelection';
import { mergeRegister } from '@lexical/utils';

import {
  $getNodeByKey,
  $getSelection,
  $isNodeSelection,
  $setSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_LOW,
  DRAGSTART_COMMAND,
  KEY_BACKSPACE_COMMAND,
  KEY_DELETE_COMMAND,
  KEY_ENTER_COMMAND,
  KEY_ESCAPE_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from 'lexical';
import { JSX, Suspense, useCallback, useEffect, useRef, useState } from 'react';

import useModal from '../hooks/useModal';
import LinkPlugin from '../plugins/LinkPlugin';
import ContentEditable from '../ui/ContentEditable';
import Placeholder from '../ui/Placeholder';
import { $isInlineImageNode, InlineImageNode } from '../nodes/InlineImageNode';
// import { DialogActions } from '../ui/Dialog';
// import FloatingLinkEditorPlugin from '../plugins/FloatingLinkEditorPlugin/index';
// import FloatingTextFormatToolbarPlugin from '../plugins/FloatingTextFormatToolbarPlugin/index';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const imageCache = new Set();

function useSuspenseImage(src: string) {
  if (!imageCache.has(src)) {
    throw new Promise(resolve => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.add(src);
        resolve(null);
      };
    });
  }
}

function LazyImage({
  altText,
  className,
  imageRef,
  src,
  width,
  height,
  position,
}: {
  altText: string;
  className: string | null;
  height: 'inherit' | number;
  imageRef: { current: null | HTMLImageElement };
  src: string;
  width: 'inherit' | number;
  position: Position;
}): JSX.Element {
  useSuspenseImage(src);
  return (
    <img
      className={className || undefined}
      src={src}
      alt={altText}
      ref={imageRef}
      data-position={position}
      style={{
        height,
        width,
        display: 'block',
      }}
      draggable="false"
    />
  );
}

export function UpdateInlineImageDialog({
  activeEditor,
  nodeKey,
  onClose,
}: {
  activeEditor: LexicalEditor;
  nodeKey: NodeKey;
  onClose: () => void;
}): JSX.Element {
  const editorState = activeEditor.getEditorState();
  const node = editorState.read(
    () => $getNodeByKey(nodeKey) as InlineImageNode
  );
  const [altText, setAltText] = useState(node.getAltText());
  const [showCaption, setShowCaption] = useState(node.getShowCaption());
  const [position, setPosition] = useState<Position>(node.getPosition());
  const handleShowCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowCaption(e.target.checked);
  };

  const handlePositionChange = (value: string) => {
    setPosition(value as Position);
  };

  const handleOnConfirm = () => {
    const payload = { altText, showCaption, position };
    if (node) {
      activeEditor.update(() => {
        node.update(payload);
      });
    }
    onClose();
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Label>Alt Text</Label>

          <Input
            placeholder="Descriptive alternative text"
            onChange={e => setAltText(e?.target?.value)}
            value={altText}
            data-test-id="image-modal-alt-text-input"
            className="m-0"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label>Position</Label>

          <Select
            value={position}
            onValueChange={value => handlePositionChange(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Position" />
            </SelectTrigger>
            <SelectContent className="bg-white cursor-pointer">
              <SelectGroup className=" cursor-pointer">
                <SelectItem className=" cursor-pointer" value="left">
                  Left
                </SelectItem>
                <SelectItem className=" cursor-pointer" value="right">
                  Right
                </SelectItem>
                <SelectItem className="cursor-pointer" value="full">
                  Full Width
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-start w-full">
          <div className="flex items-center gap-1">
            <input
              id="caption"
              type="checkbox"
              checked={showCaption}
              onChange={handleShowCaptionChange}
              className="flex w-auto items-center m-0"
            />
            <label htmlFor="caption">Show Caption</label>
          </div>
        </div>

        <Button
          onClick={() => handleOnConfirm()}
          className={`bg-primary text-white border-none font-semibold`}
        >
          Confirm
        </Button>
      </div>
    </>
  );
}

export default function InlineImageComponent({
  src,
  altText,
  nodeKey,
  width,
  height,
  showCaption,
  caption,
  position,
}: {
  altText: string;
  caption: LexicalEditor;
  height: 'inherit' | number;
  nodeKey: NodeKey;
  showCaption: boolean;
  src: string;
  width: 'inherit' | number;
  position: Position;
}): JSX.Element {
  const [modal, showModal] = useModal();
  const imageRef = useRef<null | HTMLImageElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isSelected, setSelected, clearSelection] =
    useLexicalNodeSelection(nodeKey);
  const [editor] = useLexicalComposerContext();
  const [selection, setSelection] = useState<
    RangeSelection | NodeSelection | null
  >(null);
  const activeEditorRef = useRef<LexicalEditor | null>(null);

  const onDelete = useCallback(
    (payload: KeyboardEvent) => {
      if (isSelected && $isNodeSelection($getSelection())) {
        const event: KeyboardEvent = payload;
        event.preventDefault();
        const node = $getNodeByKey(nodeKey);
        if ($isInlineImageNode(node)) {
          node?.remove();
        }
        setSelected(false);
      }
      return false;
    },
    [isSelected, nodeKey, setSelected]
  );

  const onEnter = useCallback(
    (event: KeyboardEvent) => {
      const latestSelection = $getSelection();
      const buttonElem = buttonRef.current;
      if (
        isSelected &&
        $isNodeSelection(latestSelection) &&
        latestSelection.getNodes().length === 1
      ) {
        if (showCaption) {
          // Move focus into nested editor
          $setSelection(null);
          event.preventDefault();
          caption.focus();
          return true;
        } else if (
          buttonElem !== null &&
          buttonElem !== document.activeElement
        ) {
          event.preventDefault();
          buttonElem.focus();
          return true;
        }
      }
      return false;
    },
    [caption, isSelected, showCaption]
  );

  const onEscape = useCallback(
    (event: KeyboardEvent) => {
      if (
        activeEditorRef.current === caption ||
        buttonRef.current === event.target
      ) {
        $setSelection(null);
        editor.update(() => {
          setSelected(true);
          const parentRootElement = editor.getRootElement();
          if (parentRootElement !== null) {
            parentRootElement.focus();
          }
        });
        return true;
      }
      return false;
    },
    [caption, editor, setSelected]
  );

  useEffect(() => {
    let isMounted = true;
    const unregister = mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        // if (isMounted) {
        //   setSelection(editorState.read(() => $getSelection()));
        // }
        if (isMounted) {
          setSelection(
            editorState.read(
              () => $getSelection() as RangeSelection | NodeSelection | null
            )
          );
        }
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_, activeEditor) => {
          activeEditorRef.current = activeEditor;
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand<MouseEvent>(
        CLICK_COMMAND,
        payload => {
          const event = payload;
          if (event.target === imageRef.current) {
            if (event.shiftKey) {
              setSelected(!isSelected);
            } else {
              clearSelection();
              setSelected(true);
            }
            return true;
          }

          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        DRAGSTART_COMMAND,
        event => {
          if (event.target === imageRef.current) {
            // TODO This is just a temporary workaround for FF to behave like other browsers.
            // Ideally, this handles drag & drop too (and all browsers).
            event.preventDefault();
            return true;
          }
          return false;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        KEY_DELETE_COMMAND,
        onDelete,
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        KEY_BACKSPACE_COMMAND,
        onDelete,
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(KEY_ENTER_COMMAND, onEnter, COMMAND_PRIORITY_LOW),
      editor.registerCommand(KEY_ESCAPE_COMMAND, onEscape, COMMAND_PRIORITY_LOW)
    );
    return () => {
      isMounted = false;
      unregister();
    };
  }, [
    clearSelection,
    editor,
    isSelected,
    nodeKey,
    onDelete,
    onEnter,
    onEscape,
    setSelected,
  ]);

  const draggable = isSelected && $isNodeSelection(selection);
  const isFocused = isSelected;
  return (
    <Suspense fallback={null}>
      <>
        <div draggable={draggable}>
          <button
            className="image-edit-button"
            ref={buttonRef}
            onClick={() => {
              showModal('Update Inline Image', onClose => (
                <UpdateInlineImageDialog
                  activeEditor={editor}
                  nodeKey={nodeKey}
                  onClose={onClose}
                />
              ));
            }}
          >
            Edit
          </button>
          <LazyImage
            className={
              isFocused
                ? `focused ${$isNodeSelection(selection) ? 'draggable' : ''}`
                : null
            }
            src={src}
            altText={altText}
            imageRef={imageRef}
            width={width}
            height={height}
            position={position}
          />
        </div>
        {showCaption && (
          <div className="image-caption-container">
            <LexicalNestedComposer initialEditor={caption}>
              <AutoFocusPlugin />
              <LinkPlugin />
              {/* <FloatingLinkEditorPlugin />
              <FloatingTextFormatToolbarPlugin /> */}
              <RichTextPlugin
                contentEditable={
                  <ContentEditable className="InlineImageNode__contentEditable" />
                }
                placeholder={
                  <Placeholder className="InlineImageNode__placeholder">
                    Enter a caption...
                  </Placeholder>
                }
                ErrorBoundary={LexicalErrorBoundary}
              />
            </LexicalNestedComposer>
          </div>
        )}
      </>
      {modal}
    </Suspense>
  );
}
