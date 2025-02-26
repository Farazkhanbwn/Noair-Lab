'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import * as React from 'react';

interface TooltipWrapperProps {
  children: React.ReactNode; // Element to wrap with the tooltip trigger
  content: React.ReactNode; // Tooltip content
  className?: string; // Optional className for TooltipContent
}

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({
  children,
  content,
  className,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className={`bg-gray-800 text-gray-100 p-2 rounded-md shadow-lg ${className}`}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipWrapper;
