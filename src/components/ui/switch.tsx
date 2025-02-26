'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'success' | 'warning' | 'danger';
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, size = 'md', color = 'default', ...props }, ref) => {
  const sizes = {
    sm: {
      switch: 'h-4 w-7',
      thumb: 'h-3 w-3',
      translate: 'translate-x-3',
    },
    md: {
      switch: 'h-5 w-9',
      thumb: 'h-4 w-4',
      translate: 'translate-x-4',
    },
    lg: {
      switch: 'h-6 w-11',
      thumb: 'h-5 w-5',
      translate: 'translate-x-5',
    },
  };

  const colors = {
    default: {
      background: 'bg-primary-color',
    },
    success: {
      background: 'bg-green-600',
    },
    warning: {
      background: 'bg-yellow-600',
    },
    danger: {
      background: 'bg-red-600',
    },
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=unchecked]:bg-gray-200', // Default background
        `data-[state=checked]: ${colors[color]?.background}`, // Apply selected color when checked
        sizes[size].switch,
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block rounded-full bg-pure-white shadow-lg ring-0 transition-transform',
          'data-[state=checked]:shadow-sm',
          sizes[size].thumb,
          `data-[state=checked]:${sizes[size].translate}`
        )}
      />
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = 'Switch';

export { Switch };
