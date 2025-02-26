'use client';

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { JSX } from 'react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  dialogHeaderContent: JSX.Element;
  dialogBodyContent: JSX.Element;
  className?: string;
}

export function CustomModal({
  isOpen,
  onClose,
  dialogHeaderContent,
  dialogBodyContent,
  className,
}: CustomModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          'w-full bg-white rounded-md flex flex-col [&>button]:hidden transition-all duration-300 ease-out scale-95 data-[state=open]:scale-100',
          className
        )}
      >
        <DialogHeader>{dialogHeaderContent}</DialogHeader>
        <div className="flex-1 overflow-y-auto max-h-screen pr-4">
          {dialogBodyContent}
        </div>
        {/* {dialogBodyContent} */}
      </DialogContent>
    </Dialog>
  );
}
