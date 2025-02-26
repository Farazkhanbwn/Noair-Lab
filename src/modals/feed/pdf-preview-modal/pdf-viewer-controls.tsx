/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import * as React from 'react';
import { Expand, Minimize, MoveLeft, MoveRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface PdfViewerControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isFullscreen: boolean;
  onFullscreenToggle: () => void;
  className?: string;
}

export function PdfViewerControls({
  currentPage = 0,
  totalPages = 4,
  onPageChange,
  isFullscreen = false,
  onFullscreenToggle,
  className,
}: PdfViewerControlsProps) {
  const handleSliderChange = React.useCallback(
    (value: number[]) => {
      onPageChange(value[0] - 1);
    },
    [onPageChange]
  );

  return (
    <div className={`flex-between ${className}`}>
      <div className="min-w-16 text-sm">
        {currentPage + 1}/{totalPages}
      </div>
      <div className="flex-1">
        <Slider
          value={[currentPage + 1]}
          min={1}
          max={totalPages}
          step={1}
          onValueChange={handleSliderChange}
          className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4 !bg-[#fff]"
        />
      </div>
      <div className="flex items-center gap-2">
        {/* <Button
          variant="ghost"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          className="h-8 w-8 text-white hover:bg-white/20 hover:text-white"
          disabled={currentPage === 0}
        >
          <MoveLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          className="h-8 w-8 text-white hover:bg-white/20 hover:text-white"
          disabled={totalPages === currentPage + 1}
        >
          <MoveRight className="h-4 w-4" />
        </Button> */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onFullscreenToggle}
          className="h-8 w-8 text-white hover:bg-white/20 hover:text-white lg:flex"
        >
          {isFullscreen ? (
            <Minimize className="h-4 w-4" />
          ) : (
            <Expand className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
