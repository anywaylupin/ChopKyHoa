// Label component extends from shadcnui - https://ui.shadcn.com/docs/components/label

'use client';

import * as LabelPrimitive from '@radix-ui/react-label';

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(
  function Label({ className, ...props }, ref) {
    return (
      <LabelPrimitive.Root
        ref={ref}
        className={cn(
          'text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white',
          className
        )}
        {...props}
      />
    );
  }
);

export { Label };
