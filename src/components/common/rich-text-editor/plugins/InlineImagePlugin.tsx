'use client';
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $wrapNodeInElement, mergeRegister } from '@lexical/utils';
import {
  $createParagraphNode,
  $createRangeSelection,
  $getSelection,
  $insertNodes,
  $isNodeSelection,
  $isRootOrShadowRoot,
  $setSelection,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  createCommand,
  DRAGOVER_COMMAND,
  DRAGSTART_COMMAND,
  DROP_COMMAND,
  LexicalCommand,
  LexicalEditor,
} from 'lexical';
import { useEffect, useRef, useState, JSX } from 'react';
import { CAN_USE_DOM } from '../utils/canUseDOM';
import {
  $createInlineImageNode,
  $isInlineImageNode,
  InlineImageNode,
  InlineImagePayload,
} from '../nodes/InlineImageNode';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// import '../../ui/Checkbox.css';

import type { Position } from '../nodes/InlineImageNode';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export type InsertInlineImagePayload = Readonly<InlineImagePayload>;

const getDOMSelection = (targetWindow: Window | null): Selection | null =>
  CAN_USE_DOM ? (targetWindow || window).getSelection() : null;

export const INSERT_INLINE_IMAGE_COMMAND: LexicalCommand<InlineImagePayload> =
  createCommand('INSERT_INLINE_IMAGE_COMMAND');

export function InsertInlineImageDialog({
  activeEditor,
  onClose,
}: {
  activeEditor: LexicalEditor;
  onClose: () => void;
}): JSX.Element {
  const hasModifier = useRef(false);

  const [src, setSrc] = useState('');
  const [altText, setAltText] = useState('');
  const [showCaption, setShowCaption] = useState(false);
  const [position, setPosition] = useState<Position>('full');

  const isDisabled = src === '';

  const handleShowCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowCaption(e.target.checked);
  };

  const handlePositionChange = (value: string) => {
    setPosition(value as Position);
  };

  const loadImage = (files: FileList | null) => {
    const reader = new FileReader();
    reader.onload = function () {
      if (typeof reader.result === 'string') {
        setSrc(reader.result);
      }
      return '';
    };
    if (files !== null) {
      reader.readAsDataURL(files[0]);
    }
  };

  useEffect(() => {
    hasModifier.current = false;
    const handler = (e: KeyboardEvent) => {
      hasModifier.current = e.altKey;
    };
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [activeEditor]);

  const handleOnClick = () => {
    const payload = { altText, src, showCaption, position };
    activeEditor.dispatchCommand(INSERT_INLINE_IMAGE_COMMAND, payload);
    onClose();
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <Label>Image Upload</Label>
        <Input
          className="m-0"
          onChange={e => loadImage(e.target.files || null)}
          accept="image/*"
          data-test-id="image-modal-file-upload"
          type="file"
        />
      </div>
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

        <Select onValueChange={value => handlePositionChange(value)}>
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
        disabled={isDisabled}
        onClick={() => handleOnClick()}
        className={`${!isDisabled ? 'bg-primary text-white' : ' bg-light-grey  hover:bg-light-grey hover:text-secondary-grey text-secondary-grey'} border-none font-semibold`}
      >
        Confirm
      </Button>
    </div>
  );
}

export default function InlineImagePlugin({
  captionsEnabled,
}: {
  captionsEnabled?: boolean;
}): JSX.Element | null {
  const [editor] = useLexicalComposerContext();
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Create and store the transparent image in a ref
    const img = document.createElement('img');
    img.src = TRANSPARENT_IMAGE;
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!editor.hasNodes([InlineImageNode])) {
      throw new Error('ImagesPlugin: ImageNode not registered on editor');
    }

    return mergeRegister(
      editor.registerCommand<InsertInlineImagePayload>(
        INSERT_INLINE_IMAGE_COMMAND,
        payload => {
          const imageNode = $createInlineImageNode(payload);
          $insertNodes([imageNode]);
          if ($isRootOrShadowRoot(imageNode.getParentOrThrow())) {
            $wrapNodeInElement(imageNode, $createParagraphNode).selectEnd();
          }

          return true;
        },
        COMMAND_PRIORITY_EDITOR
      ),
      editor.registerCommand<DragEvent>(
        DRAGSTART_COMMAND,
        event => {
          return onDragStart(event);
        },
        COMMAND_PRIORITY_HIGH
      ),
      editor.registerCommand<DragEvent>(
        DRAGOVER_COMMAND,
        event => {
          return onDragover(event);
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand<DragEvent>(
        DROP_COMMAND,
        event => {
          return onDrop(event, editor);
        },
        COMMAND_PRIORITY_HIGH
      )
    );
  }, [captionsEnabled, editor]);

  function onDragStart(event: DragEvent): boolean {
    const node = getImageNodeInSelection(); // Ensure this function is defined elsewhere
    if (!node) return false;

    const dataTransfer = event.dataTransfer;
    if (!dataTransfer || !imgRef.current) return false;

    dataTransfer.setData('text/plain', '_');
    dataTransfer.setDragImage(imgRef.current, 0, 0);
    dataTransfer.setData(
      'application/x-lexical-drag',
      JSON.stringify({
        data: {
          altText: node.__altText,
          caption: node.__caption,
          height: node.__height,
          key: node.getKey(),
          showCaption: node.__showCaption,
          src: node.__src,
          width: node.__width,
        },
        type: 'image',
      })
    );

    return true;
  }

  return null;
}

const TRANSPARENT_IMAGE =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
// const img = document && document?.createElement('img');
// img.src = TRANSPARENT_IMAGE;

// function onDragStart(event: DragEvent): boolean {
//   const node = getImageNodeInSelection();
//   if (!node) {
//     return false;
//   }
//   const dataTransfer = event.dataTransfer;
//   if (!dataTransfer) {
//     return false;
//   }
//   dataTransfer.setData('text/plain', '_');
//   dataTransfer.setDragImage(null, 0, 0);
//   dataTransfer.setData(
//     'application/x-lexical-drag',
//     JSON.stringify({
//       data: {
//         altText: node.__altText,
//         caption: node.__caption,
//         height: node.__height,
//         key: node.getKey(),
//         showCaption: node.__showCaption,
//         src: node.__src,
//         width: node.__width,
//       },
//       type: 'image',
//     })
//   );

//   return true;
// }

function onDragover(event: DragEvent): boolean {
  const node = getImageNodeInSelection();
  if (!node) {
    return false;
  }
  if (!canDropImage(event)) {
    event.preventDefault();
  }
  return true;
}

function onDrop(event: DragEvent, editor: LexicalEditor): boolean {
  const node = getImageNodeInSelection();
  if (!node) {
    return false;
  }
  const data = getDragImageData(event);
  if (!data) {
    return false;
  }
  event.preventDefault();
  if (canDropImage(event)) {
    const range = getDragSelection(event);
    node.remove();
    const rangeSelection = $createRangeSelection();
    if (range !== null && range !== undefined) {
      rangeSelection.applyDOMRange(range);
    }
    $setSelection(rangeSelection);
    editor.dispatchCommand(INSERT_INLINE_IMAGE_COMMAND, data);
  }
  return true;
}

function getImageNodeInSelection(): InlineImageNode | null {
  const selection = $getSelection();
  if (!$isNodeSelection(selection)) {
    return null;
  }
  const nodes = selection.getNodes();
  const node = nodes[0];
  return $isInlineImageNode(node) ? node : null;
}

function getDragImageData(event: DragEvent): null | InsertInlineImagePayload {
  const dragData = event.dataTransfer?.getData('application/x-lexical-drag');
  if (!dragData) {
    return null;
  }
  const { type, data } = JSON.parse(dragData);
  if (type !== 'image') {
    return null;
  }

  return data;
}

declare global {
  interface DragEvent {
    rangeOffset?: number;
    rangeParent?: Node;
  }
}

function canDropImage(event: DragEvent): boolean {
  const target = event.target;
  return !!(
    target &&
    target instanceof HTMLElement &&
    !target.closest('code, span.editor-image') &&
    target.parentElement &&
    target.parentElement.closest('div.ContentEditable__root')
  );
}

function getDragSelection(event: DragEvent): Range | null | undefined {
  let range;
  const target = event.target as null | Element | Document;
  const targetWindow =
    target == null
      ? null
      : target.nodeType === 9
        ? (target as Document).defaultView
        : (target as Element).ownerDocument.defaultView;
  const domSelection = getDOMSelection(targetWindow);
  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(event.clientX, event.clientY);
  } else if (event.rangeParent && domSelection !== null) {
    domSelection.collapse(event.rangeParent, event.rangeOffset || 0);
    range = domSelection.getRangeAt(0);
  } else {
    throw Error('Cannot get the selection when dragging');
  }

  return range;
}
