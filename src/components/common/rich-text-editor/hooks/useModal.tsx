/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useCallback, useMemo, useState } from 'react';
import * as React from 'react';

import { CustomModal } from '../../custom-modal';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { DialogTitle } from '@/components/ui/dialog';

export default function useModal(): [
  React.JSX.Element | null,
  (
    title: string,
    showModal: (onClose: () => void) => React.JSX.Element
  ) => void,
] {
  const [modalContent, setModalContent] = useState<null | {
    closeOnClickOutside: boolean;
    content: React.JSX.Element;
    title: string;
  }>(null);

  const onClose = useCallback(() => {
    setModalContent(null);
  }, []);

  const modal = useMemo(() => {
    if (modalContent === null) {
      return null;
    }
    const { title, content } = modalContent;
    return (
      // <Modal
      //   onClose={onClose}
      //   title={title}
      //   closeOnClickOutside={closeOnClickOutside}>
      //   {content}
      // </Modal>

      <CustomModal
        className="max-w-[90%] md:max-w-[75%] xl:max-w-[50%] rounded-lg min-h-[40vh] max-h-[90vh] overflow-y-auto"
        isOpen={!!modalContent}
        onClose={onClose}
        dialogHeaderContent={
          <div className="w-full flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
            <Button
              variant="default"
              size="icon"
              className="h-6 w-6 p-3 rounded-full shadow-none bg-light-grey hover:bg-light-grey"
              onClick={onClose}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        }
        dialogBodyContent={content}
      />
    );
  }, [modalContent, onClose]);

  const showModal = useCallback(
    (
      title: string,
      // eslint-disable-next-line no-shadow
      getContent: (onClose: () => void) => React.JSX.Element,
      closeOnClickOutside = false
    ) => {
      setModalContent({
        closeOnClickOutside,
        content: getContent(onClose),
        title,
      });
    },
    [onClose]
  );

  return [modal, showModal];
}
