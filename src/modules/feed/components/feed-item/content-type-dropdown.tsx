'use client';

import { type LucideIcon, Menu } from 'lucide-react';
import type { ReactNode } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export type ContentTypeItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

type ContentTypeDropdownProps = {
  items: ContentTypeItem[];
  onSelect?: (value: string) => void;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
  triggerButton?: ReactNode;
  className?: string;
};

export function ContentTypeDropdown({
  items = [],
  onSelect,
  align = 'end',
  side = 'bottom',
  triggerButton,
  className,
}: ContentTypeDropdownProps) {
  const handleSelect = (value: string) => {
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        {triggerButton ? (
          triggerButton
        ) : (
          <Button variant="outline" size="icon" className={className}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open content type menu</span>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-pure-white px-0 !rounded-sm max-h-96 overflow-y-auto"
        align={align}
        side={side}
      >
        {items.map(item => {
          return (
            <DropdownMenuItem
              key={item.value}
              className="cursor-pointer px-5 rounded-none focus:bg-light-grey focus:shadow-md"
              onClick={() => handleSelect(item.value)}
            >
              <span>{item.label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
