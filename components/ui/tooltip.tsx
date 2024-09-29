'use client';

import { forwardRef, ElementRef, ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/utils';

export type TooltipProps = PropsWithChildren<
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    label?: StringNode;
    contentClassName?: string;
  }
>;

export const TooltipProvider = TooltipPrimitive.Provider;

export const TooltipRoot = TooltipPrimitive.Root;

export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = forwardRef<ElementRef<typeof TooltipPrimitive.Content>, TooltipProps>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden rounded-md border border-neutral-200 bg-white p-4 text-xl text-neutral-950 shadow-md animate-in fade-in-0 zoom-in-95',
        'dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  )
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export const Tooltip = ({ className, contentClassName, children, label, ...rest }: TooltipProps) => (
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger className={className}>{children}</TooltipTrigger>
      <TooltipContent className={contentClassName} {...rest}>
        {label}
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
);
